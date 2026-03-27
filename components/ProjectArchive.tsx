'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Search, Terminal } from 'lucide-react';
import Image from 'next/image';

export const ProjectArchive: React.FC = () => {
  const projects = [
    {
      id: '01',
      title: 'SAAS_NEXT_PLATFORM',
      date: '2024.12.01',
      type: 'FOUNDER',
      image: 'https://picsum.photos/seed/saas/1200/800',
      color: 'cyan',
    },
    {
      id: '02',
      title: 'AI_AGENT_WORKFLOWS',
      date: '2024.10.15',
      type: 'AI_DEV',
      image: 'https://picsum.photos/seed/ai-agent/800/600',
      color: 'red',
    },
    {
      id: '03',
      title: 'PERFORMANCE_AUDIT_TOOL',
      date: '2024.08.20',
      type: 'WEB_DEV',
      image: 'https://picsum.photos/seed/audit/800/600',
      color: 'cyan',
    },
    {
      id: '04',
      title: 'CONVERSION_DRIVEN_FUNNELS',
      date: '2024.06.10',
      type: 'MARKETING',
      image: 'https://picsum.photos/seed/funnel/1200/600',
      color: 'red',
    },
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 relative h-full bg-surface overflow-y-auto no-scrollbar">
      <header className="mb-8 md:mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-terminal-red"></span>
            <span className="font-headline text-[10px] md:text-xs tracking-widest text-terminal-red uppercase">RECOVERED_FILES.db</span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-4 uppercase">PROJECT_ARCHIVE</h1>
          <p className="font-body text-xs md:text-sm text-on-surface/60 max-w-lg leading-relaxed">
            Selected work spanning web apps, AI agents, and growth tooling. Focus areas: performance‑optimized React/Vanilla sites, SEO‑friendly content architectures, AI automation with LLMs and orchestration, and conversion‑driven marketing setups.
          </p>
        </div>
        <div className="relative group w-full lg:w-auto">
          <span className="absolute -top-5 left-0 font-headline text-[9px] md:text-[10px] text-terminal-cyan tracking-[0.2em]">SEARCH_FILTER_V1</span>
          <div className="relative flex items-center">
            <Search className="absolute left-4 text-gray-700 w-4 h-4 md:w-5 md:h-5" />
            <input 
              className="w-full lg:w-80 bg-[#1b1b1b] border-none text-on-surface font-headline placeholder:text-gray-700 py-3 md:py-4 pl-10 md:pl-12 pr-4 text-xs md:text-sm transition-all duration-200 focus:ring-2 focus:ring-terminal-cyan" 
              placeholder="QUERY_RECORDS..." 
              type="text"
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${
              index === 0 ? 'lg:col-span-8' : index === 3 ? 'lg:col-span-8' : 'lg:col-span-4'
            } group relative overflow-hidden bg-[#1b1b1b] glass-card border-l-2 ${
              project.color === 'cyan' ? 'border-terminal-cyan' : 'border-terminal-red'
            } transition-all duration-500`}
          >
            <div className={`relative ${index === 0 ? 'h-[300px] md:h-[450px]' : index === 3 ? 'h-[250px] md:h-[300px]' : 'h-[200px] md:h-[250px]'}`}>
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
              
              <div className={`absolute inset-0 ${project.color === 'cyan' ? 'bg-terminal-cyan/90' : 'bg-terminal-red/90'} flex flex-col justify-center p-6 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <h4 className="font-headline text-black text-xl md:text-3xl font-extrabold mb-4 md:mb-6 tracking-tight uppercase">TECH_STACK_AUDIT</h4>
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div>
                    <span className="font-headline text-[8px] md:text-[10px] text-black font-bold tracking-widest block mb-1 md:mb-2 uppercase">Core Engine</span>
                    <p className="font-headline text-black font-bold text-sm md:text-lg">NEURAL_SYNC_V4</p>
                  </div>
                  <div>
                    <span className="font-headline text-[8px] md:text-[10px] text-black font-bold tracking-widest block mb-1 md:mb-2 uppercase">Performance</span>
                    <p className="font-headline text-black font-bold text-sm md:text-lg">0.02ms LATENCY</p>
                  </div>
                </div>
                <button className="mt-6 md:mt-12 bg-black text-white font-headline text-[10px] md:text-xs tracking-widest py-2 md:py-3 px-6 md:px-8 self-start hover:bg-gray-900 transition-colors">
                  INITIATE_FULL_READOUT
                </button>
              </div>
            </div>

            <div className="p-4 md:p-8 flex justify-between items-end">
              <div>
                <span className={`font-headline text-[8px] md:text-[10px] ${project.color === 'cyan' ? 'text-terminal-cyan' : 'text-terminal-red'} tracking-[0.3em] mb-1 md:mb-2 block uppercase`}>
                  [ PROJECT_{project.id} ]
                </span>
                <h3 className="font-headline text-xl md:text-4xl font-extrabold text-terminal-red tracking-tighter leading-tight">{project.title}</h3>
              </div>
              <div className="text-right hidden sm:block">
                <span className="font-headline text-[8px] md:text-[10px] text-gray-500 uppercase">Archive Date</span>
                <p className="font-headline text-on-surface text-xs md:text-base font-bold">{project.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
