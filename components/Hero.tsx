'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/lib/translations';

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden px-[6%] pb-16">
      {/* BACKGROUND */}
      <div className="absolute inset-0 animate-kenburns">
        <Image
          src="/hero.jpeg"
          alt="Parbat community"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_50%,transparent_80%)]" />

      <div className="relative z-[2] max-w-[620px] rounded-2xl border border-blue/20 bg-blue/[0.08] px-8 py-8 backdrop-blur-md">
        <p className="mb-5 block animate-float-up text-xs font-semibold tracking-[4px] text-red opacity-0 [animation-delay:0.15s]">
          {t.tagline}
        </p>
        <h1 className="mb-6 animate-float-up font-serif text-[62px] font-bold leading-[1.04] tracking-[-1px] text-ink opacity-0 [animation-delay:0.28s] max-[640px]:text-[42px]">
          {t.heading1}
          <br />
          <span className="italic text-red">{t.heading2}</span>
        </h1>
        <p className="mb-9 max-w-[430px] animate-float-up text-base leading-[1.7] text-muted opacity-0 [animation-delay:0.41s]">
          {t.sub}
        </p>
        <div className="flex flex-wrap gap-4 animate-float-up opacity-0 [animation-delay:0.54s]">
          <Link
            href="#join"
            className="inline-flex items-center gap-2.5 rounded-lg bg-blue px-[30px] py-[15px] text-[13px] font-semibold tracking-[1px] text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-blue/90"
          >
            {t.ctaPrimary}
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2.5 rounded-lg border-[1.5px] border-blue bg-transparent px-[26px] py-[15px] text-[13px] font-semibold tracking-[1px] text-blue no-underline transition-all hover:bg-blue/5"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M3 10h18M8 2v4M16 2v4" />
            </svg>
            {t.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
