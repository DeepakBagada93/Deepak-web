'use client';

import React from 'react';
import { motion } from 'motion/react';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  cx: `${(i + 1) * 5}%`,
  cy: 80 + (i % 5) * 8,
  radius: 1 + (i % 3) * 0.6,
  duration: 2.2 + (i % 4) * 0.45,
  delay: i * 0.2,
  fill: i % 2 === 0 ? '#06b6d4' : '#ef4444',
}));

const gridRects = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: `${i * 7}%`,
  duration: 3.1 + (i % 4) * 0.4,
  delay: i * 0.15,
}));

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-32 md:h-48 pointer-events-none z-[5] overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor="#131313" />
          </linearGradient>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        <path d="M0,100 Q240,50 480,100 T960,100 T1440,100 T1920,100 L1920,200 L0,200 Z" fill="url(#bgGradient)" />
        
        <path 
          d="M0,120 Q240,70 480,120 T960,120 T1440,120 T1920,120" 
          fill="none" 
          stroke="url(#glowGradient)" 
          strokeWidth="1"
          className="animate-pulse"
        />

        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={particle.cx}
            cy={particle.cy}
            r={particle.radius}
            fill={particle.fill}
            opacity={0.4}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        <motion.line
          x1="0"
          y1={150}
          x2="1920"
          y2={150}
          stroke="#06b6d4"
          strokeWidth="0.5"
          opacity={0.2}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            x1: ['0%', '5%', '0%'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.line
          x1="0"
          y1={170}
          x2="1920"
          y2={170}
          stroke="#ef4444"
          strokeWidth="0.5"
          opacity={0.2}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            x2: ['100%', '95%', '100%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {gridRects.map((rect) => (
          <motion.rect
            key={`grid-${rect.id}`}
            x={rect.x}
            y={100}
            width="40"
            height="60"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="0.3"
            opacity={0.1}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              y: [100, 98, 100],
            }}
            transition={{
              duration: rect.duration,
              repeat: Infinity,
              delay: rect.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={`wave-${i}`}
            d={`M${i * 200 - 200},140 Q${i * 200 - 100},${120 + Math.sin(i) * 15} ${i * 200},140 T${i * 200 + 200},140`}
            fill="none"
            stroke={i % 2 === 0 ? '#06b6d4' : '#ef4444'}
            strokeWidth="0.5"
            opacity={0.15}
            animate={{
              d: [
                `M${i * 200 - 200},140 Q${i * 200 - 100},${120 + Math.sin(i) * 15} ${i * 200},140 T${i * 200 + 200},140`,
                `M${i * 200 - 200},140 Q${i * 200 - 100},${125 + Math.sin(i) * 10} ${i * 200},140 T${i * 200 + 200},140`,
                `M${i * 200 - 200},140 Q${i * 200 - 100},${120 + Math.sin(i) * 15} ${i * 200},140 T${i * 200 + 200},140`,
              ],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      <div 
        className="absolute bottom-0 left-0 w-full h-16 md:h-24"
        style={{
          background: 'linear-gradient(to top, #131313 0%, transparent 100%)',
        }}
      />
    </div>
  );
};
