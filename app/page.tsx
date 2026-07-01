import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Foundation from '@/components/Foundation';
import FeaturedWork from '@/components/FeaturedWork';
import JoinCTA from '@/components/JoinCTA';
import Footer from '@/components/Footer';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: SITE_NAME,
  alternateName: 'Parbat-NY',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  areaServed: 'New York metropolitan area',
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Foundation />
        <FeaturedWork />
        <JoinCTA />
      </main>
      <Footer />
    </>
  );
}
