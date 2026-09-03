import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/Shared';
import { notFound } from 'next/navigation';
type Page = { title: string; eyebrow: string; intro: string; details: string[]; image: string; action?: string; actionHref?: string };
const pages: Record<string, Page> = {
  about: { title: 'About Shomoukh', eyebrow: 'Our Story', image: '/assets/hero.jpg', intro: 'Shomoukh is a nurturing early-years community where children are respected as capable, curious and full of potential.', details: ['Our approach is inspired by Reggio Emilia, where children learn through relationships, play and meaningful projects.', 'Every environment is carefully prepared to invite imagination, communication and independent discovery.'] },
  enrichments: { title: 'Enrichments', eyebrow: 'Beyond the Classroom', image: '/assets/feature.jpg', intro: 'Enrichment experiences extend each child’s day with joyful opportunities for expression, movement and discovery.', details: ['Children explore art, music, movement and language through open-ended, age-appropriate experiences.', 'Our program responds to children’s interests and supports the whole child.'] },
  programs: { title: 'Our Programs', eyebrow: 'Ages 3 Months to 4 Years', image: '/assets/learning.jpg', intro: 'Our programs meet children where they are and provide a secure foundation for confident lifelong learning.', details: ['Infants, toddlers and preschoolers learn in small, responsive groups with dedicated educators.', 'Flexible care is available to meet the individual needs of our families.'], action: 'Book a Visit', actionHref: '/schedule-a-tour/' },
  admissions: { title: 'Admissions', eyebrow: 'Join Shomoukh', image: '/assets/child.jpg', intro: 'We would be delighted to welcome your family and help you find the right program and campus for your child.', details: ['Start with a visit: meet our team, explore the spaces and ask us anything about your child’s next steps.', 'When you are ready, complete the online application and our admissions team will guide you through the process.'], action: 'Apply Online', actionHref: '/apply-online/' },
  parents: { title: 'Parents', eyebrow: 'A Connected Community', image: '/assets/play.jpg', intro: 'Parents are valued partners in every child’s learning journey at Shomoukh.', details: ['We share children’s discoveries, learning stories and everyday moments with families.', 'Our team is always here to answer questions and support a smooth, happy school experience.'], action: 'Contact Us', actionHref: '/contactus/' },
  contactus: { title: 'Contact Us', eyebrow: 'We Are Here to Help', image: '/assets/feature.jpg', intro: 'Get in touch with our friendly team or arrange a visit to experience Shomoukh in person.', details: ['Al Mouj Campus: +968 24555515 · info.almouj@shomoukh.com', 'Al Qurm Campus: +968 24600610 · info.alqurum@shomoukh.com'], action: 'Book a Visit', actionHref: '/schedule-a-tour/' },
  'schedule-a-tour': { title: 'Book a Visit', eyebrow: 'See it Yourself', image: '/assets/hero.jpg', intro: 'Come and see our warm, inspiring learning spaces. We would love to meet your family and show you around.', details: ['Visits are a relaxed opportunity to explore the campus, meet the team and discuss your child’s needs.', 'Choose a preferred campus and our team will contact you to arrange a convenient time.'] },
  'apply-online': { title: 'Apply Online', eyebrow: 'Begin Your Journey', image: '/assets/learning.jpg', intro: 'Complete the enquiry below to begin your child’s Shomoukh journey. Our admissions team will be in touch shortly.', details: ['Please have your child’s age and preferred campus ready before starting.', 'Submitting this form is an enquiry and does not confirm enrolment.'] },
};
export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];

  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="page-hero-rich" style={{ backgroundImage: `url(${page.image})` }}>
          <div><p>{page.eyebrow}</p><h1>{page.title}</h1></div>
        </section>
        <section className="page-content-rich">
          <article>
            <p className="eyebrow">{page.eyebrow}</p>
            <h2>{page.title}</h2>
            <p>{page.intro}</p>
            {page.details.map((detail) => <p key={detail}>{detail}</p>)}
            {page.action && page.actionHref && <Button href={page.actionHref}>{page.action}</Button>}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
