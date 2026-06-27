import Reveal from './Reveal';
import Image  from 'next/image';

export default function LeadershipMessages() {
  return (
    <section
      id="leadership"
      className="px-[6%] py-24"
    >
      <Reveal>
        <div className="mb-16 text-center md:text-left max-w-6xl mx-auto">
          <p className="mb-[22px] block text-xs font-semibold tracking-[3px] text-red-soft uppercase">
            Leadership
          </p>
          <h2 className="font-serif text-[30px] font-bold">Messages from the Leadership</h2>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 lg:gap-[50px]">
        {/* Founding President Message */}
        <Reveal className="flex flex-col items-center rounded-[10px] border border-white/5 bg-card p-[30px] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.42)] md:items-start md:text-left">
          {/* Image Placeholder 1 */}
          <div className="mb-8 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white/5 bg-white/10 md:h-40 md:w-40">
            <Image alt="hemant the founder" height={200} width={200} src={"/heman.jpg"}/>
          </div>

          <div className="space-y-4 text-[14.5px] leading-[1.75] text-muted-2 flex-grow">
            <p>
              I am proud to have established the <strong className="text-white">Parbat Welfare Society New York Inc. in 2022</strong> with the vision of uniting our community and preserving our culture while living in the United States.
            </p>
            <p>
              This organization was created to bring people together, strengthen unity, and support social, cultural, and welfare activities for the benefit of our community.
            </p>
            <p>
              Our goal is to promote cooperation, help those in need, encourage youth involvement, and organize programs that keep our identity strong for future generations.
            </p>
            <p>
              With the support of all members, we will continue to grow as a strong, active, and united community organization.
            </p>
          </div>

          <div className="mt-8 w-full border-t border-white/10 pt-6">
            <h3 className="mb-1 font-serif text-[19px] font-bold text-white">Founding President</h3>
            <p className="text-xs font-semibold tracking-[1px] text-red-soft">Parbat Welfare Society New York Inc. (Est. 2022)</p>
          </div>
        </Reveal>

        {/* Founding General Secretary Message */}
        <Reveal className="flex flex-col items-center rounded-[10px] border border-white/5 bg-card-2 p-[30px] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.42)] md:items-start md:text-left">
          {/* Image Placeholder 3 */}
          <div className="mb-8 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white/5 bg-white/10 md:h-40 md:w-40">
            <Image alt="Founding General Secretary" height={200} width={200} src={"/prakash_sharma.jpeg"}/>
          </div>

          <div className="space-y-4 text-[14.5px] leading-[1.75] text-muted-2 flex-grow">
            <p>
              It is a great honor and responsibility to serve as the Founding General Secretary of <strong className="text-white">Parbat Welfare Society New York Inc. (Est. 2022)</strong>. This organization was created with a clear vision to unite our community, preserve our cultural identity, and actively contribute to social welfare services.
            </p>
            <p>
              One of our core commitments is to respond promptly and responsibly to every individual who reaches out for help, ensuring they receive proper attention, guidance, and support. Serving people in need remains at the heart of our mission.
            </p>
            <p>
              Along with community service, we are dedicated to organizing cultural programs, workshops, and activities designed to bring children, youth, and senior members under one roof, strengthening our community bonds across generations.
            </p>
            <p>
              We believe a strong organization is built through unity and teamwork, and I sincerely thank all executive members, volunteers, and supporters for their dedication and trust.
            </p>
          </div>

          <div className="mt-8 w-full border-t border-white/10 pt-6">
            <h3 className="mb-1 font-serif text-[19px] font-bold text-white">Founding General Secretary</h3>
            <p className="text-xs font-semibold tracking-[1px] text-red-soft">Parbat Welfare Society New York Inc. (Est. 2022)</p>
          </div>
        </Reveal>

        {/* President Message (2023–2026) */}
        <Reveal className="flex flex-col items-center rounded-[10px] border border-white/5 bg-card p-[30px] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.42)] md:items-start md:text-left">
          {/* Image Placeholder 2 */}
          <div className="mb-8 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white/5 bg-white/10 md:h-40 md:w-40">
            <Image alt="Surya" height={200} width={200} src={"/surya.jpg"}/>
          </div>

          <div className="space-y-4 text-[14.5px] leading-[1.75] text-muted-2 flex-grow">
            <p>
              It is an honor to serve as the President of <strong className="text-white">Parbat Welfare Society New York Inc.</strong> for the term 2023–2026. I am grateful for the trust and support given to me by our executive team, members, and the entire community.
            </p>
            <p>
              Our organization was created with the vision of unity, cultural preservation, and community service. During this term, our focus has been to strengthen teamwork, promote active participation, and organize meaningful social, cultural, and welfare programs for the benefit of our community.
            </p>
            <p>
              I sincerely thank all members, volunteers, and supporters for their continuous dedication. Together, we will continue to build a stronger, more united, and active organization for future generations.
            </p>
          </div>

          <div className="mt-8 w-full border-t border-white/10 pt-6">
            <h3 className="mb-1 font-serif text-[19px] font-bold text-white">President</h3>
            <p className="text-xs font-semibold tracking-[1px] text-red-soft">Parbat Welfare Society New York Inc. (2023–2026)</p>
          </div>
        </Reveal>

        {/* Current President Message (2026–2028) */}
        <Reveal className="flex flex-col items-center rounded-[10px] border border-white/5 bg-card-2 p-[30px] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.42)] md:items-start md:text-left">
          {/* Image Placeholder 4 */}
          <div className="mb-8 flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white/5 bg-white/10 md:h-40 md:w-40">
            <Image alt="President 2026-2028" height={200} width={200} src={"/purna.jpeg"}/>
          </div>

          <div className="space-y-4 text-[14.5px] leading-[1.75] text-muted-2 flex-grow">
            <p>
              It is an honor to serve as President of <strong className="text-white">Parbat Welfare Society New York Inc.</strong> for the term 2026–2028. Our mission remains to strengthen unity, preserve our culture, and actively serve the community through purposeful social and cultural programs.
            </p>
            <p>
              During this term, we will focus heavily on expanding community engagement, organizing blood drives, and building collaborations with other organizations across the USA, while welcoming new members from different regions into our family.
            </p>
            <p>
              I am also incredibly proud of organizing the First Parbat Cup 2026 Volleyball Tournament, an initiative that truly brought our community together in a great spirit of unity and celebration.
            </p>
            <p>
              With the collective support of all our exceptional members and volunteers, we will continue to grow stronger and serve our people better.
            </p>
          </div>

          <div className="mt-8 w-full border-t border-white/10 pt-6">
            <h3 className="mb-1 font-serif text-[19px] font-bold text-white">President</h3>
            <p className="text-xs font-semibold tracking-[1px] text-red-soft">Parbat Welfare Society New York Inc. (2026–2028)</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}