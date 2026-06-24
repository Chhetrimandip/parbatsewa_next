interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
}

export default function PageHero({ eyebrow, title, accent, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-[6%] pb-[76px] pt-[160px]">
      <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_80%_0%,#3a2418_0%,#16100c_50%,#0d0d0f_100%)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,170,90,0.04)_0_3px,transparent_3px_9px)]" />
      <div className="relative z-[2] max-w-[760px]">
        <p className="mb-5 block animate-float-up text-xs font-semibold tracking-[4px] text-red-soft opacity-0 [animation-delay:0.15s]">
          {eyebrow}
        </p>
        <h1 className="mb-6 animate-float-up font-serif text-[52px] font-extrabold leading-[1.08] tracking-[-1px] opacity-0 [animation-delay:0.28s] max-[640px]:text-[38px]">
          {title}
          {accent && (
            <>
              <br />
              <span className="text-red-soft">{accent}</span>
            </>
          )}
        </h1>
        {lead && (
          <p className="max-w-[620px] animate-float-up text-[17px] leading-[1.7] text-[#c3c4ca] opacity-0 [animation-delay:0.41s]">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
