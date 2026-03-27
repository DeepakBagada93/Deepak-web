'use client';

import React from 'react';
import { motion } from 'motion/react';
import { History, Terminal as TerminalIcon } from 'lucide-react';
import Image from 'next/image';

export const HeroScreen: React.FC = () => {
  return (
    <section className="relative h-full flex items-center justify-center px-4 md:px-12 lg:px-24 overflow-hidden bg-surface">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10 py-20 md:py-0">
        <div className="lg:col-span-7 flex flex-col items-start space-y-4 md:space-y-6 lg:pl-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 bg-terminal-red/10 border-l-2 border-terminal-red"
          >
            <span className="font-headline text-[9px] md:text-[11px] tracking-[0.5em] text-terminal-red uppercase">Identity_Verified</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline font-extrabold text-5xl md:text-8xl lg:text-9xl tracking-tighter text-terminal-red drop-shadow-[0_0_25px_rgba(255,0,51,0.6)] glitch-text leading-tight"
          >
            DEEPAK BAGADA
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col space-y-2"
          >
            <p className="font-headline text-sm md:text-2xl text-terminal-cyan tracking-[0.2em] font-light uppercase">
              Web Developer • AI Developer • Performance Marketer
            </p>
            <p className="font-headline text-xs md:text-xl text-terminal-cyan/60 tracking-[0.3em] font-thin uppercase">
              | Founder of SaaSNext
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl space-y-4"
          >
            <p className="text-on-surface/80 text-sm md:text-lg leading-relaxed font-body">
              I&apos;m a developer and marketer who builds high‑performance web experiences and automation systems. I combine modern frontend engineering with AI‑powered workflows to help products scale.
            </p>
            <p className="text-on-surface/60 text-xs md:text-base leading-relaxed font-body border-l-2 border-terminal-cyan/30 pl-4 md:pl-6 italic">
              Core skills include responsive UI, accessibility, performance optimization, API integrations, agent workflows, data‑driven funnels, and analytics. I lead SaaSNext, focusing on shipping fast and measuring outcomes.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-6 md:pt-8 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto"
          >
            <button className="relative group bg-gradient-to-r from-terminal-red to-[#930019] px-8 py-3 md:py-4 transition-all hover:scale-105 active:scale-95 terminal-glow-red w-full sm:w-auto">
              <span className="font-headline text-xs md:text-sm font-bold text-white tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                <History className="w-4 h-4" />
                HIRE ME
              </span>
            </button>
            <button className="relative group border border-terminal-cyan/30 px-8 py-3 md:py-4 bg-transparent hover:bg-terminal-cyan/5 transition-all w-full sm:w-auto">
              <span className="font-headline text-xs md:text-sm font-bold text-terminal-cyan tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                <TerminalIcon className="w-4 h-4" />
                ABOUT_ME
              </span>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-terminal-cyan"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-terminal-cyan"></div>
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 border border-terminal-cyan/20 rotate-45 animate-pulse"></div>
            <div className="absolute inset-10 border border-terminal-cyan/10 -rotate-12"></div>
            <div className="absolute inset-20 border border-terminal-red/20 rotate-12"></div>
            <div className="w-full h-full relative overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/architect/800/800"
                alt="Digital Abstract"
                fill
                className="object-cover mix-blend-screen opacity-70 grayscale contrast-150"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-0 right-0 p-2 md:p-4 border-t border-r border-terminal-cyan/40 text-[8px] md:text-[9px] font-headline text-terminal-cyan space-y-1 bg-black/40 backdrop-blur-md">
              <p>FR_RT: 60FPS</p>
              <p>VR_MS: 0.042</p>
              <p>DATA_STR: ENCRYPTED</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute left-8 bottom-12 flex flex-col gap-8 border-l border-white/5 pl-4 hidden xl:flex">
        <div className="space-y-1">
          <p className="font-headline text-[10px] text-terminal-cyan/50 uppercase tracking-[0.3em]">Lat_Coord</p>
          <p className="font-headline text-sm text-terminal-cyan">23.0225° N</p>
        </div>
        <div className="space-y-1">
          <p className="font-headline text-[10px] text-terminal-cyan/50 uppercase tracking-[0.3em]">Long_Coord</p>
          <p className="font-headline text-sm text-terminal-cyan">72.5714° E</p>
        </div>
      </div>
    </section>
  );
};
