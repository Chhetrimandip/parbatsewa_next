'use client';

import Reveal from './Reveal';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/lib/translations';

export default function LeadershipMessages() {
  const { lang } = useLanguage();
  const t = translations[lang].foundation;

  return (
    <section id="leadership" className="px-[6%] py-24">
      <Reveal>
        <div className="mb-16 text-center md:text-left max-w-6xl mx-auto">
          <p className="mb-[22px] block text-xs font-semibold tracking-[3px] text-red uppercase">
            {t.eyebrow}
          </p>
          <h2 className="font-serif text-[30px] font-bold text-ink">{t.heading}</h2>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:gap-[50px]">
        {/* Founding President */}
        <Reveal className="flex flex-col items-center rounded-[10px] border border-faint bg-card p-[30px] text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md md:items-start md:text-left">
          <div className="mb-8 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-faint bg-bg-soft md:h-40 md:w-40">
            <Image alt="hemant the founder" height={200} width={200} src="/heman.jpg" />
          </div>
          <div className="space-y-4 text-[14.5px] leading-[1.75] text-muted-2 flex-grow">
            <p>{t.foundingPresident.p1}</p>
            <p>{t.foundingPresident.p2}</p>
            <p>{t.foundingPresident.p3}</p>
            <p>{t.foundingPresident.p4}</p>
          </div>
          <div className="mt-8 w-full border-t border-faint pt-6">
            <p className="mb-0.5 font-serif text-[21px] font-bold text-ink">Heman Bahadur Malla</p>
            <h3 className="mb-1 text-[13px] font-semibold text-muted">{t.foundingPresident.title}</h3>
            <p className="text-xs font-semibold tracking-[1px] text-red">{t.foundingPresident.org}</p>
          </div>
        </Reveal>

        {/* Founding General Secretary */}
        <Reveal className="flex flex-col items-center rounded-[10px] border border-faint bg-card-2 p-[30px] text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md md:items-start md:text-left">
          <div className="mb-8 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-faint bg-bg-soft md:h-40 md:w-40">
            <Image alt="Founding General Secretary" height={200} width={200} src="/prakash_sharma.jpeg" />
          </div>
          <div className="space-y-4 text-[14.5px] leading-[1.75] text-muted-2 flex-grow">
            <p>{t.foundingSecretary.p1}</p>
            <p>{t.foundingSecretary.p2}</p>
            <p>{t.foundingSecretary.p3}</p>
            <p>{t.foundingSecretary.p4}</p>
          </div>
          <div className="mt-8 w-full border-t border-faint pt-6">
            <p className="mb-0.5 font-serif text-[21px] font-bold text-ink">Prakash Sharma</p>
            <h3 className="mb-1 text-[13px] font-semibold text-muted">{t.foundingSecretary.title}</h3>
            <p className="text-xs font-semibold tracking-[1px] text-red">{t.foundingSecretary.org}</p>
          </div>
        </Reveal>

        {/* President 2023–2026 */}
        <Reveal className="flex flex-col items-center rounded-[10px] border border-faint bg-card p-[30px] text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md md:items-start md:text-left">
          <div className="mb-8 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-faint bg-bg-soft md:h-40 md:w-40">
            <Image alt="Surya Paudel" height={200} width={200} src="/surya.jpg" />
          </div>
          <div className="space-y-4 text-[14.5px] leading-[1.75] text-muted-2 flex-grow">
            <p>{t.president2023.p1}</p>
            <p>{t.president2023.p2}</p>
            <p>{t.president2023.p3}</p>
          </div>
          <div className="mt-8 w-full border-t border-faint pt-6">
            <p className="mb-0.5 font-serif text-[21px] font-bold text-ink">Surya Paudel</p>
            <h3 className="mb-1 text-[13px] font-semibold text-muted">{t.president2023.title}</h3>
            <p className="text-xs font-semibold tracking-[1px] text-red">{t.president2023.org}</p>
          </div>
        </Reveal>

        {/* President 2026–2028 */}
        <Reveal className="flex flex-col items-center rounded-[10px] border border-faint bg-card-2 p-[30px] text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md md:items-start md:text-left">
          <div className="mb-8 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-faint bg-bg-soft md:h-40 md:w-40">
            <Image alt="Purna Shrestha" height={200} width={200} src="/purna.jpeg" />
          </div>
          <div className="space-y-4 text-[14.5px] leading-[1.75] text-muted-2 flex-grow">
            <p>{t.president2026.p1}</p>
            <p>{t.president2026.p2}</p>
            <p>{t.president2026.p3}</p>
            <p>{t.president2026.p4}</p>
          </div>
          <div className="mt-8 w-full border-t border-faint pt-6">
            <p className="mb-0.5 font-serif text-[21px] font-bold text-ink">Purna Shrestha</p>
            <h3 className="mb-1 text-[13px] font-semibold text-muted">{t.president2026.title}</h3>
            <p className="text-xs font-semibold tracking-[1px] text-red">{t.president2026.org}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
