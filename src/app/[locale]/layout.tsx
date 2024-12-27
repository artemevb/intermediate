// import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/src/app/[locale]/styles/globals.css';
import Header from '@/src/app/[locale]/_components/Header/Header';
import Footer from '@/src/app/[locale]/_components/Footer/Footer';
import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
// import Script from 'next/script';
import BodyWrapper from './_components/BodyWrapper';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '700', '900'], fallback: ['sans-serif'] });


// export const metadata: Metadata = {
//   title: 'RMC De Luxe – Rental and Sale of Real Estate in UAE',
//   description: 'Professional rental and sales services for real estate in UAE from RMC De Luxe. A reliable partner for individual and corporate clients.',
//   keywords:
//     'real estate agency, real estate Tashkent, real estate rental, real estate sales, RMC De Luxe, UAE, real estate UAE, luxury real estate',
//   authors: [{ name: 'RMC De Luxe', url: 'https://rmcdeluxe.com' }],
//   viewport: 'width=device-width, initial-scale=1',
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://rmcdeluxe.com',
//     title: 'RMC De Luxe – Rental and Sale of Real Estate in UAE',
//     description: 'Professional rental and sales services for real estate in UAE from RMC De Luxe. A reliable partner for individual and corporate clients.',
//     siteName: 'RMC De Luxe',
//     images: [
//       {
//         url: 'https://rmcdeluxe.com/og-image.jpg?v=2',
//         width: 1200,
//         height: 630,
//         alt: 'RMC De Luxe - Real Estate in UAE',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'RMC De Luxe - Real Estate Agency in UAE',
//     description: 'Professional rental and sales services for real estate in UAE.',
//     images: 'https://rmcdeluxe.com/og-image.jpg?v=2',
//   },
//   icons: {
//     icon: '/favicon.ico',
//   },
//   alternates: {
//     canonical: 'https://rmcdeluxe.com',
//     languages: {
//       ru: '/ru',
//       en: '/en',
//     },
//   },
// };

export type Locales = 'ru' | 'en' | 'uz';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale?: string };
}>) {
  const locale: Locales = params?.locale === 'uz' ? 'uz' : params?.locale === 'en' ? 'en' : 'ru';

  unstable_setRequestLocale(locale);

  // Получаем сообщения для текущей локали
  const messages = await getMessages({ locale });

  // Структурированные данные
  // const structuredData = {
  //   "@context": "https://schema.org",
  //   "@type": "RealEstateAgent",
  //   "name": "RMC De Luxe",
  //   "url": 'https://rmcdeluxe.com',
  //   "description": locale === 'en'
  //     ? "RMC De Luxe provides rental and sales services for real estate in UAE. Professional approach for individual and corporate clients."
  //     : "RMC De Luxe provides rental and sales services for real estate in UAE. Professional approach for individual and corporate clients.", 
  //   "address": {
  //     "@type": "PostalAddress",
  //     "streetAddress": "Deira, Baniyas road, Twin Towers, 20th floor, Office number 10",
  //     "addressLocality": "Tashkent",
  //     "postalCode": "100000",
  //     "addressCountry": "AE"
  //   },
  //   "telephone": "+9989785558787",
  //   "openingHours": "Mo-Fr 09:00-18:00",
  //   "image": "https://rmcdeluxe.com/og-image.jpg?v=2",
  //   "priceRange": "AED"
  // };

  return (
    <html lang={locale} className={montserrat.className}>
      <BodyWrapper>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </BodyWrapper>
    </html>
  );
}
