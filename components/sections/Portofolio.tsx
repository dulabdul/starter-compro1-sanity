export default function Portfolio() {
  return (
    <section
      id='portfolio'
      className='py-24 bg-white border-t border-gray-100'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <h2 className='text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-4'>
            Featured Case Studies
          </h2>
          <p className='text-lg text-gray-600'>
            A selection of our recent enterprise deployments and architectural
            overhauls.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Mock Portfolio Items - DRY implementation */}
          {[1, 2].map((item) => (
            <article
              key={item}
              className='group cursor-pointer'>
              <div className='relative h-64 md:h-80 w-full rounded-xl overflow-hidden bg-gray-200 mb-6'>
                <div className='absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-400 group-hover:scale-105 transition-transform duration-500' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                Project Alpha {item}
              </h3>
              <p className='text-gray-600'>
                Complete modernization of legacy FinTech infrastructure,
                resulting in a 40% reduction in server costs.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
