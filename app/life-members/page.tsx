import type { Metadata } from 'next';
import { getLifeMembers, type SanityLifeMember } from '@/sanity/lib/api';
import LifeMembersContent from './LifeMembersContent';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Life Members',
  description:
    'Meet the life members whose lasting commitment sustains Parbat Sewa Samaj New York.',
  alternates: { canonical: '/life-members' },
};

const fallbackMembers: SanityLifeMember[] = [];

export default async function LifeMembersPage() {
  const sanityMembers = await getLifeMembers();
  const members = sanityMembers ?? fallbackMembers;
  return <LifeMembersContent members={members} />;
}
