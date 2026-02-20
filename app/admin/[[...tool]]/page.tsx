'use client'; // <-- This is the critical addition

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

export default function AdminPage() {
  return (
    <div className='min-h-screen'>
      <NextStudio config={config} />
    </div>
  );
}
