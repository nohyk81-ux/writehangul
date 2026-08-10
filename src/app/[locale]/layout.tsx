import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Nanum_Pen_Script } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PdfGeneratorModal from '@/components/PdfGeneratorModal';
import PdfTemplate from '@/components/PdfTemplate';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nanumPen = Nanum_Pen_Script({
  weight: "400",
  variable: "--font-nanum-pen",
  subsets: ["latin"],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  // Use next-intl to get localized SEO data
  const t = await getTranslations({ locale, namespace: 'SEO' });
  
  const title = t('title') || "Write Hangul";
  const description = t('description') || "Learn to write Korean beautifully. Create your own practice sheets.";
  const keywords = t('keywords') || "hangul, korean, learn korean, writing practice";
  
  return {
    title,
    description,
    keywords,
    metadataBase: new URL('https://writehangul.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ko': '/ko',
        'ja': '/jp',
        'zh': '/cn',
        'es': '/es',
        'id': '/id',
        'vi': '/vn',
      },
    },
    openGraph: {
      title,
      description,
      url: `https://writehangul.com/${locale}`,
      siteName: 'Write Hangul',
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Enable static rendering
  setRequestLocale(locale);
 
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${nanumPen.variable} h-full antialiased`}
    >
      <head>
        {/* Google AdSense */}
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2696979963987135"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* GA4 Placeholder */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `
          }}
        />
        {/* MS Clarity Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "XXXXXXX");
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <PdfGeneratorModal />
          <PdfTemplate />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
