import type { Metadata } from 'next';
import { IBM_Plex_Sans_Thai } from 'next/font/google';
import localFont from 'next/font/local';
import '@/shared/style/globals.css';
import { cn } from '@/shared/utils';
import { CONFIG } from '@/global-config';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-ibm-plex-sans-thai',
});

const silom = localFont({
  src: '../../public/assets/fonts/silom/Silom.ttf',
  display: 'swap',
  variable: '--font-silom',
});

export const metadata: Metadata = {
  title: `CE Smart Career ${CONFIG.date.years}`,
  description: 'The biggest computer-it job fair & seminar at CE, KMITL',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          ibmPlexSansThai.variable,
          silom.variable,
          'w-screen cursor-default bg-black font-ibm-plex-sans-thai antialiased',
        )}
      >
        {children}
      </body>
    </html>
  );
}
