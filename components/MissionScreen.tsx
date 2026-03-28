'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Database, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export const MissionScreen: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto no-scrollbar">
      {/* Section 1: What I Do */}
      <section className="relative min-h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 bg-surface overflow-hidden border-b border-white/5">
        <div className="scanline-overlay absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-12 lg:col-span-7">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-headline text-terminal-cyan text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-4 block"
            >
              ENTRY_01 // CAPABILITIES
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-headline font-extrabold text-5xl md:text-7xl lg:text-[100px] leading-[0.8] text-terminal-red tracking-tighter uppercase mb-8"
            >
              WHAT<br/>I DO
            </motion.h1>
            <div className="max-w-md space-y-6">
              <p className="text-on-surface/80 text-base md:text-lg leading-relaxed font-body">
                I&apos;m a developer and marketer who builds high‑performance web experiences and automation systems. I combine modern frontend engineering with AI‑powered workflows to help products scale.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-terminal-cyan font-headline text-xs md:text-sm tracking-widest uppercase mb-1">Web Development</h3>
                  <p className="text-on-surface/60 text-xs md:text-sm font-body">I build fast, modern, responsive websites that convert and scale efficiently.</p>
                </div>
                <div>
                  <h3 className="text-terminal-cyan font-headline text-xs md:text-sm tracking-widest uppercase mb-1">AI Solutions</h3>
                  <p className="text-on-surface/60 text-xs md:text-sm font-body">Automation, AI workflows, LLM tools, agents and AI-powered apps.</p>
                </div>
                <div>
                  <h3 className="text-terminal-cyan font-headline text-xs md:text-sm tracking-widest uppercase mb-1">Performance Marketing</h3>
                  <p className="text-on-surface/60 text-xs md:text-sm font-body">Meta Ads, Google Ads, CRO, funnels and revenue-focused marketing.</p>
                </div>
              </div>
              <p className="text-terminal-red/80 text-[10px] md:text-xs font-mono italic border-l border-terminal-red/30 pl-4">
                Typical engagements: landing pages and product sites, speed audits and fixes, lead gen systems, analytics pipelines, AI assistants, and growth experiments with clear KPIs.
              </p>
            </div>
          </div>
          <div className="md:col-span-12 lg:col-span-5 relative group mt-12 lg:mt-0 px-4 md:px-0">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-terminal-cyan hidden md:block"></div>
            <div className="bg-surface-container-low p-2 border border-outline-variant/10 shadow-[10px_10px_0px_#1b1b1b] md:shadow-[20px_20px_0px_#1b1b1b] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(0,242,255,0.2)] relative">
              <Image 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                alt="Cybersecurity and Code"
                width={800}
                height={1000}
                className="w-full h-[300px] md:h-[450px] lg:h-[550px] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                priority
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-terminal-cyan/30 p-2 font-headline text-[8px] text-terminal-cyan uppercase tracking-widest hidden sm:block">
                SYSTEM_VISUAL_01
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Process */}
      <section className="relative min-h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 bg-surface-container-low border-b border-white/5">
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="font-headline text-terminal-cyan text-[10px] md:text-[12px] tracking-[0.4em] uppercase mb-4 block">ENTRY_02 // WORKFLOW</span>
              <h2 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-[100px] leading-[0.8] text-terminal-red tracking-tighter uppercase">
                THE PROCESS
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'DISCOVER', desc: 'Discover goals, audience, and constraints.', module: '01' },
              { title: 'PLAN', desc: 'Plan scope, architecture, and KPIs.', module: '02' },
              { title: 'BUILD', desc: 'Build fast, responsive features.', module: '03' },
              { title: 'INTEGRATE', desc: 'Integrate analytics, automations, and content.', module: '04' },
              { title: 'OPTIMIZE', desc: 'Optimize speed, SEO, and conversions.', module: '05' },
              { title: 'MEASURE', desc: 'Measure results and iterate.', module: '06' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container p-6 md:p-8 relative overflow-hidden group border-l-2 border-terminal-cyan transition-all hover:shadow-[0_0_25px_rgba(0,242,255,0.1)]"
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <span className="font-headline text-[9px] md:text-[10px] text-terminal-red">STEP_{item.module}</span>
                  <div className="mt-4">
                    <h3 className="font-headline text-xl md:text-2xl text-on-surface mb-2 tracking-widest">{item.title}</h3>
                    <p className="text-on-surface/60 font-body text-xs md:text-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Specializations */}
      <section className="relative min-h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 bg-surface">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FF0033 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="text-center max-w-4xl relative z-10">
          <Database className="w-12 h-12 md:w-16 md:h-16 text-terminal-red mx-auto mb-8 animate-pulse" />
          <h2 className="font-headline font-bold text-4xl md:text-6xl text-on-surface mb-8 md:mb-12 uppercase tracking-tight">SPECIALIZATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
            <div>
              <h3 className="text-terminal-cyan font-headline text-lg md:text-xl mb-4 tracking-widest">WEB DEVELOPMENT</h3>
              <p className="text-on-surface/60 font-body text-xs md:text-sm">I build fast, modern, responsive websites that convert and scale efficiently.</p>
            </div>
            <div>
              <h3 className="text-terminal-cyan font-headline text-lg md:text-xl mb-4 tracking-widest">AI SOLUTIONS</h3>
              <p className="text-on-surface/60 font-body text-sm text-xs md:text-sm">Automation, AI workflows, LLM tools, agents and AI-powered apps.</p>
            </div>
            <div>
              <h3 className="text-terminal-cyan font-headline text-lg md:text-xl mb-4 tracking-widest">PERFORMANCE MARKETING</h3>
              <p className="text-on-surface/60 font-body text-sm text-xs md:text-sm">Meta Ads, Google Ads, CRO, funnels and revenue-focused marketing.</p>
            </div>
          </div>
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-terminal-red to-[#5c000b] text-on-surface font-headline font-bold tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_#FF0033]">
              START_PROJECT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
