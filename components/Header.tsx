'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Enrichments', href: '/enrichments/' },
  { label: 'Programs', href: '/programs/' },
  { label: 'Admission', href: '/admissions/' },
  { label: 'Parents', href: '/parents/' },
  { label: 'Contact Us', href: '/contactus/' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';

  const isLinkActive = (href: string) => {
    const cleanPath = pathname.replace(/\/$/, '') || '/';
    const cleanHref = href.replace(/\/$/, '') || '/';
    if (cleanHref === '/') return cleanPath === '/';
    return cleanPath.startsWith(cleanHref);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Shomoukh home">
          <img src="/assets/logo.png" alt="Shomoukh Early Childhood Education" />
        </Link>
        <button
          className="menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? 'open' : ''}>
          {links.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <Link className="header-btn-apply" href="/apply-online/">
            Apply Online
          </Link>
          <Link className="header-btn-visit" href="/schedule-a-tour/">
            Book a Visit
          </Link>
        </div>
      </div>
    </header>
  );
}
