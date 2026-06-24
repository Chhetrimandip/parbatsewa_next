import { groq } from 'next-sanity';

/** All non-featured events, newest first — shown in the Events page grid. */
export const eventsQuery = groq`
  *[_type == "event" && featured != true] | order(date desc) {
    _id,
    title,
    badge,
    theme,
    location,
    timeframe,
    description,
    "imageUrl": image.asset->url
  }
`;

/** The single featured event for the "NEXT UP" banner. */
export const featuredEventQuery = groq`
  *[_type == "event" && featured == true] | order(date desc)[0] {
    _id,
    title,
    location,
    timeframe,
    description,
    date,
    "imageUrl": images[0].asset->url
  }
`;
