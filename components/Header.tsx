'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Network, Radio, Clock } from 'lucide-react';

interface HeaderProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeScreen, onNavigate }) => {
  const navItems = [
    { id: 'terminal', label: 'TERMINAL' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'telemetry', label: 'TELEMETRY' },
    { id: 'encrypt', label: 'ENCRYPT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-14 bg-[#131313]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
      <div 
        className="text-xl font-bold text-terminal-red tracking-tighter cursor-pointer"
        onClick={() => onNavigate('boot')}
      >
        DEEPAK_BAGADA_v1.0
      </div>
      
      <nav className="hidden md:flex items-center gap-8 font-headline uppercase tracking-[0.2em] text-[10px]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`transition-all duration-300 hover:text-terminal-red hover:drop-shadow-[0_0_10px_#FF0033] ${
              activeScreen === item.id ? 'text-terminal-cyan border-b-2 border-terminal-cyan' : 'text-gray-500'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4 text-terminal-cyan">
        <Network className="w-4 h-4 cursor-pointer hover:text-terminal-red transition-colors" />
        <Radio className="w-4 h-4 cursor-pointer hover:text-terminal-red transition-colors" />
        <Clock className="w-4 h-4 cursor-pointer hover:text-terminal-red transition-colors" />
      </div>
    </header>
  );
};
