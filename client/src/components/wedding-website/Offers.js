const { Heading } = require('@components/shared');

const offers = [
  {
    icon: '/icons/user.svg',
    title: 'Create Your Free Account',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/template.svg',
    title: 'Select A Design Template',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/layout.svg',
    title: 'Easily Customize',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/rocket.svg',
    title: 'Launch & Share With Guests',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const Offers = () => {
  return (
    <div className='border-t-4 border-primary'>
      <div className='container py-20'>
        <Heading
          label='How to Create Your Free Wedding Website'
          color='bg-secondary-alternative'
          className='lg:!text-4xl'
          // lineStyle={{ marginBottom: '45px' }}
        />
        <div className='grid md:grid-cols-2 gap-20'>
          {offers.map((offer, index) => (
            <div key={index} className='max-w-md w-full mx-auto'>
              <div className='mb-8'>
                <img src={offer.icon} alt='' className='w-12 lg:w-14' />
              </div>
              <h1 className='mb-3 text-3xl lg:text-4xl font-medium'>
                {offer.title}
              </h1>
              <p className='text-base lg:text-lg font-regular text-gray-700'>
                {offer.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
