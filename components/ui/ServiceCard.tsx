/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from 'react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
}

export default function ServiceCard({
  title,
  description,
  iconName,
}: ServiceCardProps) {
  // Dynamically resolve Lucide icon. Fallback to 'CheckCircle' if missing.
  const IconComponent = (Icons as any)[iconName] || Icons.CheckCircle;

  return (
    <article className='flex flex-col p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'>
      <div className='h-12 w-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4'>
        {createElement(IconComponent, { size: 24, 'aria-hidden': 'true' })}
      </div>
      <h3 className='text-lg font-semibold text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600 leading-relaxed text-sm flex-grow'>
        {description}
      </p>
    </article>
  );
}
