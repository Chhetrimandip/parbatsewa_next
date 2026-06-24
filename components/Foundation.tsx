import Reveal from './Reveal';

const pillars = [
  {
    title: 'Our Mission',
    body: 'Empowering the Parbat community through shared cultural identity, educational support, and professional networking within the competitive landscape of New York.',
    icon: 'flag',
    wide: false,
    surface: 'bg-card',
  },
  {
    title: 'Global Vision',
    body: 'A flourishing, interconnected diaspora that serves as a cornerstone of excellence and heritage, bridging the gap between our roots and our future.',
    icon: 'eye',
    wide: false,
    surface: 'bg-card-2',
  },
  {
    title: 'Core Values',
    body: 'Integrity, Unity, Heritage Preservation, and Collective Growth drive every initiative we undertake to support our members.',
    icon: 'heart',
    wide: true,
    surface: 'bg-card',
  },
];

function Icon({ name }: { name: string }) {
  if (name === 'flag')
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 21V4l8 3 8-3v14l-8 3-8-3z" />
        <path d="M12 7v14" />
      </svg>
    );
  if (name === 'eye')
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
    </svg>
  );
}

export default function Foundation() {
  return (
    <section
      id="about"
      className="grid grid-cols-[1fr_1.6fr] items-start gap-[70px] px-[6%] py-24 max-[880px]:grid-cols-1 max-[880px]:gap-12"
    >
      <Reveal>
        <p className="mb-[22px] block text-xs font-semibold tracking-[3px] text-red-soft">
          OUR FOUNDATION
        </p>
        <h2 className="mb-5 font-serif text-[30px] font-bold">Built on Heritage &amp; Trust</h2>
        <p className="text-[15px] leading-[1.75] text-muted">
          We are more than just an organization; we are a support system for every
          Parbat family in the tri-state area.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-[22px] max-[880px]:grid-cols-1">
        {pillars.map((p) => (
          <Reveal
            key={p.title}
            className={`rounded-[10px] border border-white/5 p-[30px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.42)] ${p.surface} ${
              p.wide
                ? 'col-span-full flex items-start gap-[26px] max-[880px]:flex-col max-[880px]:gap-0'
                : 'min-h-[260px]'
            }`}
          >
            <span className={`block text-red-soft ${p.wide ? 'mt-0.5 shrink-0' : 'mb-11'}`}>
              <Icon name={p.icon} />
            </span>
            <div>
              <h3 className="mb-[13px] font-serif text-[19px] font-bold">{p.title}</h3>
              <p className="max-w-[480px] text-[13.5px] leading-[1.7] text-muted-2">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
