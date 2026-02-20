import { type SchemaTypeDefinition } from 'sanity';
import { siteSettings } from './siteSettings';
import { companyInfo } from './companyInfo';
import { service } from './services';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, companyInfo, service],
};
