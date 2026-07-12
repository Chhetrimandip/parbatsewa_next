import Link from 'next/link';
import Reveal from './Reveal';

interface CTABandProps {
  kicker: string;
  text: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABand({
  kicker,
  text,
  primaryLabel,
  primaryHref = '#',
  secondaryLabel,
  secondaryHref = '#',
}: CTABandProps) {
  return (
    <section className="px-[6%] pb-[90px]">
      <Reveal className="relative overflow-hidden rounded-2xl bg-ink px-10 py-16 text-center">
        <div className="relative z-[2]">
          <p className="mb-[18px] font-serif text-[15px] font-medium italic tracking-[1px] text-red">
            {kicker}
          </p>
          <p className="mx-auto mb-[34px] max-w-[540px] text-[22px] font-medium leading-[1.5] text-white">
            {text}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={primaryHref}
              className="rounded-lg bg-blue px-8 py-[15px] text-[13px] font-semibold tracking-[1px] text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-blue/90"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && (
              <Link
                href={secondaryHref}
                className="rounded-lg border-[1.5px] border-white/60 px-8 py-[15px] text-[13px] font-semibold tracking-[1px] text-white no-underline transition-colors hover:bg-white/[0.14]"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
