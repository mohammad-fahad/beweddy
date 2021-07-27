import { LinkButton, Heading } from '@components/shared';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';

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
  const [pushItemTo, setPushItemTo] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltip = index => {
    const itemRowNumber = Math.ceil(index / 4);
    console.log('item  row', itemRowNumber);
    setPushItemTo(itemRowNumber * 4 - index + index);
    setShowTooltip(true);
  };

  return (
    <div className='bg-gradient-to-br from-[#FCE3EB] to-white'>
      <div className='container py-20'>
        <Heading label='Collect Gifts With The Best 100+ Gift Card Registry ' />
        <div className='my-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-xs mx-auto sm:max-w-full gap-10 relative'>
          {giftCards.map((giftCard, index) => (
            <>
              <div
                key={index}
                className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-110 transition-transform duration-300 ease-easing'
                onClick={() => handleTooltip(index + 1)}
              >
                <Image
                  width={287}
                  height={170}
                  src={giftCard.image}
                  alt={giftCard.name}
                  className='w-full'
                />
              </div>
              {index + 1 === pushItemTo && showTooltip && (
                <div className='-mt-6 bg-white col-span-full border-2 border-gray-300 p-10 rounded-lg relative'>
                  <div className='absolute right-5 top-5'>
                    <button onClick={() => setShowTooltip(prev => !prev)}>
                      <XIcon className='w-6 h-6 hover:text-gray-500' />
                    </button>
                  </div>
                  hellow
                </div>
              )}
            </>
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
