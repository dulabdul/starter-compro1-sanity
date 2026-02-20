import { defineField, defineType } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Name', type: 'string' }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'iconName',
      title: 'Lucide Icon Name',
      type: 'string',
    }),
    defineField({ name: 'sortOrder', title: 'Sorting Order', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
});
