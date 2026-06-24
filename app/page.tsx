import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Foundation from '@/components/Foundation';
import FeaturedWork from '@/components/FeaturedWork';
import JoinCTA from '@/components/JoinCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
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
