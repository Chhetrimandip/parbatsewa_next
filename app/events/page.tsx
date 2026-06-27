import type { Metadata } from 'next';
import { getEvents, getFeaturedEvent, getUpcomingEvents } from '@/sanity/lib/api';
import type { SanityUpcomingEvent } from '@/sanity/lib/api';
import EventsContent from './EventsContent';

export const revalidate = 86400;

export const metadata: Metadata = { title: 'Events & Initiatives — Parbat-NY' };

const fallbackEvents = [
  { title: 'Annual Blood Donation Drive', slug: '/events', badge: 'HEALTH', theme: 'red' as const,
    meta: ['Broadway Commons, Long Island', '115+ units · 2024–25'],
    desc: 'Our flagship health initiative — chief guests, dozens of donors, and life-saving units collected each year.' },
  { title: 'Haritalika Teej & Summer BBQ', slug: '/events', badge: 'CULTURE', theme: 'amber' as const,
    meta: ['Sunken Meadow Park', 'Aug 2025 · 250+ guests'],
    desc: "A vibrant celebration of women's traditions with dar khane, music, and food drawing our largest crowd yet." },
  { title: 'Nepal Day Parade', slug: '/events', badge: 'HERITAGE', theme: 'red' as const,
    meta: ['Manhattan', '2024 · 2025 · 2026'],
    desc: 'Representing Parbat with a bhajan kirtan team, rally, and folk stage performance year after year.' },
];

const fallbackFeatured = {
  title: '2nd Annual Convention & General Assembly',
  description: 'Our membership gathers to elect new leadership and chart the road ahead.',
  dateLabel: 'Sun, June 14, 2026 · 12 PM',
  location: 'Himalayan Meet & Spices, Long Island',
  slug: '',
  imageUrl: undefined as string | undefined,
};

function formatDate(iso?: string) {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
}

export default async function EventsPage() {
  const [sanityEvents, sanityFeatured, sanityUpcoming] = await Promise.all([
    getEvents(), getFeaturedEvent(), getUpcomingEvents(),
  ]);

  const allEvents =
    sanityEvents && sanityEvents.length > 0
      ? sanityEvents.map((e) => ({
          key: e._id,
          title: e.title,
          slug: e.slug ?? '/events',
          badge: e.badge,
          theme: (e.theme ?? 'red') as 'red' | 'amber' | 'green',
          meta: [e.location, e.timeframe].filter(Boolean) as string[],
          desc: e.description ?? '',
          imageUrl: e.imageUrl,
        }))
      : fallbackEvents.map((e, i) => ({ key: String(i), imageUrl: undefined, ...e }));

  const mainEvents = allEvents.filter((e) => !e.title?.startsWith('Partner'));
  const partnerFlyers = allEvents.filter((e) => e.title?.startsWith('Partner') && e.imageUrl);

  const featured = sanityFeatured
    ? {
        title: sanityFeatured.title,
        slug: sanityFeatured.slug ?? '',
        description: sanityFeatured.description ?? '',
        dateLabel: formatDate(sanityFeatured.date),
        location: sanityFeatured.location,
        imageUrl: sanityFeatured.imageUrl,
      }
    : fallbackFeatured;

  const upcomingEvents: SanityUpcomingEvent[] = sanityUpcoming ?? [];

  return (
    <EventsContent
      mainEvents={mainEvents}
      partnerFlyers={partnerFlyers}
      featured={featured}
      upcomingEvents={upcomingEvents}
    />
  );
}
