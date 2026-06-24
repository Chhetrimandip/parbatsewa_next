import Link from 'next/link';
import Reveal from './Reveal';

const events = [
  {
    title: 'Heritage Gala 2024',
    badge: 'UPCOMING EVENT',
    badgeGlass: false,
    media: 'bg-[radial-gradient(90%_80%_at_50%_30%,#7a5418_0%,#3a2810_55%,#180f06_100%)]',
    placeholder: '[ gala photo ]',
    meta: [
      { icon: 'pin', text: 'Manhattan Cultural Center' },
      { icon: 'cal', text: 'Dec 15' },
    ],
  },
  {
    title: 'School Rebuilding Project',
    badge: 'RECURRING',
    badgeGlass: true,
    media: 'bg-[radial-gradient(90%_80%_at_50%_35%,#2f5a32_0%,#1c3a20_55%,#0c1a0e_100%)]',
    placeholder: '[ field photo ]',
    meta: [{ icon: 'home', text: 'Supporting rural education infrastructure' }],
  },
];

function MetaIcon({ name }: { name: string }) {
  if (name === 'pin')
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  if (name === 'cal')
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M3 10h18M8 2v4M16 2v4" />
      </svg>
    );
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}

export default function FeaturedWork() {
  return (
    <section id="events" className="px-[6%] pb-24 pt-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
        <Reveal>
          <p className="mb-[14px] block text-xs font-semibold tracking-[3px] text-red-soft">
            IMPACT &amp; ENGAGEMENT
          </p>
          <h2 className="font-serif text-[30px] font-bold">Featured Work</h2>
        </Reveal>
        <Reveal>
          <Link
            href="/events"
            className="inline-flex items-center gap-[9px] rounded-md border border-white/[0.14] bg-white/[0.06] px-5 py-3 text-xs font-semibold tracking-[1px] text-white no-underline transition-colors hover:bg-white/[0.13]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M3 10h18M8 2v4M16 2v4" />
            </svg>
            VIEW ALL EVENTS
          </Link>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-[26px] max-[760px]:grid-cols-1">
        {events.map((ev) => (
          <Reveal
            key={ev.title}
            as="article"
            className="group relative flex min-h-[240px] cursor-pointer items-end overflow-hidden rounded-[11px] transition-transform duration-300 hover:-translate-y-1.5"
          >
            {/* MEDIA: replace the gradient class with bg-[url('/img/...')] */}
            <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] group-hover:scale-[1.07] ${ev.media}`} />
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(125deg,rgba(255,255,255,0.05)_0_2px,transparent_2px_8px)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(8,8,10,0.95)_6%,transparent_60%)]" />
            <span className="absolute right-[14px] top-3 font-mono text-[9px] text-white/30">
              {ev.placeholder}
            </span>

            <div className="relative z-[2] w-full p-[26px]">
              <span
                className={`mb-[14px] inline-block rounded-[4px] px-[11px] py-[5px] text-[10px] font-semibold tracking-[1px] ${
                  ev.badgeGlass ? 'bg-white/[0.16] text-white backdrop-blur-sm' : 'bg-red text-white'
                }`}
              >
                {ev.badge}
              </span>
              <h3 className="mb-2.5 font-serif text-[21px] font-bold">{ev.title}</h3>
              <div className="flex flex-wrap gap-[18px] text-[12.5px] text-[#c3c4ca]">
                {ev.meta.map((m) => (
                  <span key={m.text} className="inline-flex items-center gap-1.5">
                    <MetaIcon name={m.icon} />
                    {m.text}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
