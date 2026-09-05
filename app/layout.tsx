import type { Metadata } from 'next';
import './globals.css';
import './page-extras.css';
export const metadata: Metadata = { title: 'Shomoukh | Early Childhood Education', description: 'The first Reggio Emilia inspired nursery school in Oman.', icons: { icon: '/favicon.png', shortcut: '/favicon.png', apple: '/favicon.png' } };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
