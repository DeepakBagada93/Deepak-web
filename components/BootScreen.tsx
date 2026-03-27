'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { RefreshCw } from 'lucide-react';

interface BootScreenProps {
  onComplete: () => void;
}

export const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      <div className="scanline-overlay absolute inset-0 pointer-events-none opacity-20"></div>
      
      <div className="relative z-20 max-w-2xl w-full px-8 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 space-y-4"
        >
          <h1 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter text-on-surface glitch-text uppercase">
            SYSTEM BOOT<span className="text-terminal-red">.</span>EXE
          </h1>
          <div className="font-mono text-terminal-cyan tracking-widest text-xs animate-terminal-blink">
            Initializing Portfolio... Loading Experience...
          </div>
        </motion.div>

        <div className="w-full max-w-md space-y-6">
          <div className="relative h-1 w-full bg-surface-container-high overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-terminal-red shadow-[0_0_15px_#FF0033]"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="flex justify-between font-mono text-[10px] tracking-widest text-neutral-400">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-3 h-3 animate-spin" />
              MOUNTING_FILESYSTEM...
            </div>
            <div className="text-terminal-red font-bold">{Math.floor(progress)}.00%</div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 w-full border-t border-white/5 pt-8">
          <div className="text-left space-y-2">
            <div className="font-mono text-[9px] text-neutral-600 uppercase">Kernel</div>
            <div className="font-headline text-sm font-bold text-on-surface">V-NEURAL.09</div>
          </div>
          <div className="text-left space-y-2">
            <div className="font-mono text-[9px] text-neutral-600 uppercase">Interface</div>
            <div className="font-headline text-sm font-bold text-on-surface">HOLOGRAPHIC_HUD</div>
          </div>
          <div className="text-left space-y-2">
            <div className="font-mono text-[9px] text-neutral-600 uppercase">User_Access</div>
            <div className="font-headline text-sm font-bold text-terminal-cyan">GUEST_READ_ONLY</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 right-10 font-mono text-[10px] text-neutral-500 text-right space-y-1">
        <div>PACKET_LOSS: 0.0003%</div>
        <div className="text-terminal-cyan">BUFFER_STATUS: NOMINAL</div>
      </div>
    </div>
  );
};
