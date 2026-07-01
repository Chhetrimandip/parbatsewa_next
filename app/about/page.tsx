import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Parbat Sewa Samaj New York — our mission to preserve heritage and build future leaders within the Parbat diaspora.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutContent />;
}
