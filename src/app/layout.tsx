import type { Metadata } from 'next';
import GlobalStyles from '@/styles/GlobalStyles';
import Providers from '@/lib/Providers';

export const metadata: Metadata = {
  title: 'waterbin ui',
  description: 'waterbin design system',
};

import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'sans-serif',
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={pretendard.className}>
      <body>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
