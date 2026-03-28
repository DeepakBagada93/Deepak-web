'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';
import { BootScreen } from '@/components/BootScreen';
import { HeroScreen } from '@/components/HeroScreen';
import { ProjectArchive } from '@/components/ProjectArchive';
import { MissionScreen } from '@/components/MissionScreen';
import { TelemetryScreen } from '@/components/TelemetryScreen';
import { ContactScreen } from '@/components/ContactScreen';
import { AnimatedBackground } from '@/components/AnimatedBackground';

import { Terminal, Layers, BarChart3, Lock, Network } from 'lucide-react';

const screens = [
  { id: 'terminal', component: <HeroScreen /> },
  { id: 'projects', component: <ProjectArchive /> },
  { id: 'telemetry', component: <TelemetryScreen /> },
  { id: 'encrypt', component: <MissionScreen /> },
  { id: 'contact', component: <ContactScreen /> },
];

export default function Page() {
  const [activeScreen, setActiveScreen] = useState('boot');
  const [isBooted, setIsBooted] = useState(false);

  const handleBootComplete = () => {
    setIsBooted(true);
    setActiveScreen('terminal');
  };

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleNavigate = (screenId: string) => {
    setActiveScreen(screenId);
    const element = document.getElementById(screenId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  // Sync active screen based on scroll position
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveScreen(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    screens.forEach((screen) => {
      const el = document.getElementById(screen.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background relative selection:bg-terminal-red/30 overflow-hidden">
      <AnimatePresence mode="wait">
        {!isBooted ? (
          <BootScreen key="boot" onComplete={handleBootComplete} />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative h-screen flex flex-col"
          >
            <Header activeScreen={activeScreen} onNavigate={handleNavigate} />
            <Sidebar activeScreen={activeScreen} onNavigate={handleNavigate} />
            
            <div 
              ref={scrollRef}
              className="flex-1 lg:pl-20 pt-14 pb-16 lg:pb-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex no-scrollbar"
            >
              {screens.map((screen) => (
                <section 
                  key={screen.id} 
                  id={screen.id} 
                  className="min-w-full h-full snap-start relative overflow-y-auto overflow-x-hidden no-scrollbar"
                >
                  {screen.component}
                </section>
              ))}
            </div>

            <Footer />
            
            <AnimatedBackground />

            {/* Mobile Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full h-16 bg-[#131313]/90 backdrop-blur-xl border-t border-white/10 flex justify-around items-center z-50 lg:hidden">
              {[
                { id: 'terminal', label: 'TERM', icon: Terminal },
                { id: 'projects', label: 'PROJ', icon: Layers },
                { id: 'telemetry', label: 'DATA', icon: BarChart3 },
                { id: 'encrypt', label: 'LOCK', icon: Lock },
                { id: 'contact', label: 'LINK', icon: Network },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activeScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`flex flex-col items-center gap-1 transition-all duration-200 ${isActive ? 'text-terminal-cyan scale-110' : 'text-gray-500 hover:text-terminal-red'}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-[8px] font-headline uppercase tracking-widest">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Background Scanline */}
      <div className="fixed inset-0 pointer-events-none z-[100] scanline-overlay opacity-[0.03]"></div>
    </main>
  );
}
