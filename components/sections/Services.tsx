import ServiceCard from '@/components/ui/ServiceCard';

// Definisikan tipe data sesuai skema Sanity
export interface ServiceItem {
  _id: string;
  title: string;
  description: string;
  iconName: string;
}

interface ServicesProps {
  services: ServiceItem[];
}

export default function Services({ services }: ServicesProps) {
  // Jika belum ada data di CMS, tampilkan pesan kosong (KISS principle)
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section
      id='services'
      className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-4'>
            Our Corporate Services
          </h2>
          <p className='text-lg text-gray-600'>
            Delivering high-performance digital capabilities for
            forward-thinking organizations.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
