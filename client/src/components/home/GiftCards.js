import { LinkButton, Heading } from '@components/shared';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';

const giftCards = [
  {
    name: 'Amazon',
    image: '/images/amazon.png',
    description:
      'Use your Amazon.com Gift Card* towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.',
  },
  {
    name: 'Gift',
    image: '/images/gift-2.png',
    description:
      'Gift-giving has never been easier with the 1-800-FLOWERS.COM® Gift Card! Browse a wide selection of fresh flowers, delicious gourmet treats and desserts, beautiful plants, stunning gift baskets and more – and then choose exactly what you want!',
  },
  {
    name: 'Air',
    image: '/images/air.png',
    description:
      'Unforgettable travel experiences start with Airbnb. Find travel adventures and new places to go far away or near to you, and access vacation home rentals, new experiences, and places to visit all around the world.',
  },
  {
    name: 'Cake',
    image: '/images/cake.png',
    description:
      'Cake Beauty is Canada’s most iconic independent beauty brand, delivering naturally luxe confections in haircare, skincare, bath and body by Cake and Delectable since 2003.',
  },
  {
    name: 'Gift',
    image: '/images/gift-6.png',
    description:
      'Buffalo Wild Wings® is a sports bar with beer and wings and a crazy amount of TVs showing all the games. And rowdy fans and all the sauces for all the wings. Did we mention beer? Because we pour more beer than anyone in the country. So bring your friends, your outside voice and cheer on your favorite team to victory at any of our 1,200+ locations nationwide. Why aren’t you here already? www.buffalowildwings.com',
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
  const [tooltip, setTooltip] = useState({});

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
                onClick={() => {
                  handleTooltip(index + 1);
                  setTooltip(giftCard);
                }}
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
                <div className='-mt-6 bg-white col-span-full border-2 border-gray-200 p-14 rounded-lg relative'>
                  <div className='absolute right-5 top-5'>
                    <button onClick={() => setShowTooltip(prev => !prev)}>
                      <XIcon className='w-6 h-6 hover:text-gray-500' />
                    </button>
                  </div>
                  <div className='flex divide-x divide-gray-100'>
                    <img
                      src={tooltip.image}
                      alt={tooltip.name}
                      className='w-64 h-40 object-cover mr-10'
                    />
                    <div className='pl-10'>
                      <h4 className='text-xl font-semibold text-primary'>
                        {tooltip.name}
                      </h4>
                      <p className='mt-3 text-sm'>{tooltip.description}</p>
                    </div>
                  </div>
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
