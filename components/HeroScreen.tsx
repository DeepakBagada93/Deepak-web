'use client';

import React from 'react';
import { motion } from 'motion/react';
import { History, Terminal as TerminalIcon } from 'lucide-react';
import Image from 'next/image';

const backgroundNodes = [
  { size: 280, top: '6%', left: '-4%', color: 'rgba(255, 0, 51, 0.16)', duration: 13 },
  { size: 360, top: '18%', right: '-8%', color: 'rgba(0, 242, 255, 0.14)', duration: 17 },
  { size: 220, bottom: '12%', left: '10%', color: 'rgba(0, 242, 255, 0.1)', duration: 11 },
  { size: 260, bottom: '-2%', right: '10%', color: 'rgba(255, 0, 51, 0.12)', duration: 15 },
];

const signalBars = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  height: 28 + (index % 6) * 10,
  delay: index * 0.15,
  duration: 2.6 + (index % 4) * 0.45,
}));

const dataTicks = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  width: 48 + (index % 3) * 14,
  delay: index * 0.35,
}));

const quickStats = [
  ['Focus', 'Responsive products'],
  ['Stack', 'Next.js, AI, automation'],
  ['Approach', 'Ship fast, measure hard'],
];

const statusRows = [
  ['Kernel', 'V-NEURAL.09'],
  ['Interface', 'HOLOGRAPHIC_HUD'],
  ['Access', 'GUEST_READ_ONLY'],
];

