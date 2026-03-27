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
  title: 'ARCHIVAL_v1.0',
  description: 'High-fidelity technical portfolio interface',
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
