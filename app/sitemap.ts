import type { MetadataRoute } from 'next';
import { getEventSlugs } from '@/sanity/lib/api';
import { SITE_URL, STATIC_ROUTES } from '@/lib/site';

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }));

  const slugs = await getEventSlugs();
  const eventEntries: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
    url: `${SITE_URL}/events/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.64,
  }));

  return [...staticEntries, ...eventEntries];
}
