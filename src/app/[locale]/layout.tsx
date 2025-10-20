import { notFound } from 'next/navigation';
import { locales } from '../../../i18n';
import { Inter, Poppins, Lato } from 'next/font/google';
import '../globals.css';
import { AuthProvider } from '@/contexts/AuthContext';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = params;
  
  // Validate locale
  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${lato.variable}`}>
      <head>
        {/* Optional prefetches */}
        <link rel="prefetch" href={`/${locale}/investor`} />
        <link rel="prefetch" href={`/${locale}/financials`} />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="antialiased">
        <AuthProvider>
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
