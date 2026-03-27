'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Share2, Network, Radio, Clock, Code2, X } from 'lucide-react';
import Image from 'next/image';

export const TelemetryScreen: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = React.useState(0);
  
  const nodes = [
    { 
      id: 1, top: '25%', left: '65%', 
      title: 'NEURAL_DUMP_04', status: 'Critical', 
      desc: 'High-priority data recovery operation in Manhattan sector. Node is currently experiencing interference from unauthorized uplink attempts. Decryption progress: 78%.' 
    },
    { 
      id: 2, top: '45%', left: '35%', 
      title: 'CORE_SYNC_08', status: 'Stable', 
      desc: 'Mainframe synchronization in London hub. All data packets verified. Latency: 0.02ms. Encryption protocols active.' 
    },
    { 
      id: 3, top: '65%', left: '55%', 
      title: 'UPLINK_NODE_12', status: 'Warning', 
      desc: 'Satellite handshake interference detected in Tokyo. Signal strength fluctuating. Rerouting via secondary relay.' 
    },
    { 
      id: 4, top: '35%', left: '45%', 
      title: 'DATA_VAULT_01', status: 'Secure', 
      desc: 'Encrypted storage cluster in Berlin bunker. Physical security breach detected in sector 7. Initiating lockdown.' 
    },
  ];

  const activeNode = nodes[activeNodeIndex];

  return (
    <section className="relative h-full overflow-hidden bg-surface flex flex-col lg:flex-row">
      <div className="scanline-overlay absolute inset-0 opacity-20 pointer-events-none z-10"></div>
      
      {/* HUD ELEMENTS - Hidden on mobile for clarity */}
      <div className="absolute inset-0 pointer-events-none z-10 p-4 md:p-8 hidden md:block">
        <div className="absolute top-8 left-8 border-l-2 border-t-2 border-terminal-cyan/30 w-16 h-16"></div>
        <div className="absolute top-8 right-8 border-r-2 border-t-2 border-terminal-cyan/30 w-16 h-16"></div>
        <div className="absolute bottom-8 left-8 border-l-2 border-b-2 border-terminal-cyan/30 w-16 h-16"></div>
        <div className="absolute bottom-8 right-8 border-r-2 border-b-2 border-terminal-cyan/30 w-16 h-16"></div>

        <div className="absolute top-12 left-12 w-64 space-y-2 opacity-70">
          <div className="flex justify-between font-headline text-[10px] text-terminal-cyan tracking-widest">
            <span>IP_RESOLVER</span>
            <span className="text-terminal-red">192.168.1.104</span>
          </div>
          <div className="flex justify-between font-headline text-[10px] text-terminal-cyan tracking-widest">
            <span>SAT_LINK</span>
            <span>ACTIVE</span>
          </div>
          <div className="flex justify-between font-headline text-[10px] text-terminal-cyan tracking-widest">
            <span>UPTIME</span>
            <span>412:04:12</span>
          </div>
          <div className="h-[1px] bg-outline-variant/20 w-full"></div>
          <div className="font-headline text-[9px] text-terminal-cyan/40 uppercase">RX_PACKETS: 4.2GB/S</div>
        </div>
      </div>

      {/* 3D GLOBE CONTAINER */}
      <div className="flex-1 relative flex items-center justify-center min-h-[500px] lg:min-h-screen">
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-terminal-cyan/20 shadow-[0_0_100px_rgba(0,242,255,0.1)]"
          >
            <Image 
              src="https://picsum.photos/seed/globe/1000/1000"
              alt="Globe"
              fill
              className="object-contain mix-blend-screen opacity-60 grayscale brightness-150 contrast-125"
              referrerPolicy="no-referrer"
            />
            
            {/* Pulsing Markers */}
            {nodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 1.2, duration: 0.5 }}
                style={{ top: node.top, left: node.left }}
                className="absolute cursor-pointer z-20 group"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveNodeIndex(index);
                }}
              >
                <div className={`absolute -inset-2 ${activeNodeIndex === index ? 'bg-terminal-cyan/20' : 'bg-terminal-red/20'} rounded-full animate-ping`}></div>
                <div className={`w-2 h-2 md:w-3 md:h-3 ${activeNodeIndex === index ? 'bg-terminal-cyan shadow-[0_0_15px_#00F2FF]' : 'bg-terminal-red shadow-[0_0_15px_#FF0033]'} relative z-10 transition-colors duration-300`}></div>
                
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 border border-terminal-cyan/30 px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="font-headline text-[8px] text-terminal-cyan tracking-widest">{node.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* POPUP WINDOW - Responsive positioning */}
        <motion.div 
          key={activeNode.id}
          initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          className="absolute top-1/2 left-1/2 lg:left-1/3 w-[90%] max-w-[320px] bg-[#131313] border border-terminal-red/50 shadow-[0_0_30px_rgba(255,0,51,0.2)] z-30 p-1"
        >
          <div className="bg-terminal-red/10 px-4 py-2 flex justify-between items-center border-b border-terminal-red/30">
            <span className="font-headline text-[10px] font-bold text-terminal-red tracking-[0.3em] uppercase">Node_Details</span>
            <button className="text-terminal-red hover:bg-terminal-red/20 p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-surface-container-high border border-outline-variant flex items-center justify-center flex-shrink-0">
                <Code2 className="text-terminal-red w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="font-headline text-base md:text-lg font-bold text-on-surface leading-tight">{activeNode.title}</h3>
                <p className="font-headline text-[8px] md:text-[9px] text-terminal-red tracking-widest uppercase">Project_Status: {activeNode.status}</p>
              </div>
            </div>
            <p className="text-[10px] md:text-[11px] text-on-surface-variant leading-relaxed font-body">
              {activeNode.desc}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-terminal-red text-black py-2 font-headline text-[9px] md:text-[10px] font-bold tracking-widest uppercase hover:brightness-110 transition-all">TERMINATE</button>
              <button className="border border-terminal-cyan/30 text-terminal-cyan py-2 font-headline text-[9px] md:text-[10px] font-bold tracking-widest uppercase hover:bg-terminal-cyan/5 transition-all">ENCRYPT</button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SKILLS & TECH SIDEBAR - Scrollable on desktop, stacked on mobile */}
      <aside className="w-full lg:w-80 bg-surface-container-low/80 backdrop-blur-md border-t lg:border-t-0 lg:border-l border-outline-variant/10 p-6 z-20 overflow-y-auto no-scrollbar">
        <div className="flex items-center gap-2 mb-6 border-b border-terminal-red/20 pb-4">
          <span className="text-terminal-red font-bold text-sm">SKILLS_&_TECH</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:space-y-6">
          {[
            { category: 'FRONTEND', skills: 'HTML5, CSS3, JS/TS, Responsive UI, Accessibility, Performance, SEO' },
            { category: 'BACKEND/INFRA', skills: 'Node.js, REST APIs, Auth, Caching, CI/CD, Cloud Hosting' },
            { category: 'AI & AUTOMATION', skills: 'LLMs, Agents, Workflows, Integration, Data Pipelines' },
            { category: 'MARKETING & ANALYTICS', skills: 'Meta/Google Ads, CRO, Funnels, Tracking, Dashboards' },
            { category: 'NEXT.JS', skills: 'SSR/SSG, Routing, API Routes, Performance Optimization' },
            { category: 'REACT', skills: 'Hooks, State Management, Component Architecture, High‑Performance UI' },
            { category: 'LARAVEL', skills: 'RESTful APIs, Auth, Queues, Clean MVC Patterns' },
            { category: 'META ADS', skills: 'Campaign Setup, Pixel Tracking, Audiences, Conversion Optimization' },
            { category: 'GOOGLE ADS', skills: 'Search/Display, Conversion Tracking, ROAS Optimization, Analytics' },
          ].map((skill, i) => (
            <div key={i} className="p-3 md:p-4 bg-surface-container-high border-l-2 border-terminal-cyan hover:bg-surface-container-highest transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-1 md:mb-2">
                <span className="font-headline text-[9px] md:text-[10px] text-terminal-red tracking-widest uppercase">{skill.category}</span>
              </div>
              <div className="font-headline text-[10px] md:text-xs text-on-surface leading-relaxed">{skill.skills}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 lg:mt-12">
          <div className="font-headline text-[9px] md:text-[10px] text-terminal-cyan/40 mb-2 uppercase">System_Logs</div>
          <div className="text-[8px] md:text-[9px] font-mono space-y-1 text-on-surface-variant/60">
            <p className="text-terminal-cyan">&gt; SCANNING_TECH_STACK...</p>
            <p>&gt; NEXT.JS_OPTIMIZATION: ENABLED</p>
            <p className="text-terminal-red">&gt; AI_AGENT_DEPLOYMENT: ACTIVE</p>
            <p>&gt; ROAS_TRACKING: STABLE</p>
            <p>&gt; ACCESS_GRANTED: [USER_DEEPAK]</p>
          </div>
        </div>
      </aside>
    </section>
  );
};
