import Reveal from './Reveal';

interface TeamMemberProps {
  name: string;
  role: string;
}

export default function TeamMember({ name, role }: TeamMemberProps) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);

  return (
    <Reveal className="rounded-[10px] border border-white/5 bg-card p-[26px] text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.42)]">
      {/* AVATAR: replace the gradient bg with a real photo */}
      <div className="relative mx-auto mb-[14px] flex h-[88px] w-[88px] items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(100%_100%_at_30%_20%,#5a3520,#2a1810)]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(125deg,rgba(255,200,110,0.07)_0_2px,transparent_2px_8px)]" />
        <span className="font-serif text-[26px] font-bold text-white/50">{initials}</span>
      </div>
      <p className="mb-3 font-mono text-[9px] text-white/30">[ photo ]</p>
      <h3 className="mb-[5px] font-serif text-[17px] font-bold">{name}</h3>
      <p className="text-[11px] font-semibold uppercase tracking-[1px] text-red-soft">{role}</p>
    </Reveal>
  );
}
