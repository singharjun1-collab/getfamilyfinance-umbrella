import './globals.css';

export const metadata = {
  title: 'GetFamilyFinance — Smart tools for smarter family finances',
  description: 'A growing family of simple, beautiful apps to help your family budget, invest, and grow wealth together.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'GetFamilyFinance',
    description: 'Smart tools for smarter family finances.',
    url: 'https://getfamilyfinance.com',
    siteName: 'GetFamilyFinance',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e1a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
