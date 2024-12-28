import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/src/app/[locale]/styles/globals.css';
import Header from '@/src/app/[locale]/_components/Header/Header';
import Footer from '@/src/app/[locale]/_components/Footer/Footer';
import { unstable_setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';
import BodyWrapper from './_components/BodyWrapper';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'InterMediate – IT-решения для вашего бизнеса',
  description:
    'Агентство InterMediate предлагает современные IT-услуги для роста вашего бизнеса, привлечения клиентов и повышения эффективности работы. Комбинируем технологии и стратегию для вашего успеха.',
  keywords:
    'IT-услуги, веб-разработка, автоматизация бизнес-процессов, цифровые решения, маркетинг, рост бизнеса, InterMediate, IT агентство, сайты',
  authors: [{ name: 'InterMediate', url: 'https://in-te.uz' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://in-te.uz',
    title: 'InterMediate – IT-решения для вашего бизнеса',
    description:
      'Агентство InterMediate предлагает современные IT-услуги для роста вашего бизнеса, привлечения клиентов и повышения эффективности работы. Комбинируем технологии и стратегию для вашего успеха.',
    siteName: 'InterMediate',
    images: [
      {
        url: 'https://in-te.uz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'InterMediate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InterMediate – IT-решения для вашего бизнеса',
    description:
      'Агентство InterMediate предлагает современные IT-услуги для роста вашего бизнеса, привлечения клиентов и повышения эффективности работы.',
    images: 'https://in-te.uz/og-image.jpg',
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://in-te.uz',
    languages: {
      ru: '/ru',
      en: '/en',
      uz: '/uz',
    },
  },
};

export type Locales = 'ru' | 'en' | 'uz';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale?: string };
}>) {
  const locale: Locales =
    params?.locale === 'uz' ? 'uz' : params?.locale === 'en' ? 'en' : 'ru';

  unstable_setRequestLocale(locale);

  // Получаем сообщения для текущей локали
  const messages = await getMessages({ locale });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "InterMediate",
    "url": 'https://in-te.uz',
    "description":
      "InterMediate предлагает современные IT-услуги для роста вашего бизнеса, привлечения клиентов и повышения эффективности работы. Мы комбинируем технологии и стратегию для вашего успеха.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Узбекистан, г. Ташкент, ул. Чинадабд 2",
      "addressLocality": "Tashkent",
      "postalCode": "100000",
      "addressCountry": "UZ"
    },
    "telephone": "+998509004738",
    "openingHours": "Mo-Fr 10:00-19:00",
    "image": "https://in-te.uz/og-image.jpg",
    "priceRange": "USD"
  };

  return (
    <html lang={locale} className={montserrat.className}>
      <BodyWrapper>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />

          {/* Структурированные данные */}
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />

          {/* Яндекс.Метрика */}
          <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(99344369, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `,
            }}
          />
          {/* Noscript для Яндекс.Метрики */}
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/99344369"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
              />
            </div>
          </noscript>

          {/* Google Tag (gtag.js) */}
          <Script
            id="google-gtag"
            src="https://www.googletagmanager.com/gtag/js?id=G-RRTZLJ5XFL"
            strategy="afterInteractive"
          />
          <Script
            id="google-gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-RRTZLJ5XFL');
              `,
            }}
          />
        </NextIntlClientProvider>
      </BodyWrapper>
    </html>
  );
}
