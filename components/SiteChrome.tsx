'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowIcon } from './Icons';
import { site } from '@/lib/site';

const insightLinks = [
  { href: '/blog', label: 'Blog', description: 'Practical mortgage operations guides' },
  { href: '/research', label: 'Research', description: 'Source-led operating briefs' },
];

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const insightsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    if (insightsRef.current) insightsRef.current.open = false;
  }, [pathname]);

  useEffect(() => {
    function closeActiveMenu(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;

      const details = insightsRef.current;
      if (details?.open) {
        details.open = false;
        details.querySelector<HTMLElement>('summary')?.focus();
        return;
      }

      if (mobileOpen) {
        setMobileOpen(false);
        mobileToggleRef.current?.focus();
      }
    }

    document.addEventListener('keydown', closeActiveMenu);
    return () => document.removeEventListener('keydown', closeActiveMenu);
  }, [mobileOpen]);

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <Image src="/logo.svg" alt="" width={42} height={42} priority />
          <span>{site.name}</span>
        </Link>
        <button
          ref={mobileToggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="primary-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span aria-hidden="true" className="nav-toggle-lines"><i /><i /><i /></span>
          <span>{mobileOpen ? 'Close' : 'Menu'}</span>
        </button>
        <nav id="primary-navigation" className={mobileOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
          <Link className={isCurrent(pathname, '/services') ? 'is-current' : undefined} aria-current={isCurrent(pathname, '/services') ? 'page' : undefined} href="/services">Services</Link>
          <Link className={isCurrent(pathname, '/about') ? 'is-current' : undefined} aria-current={isCurrent(pathname, '/about') ? 'page' : undefined} href="/about">About</Link>
          <details ref={insightsRef} className="nav-dropdown">
            <summary className={isCurrent(pathname, '/blog') || isCurrent(pathname, '/research') ? 'is-current' : undefined}>
              Insights <span aria-hidden="true">⌄</span>
            </summary>
            <div className="nav-dropdown-panel">
              {insightLinks.map((item) => (
                <Link key={item.href} className={isCurrent(pathname, item.href) ? 'is-current' : undefined} aria-current={isCurrent(pathname, item.href) ? 'page' : undefined} href={item.href}>
                  <strong>{item.label}</strong><small>{item.description}</small>
                </Link>
              ))}
            </div>
          </details>
          <a className="nav-attribution" href="https://stealthagents.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/contact/stealth-agents-logo-black.png" alt="" width={149} height={50} />
            <span>Powered by Stealth Agents</span>
          </a>
          <Link id="cta-global-header-bookcall" className={`button primary nav-cta${isCurrent(pathname, '/contact-us') ? ' is-current' : ''}`} aria-current={isCurrent(pathname, '/contact-us') ? 'page' : undefined} href="/contact-us">Book a free call <ArrowIcon /></Link>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link>
          <p>Specialist remote staff for {site.audience}.</p>
          <a className="parent-mark" href="https://stealthagents.com" target="_blank" rel="noopener noreferrer">
            <Image src="/images/contact/stealth-agents-logo-black.png" alt="" width={149} height={50} />
            <span>A Stealth Agents Company</span>
          </a>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <div><strong>Explore</strong><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact-us">Contact</Link></div>
          <div><strong>Insights</strong><Link href="/blog">Blog</Link><Link href="/research">Research</Link></div>
          <div><strong>Legal</strong><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </nav>
      </div>
      <p className="copyright">© {new Date().getFullYear()} {site.name}. Mortgage decisions remain with licensed and authorized professionals.</p>
    </footer>
  );
}
