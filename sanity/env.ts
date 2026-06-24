/**
 * Sanity environment config. Values come from .env.local
 * (see .env.local.example). projectId is intentionally allowed to be
 * empty so the site still builds/renders before Sanity is connected —
 * the data helpers fall back to local sample events in that case.
 */
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-01';

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';

/** True once a real Sanity project is wired up. */
export const sanityEnabled = Boolean(projectId);
