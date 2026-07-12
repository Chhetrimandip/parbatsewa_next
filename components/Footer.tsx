'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/lib/translations';

const socialBox =
  'flex h-[38px] w-[38px] items-center justify-center rounded-[7px] border border-faint bg-white text-muted transition-colors hover:bg-red hover:text-white hover:border-red';
const flink = 'text-[13.5px] text-muted no-underline transition-colors hover:text-red';

export default function Footer() {
  const year = new Date().getFullYear();
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  const navItems = [
    { label: t.navLinks.about, href: '/about' },
    { label: t.navLinks.events, href: '/events' },
    { label: t.navLinks.lifeMembers, href: '/life-members' },
    { label: t.navLinks.contact, href: '/contact' },
  ];

  return (
    <footer id="contact" className="border-t border-faint bg-bg-soft px-[6%] pb-[30px] pt-16">
      <div className="grid grid-cols-[1.8fr_1fr_1fr] gap-[50px] pb-12 max-[760px]:grid-cols-1 max-[760px]:gap-9">
        <div>
          <div className="mb-[18px] font-serif text-[20px] font-extrabold text-red">
            Parbat-NY
          </div>
          <p className="max-w-[330px] text-[13.5px] leading-[1.7] text-muted">
            {t.description}
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold tracking-[2px] text-ink">{t.navHeading}</h4>
          <nav className="flex flex-col gap-3">
            {navItems.map((i) => (
              <Link key={i.href} href={i.href} className={flink}>
                {i.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold tracking-[2px] text-ink">{t.connectHeading}</h4>
          <div className="flex gap-3">
            <a href="/contact" aria-label="Website" className={socialBox}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/parvata.seva.samaja.n.yuyorka" aria-label="Facebook" className={socialBox}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="/contact" aria-label="Email" className={socialBox}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 6L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-faint pt-[26px]">
        <span className="text-[12.5px] text-muted-2">{t.copyright(year)}</span>
        <div className="flex gap-7">
          <Link href="/privacy" className="text-[12.5px] text-muted no-underline transition-colors hover:text-red">
            {t.legal.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
