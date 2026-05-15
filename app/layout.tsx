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
    default: 'Casimir Systems — AI Defense Intelligence for U.S. Space Force',
  },
  description:
    'Casimir Systems builds AI-powered S&T intelligence and co-investment decision support for U.S. Space Force and DoD. Zero-code, fully auditable, compliance-first architecture.',
  keywords: [
    'defense AI platform',
    'DoD co-investment decision support',
    'Space Force S&T intelligence',
    'SpaceWERX',
    'Task Force Futures',
    'S&T ecosystem mapping',
    'Casimir Intelligence',
    'RDT&E alignment',
    'dual-use technology identification',
    'FOCI screening',
    'CMMC Level 2 readiness',
    'TRL scoring',
    'defense technology scouting',
    'AI knowledge synthesis defense',
    'CUI compliant defense software',
    'venture capital defense ecosystem',
    'SpaceWERX SBIR',
    'Peterson Space Force Base',
  ],
  openGraph: {
    title: 'Casimir Systems — AI Defense Intelligence for U.S. Space Force',
    description:
      'AI-powered S&T ecosystem mapping, co-investment decision support, and knowledge synthesis for U.S. Space Force and DoD. Purpose-built for Task Force Futures.',
    url: 'https://casimirsystems.com',
    siteName: 'Casimir Systems',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casimir Systems — AI Defense Intelligence',
    description:
      'AI-powered S&T intelligence and co-investment decision support for U.S. Space Force and DoD.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Casimir Systems',
  url: 'https://casimirsystems.com',
  description:
    'Agile defense technology firm building AI-powered S&T intelligence and co-investment decision support for U.S. Space Force and DoD.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Denver',
    addressRegion: 'CO',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'ryan@casimirsystems.com',
    url: 'https://casimirsystems.com/contact',
  },
  sameAs: [],
  knowsAbout: [
    'Defense Technology',
    'S&T Ecosystem Mapping',
    'Co-Investment Decision Support',
    'SBIR',
    'SpaceWERX',
    'U.S. Space Force',
    'AI Knowledge Synthesis',
    'RDT&E',
    'CMMC',
    'FOCI',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexSans.variable}`}
      style={{ fontFamily: 'var(--font-ibm-plex), IBM Plex Sans, sans-serif' }}
    >
      <body className="antialiased min-h-screen bg-[#0B132B] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
