import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './sanity/schemaTypes';

export default defineConfig({
  basePath: '/admin', // This is the route where your Admin Panel will live
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  title: 'Compro Admin Studio',

  plugins: [structureTool()],
  schema,
});
