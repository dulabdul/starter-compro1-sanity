import { sanityClient } from '@/sanity/lib/client';
import { COMPANY_INFO_QUERY, SERVICES_QUERY } from '@/sanity/lib/queries';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Portfolio from '@/components/sections/Portofolio';

// Tipe data opsi fallback untuk menghindari error jika CMS kosong
const FALLBACK_COMPANY = {
  companyName: 'CorpStarter',
  email: 'hello@corpstarter.com',
};

export default async function HomePage() {
  // Fetch data secara bersamaan (parallel fetching) untuk performa optimal
  const [companyInfo, services] = await Promise.all([
    sanityClient.fetch(COMPANY_INFO_QUERY),
    sanityClient.fetch(SERVICES_QUERY),
  ]);

  const company = companyInfo || FALLBACK_COMPANY;

  return (
    <>
      <Hero
        headline={`Engineering Excellence at ${company.companyName}`}
        subheadline='We build scalable, high-performance web architectures that drive operational efficiency and corporate growth.'
      />

      <About
        title='Who We Are'
        content={`Welcome to ${company.companyName}. We bridge the gap between complex engineering and intuitive user experiences, ensuring your digital infrastructure is robust, secure, and ready for the future.`}
        imagePlaceholder='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
      />

      {/* Melempar data array services dari CMS ke komponen */}
      <Services services={services} />

      <Portfolio />

      {/* Melempar data kontak dari CMS ke komponen */}
      <Contact
        address={company.address}
        email={company.email}
        whatsappNumber={company.whatsappNumber}
        mapsLink={company.mapsLink}
      />
    </>
  );
}
