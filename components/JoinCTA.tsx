'use client';

import CTABand from './CTABand';
import { useLanguage } from '@/contexts/LanguageContext';
import translations from '@/lib/translations';

export default function JoinCTA() {
  const { lang } = useLanguage();
  const t = translations[lang].joinCta;

  return (
    <div id="join">
      <CTABand
        kicker={t.kicker}
        text={t.text}
        primaryLabel={t.primary}
        primaryHref="/contact"
        secondaryLabel={t.secondary}
        secondaryHref="/events"
      />
    </div>
  );
}
