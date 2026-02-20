import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings & SEO',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Global SEO Title', type: 'string' }),
    defineField({
      name: 'description',
      title: 'Global SEO Description',
      type: 'text',
    }),
    defineField({ name: 'ogImage', title: 'Open Graph Image', type: 'image' }),
    defineField({
      name: 'tracking',
      title: 'Tracking IDs',
      type: 'object',
      fields: [
        defineField({
          name: 'gaId',
          title: 'Google Analytics ID (G-XXXXX)',
          type: 'string',
        }),
        defineField({
          name: 'gtmId',
          title: 'Google Tag Manager ID (GTM-XXXXX)',
          type: 'string',
        }),
        defineField({
          name: 'pixelId',
          title: 'Meta Pixel ID',
          type: 'string',
        }),
      ],
    }),
  ],
});
