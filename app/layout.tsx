import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://casimirsystems.com'),
  title: {
    template: '%s | Casimir Systems',
    default: 'Casimir Systems — Building the Software that Secures the Future',
  },
  description:
    'Casimir Systems builds AI-powered decision support platforms for U.S. Space Force and DoD — transforming fragmented S&T data into defensible co-investment decisions.',
  keywords: [
    'defense AI', 'Space Force', 'co-investment', 'S&T ecosystem',
    'DoD technology', 'Casimir Intelligence', 'Casimir Systems',
    'ecosystem mapping', 'FOCI', 'TRL', 'RDT&E', 'dual-use technology',
  ],
  openGraph: {
    title: 'Casimir Systems — Building the Software that Secures the Future',
    description:
      'AI-powered S&T ecosystem and co-investment decision support for U.S. Space Force and DoD.',
    url: 'https://casimirsystems.com',
    siteName: 'Casimir Systems',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casimir Systems',
    description: 'AI-powered defense intelligence infrastructure.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexSans.variable}`}
      style={{ fontFamily: 'var(--font-ibm-plex), IBM Plex Sans, sans-serif' }}
    >
      <body className="antialiased min-h-screen bg-[#0B132B] text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
