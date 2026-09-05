import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Shared';
import { EnrolmentForm } from '@/components/EnrolmentForm';
import { SimpleForm } from '@/components/SimpleForm';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const routes = ['about', 'enrichments', 'programs', 'admissions', 'parents', 'contactus', 'schedule-a-tour', 'apply-online'];

const pageMetadata: Record<string, { title: string; description: string }> = {
  about: {
    title: 'About Our Reggio Emilia Inspired Nursery',
    description: 'Learn about Shomoukh Nursery School in Muscat, Oman: a safe, nurturing early years environment inspired by the Reggio Emilia approach.',
  },
  enrichments: {
    title: 'Enrichments & Ateliers',
    description: 'Discover Shomoukh ateliers and enrichment activities, including clay, art, digital learning, music, drama, sensory play, PE and sports.',
  },
  programs: {
    title: 'Early Years Programs & Ages',
    description: 'Explore Shomoukh early years programs for infants, toddlers and preschoolers, combining EYFS with a Reggio Emilia inspired approach.',
  },
  admissions: {
    title: 'Admissions',
    description: 'Apply for Shomoukh Nursery School in Muscat. Our admissions team welcomes children from 6 months to 6 years, subject to availability.',
  },
  parents: {
    title: 'Parents Portal',
    description: 'Access the Shomoukh Nursery School parents portal and mobile apps for web, iOS and Android.',
  },
  contactus: {
    title: 'Contact Our Muscat Campuses',
    description: 'Contact Shomoukh Nursery School in Muscat. Visit our Al Mouj or Al Qurm campus, call our team, or send us an enquiry.',
  },
  'schedule-a-tour': {
    title: 'Book a Visit',
    description: 'Book a visit to Shomoukh Nursery School and meet our early years team at a convenient time for your family.',
  },
  'apply-online': {
    title: 'Apply Online',
    description: 'Complete the online enrollment form to apply for Shomoukh Nursery School in Muscat, Oman.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const current = pageMetadata[slug];

  if (!current) return {};

  return {
    title: current.title,
    description: current.description,
    alternates: { canonical: `/${slug}/` },
    openGraph: {
      title: current.title,
      description: current.description,
      url: `/${slug}/`,
    },
  };
}

export function generateStaticParams() {
  return routes.map((slug) => ({ slug }));
}

function InnerHero({ kind, title, sub1, sub2 }: { kind: string; title: string; sub1?: string; sub2?: string }) {
  const bgImage = kind === 'about' || kind === 'enrichments' || kind === 'apply-online'
    ? '/assets/nature-hero.jpg'
    : kind === 'admissions'
    ? '/assets/child.jpg'
    : '/assets/learning.jpg';

  return (
    <section className={`inner-hero ${kind}`} style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Top Wavy White Cut */}
      <svg className="wave-cut top" viewBox="0 0 1440 36" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#ffffff" d="M0,0 L1440,0 L1440,16 C1280,30 1140,8 960,22 C780,36 640,10 460,24 C300,36 160,12 0,20 Z" />
      </svg>

      <div className="hero-bubble-wrapper">
        <div className="hero-bubble">
          <img
            src={kind === 'admissions' || kind === 'apply-online' ? '/assets/butterfly.png' : '/assets/tree-two.svg'}
            alt=""
            className="hero-bubble-icon"
          />
          <h1 className="hero-bubble-title">{title}</h1>
          {sub1 && <b className="hero-bubble-sub1">{sub1}</b>}
          {sub2 && <b className="hero-bubble-sub2">{sub2}</b>}
        </div>
      </div>

      {/* Bottom Wavy White Cut */}
      <svg className="wave-cut bottom" viewBox="0 0 1440 36" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#ffffff" d="M0,36 L1440,36 L1440,16 C1280,32 1120,6 940,24 C760,40 620,12 440,26 C280,38 140,12 0,22 Z" />
      </svg>
    </section>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function About() {
  return (
    <Shell>
      <InnerHero kind="about" title="Welcome" sub1="To Shomoukh" sub2="Nursery Schools" />

      {/* Main About Layout: 3 Paragraphs Left, 2 Stacked Photos Right */}
      <section className="about-main-section">
        <div className="about-main-container">
          <div className="about-text-col">
            <p>
              Shomoukh Early Childhood Education is an International Early Years Nursery School, inspired by the Reggio Emilia approach, originated in Italy. In our school, children are viewed as unique, capable, resilient, creative, curious, and intelligent. We embrace everyone’s culture while offering children a wide range of opportunities to become confident and prepare them to meet future challenges. Our students are active citizens who reach their full potential within a safe, healthy, nurturing, and aesthetic environment that respects their rights and opinions. Teaching methods are based on children’s needs and interests, ensuring that every child is actively involved in the learning process and receives personal attention and guidance.
            </p>
            <p>
              Our school’s ethos and culture promote positive relations among its members and provides opportunities so that each child feels fulfilled. We strive to create a happy environment that emphasis the social, emotional, physical, and mental development of each child and thereby play a role in raising well balanced children who will grow into lifelong learners and active citizens.
            </p>
            <p>
              We believe that partnerships between the school, parents and the community play an important role in the child’s educational journey. Our families are invited to participate in school activities, initiate projects and lend their support at events. Strong parental and community engagement helps children develop a strong sense of identity and connection to the world around them.
            </p>
          </div>

          <div className="about-photos-col">
            <div className="about-photo-card">
              <img src="/assets/about-one.jpg" alt="Children engaged in outdoor learning" />
            </div>
            <div className="about-photo-card">
              <img src="/assets/about-two.jpg" alt="Children creating artwork around table" />
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}

function Enrichments() {
  const ateliers = [
    {
      title: 'Clay Atelier',
      photo: '/assets/hero.jpg',
      description:
        'Children are experimenting with clay, a soft and natural material with a smooth or floury texture that can be shaped by the gestures of their hand or using various tools.',
      theme: 'clay',
    },
    {
      title: 'Art Atelier',
      photo: '/assets/learning.jpg',
      description:
        'Children have access to stimulating resources and use multiple symbolic languages, tools and materials to express themselves.',
      theme: 'art',
    },
    {
      title: 'Digital Atelier',
      photo: '/assets/child.jpg',
      description:
        'Children use light in different forms as well as analogical and digital tools to investigate and research new connections, learning strategies and explore logic and imagination.',
      theme: 'digital',
    },
  ];

  return (
    <Shell>
      <InnerHero kind="enrichments" title="fun Space" />

      <section className="atelier-section">
        {/* Right Sheep Decoration */}
        <img className="age-sheep" src="/assets/right-cut.svg" alt="" />

        <div className="atelier-container">
          <h2 className="atelier-heading">Shomoukh Ateliers</h2>
          <p className="atelier-intro-text">
            Shomoukh ateliers are viewed as spaces where a group of children work together, using their imagination, creativity, and knowledge to experiment with different materials, technologies, and tools, under the encouragement and supervision of the Atelierista (artist). The Atelier is not just an art corner but rather a place of research where kids are invited to experiment.
          </p>

          <div className="atelier-cards-grid">
            {ateliers.map((a) => (
              <article key={a.title} className={`atelier-card atelier-${a.theme}`}>
                <h3 className="atelier-card-title">{a.title}</h3>
                <div className="atelier-card-image-wrap">
                  <img src={a.photo} alt={a.title} className="atelier-card-img" />
                </div>
                <p className="atelier-card-desc">{a.description}</p>
                <div className="atelier-card-dot-wrap">
                  <i className="atelier-card-dot" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}

function Programs() {
  const ages = [
    ['Infants', '/assets/hero.jpg', '3-11 months', 'Providing your baby’s brain with a strong foundation for learning and growing.'],
    ['Toddler', '/assets/learning.jpg', '12-35 months', 'Your child will explore the world around them and form relations with children and adults.'],
    ['Preschool', '/assets/child.jpg', '36-48 months', 'Your child will feel confident in their ability to meet complex challenges.'],
    ['Flex-Care', '/assets/feature.jpg', '6-48 months', 'We also provide pre-care and after-care services.'],
  ];

  return (
    <Shell>
      <InnerHero kind="programs" title="Programs" sub1="Choose from our" sub2="start now" />
      <section className="promise">
        <div className="giant">Our</div>
        <div>
          <h2>Promise to families.</h2>
          <p>
            At Shomoukh, we know childhood is a treasured time. We provide environments and experiences that capture the joys of childhood, nurture each child’s individual growth and pave the way for success in school and life.
          </p>
          <h3>Shomoukh Difference</h3>
          <p>
            Shomoukh operates twelve months per year, following a three-term academic year and a fun-filled summer camp, with learning opportunities embedded throughout the day.
          </p>
        </div>
      </section>
      <section className="program-ages">
        <div className="age-title">
          <h2>Ages</h2>
          <h3>we meet kids where they are.</h3>
        </div>
        <p>
          Shomoukh Early Childhood Education accommodates children aged 6 months to 4 years. Our teachers base their lesson plans on the children’s needs and interests according to their exact age.
        </p>
        <div className="program-age-grid">
          {ages.map((a) => (
            <article key={a[0]}>
              <h3>{a[0]}</h3>
              <img src={a[1]} alt="" />
              <p>{a[3]}</p>
              <small>{a[2]} · 8:30 - 1:30h</small>
              <i />
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}

function Admissions() {
  return (
    <Shell>
      <InnerHero kind="admissions" title="Admission" sub1="Enquire About" sub2="For Your Child Now!" />
      <section className="admission-intro">
        <h2>Education for your<br />child at Shomoukh</h2>
        <div>
          <p>
            Admissions to Shomoukh Nursery School are offered on an ongoing basis, preferably at the start of the academic year. While most families complete registration during the fall and winter months, we continue to keep our programs open as long as space is available.
          </p>
          <Button href="/apply-online/">Read more</Button>
        </div>
      </section>
      <section className="join">
        <img src="/assets/people.svg" alt="" />
        <div>
          <h2>Come</h2>
          <h3>join our diverse community of learners.</h3>
          <p>Our admissions team at Shomoukh is looking forward to welcoming you and your child to our Shomoukh family. We offer quality education from ages 6 months to 6 years.</p>
          <Button href="/apply-online/">Apply Online</Button>
        </div>
      </section>
    </Shell>
  );
}

function Parents() {
  const apps = [
    ['Web-App', '/assets/windows-app.jpg', 'Click the following link & sign in to the Shomoukh nursery school’s parent portal'],
    ['IOS', '/assets/ios-app.png', 'Click the following link to download Shomoukh nursery school’s app for your ios devices'],
    ['Android', '/assets/android-app.png', 'Click the following link to download Shomoukh nursery school’s app for your Android devices'],
  ];
  return (
    <Shell>
      <InnerHero kind="parents" title="Parents Portal" sub1="Shomoukh" sub2="For multiple platforms" />
      <section className="portal-grid">
        {apps.map((a) => (
          <article key={a[0]}>
            <img src={a[1]} alt="" />
            <h2>{a[0]}</h2>
            <p>{a[2]}</p>
            <a href="#">Click Here</a>
          </article>
        ))}
      </section>
    </Shell>
  );
}

function Contact() {
  return (
    <Shell>
      <InnerHero kind="contact" title="Locations" sub1="Our" sub2="In The Heart Of The City" />
      <section className="campuses">
        <article>
          <img src="/assets/campus-al-mouj.jpg" alt="Al Mouj campus" />
          <h2>Al Mouj Campus</h2>
          <p>Al Mouj Main Street Main Community Hub<br />Muscat Sultanate of Oman.<br />Phone : +968 24555515<br />Email : info.almouj@shomoukh.com</p>
          <i />
        </article>
        <article>
          <img src="/assets/campus-al-qurum.jpg" alt="Al Qurum campus" />
          <h2>Al Qurum Campus</h2>
          <p>Al Suraj St, Shatti Al Qurm Way 3046<br />Bldg 355, Muscat, Sultanate of Oman<br />Phone: +968 24600610<br />Email: info.alqurum@shomoukh.com</p>
          <i />
        </article>
      </section>
      <section className="map-grid">
        <iframe title="Shomoukh Early Childhood — Al Mouj" src="https://maps.google.com/maps?q=shomoukh%20nursery%20Almouj%20&t=m&z=11&output=embed&iwloc=near" loading="lazy" />
        <iframe title="Shomoukh Early Childhood — Al Qurum" src="https://maps.google.com/maps?q=Shomoukh%20nursery%20Alqurum&t=m&z=10&output=embed&iwloc=near" loading="lazy" />
      </section>
      <section className="contact-form">
        <h2>Contact Us Now...</h2>
        <SimpleForm />
      </section>
    </Shell>
  );
}

function Tour() {
  return (
    <Shell>
      <section className="simple-page-head">
        <img src="/assets/people.svg" alt="" />
        <div>
          <h1>Book a visit</h1>
          <p>Our Shomoukh team is eager to welcome you</p>
        </div>
      </section>
      <section className="contact-form">
        <SimpleForm tour />
      </section>
    </Shell>
  );
}


function Apply() {
  return (
    <Shell>
      <InnerHero kind="apply-online" title="Apply Online" />
      <EnrolmentForm />
    </Shell>
  );
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page: Record<string, React.ReactNode> = {
    about: <About />,
    enrichments: <Enrichments />,
    programs: <Programs />,
    admissions: <Admissions />,
    parents: <Parents />,
    contactus: <Contact />,
    'schedule-a-tour': <Tour />,
    'apply-online': <Apply />,
  };
  return page[slug] ?? notFound();
}
