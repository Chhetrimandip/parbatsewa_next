'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import EventCard from '@/components/EventCard';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/lib/translations';
import type { SanityUpcomingEvent } from '@/sanity/lib/api';

interface EventItem {
  key: string;
  title: string;
  slug: string;
  badge?: string;
  theme: 'red' | 'amber' | 'green';
  meta: string[];
  desc: string;
  imageUrl?: string;
}

interface FeaturedEvent {
  title: string;
  slug: string;
  description: string;
  dateLabel?: string;
  location?: string;
  imageUrl?: string;
}

interface Props {
  mainEvents: EventItem[];
  partnerFlyers: EventItem[];
  featured: FeaturedEvent;
  upcomingEvents: SanityUpcomingEvent[];
}

export default function EventsContent({ mainEvents, partnerFlyers, featured, upcomingEvents }: Props) {
  const { lang } = useLanguage();
  const t = translations[lang].events;

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={t.pageHero.eyebrow}
          title={t.pageHero.title}
          accent={t.pageHero.accent}
          lead={t.pageHero.lead}
        />

        {/* FEATURED / UPCOMING */}
        <Link href={`/events/${featured.slug}`}>
          <section className="px-[6%] pb-[70px] pt-5">
            <Reveal className="relative flex min-h-[300px] items-end overflow-hidden rounded-[14px]">
              {featured.imageUrl ? (
                <Image
                  src={featured.imageUrl}
                  alt={featured.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 88vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 bg-bg-soft" />
              )}
              <div className="relative z-[2] m-6 max-w-[560px] rounded-xl bg-white/85 p-8 backdrop-blur-sm">
                <span className="mb-[18px] inline-block rounded-[4px] bg-red px-[13px] py-1.5 text-[10px] font-semibold tracking-[1.5px] text-white">
                  NEXT UP
                </span>
                <h2 className="mb-[14px] font-serif text-[32px] font-bold leading-[1.15] text-ink max-[560px]:text-[26px]">
                  {featured.title}
                </h2>
                {featured.description && (
                  <p className="mb-[22px] text-[15px] leading-[1.7] text-muted">{featured.description}</p>
                )}
                <div className="flex flex-wrap gap-6 text-[13px] text-muted">
                  {featured.dateLabel && (
                    <span className="inline-flex items-center gap-[7px]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M3 10h18M8 2v4M16 2v4" />
                      </svg>
                      {featured.dateLabel}
                    </span>
                  )}
                  {featured.location && (
                    <span className="inline-flex items-center gap-[7px]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {featured.location}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          </section>
        </Link>

        {/* COMING UP */}
        {upcomingEvents.length > 0 && (
          <section className="px-[6%] pb-14">
            <Reveal className="mb-7">
              <p className="mb-[10px] block text-xs font-semibold tracking-[3px] text-red">
                {lang === 'en' ? 'COMING UP' : 'आउँदो'}
              </p>
              <h2 className="font-serif text-[26px] font-bold">
                {lang === 'en' ? 'On the Horizon' : 'आगामी कार्यक्रमहरू'}
              </h2>
            </Reveal>
            <div className="flex flex-col gap-3">
              {upcomingEvents.map((e) => (
                <Reveal
                  key={e._id}
                  className="flex items-center gap-5 rounded-[10px] border border-faint bg-card px-6 py-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red/10 text-red">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18M8 2v4M16 2v4" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-[16px] font-bold leading-snug">{e.title}</p>
                    {(e.timeframe || e.location) && (
                      <p className="mt-0.5 text-[12px] text-muted">
                        {[e.timeframe, e.location].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 rounded-[4px] bg-red px-2.5 py-1 text-[9px] font-semibold tracking-[1px] text-white">
                    {lang === 'en' ? 'COMING SOON' : 'छिट्टै आउँदैछ'}
                  </span>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* HIGHLIGHTS GRID */}
        <section className="px-[6%] pb-16">
          <Reveal className="mb-9">
            <p className="mb-[14px] block text-xs font-semibold tracking-[3px] text-red">HIGHLIGHTS</p>
            <h2 className="font-serif text-[30px] font-bold">{t.highlightsHeading}</h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-6 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1">
            {mainEvents.length === 0 ? (
              <p className="col-span-3 text-muted">{t.noEvents}</p>
            ) : (
              mainEvents.map((e) => (
                <Link key={e.key} href={`/events/${e.slug}`}>
                  <EventCard title={e.title} badge={e.badge} theme={e.theme} meta={e.meta} desc={e.desc} imageUrl={e.imageUrl} />
                </Link>
              ))
            )}
          </div>
        </section>

        {/* PARTNER FLYERS */}
        {partnerFlyers.length > 0 && (
          <section className="px-[6%] pb-20 border-t border-faint pt-16 bg-bg-soft">
            <Reveal className="mb-9">
              <p className="mb-[14px] block text-xs font-semibold tracking-[3px] text-red">COLLABORATIONS</p>
              <h2 className="font-serif text-[30px] font-bold">{t.partnerHeading}</h2>
            </Reveal>
            <div className="grid grid-cols-4 gap-6 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
              {partnerFlyers.map((flyer) => (
                <Reveal key={flyer.key} className="overflow-hidden rounded-[14px] border border-white/10 bg-[#121215] p-3 shadow-md">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[8px] bg-[#0c0c0f]">
                    <Image
                      src={flyer.imageUrl!}
                      alt={flyer.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <p className="mt-3 text-xs font-medium text-center text-[#c3c4ca] truncate px-1">
                    {flyer.title.replace(/^Partner\s*[:-]?\s*/i, '')}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <CTABand
          kicker={lang === 'en' ? 'Want to get involved?' : 'सहभागी हुन चाहनुहुन्छ?'}
          text={lang === 'en'
            ? 'Volunteer at our next blood drive, perform with the bhajan team, or support a relief campaign. Every hand helps.'
            : 'अर्को रक्तदान अभियानमा स्वयंसेवक बन्नुस्, भजन टिमसँग प्रस्तुति दिनुस् वा राहत अभियानमा सहयोग गर्नुस्। हरेक हात उपयोगी छ।'}
          primaryLabel={lang === 'en' ? 'Volunteer' : 'स्वयंसेवक बन्नुस्'}
          primaryHref="/contact"
          secondaryLabel={lang === 'en' ? 'ABOUT US' : 'हाम्रो बारे'}
          secondaryHref="/about"
        />
      </main>
      <Footer />
    </>
  );
}
