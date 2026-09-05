import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const agesData = [
  {
    title: 'Infants',
    photo: '/assets/hero.jpg',
    description: 'Providing your baby’s brain with a strong foundation for learning and growing.',
    age: '3-11 months',
    hours: '8:30 - 1:30h',
    theme: 'infants',
  },
  {
    title: 'Toddlers',
    photo: '/assets/learning.jpg',
    description: 'Your child will explore the world around him and form relations with other children & adults.',
    age: '12-35 months',
    hours: '8:30 - 1:30h',
    theme: 'toddlers',
  },
  {
    title: 'Preschoolers',
    photo: '/assets/child.jpg',
    description: 'Providing your baby’s brain with a strong foundation for learning and growing.',
    age: '36-48 months',
    hours: '8:30 - 1:30h',
    theme: 'preschoolers',
  },
  {
    title: 'Flex-Care',
    photo: '/assets/feature.jpg',
    description: 'To meet the individual needs of each family, we also provide Pre-Care & After Care services.',
    age: '6-48 months',
    hours: '7:00 - 4:00h',
    theme: 'flexcare',
  },
];

const pillarsList = [
  { id: 1, text: 'Home-like Environment' },
  { id: 2, text: 'Safe & Secure' },
  { id: 3, text: 'Quality Educators' },
  { id: 4, text: 'Play to Learn' },
  { id: 5, text: 'Modern & Innovative' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          {/* Top Wavy White Cut */}
          <svg className="wave-cut top" viewBox="0 0 1440 36" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#ffffff" d="M0,0 L1440,0 L1440,16 C1280,30 1140,8 960,22 C780,36 640,10 460,24 C300,36 160,12 0,20 Z" />
          </svg>

          {/* Centered Arched Dome Badge */}
          <div className="hero-orbit-wrapper">
            <div className="hero-orbit">
              {/* Outer delicate botanical leaves */}
              <img className="hero-leaf-left" src="/assets/leaf-one.svg" alt="" aria-hidden="true" />
              <img className="hero-leaf-right" src="/assets/leaf-two.svg" alt="" aria-hidden="true" />
              <img className="hero-leaf-right-two" src="/assets/leaf-one.svg" alt="" aria-hidden="true" />

              <img className="hero-butterfly" src="/assets/butterfly.png" alt="" />
              <p className="hero-first">The First &amp; Only</p>
              <h1 className="hero-title">Reggio Emilia</h1>
              <h2 className="hero-sub1">Inspired Nursery School</h2>
              <h3 className="hero-sub2">In the Sultanate of Oman</h3>
              <p className="hero-tagline">Education is a right and all children have potential</p>

              {/* Base row: Child on left, Learn More button in center, Mother on right */}
              <div className="hero-base-action">
                <div className="hero-fig-child">
                  <svg viewBox="0 0 52 64" width="46" height="58" aria-hidden="true">
                    <circle cx="26" cy="14" r="8.5" fill="#FFCAA6" />
                    <path d="M20,9 C22,5 31,5 34,8 C37,11 36,15 33,17 C29,18 21,17 20,9 Z" fill="#0A303A" />
                    <path d="M18,30 C20,24 33,24 35,30 C36,37 34,46 32,48 L20,48 C18,44 17,37 18,30 Z" fill="#F8A145" />
                    <path d="M31,28 L44,32" stroke="#FFCAA6" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M20,48 L14,57 L28,57" stroke="#0A303A" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M28,48 L24,57" stroke="#0A303A" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                  </svg>
                </div>

                <Link className="hero-btn-learn" href="/about/">
                  Learn More
                </Link>

                <div className="hero-fig-mother">
                  <svg viewBox="0 0 56 64" width="50" height="58" aria-hidden="true">
                    <circle cx="28" cy="14" r="8" fill="#FFCAA6" />
                    <path d="M23,9 C27,4 36,4 39,8 C41,12 38,18 34,21 C30,23 24,20 23,15" fill="#0A303A" />
                    <path d="M22,27 C24,23 34,23 36,27 C37,33 34,40 32,42 L24,42 C22,38 21,33 22,27 Z" fill="#EFE6E8" />
                    <path d="M20,42 C22,42 38,42 40,46 C42,52 40,58 36,60 L14,60 C12,58 15,48 20,42 Z" fill="#E76F51" />
                    <path d="M24,31 L10,35" stroke="#FFCAA6" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wavy White Cut */}
          <svg className="wave-cut bottom" viewBox="0 0 1440 36" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#ffffff" d="M0,36 L1440,36 L1440,16 C1280,32 1120,6 940,24 C760,40 620,12 440,26 C280,38 140,12 0,22 Z" />
          </svg>
        </section>

        {/* Pillars / Feature Section */}
        <section className="pillars">
          <div className="pillars-container">
            <button className="carousel-arrow prev" aria-label="Previous">&lt;</button>
            <div className="pillars-content">
              <div className="pillar-list">
                {pillarsList.map((item) => (
                  <article key={item.id} className={`pillar-item ${item.id === 1 ? 'active' : ''}`}>
                    <span className="pillar-num">{item.id === 1 ? 1 : `${item.id}.`}</span>
                    <h3 className="pillar-title">{item.text}</h3>
                  </article>
                ))}
              </div>
              <div className="pillar-artwork">
                <div className="pillar-illustration">
                  <img src="/assets/people.svg" alt="" className="people-art" />
                  <img src="/assets/tree.svg" alt="" className="tree-art" />
                </div>
                <Link className="btn-pillar-learn" href="/about/">
                  Learn More
                </Link>
              </div>
            </div>
            <button className="carousel-arrow next" aria-label="Next">&gt;</button>
          </div>
        </section>

        {/* Ages Section */}
        <section className="ages">
          {/* Hand-drawn sheep along the right margin */}
          <img className="age-sheep" src="/assets/right-cut.svg" alt="" />

          <div className="ages-header">
            <h2 className="ages-title">Ages</h2>
            <p className="ages-subtitle">We meet kids where they are.</p>
          </div>

          <div className="age-cards-grid">
            {agesData.map((item) => (
              <article key={item.title} className={`age-card age-${item.theme}`}>
                <h3 className="age-card-title">{item.title}</h3>
                <div className="age-card-image-wrap">
                  <img src={item.photo} alt={item.title} className="age-card-img" />
                </div>
                <p className="age-card-desc">{item.description}</p>
                <div className="age-card-hours">
                  <span>{item.age} · {item.hours}</span>
                </div>
                <div className="age-card-dot-wrap">
                  <i className="age-card-dot" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Program Intro Section */}
        <section className="program-intro">
          <div className="program-intro-grid">
            <div className="program-col">
              <h3 className="eyebrow-heading">Our Programs</h3>
              <p>
                Shomoukh follows the Early Years Foundation Stage (EYFS) curriculum, a UK-based system of education or framework which sets the goals in terms of learning and development for children from birth to five years of age. It also sets out the standards for ensuring the welfare of all students within safe and supportive environments.
              </p>
              <p>
                In our Nursery Schools, the EYFS program integrates well with the Reggio Emilia philosophy, that sets the standards for a project-based education, where each child is driven by their own interests.
              </p>
            </div>
            <div className="program-col">
              <h3 className="eyebrow-heading">The Teacher</h3>
              <p>
                Teachers at Shomoukh Nursery Schools are researchers: learning alongside the children. They observe and document the children’s learning, whilst nurturing their curiosity and encouraging their thoughts, ideas, and actions through open-ended activities and explorations.
              </p>
              <h3 className="eyebrow-heading">
                The Environment<br />“The Third Teacher”
              </h3>
              <p>
                The classrooms and outdoor areas are spaces that offer provocations for learning, exploration, and play. Spaces are interconnected to support communication, curiosity, and interaction between children and adults.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
