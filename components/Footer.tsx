'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-2 h-10 bg-[#131313] border-t border-terminal-red/20 shadow-[0_-5px_20px_rgba(255,0,51,0.05)] font-headline text-[9px] tracking-[0.3em] uppercase hidden lg:flex">
      <div className="flex items-center gap-4 text-gray-500">
        <span className="text-terminal-red animate-pulse">©2026_DEEPAK_BAGADA</span>
        <span className="hidden md:inline">SAASNEXT_CORE // CONNECTED</span>
      </div>
      <div className="flex items-center gap-8 text-terminal-red">
        <span className="hover:text-white transition-colors cursor-crosshair">COORDINATES: 34.0522° N</span>
        <span className="hover:text-white transition-colors cursor-crosshair hidden sm:inline">118.2437° W</span>
        <span className="hover:text-white transition-colors cursor-default">VITAL_SIGNS: 72BPM</span>
      </div>
    </footer>
  );
};
