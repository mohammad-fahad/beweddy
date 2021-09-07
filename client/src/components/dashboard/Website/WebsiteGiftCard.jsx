import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const giftCards = [
  {
    name: "Macy's",
    image: '/images/macys.png',
    description:
      'A Macy’s E-Gift Card is appreciated by one and all. With a store full of wonderful items for home, weekend or work, it’s the opportunity to get exactly what you want.  Recipients can choose from Macy’s incredible selection of fashions, furnishings and so much more.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Amazon',
    image: '/images/amazon.png',
    description:
      'Use your Amazon.com Gift Card* towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Walmart',
    image: '/images/walmart.png',
    description:
      'With a Walmart eGift Card, you get low prices every day on thousands of popular products in stores or online at Walmart.com.You’ll find a wide assortment of top electronics, toys, home essentials and more. Plus, cards don’t expire and you never pay any fees.With a Walmart eGift Card, you get low prices every day on thousands of popular products in stores or online at Walmart.com.You’ll find a wide assortment of top electronics, toys, home essentials and more. Plus, cards don’t expire and you never pay any fees.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Starbucks',
    image: '/images/starbucks.png',
    description:
      'A Starbucks Card can bring a little goodness into everyone’s day. Whether you want to cheer up a friend who loves her morning mocha. Or reward yourself with your favorite flavored iced tea. The Starbucks Card is a great way for you or a loved one to enjoy a slice of happiness. Redeem it at thousands of Starbucks locations. Register the Card to earn free drinks or food and other great rewards. Reload it whenever you need to.',
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'Cabelas',
    image: '/images/cabelas.png',
    description:
      "As the World's Foremost Outfitter of Hunting, Fishing and Outdoor gear, Cabela's offers over 150,000 top-quality products to enhance any outing. In addition to a huge selection of catalogs and an industry leading website, the large destination Retail showrooms offer a retail experience like no other! Customer satisfaction is guaranteed.",
    // currency: 'USD',
    // amount: 25.6,
  },
  {
    name: 'CineMark',
    image: '/images/cinemark.png',
    description:
      'Give the gift of entertainment! Cinemark gift cards make the perfect gift for any occasion. Buy one for yourself, or give it as a gift. Cinemark gift cards can be redeemed online at Cinemark.com or at any local theatre for box office and concessions.     ',
    // currency: 'USD',
    // amount: 25.6,
  },
];

const WebsiteGiftCards = () => {
  const [pushItemTo, setPushItemTo] = useState(0);
  const [col, setCol] = useState(4);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltip, setTooltip] = useState({});
  const [selected, setSelected] = useState(null);

  const isLargeDevice = useMediaQuery('only screen and (min-width: 992px)');
  const isMediumDevice = useMediaQuery('only screen and (max-width: 991px)');
  const isSmallDevice = useMediaQuery('only screen and (max-width: 767px)');

  useEffect(() => {
    if (isSmallDevice) {
      return setCol(2);
    }
    if (isMediumDevice) {
      setCol(3);
    }
    if (isLargeDevice) {
      setCol(3);
    }
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);

  const handleTooltip = index => {
    const itemRowNumber = Math.ceil(index / col);
    setPushItemTo(itemRowNumber * col - index + index);
    setShowTooltip(true);
    setSelected(index - 1);
  };

  return (
    <div className=' from-[#FCE3EB] to-white relative'>
      <div className='relative grid grid-cols-2 px-5 md:grid-cols-3 lg:grid-cols-3 sm:px-0 gap-x-5 sm:gap-x-10'>
        {giftCards.map((giftCard, index) => {
          return (
            <Fragment key={index}>
              <div
                className={`w-full mx-auto py-5 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 ease-easing relative ${
                  selected === index ? '' : 'hover:scale-110'
                }`}
                onClick={() => {
                  handleTooltip(index + 1);
                  setTooltip(giftCard);
                }}
              >
                {selected === index && (
                  <>
                    <div className='absolute bottom-[-12px] left-6 h-8 w-8 border-4 border-gray-200 border-t-transparent border-r-transparent rotate-[135deg] z-10 bg-white'></div>
                    <div className='absolute bottom-[-1rem] left-6 h-8 w-8 border-4 border-transparent rotate-[135deg] z-30 bg-white'></div>
                  </>
                )}
                <Image
                  width={245}
                  height={157}
                  src={giftCard.image}
                  alt={giftCard.name}
                  className='w-full'
                />
              </div>
              {index + 1 === pushItemTo && showTooltip && (
                <div className='relative z-20 py-12 -mt-3 bg-white border-2 border-gray-200 rounded-lg col-span-full px-14'>
                  <div className='absolute right-5 top-5'>
                    <button
                      onClick={() => {
                        setShowTooltip(prev => !prev);
                        setSelected(null);
                      }}
                    >
                      <XIcon className='w-6 h-6 transition duration-300 hover:text-gray-500' />
                    </button>
                  </div>
                  <div className='flex divide-gray-100 md:divide-x md:flex-row'>
                    <img
                      src={tooltip.image}
                      alt={tooltip.name}
                      className='hidden object-cover w-64 h-40 md:mr-10 md:block'
                    />
                    <div className='md:pl-10'>
                      <h4 className='text-2xl md:text-3xl font-medium text-[#f16521]'>
                        {tooltip.name}
                      </h4>
                      <p className='mt-3 text-sm font-light text-gray-600'>
                        {tooltip.description}
                      </p>
                    </div>
                  </div>
                  {(tooltip.currency || tooltip.amount) && (
                    <div className='flex items-center mt-16 space-x-16'>
                      {tooltip.currency && (
                        <p className='text-sm'>
                          <strong className='font-semibold uppercase'>
                            Currency
                          </strong>
                          : {tooltip.currency}
                        </p>
                      )}
                      {tooltip.amount && (
                        <p className='text-sm'>
                          <strong className='font-semibold'>Amount</strong>: any
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          );
        })}
      </div>

      <div className='flex justify-end'>
        <Link href='/'>
          <a className='font-semibold font-inter text-lg hover:underline'>
            See All Gift Cards
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteGiftCards;
