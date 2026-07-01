import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Membership',
  description:
    'Get in touch with Parbat Sewa Samaj New York or become a member — join the Parbat community in the New York metropolitan area.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
