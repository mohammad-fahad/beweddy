import { LinkButton, Heading } from '@components/shared';
import Image from 'next/image';

const giftCards = [
  {
    name: 'Amazon',
    image: '/images/amazon.png',
  },
  {
    name: 'Gift',
    image: '/images/gift-2.png',
  },
  {
    name: 'Air',
    image: '/images/air.png',
  },
  {
    name: 'Cake',
    image: '/images/cake.png',
  },
  {
    name: 'Gift',
    image: '/images/gift-6.png',
  },
  {
    name: 'Best Buy',
    image: '/images/best-buy.png',
  },
  {
    name: 'Adidas',
    image: '/images/adidas.png',
  },
  {
    name: 'Reward',
    image: '/images/reward.png',
  },
];

const GiftCards = () => {
  const handleTooltip = index => {
    const getRowNumber = ((index + 1) * 4) / giftCards.length;
    console.log('Row Number', getRowNumber);
  };

  return (
    <div className='bg-gradient-to-br from-[#FCE3EB] to-white'>
      <div className='container py-20'>
        <Heading label='Collect Gifts With The Best 100+ Gift Card Registry ' />
        <div className='my-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-xs mx-auto sm:max-w-full gap-10 relative'>
          {giftCards.map((giftCard, index) => (
            <div
              key={index}
              className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300 ease-easing'
              onClick={() => handleTooltip(index)}
            >
              <Image
                width={287}
                height={170}
                src={giftCard.image}
                alt={giftCard.name}
                className='w-full'
              />
            </div>
          ))}
        </div>
        <div className='text-center'>
          <LinkButton label='See More' outline href='/' />
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
