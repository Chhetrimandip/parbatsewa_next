import { client } from './client';
import { sanityEnabled } from '../env';
import { eventsQuery, featuredEventQuery } from './queries';

export interface SanityEvent {
  _id: string;
  title: string;
  badge?: string;
  theme?: 'red' | 'amber' | 'green';
  location?: string;
  timeframe?: string;
  description?: string;
  imageUrl?: string;
}

export interface SanityFeaturedEvent {
  _id: string;
  title: string;
  location?: string;
  timeframe?: string;
  description?: string;
  date?: string;
  imageUrl?: string;
}

/** Returns events from Sanity, or null if Sanity isn't configured / errored
 *  (the page then falls back to local sample data). */
export async function getEvents(): Promise<SanityEvent[] | null> {
  if (!sanityEnabled) return null;
  try {
    return await client.fetch(eventsQuery, {}, { next: { revalidate: 60 } });
  } catch (err) {
    console.error('Sanity getEvents failed:', err);
    return null;
  }
}

export async function getFeaturedEvent(): Promise<SanityFeaturedEvent | null> {
  if (!sanityEnabled) return null;
  try {
    return await client.fetch(featuredEventQuery, {}, { next: { revalidate: 60 } });
  } catch (err) {
    console.error('Sanity getFeaturedEvent failed:', err);
    return null;
  }
}
