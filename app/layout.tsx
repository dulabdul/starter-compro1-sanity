import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import Navbar from '@/components/layout/Navbar';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { sanityClient } from '@/sanity/lib/client';
import { SITE_SETTINGS_QUERY, COMPANY_INFO_QUERY } from '@/sanity/lib/queries';
import './globals.css';

// Dinamis menghasilkan Metadata untuk SEO berdasarkan data Sanity
export async function generateMetadata() {
  const settings = await sanityClient.fetch(SITE_SETTINGS_QUERY);

  return {
    title: {
      template: `%s | ${settings?.title || 'Company Profile'}`,
      default: settings?.title || 'Company Profile',
    },
    description: settings?.description || 'Corporate website template',
    openGraph: {
      images: settings?.ogImageUrl ? [settings.ogImageUrl] : [],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch tracking IDs & info kontak untuk Navbar / Floating UI
  const settings = await sanityClient.fetch(SITE_SETTINGS_QUERY);
  const companyInfo = await sanityClient.fetch(COMPANY_INFO_QUERY);

  const { gaId, gtmId, pixelId } = settings?.tracking || {};

  return (
    <html
      lang='en'
      className='scroll-smooth'>
      <body className='antialiased min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50'>
        {/* Pass parameter jika Navbar membutuhkan logoUrl atau companyName nanti */}
        <Navbar />

        <main className='flex-grow'>{children}</main>

        {companyInfo?.whatsappNumber && (
          <FloatingWhatsApp whatsappNumber={companyInfo.whatsappNumber} />
        )}

        {/* Inject Script Analytics Secara Dinamis jika ID tersedia */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        {pixelId && (
          <Script
            id='meta-pixel'
            strategy='afterInteractive'>
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
