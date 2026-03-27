'use client';

import React from 'react';
import { Terminal, Layers, BarChart3, Lock, Network } from 'lucide-react';

interface SidebarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeScreen, onNavigate }) => {
  const menuItems = [
    { id: 'terminal', label: 'TERM', icon: Terminal },
    { id: 'projects', label: 'PROJ', icon: Layers },
    { id: 'telemetry', label: 'DATA', icon: BarChart3 },
    { id: 'encrypt', label: 'LOCK', icon: Lock },
    { id: 'contact', label: 'LINK', icon: Network },
  ];

  return (
    <aside className="fixed left-0 top-14 h-[calc(100vh-3.5rem)] flex flex-col items-center z-40 bg-[#131313] border-r border-white/5 w-20 hidden lg:flex">
      <div className="py-6 flex flex-col items-center gap-1 opacity-40">
        <span className="font-headline text-[8px] font-bold tracking-[0.3em] text-terminal-cyan">SYS_STATUS</span>
        <span className="font-headline text-[7px] tracking-widest text-terminal-cyan">ONLINE</span>
      </div>
      
      <div className="flex flex-col w-full">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`py-4 w-full flex flex-col items-center transition-all duration-200 active:scale-90 ${
                isActive 
                  ? 'bg-terminal-cyan/10 text-terminal-cyan border-l-4 border-terminal-cyan' 
                  : 'text-gray-600 hover:bg-terminal-red/5 hover:text-terminal-red'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="font-headline text-[9px] font-bold tracking-widest">{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};
