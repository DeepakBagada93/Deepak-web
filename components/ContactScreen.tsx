'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Send, Radio, Network } from 'lucide-react';
import Image from 'next/image';

export const ContactScreen: React.FC = () => {
  return (
    <section className="relative h-full overflow-y-auto no-scrollbar">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none p-10 font-mono text-[10px] leading-tight text-terminal-cyan whitespace-pre">
        {`
<script>
const protocol = "ESTABLISH_SECURE_LINK";
function encrypt(data) {
    return data.split('').map(char => char.charCodeAt(0) ^ 0xFF).join('');
}
// INITIALIZING HANDSHAKE...
// PACKET_LOSS: 0%
while(active) {
    transmit(encrypt(buffer));
    refresh(0.012);
}
</script>
[SYSTEM_INFO] ARCHIVAL_NODE_CONNECTED
[LOCATION] 23.0225° N, 72.5714° E
        `}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row gap-12 lg:items-start">
        <div className="flex-1 space-y-12">
          <header>
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[2px] w-12 bg-terminal-red"></div>
              <span className="font-headline text-[10px] tracking-[0.4em] uppercase text-terminal-red">Secure Channel 04</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6 uppercase">
              ESTABLISH<br/><span className="text-terminal-cyan">LINK.</span>
            </h1>
            <p className="max-w-md text-on-surface-variant font-body leading-relaxed">
              Transmissions are encrypted using AES-256 protocols. Initialize connection for data transfer, project inquiries, or strategic collaboration.
            </p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'EMAIL', handle: 'ceo@saasnext.in', icon: Send, color: 'cyan' },
              { label: 'PHONE', handle: '+91 70161 79234', icon: Radio, color: 'red' },
              { label: 'WEBSITE', handle: 'saasnext.in', icon: Network, color: 'cyan' },
              { label: 'LINKEDIN', handle: 'Deepak Bagada', icon: Linkedin, color: 'red' },
            ].map((social, i) => (
              <a key={i} href="#" className={`group flex flex-col items-start p-4 bg-surface-container-low border border-outline-variant/15 hover:border-terminal-${social.color}/50 hover:bg-terminal-${social.color}/5 transition-all`}>
                <social.icon className={`w-5 h-5 mb-4 ${social.color === 'cyan' ? 'text-terminal-cyan' : 'text-terminal-red'} group-hover:drop-shadow-[0_0_8px_currentColor]`} />
                <span className="font-headline text-[9px] uppercase tracking-widest text-gray-400">{social.label}</span>
                <span className="font-headline text-[11px] text-on-surface break-all">{social.handle}</span>
              </a>
            ))}
          </div>

          {/* FAQ SECTION */}
          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-terminal-cyan"></div>
              <h2 className="font-headline text-xl font-bold tracking-widest text-terminal-cyan uppercase">Frequently Asked Questions</h2>
            </div>
            <div className="grid gap-6">
              {[
                { q: "What services do you specialize in?", a: "Web development, AI solutions, and performance marketing with measurable outcomes." },
                { q: "Do you work with startups and established brands?", a: "Yes. I adapt processes to fit timelines and budgets while keeping quality high." },
                { q: "How fast can a project start?", a: "After a short discovery call and scope alignment, most engagements start within a week." }
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-surface-container-low border border-outline-variant/10">
                  <h3 className="font-headline text-sm font-bold text-terminal-red mb-2 uppercase tracking-wider">Q: {faq.q}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-video bg-surface-container-low overflow-hidden group border border-outline-variant/10">
            <Image 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
              alt="Server Room Infrastructure"
              fill
              className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 font-headline text-[9px] text-terminal-cyan bg-[#131313]/80 px-2 py-1 border border-terminal-cyan/20">INFRA_V4.2.0</div>
          </div>
        </div>

        <div className="w-full lg:w-[450px] relative mt-12 lg:mt-0">
          <div className="bg-surface-container-low p-2 relative overflow-hidden backdrop-blur-md border border-outline-variant/10 terminal-glow-red aspect-[3/4] md:aspect-auto md:h-[600px] lg:h-[700px]">
            <Image 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800"
              alt="Terminal Interface and Data"
              fill
              className="object-cover grayscale brightness-50 contrast-125 hover:brightness-75 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-terminal-red animate-pulse"></span>
                <span className="font-headline text-[10px] text-terminal-red tracking-[0.3em] uppercase">Data_Stream_Active</span>
              </div>
              <p className="font-headline text-[9px] text-terminal-cyan/60 uppercase tracking-widest">Packet_ID: 0x4F2A9B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
