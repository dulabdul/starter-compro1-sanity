import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
}
export default function FloatingWhatsApp({
  whatsappNumber,
}: FloatingWhatsAppProps) {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
      aria-label='Contact us on WhatsApp'>
      <MessageCircle
        size={28}
        aria-hidden='true'
      />
    </a>
  );
}
