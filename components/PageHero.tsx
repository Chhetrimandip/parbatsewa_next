interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
}

export default function PageHero({ eyebrow, title, accent, lead }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg-soft px-[6%] pb-[76px] pt-[160px]">
      <div className="relative z-[2] max-w-[760px]">
        <p className="mb-5 block animate-float-up text-xs font-semibold tracking-[4px] text-red opacity-0 [animation-delay:0.15s]">
          {eyebrow}
        </p>
        <h1 className="mb-6 animate-float-up font-serif text-[52px] font-bold leading-[1.08] tracking-[-1px] text-ink opacity-0 [animation-delay:0.28s] max-[640px]:text-[38px]">
          {title}
          {accent && (
            <>
              <br />
              <span className="italic text-red">{accent}</span>
            </>
          )}
        </h1>

      </div>
    </section>
  );
}
