import { defineField, defineType } from 'sanity';

export const companyInfo = defineType({
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  fields: [
    defineField({ name: 'companyName', title: 'Company Name', type: 'string' }),
    defineField({ name: 'logo', title: 'Company Logo', type: 'image' }),
    defineField({ name: 'address', title: 'Physical Address', type: 'text' }),
    defineField({
      name: 'mapsLink',
      title: 'Google Maps Embed/Link',
      type: 'url',
    }),
    defineField({ name: 'email', title: 'Public Email', type: 'string' }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number (e.g., 1234567890)',
      type: 'string',
    }),
  ],
});
