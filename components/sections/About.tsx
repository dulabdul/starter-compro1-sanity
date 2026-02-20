import Image from 'next/image';
import Button from '@/components/ui/Button';

interface AboutProps {
  title: string;
  content: string;
  imagePlaceholder: string;
}

export default function About({
  title,
  content,
  imagePlaceholder,
}: AboutProps) {
  return (
    <section
      id='about'
      className='py-24 bg-white'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div className='relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl'>
            <Image
              src={imagePlaceholder}
              alt='Corporate team collaborating on a digital transformation project'
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-cover'
              priority={false}
            />
          </div>
          <div>
            <h2 className='text-sm font-bold tracking-widest text-blue-600 uppercase mb-3'>
              {title}
            </h2>
            <h3 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight'>
              Empowering businesses through technological innovation.
            </h3>
            <p className='text-lg text-gray-600 leading-relaxed mb-8'>
              {content}
            </p>
            <Button
              href='#contact'
              variant='secondary'>
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
