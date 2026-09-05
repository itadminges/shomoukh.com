import type { Metadata } from 'next';
import './globals.css';
import './page-extras.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://shomoukh.com'),
  title: {
    default: 'Shomoukh Nursery School | Early Childhood Education in Muscat',
    template: '%s | Shomoukh Nursery School',
  },
  description:
    'Shomoukh is a Reggio Emilia inspired early years nursery school in Muscat, Oman, offering nurturing education for children from 6 months to 4 years.',
  icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_OM',
    siteName: 'Shomoukh Nursery School',
    title: 'Shomoukh Nursery School | Early Childhood Education in Muscat',
    description:
      'A Reggio Emilia inspired early years nursery school in Muscat, Oman.',
    url: '/',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Preschool',
  name: 'Shomoukh Nursery School',
  url: 'https://shomoukh.com/',
  description:
    'International Early Years Nursery School in Muscat, Oman, inspired by the Reggio Emilia approach.',
  email: 'info.almouj@shomoukh.com',
  telephone: '+96824555515',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Al Mouj Main Street, Main Community Hub',
      addressLocality: 'Muscat',
      addressCountry: 'OM',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Al Suraj St, Shatti Al Qurm Way 3046, Bldg 355',
      addressLocality: 'Muscat',
      addressCountry: 'OM',
    },
  ],
  areaServed: 'Muscat, Oman',
  availableLanguage: 'English',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