export const HeroScreen: React.FC = () => {
  return (
    <section className="relative flex min-h-full items-center justify-center overflow-hidden bg-surface px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,242,255,0.12),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(255,0,51,0.12),_transparent_26%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />

        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{ backgroundPosition: ['0px 0px', '0px 42px'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '38px 38px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85), transparent 78%)',
          }}
        />

        <motion.div
          className="absolute inset-y-0 left-[18%] w-px bg-gradient-to-b from-transparent via-terminal-cyan/40 to-transparent"
          animate={{ opacity: [0.18, 0.42, 0.18], scaleY: [0.92, 1, 0.92] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-y-0 right-[14%] w-px bg-gradient-to-b from-transparent via-terminal-red/35 to-transparent"
          animate={{ opacity: [0.12, 0.3, 0.12], scaleY: [1, 0.9, 1] }}
          transition={{ duration: 6.3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute left-0 right-0 top-[14%] h-px bg-gradient-to-r from-transparent via-terminal-cyan/55 to-transparent"
          animate={{ opacity: [0.14, 0.45, 0.14], scaleX: [0.94, 1, 0.94] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-0 right-0 bottom-[20%] h-px bg-gradient-to-r from-transparent via-terminal-red/45 to-transparent"
          animate={{ opacity: [0.08, 0.28, 0.08], scaleX: [1, 0.9, 1] }}
          transition={{ duration: 5.7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-terminal-cyan/8 via-terminal-cyan/3 to-transparent"
          animate={{ opacity: [0.1, 0.22, 0.1], y: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {backgroundNodes.map((node, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full blur-3xl"
            animate={{
              x: [0, index % 2 === 0 ? 42 : -30, 0],
              y: [0, index % 2 === 0 ? -26 : 24, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: node.size,
              height: node.size,
              backgroundColor: node.color,
              top: node.top,
              left: node.left,
              right: node.right,
              bottom: node.bottom,
            }}
          />
        ))}

        <div className="absolute left-4 top-6 hidden max-w-[220px] border border-white/6 bg-black/20 px-3 py-3 backdrop-blur-sm md:block">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-terminal-cyan/70">signal matrix</p>
          <div className="mt-4 flex items-end gap-1">
            {signalBars.map((bar) => (
              <motion.span
                key={bar.id}
                className="w-1.5 bg-gradient-to-t from-terminal-red/70 to-terminal-cyan/90"
                animate={{
                  height: [bar.height * 0.45, bar.height, bar.height * 0.6],
                  opacity: [0.35, 0.9, 0.5],
                }}
                transition={{
                  duration: bar.duration,
                  delay: bar.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ height: bar.height }}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-white/40">
            <span>latency</span>
            <span className="text-terminal-red">0.09ms</span>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 hidden w-[230px] border border-white/6 bg-black/25 px-4 py-3 backdrop-blur-sm lg:block">
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-terminal-red/70">boot trace</p>
          <div className="mt-4 space-y-2">
            {dataTicks.map((tick) => (
              <motion.div
                key={tick.id}
                className="h-px bg-gradient-to-r from-terminal-cyan/80 to-transparent"
                animate={{ width: [`${tick.width * 0.45}px`, `${tick.width}px`, `${tick.width * 0.65}px`], opacity: [0.2, 0.8, 0.3] }}
                transition={{ duration: 3.2, delay: tick.delay, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] tracking-[0.26em] text-white/45">INITIALIZING VISUAL SYSTEMS</p>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 py-8 sm:py-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">
        <div className="flex flex-col items-start space-y-5 sm:space-y-6 lg:col-span-7 lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 border border-terminal-red/30 bg-terminal-red/10 px-3 py-1.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-terminal-red shadow-[0_0_12px_rgba(255,0,51,0.8)]" />
            <span className="font-headline text-[10px] uppercase tracking-[0.36em] text-terminal-red sm:text-[11px]">
              Identity_Verified
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.42em] text-terminal-cyan/80 sm:text-xs">
              Portfolio Boot Sequence / Visual Layer 01
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-headline text-4xl font-extrabold leading-none tracking-[-0.08em] text-terminal-red drop-shadow-[0_0_25px_rgba(255,0,51,0.45)] glitch-text sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem]"
            >
              DEEPAK BAGADA
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="space-y-2"
          >
            <p className="max-w-2xl font-headline text-xs font-light uppercase tracking-[0.24em] text-terminal-cyan sm:text-sm md:text-lg lg:text-xl">
              Web Developer &bull; AI Developer &bull; Performance Marketer
            </p>
            <p className="font-headline text-[11px] font-thin uppercase tracking-[0.28em] text-terminal-cyan/60 sm:text-xs md:text-sm lg:text-base">
              | Founder of SaaSNext
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="max-w-2xl space-y-4"
          >
            <p className="font-body text-sm leading-7 text-on-surface/80 sm:text-base md:text-lg">
              I&apos;m a developer and marketer who builds high-performance web experiences and automation
              systems. I combine modern frontend engineering with AI-powered workflows to help products scale.
            </p>
            <p className="border-l-2 border-terminal-cyan/30 pl-4 font-body text-xs italic leading-6 text-on-surface/60 sm:pl-5 sm:text-sm md:pl-6 md:text-base">
              Core skills include responsive UI, accessibility, performance optimization, API integrations,
              agent workflows, data-driven funnels, and analytics. I lead SaaSNext, focusing on shipping fast
              and measuring outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            className="w-full max-w-2xl border border-white/6 bg-black/25 px-4 py-4 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-terminal-cyan/75">system status</p>
                <p className="mt-2 font-headline text-sm uppercase tracking-[0.2em] text-white sm:text-base">
                  Initializing portfolio... loading experience...
                </p>
              </div>
              <motion.span
                className="hidden h-3 w-3 bg-terminal-cyan shadow-[0_0_12px_rgba(0,242,255,0.9)] sm:block"
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <div className="mt-4 h-1.5 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-terminal-red via-terminal-red to-terminal-cyan shadow-[0_0_18px_rgba(255,0,51,0.6)]"
                animate={{ width: ['22%', '74%', '58%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
            className="grid w-full max-w-2xl grid-cols-1 gap-3 pt-1 sm:grid-cols-3"
          >
            {quickStats.map(([label, value]) => (
              <div key={label} className="glass-card rounded-none px-4 py-3">
                <p className="font-headline text-[10px] uppercase tracking-[0.28em] text-terminal-cyan/45">
                  {label}
                </p>
                <p className="mt-2 text-sm text-on-surface sm:text-[15px]">{value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.64 }}
            className="flex w-full flex-col gap-3 pt-5 sm:flex-row sm:gap-4 md:pt-6"
          >
            <button className="terminal-glow-red relative w-full overflow-hidden bg-gradient-to-r from-terminal-red to-[#930019] px-6 py-3.5 transition-all hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:min-w-44">
              <motion.span
                className="absolute inset-y-0 left-[-20%] w-16 bg-white/15 blur-md"
                animate={{ x: ['-30%', '250%'] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.8, ease: 'easeInOut' }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2 font-headline text-xs font-bold uppercase tracking-[0.2em] text-white md:text-sm">
                <History className="h-4 w-4" />
                HIRE ME
              </span>
            </button>
            <button className="relative w-full border border-terminal-cyan/30 bg-transparent px-6 py-3.5 transition-all hover:bg-terminal-cyan/5 sm:w-auto sm:min-w-44">
              <span className="flex items-center justify-center gap-2 font-headline text-xs font-bold uppercase tracking-[0.2em] text-terminal-cyan md:text-sm">
                <TerminalIcon className="h-4 w-4" />
                ABOUT_ME
              </span>
              <div className="absolute -left-1 -top-1 h-2 w-2 bg-terminal-cyan" />
              <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-terminal-cyan" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="relative flex justify-center lg:col-span-5 lg:justify-end"
        >
          <div className="relative aspect-square w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[520px]">
            <motion.div
              className="absolute inset-0 border border-terminal-cyan/20"
              animate={{ rotate: [45, 52, 45] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-[11%] border border-terminal-cyan/10"
              animate={{ rotate: [-12, -6, -12] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-[23%] border border-terminal-red/18"
              animate={{ rotate: [12, 18, 12] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="absolute inset-[6%] rounded-[2.25rem] border border-white/8"
              animate={{ boxShadow: ['0 0 0 rgba(0,242,255,0)', '0 0 26px rgba(0,242,255,0.12)', '0 0 0 rgba(0,242,255,0)'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="absolute inset-[10%] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-[0_0_60px_rgba(0,242,255,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-terminal-red/12 via-transparent to-terminal-cyan/10" />
              <motion.div
                className="absolute inset-x-0 top-[18%] h-10 bg-gradient-to-b from-terminal-cyan/14 to-transparent"
                animate={{ y: ['-20%', '220%', '-20%'], opacity: [0, 0.45, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: 'linear' }}
              />
              <Image
                src="/Deepak.png"
                alt="Deepak Bagada"
                fill
                className="object-cover object-top opacity-90 contrast-110 saturate-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                priority
              />
            </div>

            <div className="absolute right-2 top-2 space-y-1 border border-terminal-cyan/30 bg-black/45 p-2 text-[8px] font-headline text-terminal-cyan backdrop-blur-md sm:right-4 sm:top-4 sm:p-3 sm:text-[9px]">
              <p>FR_RT: 60FPS</p>
              <p>VR_MS: 0.042</p>
              <p>DATA_STR: ENCRYPTED</p>
            </div>

            <div className="absolute bottom-3 left-0 right-0 mx-auto flex w-[82%] items-center justify-between border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-md sm:bottom-5 sm:px-4">
              <div>
                <p className="font-headline text-[9px] uppercase tracking-[0.28em] text-terminal-cyan/50 sm:text-[10px]">
                  Status
                </p>
                <p className="mt-1 text-xs text-on-surface sm:text-sm">Available for build-focused work</p>
              </div>
              <span className="h-2.5 w-2.5 rounded-full bg-terminal-cyan shadow-[0_0_14px_rgba(0,242,255,0.9)]" />
            </div>

            <div className="absolute -left-4 top-[18%] hidden border border-white/8 bg-black/35 px-3 py-2 backdrop-blur-md sm:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">node</p>
              <p className="mt-2 font-headline text-xs uppercase tracking-[0.24em] text-terminal-red">frontend_sync</p>
            </div>

            <div className="absolute -right-3 bottom-[22%] hidden border border-white/8 bg-black/35 px-3 py-2 backdrop-blur-md md:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">state</p>
              <p className="mt-2 font-headline text-xs uppercase tracking-[0.24em] text-terminal-cyan">live_render</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-8 hidden flex-col gap-8 border-l border-white/5 pl-4 xl:flex">
        {statusRows.map(([label, value]) => (
          <div key={label} className="space-y-1">
            <p className="font-headline text-[10px] uppercase tracking-[0.3em] text-terminal-cyan/50">{label}</p>
            <p className={`font-headline text-sm ${label === 'Access' ? 'text-terminal-cyan' : 'text-on-surface'}`}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
