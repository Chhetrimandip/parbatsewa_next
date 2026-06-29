import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import { getEventBySlug, getEventSlugs } from '@/sanity/lib/api';
import EventGallery from '@/components/EventGallery';

export const revalidate = 86400; // ISR: revalidate once per day
//claude mcp add magic --scope user --env API_KEY="b1fe2b7a15ece582a3707459c2a16d13cb4e76faf540264871d7475e53326511" -- npx -y @21st-dev/magic@latest
export async function generateStaticParams() {
  const slugs = await getEventSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

interface EventPageProps {
  params: { slug: string };
}

function formatDate(iso?: string) {
  if (!iso) return undefined;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const event = await getEventBySlug(params.slug);
  if (!event) {
    return {
      title: 'Event — Parbat-NY',
      description: 'Event details for Parbat-NY',
    };
  }

  return {
    title: `${event.title} — Parbat-NY`,
    description: event.description ?? `Details for ${event.title}`,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const event = await getEventBySlug(params.slug);
  if (!event) notFound();

  const images = event.images ?? [];

  const eventDetails = [
    { label: 'Location', value: event.location },
    { label: 'Timeframe', value: event.timeframe },
    { label: 'Date', value: formatDate(event.date) },
  ].filter((item) => item.value);

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="EVENT DETAILS"
          title={event.title}
          accent={event.badge ?? 'Parbat-NY'}
          lead={event.description ?? undefined}
        />

        <section className="px-[6%] pb-[90px] space-y-10">
          {/* Interactive Photo Gallery Section */}
          <Reveal>
            <EventGallery images={images} />
          </Reveal>

          {/* Details & Summaries Section below the gallery */}
          <Reveal className="grid grid-cols-[1.1fr_0.9fr] gap-10 max-[980px]:grid-cols-1">
            <div className="rounded-[18px] border border-white/5 bg-[#121216] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)] space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                {event.badge && (
                  <span className="rounded-full bg-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-white">
                    {event.badge}
                  </span>
                )}
              </div>

              <div>
                <h2 className="mb-4 font-serif text-[30px] font-bold leading-[1.1]">About this event</h2>
                <p className="text-[15px] leading-[1.8] text-[#d2d3d9]">
                  {event.description ?? 'No description is available for this event.'}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {eventDetails.map((detail) => (
                  <div key={detail.label} className="rounded-[14px] border border-white/10 bg-[#131318] p-5">
                    <p className="mb-2 text-[11px] uppercase tracking-[2px] text-red-soft">{detail.label}</p>
                    <p className="text-base font-semibold text-white">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] border border-white/5 bg-[#15151a] p-7 self-start">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[3px] text-red-soft">Event summary</p>
              <div className="space-y-5">
                <div className="rounded-[14px] bg-[#0f1014] p-5">
                  <p className="mb-2 text-[11px] uppercase tracking-[2px] text-red-soft">Location</p>
                  <p className="text-base font-semibold text-white">{event.location ?? 'TBD'}</p>
                </div>
                <div className="rounded-[14px] bg-[#0f1014] p-5">
                  <p className="mb-2 text-[11px] uppercase tracking-[2px] text-red-soft">When</p>
                  <p className="text-base font-semibold text-white">{event.timeframe ?? 'TBD'}</p>
                  {event.date && <p className="mt-1 text-sm text-[#c3c4ca]">{formatDate(event.date)}</p>}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <CTABand
          kicker="Want to see more?"
          text="Browse the full event list and discover past initiatives, cultural gatherings, and community support programs."
          primaryLabel="BACK TO EVENTS"
          primaryHref="/events"
          secondaryLabel="HOME"
          secondaryHref="/"
        />
      </main>
      <Footer />
    </>
  );
}