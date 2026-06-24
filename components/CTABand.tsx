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
      <Reveal className="relative overflow-hidden rounded-[14px] bg-red px-10 py-16 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_-10%,rgba(255,255,255,0.16),transparent_60%)]" />
        <div className="relative z-[2]">
          <p className="mb-[18px] font-serif text-[15px] font-medium italic tracking-[1px] text-[#ffd9df]">
            {kicker}
          </p>
          <p className="mx-auto mb-[34px] max-w-[540px] text-[22px] font-medium leading-[1.5] text-white">
            {text}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={primaryHref}
              className="rounded-md bg-[#fdf5f6] px-8 py-[15px] text-[13px] font-semibold tracking-[1px] text-red no-underline transition-all hover:-translate-y-0.5 hover:bg-white"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && (
              <Link
                href={secondaryHref}
                className="rounded-md border border-white/60 px-8 py-[15px] text-[13px] font-semibold tracking-[1px] text-white no-underline transition-colors hover:bg-white/[0.14]"
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
