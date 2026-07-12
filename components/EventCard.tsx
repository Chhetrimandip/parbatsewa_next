import Image from 'next/image';
import Reveal from './Reveal';

interface EventCardProps {
  title: string;
  badge?: string;
  theme?: 'red' | 'amber' | 'green';
  meta: string[];
  desc: string;
  /** Optional Sanity image URL; falls back to a themed gradient when absent. */
  imageUrl?: string;
}

const themeGradient: Record<string, string> = {
  red: 'bg-blue-soft',
  amber: 'bg-bg-soft',
  green: 'bg-bg-soft',
};

export default function EventCard({
  title,
  badge,
  theme = 'red',
  meta,
  desc,
  imageUrl,
}: EventCardProps) {
  return (
    <Reveal
      as="article"
      className="group cursor-pointer overflow-hidden rounded-2xl border border-faint bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* MEDIA: Sanity image if present, else flat placeholder */}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-[600ms] group-hover:scale-[1.07]"
            sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 33vw"
          />
        ) : (
          <div className={`absolute inset-0 transition-transform duration-[600ms] group-hover:scale-[1.07] ${themeGradient[theme]}`} />
        )}
        {badge && (
          <span className="absolute left-[14px] top-3 rounded-[4px] bg-red px-2.5 py-1 text-[9.5px] font-semibold tracking-[1px] text-white">
            {badge}
          </span>
        )}
        {!imageUrl && (
          <span className="absolute bottom-2 right-3 font-mono text-[9px] text-muted-2">[ photo ]</span>
        )}
      </div>
      <div className="p-6">
        <h3 className="mb-[14px] font-serif text-[19px] font-bold leading-[1.25] text-ink">{title}</h3>
        {meta.map((m, i) => (
          <div key={m} className="mb-1.5 flex items-center gap-[7px] text-xs text-muted">
            {i === 0 ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            )}
            <span>{m}</span>
          </div>
        ))}
        {/* MODIFIED: Added line-clamp-5 and line-break classes below */}
        <p className="mt-3 text-[13px] leading-[1.65] text-muted line-clamp-5 break-words">
          {desc}
        </p>
      </div>
    </Reveal>
  );
}
