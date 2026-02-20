import Button from '@/components/ui/Button';

interface HeroProps {
  headline: string;
  subheadline: string;
}

export default function Hero({ headline, subheadline }: HeroProps) {
  return (
    <section
      id='home'
      className='relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden'>
      {/* Subtle background pattern for modern corporate feel */}
      <div
        className='absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent'
        aria-hidden='true'
      />

      <div className='container relative z-10 mx-auto px-4 md:px-8 text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto mb-6 leading-tight'>
          {headline}
        </h1>
        <p className='text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light'>
          {subheadline}
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          <Button
            href='#contact'
            variant='primary'
            className='w-full sm:w-auto text-lg px-8 py-4'>
            Schedule a Consultation
          </Button>
          <Button
            href='#portfolio'
            variant='outline'
            className='w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:bg-white/10'>
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
