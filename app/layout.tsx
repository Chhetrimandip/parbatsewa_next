import type { Metadata } from 'next';
import { Playfair_Display, Work_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site';

const serif = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Parbat-NY — Uniting the Parbat Diaspora in New York',
    template: '%s — Parbat-NY',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  keywords: [
    'Parbat Sewa Samaj',
    'Parbat New York',
    'Nepali community New York',
    'Parbat diaspora',
    'Nepali nonprofit NY',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: 'Parbat-NY — Uniting the Parbat Diaspora in New York',
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parbat-NY — Uniting the Parbat Diaspora in New York',
    description: SITE_DESCRIPTION,
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
