import Link from 'next/link';
import Image from 'next/image';
const navLinks = [
  { label: 'ABOUT', href: '/about' },
  { label: 'EVENTS', href: '/events' },
  { label: 'PHILANTHROPY', href: '/events' },
  { label: 'CONTACT', href: '/#contact' },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-[6%] py-[22px]">
      <Link
        href="/"
        className="font-serif text-[22px] font-extrabold tracking-[0.5px] text-red-soft no-underline"
      >
        {/* <Image src="/logo.png" alt="Parbat-NY logo" width={30} height={10} /> */}
        Parbat-NY
          </Link>

      <nav className="flex items-center gap-[38px] max-[860px]:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[12.5px] font-semibold tracking-[1.5px] text-ink no-underline transition-colors hover:text-red-soft"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#join"
        className="rounded-[5px] bg-red px-5 py-[11px] text-[12.5px] font-semibold tracking-[0.5px] text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-red-dark"
      >
        Join Community
      </Link>
    </header>
  );
}
