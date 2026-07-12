import Image from 'next/image';
import Reveal from './Reveal';

interface TeamMemberProps {
  name: string;
  role: string;
  photo?: string;
}

export default function TeamMember({ name, role, photo }: TeamMemberProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <Reveal className="rounded-2xl border border-faint bg-card p-[26px] text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
      <div className="relative mx-auto mb-[14px] h-[88px] w-[88px] overflow-hidden rounded-full">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="88px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-bg-soft">
            <span className="font-serif text-[26px] font-bold text-red">{initials}</span>
          </div>
        )}
      </div>
      <h3 className="mb-[5px] font-serif text-[17px] font-bold text-ink">{name}</h3>
      <p className="text-[11px] font-semibold uppercase tracking-[1px] text-red">{role}</p>
    </Reveal>
  );
}
