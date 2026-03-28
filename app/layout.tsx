import type {Metadata} from 'next';
import { Space_Grotesk, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Deepak Bagada | Web & AI Developer | Performance Marketer',
  description: 'Deepak Bagada is a results-driven Web Developer, AI Automation Expert, and Performance Marketer. Specializing in high-performance Next.js apps, AI agent workflows, and data-driven marketing funnels.',
  keywords: ['Deepak Bagada', 'Web Developer', 'AI Developer', 'Performance Marketer', 'SaaSNext', 'Next.js Developer', 'AI Automation', 'Marketing Automation', 'Full Stack Developer'],
  authors: [{ name: 'Deepak Bagada' }],
  openGraph: {
    title: 'Deepak Bagada | Web & AI Developer | Performance Marketer',
    description: 'Portfolio of Deepak Bagada - Building high-performance web experiences and AI-powered automation.',
    url: 'https://deepakbagada.com', // Replace with actual URL if known
    siteName: 'Deepak Bagada Portfolio',
    images: [
      {
        url: '/Deepak.png',
        width: 800,
        height: 800,
        alt: 'Deepak Bagada',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deepak Bagada | Web & AI Developer',
    description: 'Web Developer, AI Expert, and Performance Marketer.',
    images: ['/Deepak.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} dark`}>
      <body suppressHydrationWarning className="bg-background">
        {children}
      </body>
    </html>
  );
}
