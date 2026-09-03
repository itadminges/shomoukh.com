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
  const pathname = usePathname();
  return <header className="site-header"><div className="header-inner"><Link className="brand" href="/" aria-label="Shomoukh home"><img src="/assets/logo.png" alt="Shomoukh" /></Link><button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button><nav className={open ? 'open' : ''}>{links.map((link) => <Link className={pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href)) ? 'active' : ''} key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav><div className="header-actions"><Link href="/apply-online/">Apply Online</Link><Link className="visit" href="/schedule-a-tour/">Book a Visit</Link></div></div></header>;
}
