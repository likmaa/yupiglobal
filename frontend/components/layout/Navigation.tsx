'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À Propos' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Réalisations' },
  { href: '/blog', label: 'Blog' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-bold transition-colors hover:text-brand-cyan ${isActive
              ? 'text-brand-violet'
              : 'text-light-text/80'
              }`}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

