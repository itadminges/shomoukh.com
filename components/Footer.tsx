'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const actionCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill="#0A303A" stroke="#0A303A" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="#ffffff" />
        <line x1="12" y1="17" x2="12.01" y2="17" stroke="#ffffff" strokeWidth="3" />
      </svg>
    ),
    title: 'Any Questions?',
    label: 'Make an Enquiry',
    href: '/contactus/',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill="#0A303A" stroke="#0A303A" />
        <path d="M8 12 L12 8 L16 12 V16 H8 Z" fill="none" stroke="#ffffff" strokeWidth="2" />
        <rect x="11" y="13" width="2" height="3" fill="#ffffff" />
      </svg>
    ),
    title: 'See it Yourself!',
    label: 'Book a visit',
    href: '/schedule-a-tour/',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill="#0A303A" stroke="#0A303A" />
        <path d="M8 7h8M8 11h8M8 15h5" stroke="#ffffff" strokeWidth="2" />
      </svg>
    ),
    title: 'Ready to Join?',
    label: 'Apply Online',
    href: '/apply-online/',
  },
];

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Al-Shomoukh-Nursery-332390150302942/',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    name: 'X',
    href: 'https://twitter.com/shomoukhnursery?lang=en',
    path: 'M18.24 2H21l-6.03 6.89L22 22h-5.5l-4.3-5.62L7.28 22H4.5l6.4-7.32L4.16 2h5.64l3.89 5.14L18.24 2zm-.97 17.7h1.53L8.97 4.18H7.33L17.27 19.7z',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCs0w9DMNDd4Mo4HZos9VmhA',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.58 12 3.58 12 3.58s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.6V8.4L15.84 12 9.6 15.6z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/shomoukhnursery/',
    path: 'M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm-4 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.5-8.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
  },
];

export function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* 3 Action Cards */}
      <div className="footer-actions-container">
        <div className="footer-actions">
          {actionCards.map((card) => (
            <Link key={card.title} href={card.href} className="footer-action-card">
              <div className="action-card-icon">{card.icon}</div>
              <h3 className="action-card-title">{card.title}</h3>
              <span className="action-card-link">{card.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Partner Logos Carousel */}
      <div className="partners-section">
        <div className="partners-wrapper">
          <button className="partners-arrow prev" aria-label="Previous partners">&lt;</button>
          <div className="partners-list">
            <a className="partner-item" href="https://ges.om/" target="_blank" rel="noreferrer">
              <span className="powered-text"></span>
              <img src="/assets/partner-ges.png" alt="Global Education Services" />
            </a>
            <a className="partner-item" href="https://www.cognia.org/" target="_blank" rel="noreferrer">
              <img src="/assets/partner-cognia.png" alt="Cognia" />
            </a>
            <a className="partner-item" href="https://www.eyalliance.org.uk/" target="_blank" rel="noreferrer">
              <img src="/assets/partner-eya.jpg" alt="Early Years Alliance" />
            </a>
            <a className="partner-item moe" href="https://home.moe.gov.om/" target="_blank" rel="noreferrer">
              <img src="/assets/partner-moe.png" alt="Sultanate of Oman Ministry of Education" />
            </a>
          </div>
          <button className="partners-arrow next" aria-label="Next partners">&gt;</button>
        </div>
        <div className="partner-dots">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>

      {/* Main Footer Links and Contact */}
      <div className="footer-main">
        <div className="footer-main-inner">
          <div className="footer-col brand-col">
            <Link href="/" className="footer-logo">
              <img src="/assets/logo.png" alt="Shomoukh" />
            </Link>
            <p className="footer-tagline">for early childhood education</p>
          </div>

          <div className="footer-col campus-col">
            <h4>Al Mouj Campus</h4>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
              </svg>
              <span>+968 24555515</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>info-almouj@shomoukh.com</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Al Mouj Main Street Main Community Hub Muscat Sultanate of Oman.</span>
            </div>
          </div>

          <div className="footer-col campus-col">
            <h4>Al Qurm Campus</h4>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
              </svg>
              <span>+968 24600886</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>info-alqurm@shomoukh.com</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Al Sarooj St, Shatti Al Qurm Way 3046 Bldg 355 Muscat Sultanate of Oman.</span>
            </div>
          </div>

          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/contactus/">Contact Us</Link></li>
              <li><Link href="/enrichments/" className="highlight">Enrichments</Link></li>
              <li><Link href="/admissions/">Admissions</Link></li>
              <li><Link href="/schedule-a-tour/">Book A Visit</Link></li>
            </ul>
          </div>

          <div className="footer-col social-col">
            <h4>Follow Us</h4>
            <div className="social-icons-row">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="social-circle"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright">
        <p>Copyright© 2024. Global Education Services L.L.C. All Rights Reserved.</p>
      </div>

      {/* Floating Scroll to Top */}
      {showTopBtn && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </footer>
  );
}
