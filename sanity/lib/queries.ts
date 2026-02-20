import { groq } from 'next-sanity';

// Query untuk Site Settings (SEO & Analytics)
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    "ogImageUrl": ogImage.asset->url,
    tracking
  }
`;

// Query untuk Company Info (Kontak, Logo, Nama Perusahaan)
export const COMPANY_INFO_QUERY = groq`
  *[_type == "companyInfo"][0] {
    companyName,
    "logoUrl": logo.asset->url,
    address,
    mapsLink,
    email,
    whatsappNumber
  }
`;

// Query untuk Services (diurutkan berdasarkan sortOrder)
export const SERVICES_QUERY = groq`
  *[_type == "service"] | order(sortOrder asc) {
    _id,
    title,
    description,
    iconName
  }
`;
