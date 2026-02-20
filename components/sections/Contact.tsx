import { MapPin, Mail, MessageSquare } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ContactProps {
  address?: string;
  email?: string;
  whatsappNumber?: string;
  mapsLink?: string;
}

export default function Contact({
  address,
  email,
  whatsappNumber,
  mapsLink,
}: ContactProps) {
  return (
    <section
      id='contact'
      className='py-20 bg-white'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Get In Touch
            </h2>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              Ready to elevate your business operations? Reach out to our team
              of specialists today.
            </p>

            <div className='space-y-6'>
              {address && (
                <div className='flex items-start'>
                  <MapPin
                    className='text-blue-600 mt-1 mr-4 flex-shrink-0'
                    size={20}
                  />
                  <p className='text-gray-700 whitespace-pre-line'>{address}</p>
                </div>
              )}
              {email && (
                <div className='flex items-center'>
                  <Mail
                    className='text-blue-600 mr-4 flex-shrink-0'
                    size={20}
                  />
                  <a
                    href={`mailto:${email}`}
                    className='text-gray-700 hover:text-blue-600'>
                    {email}
                  </a>
                </div>
              )}
            </div>

            <div className='mt-8 flex flex-col sm:flex-row gap-4'>
              {email && (
                <Button
                  href={`mailto:${email}`}
                  variant='primary'>
                  Email Us
                </Button>
              )}
              {whatsappNumber && (
                <Button
                  href={`https://wa.me/${whatsappNumber}`}
                  variant='outline'>
                  <MessageSquare
                    size={18}
                    className='mr-2 inline'
                  />{' '}
                  Chat on WhatsApp
                </Button>
              )}
            </div>
          </div>

          <div className='bg-gray-100 h-80 rounded-xl flex items-center justify-center border border-gray-200 overflow-hidden relative'>
            {mapsLink ? (
              <iframe
                src={mapsLink}
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='absolute inset-0'
              />
            ) : (
              <span className='text-gray-400 font-medium'>
                Map Location Not Set
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
