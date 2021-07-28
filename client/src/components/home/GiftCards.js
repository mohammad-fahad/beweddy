import { LinkButton, Heading } from '@components/shared';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

const giftCards = [
  {
    name: 'Amazon',
    image: '/images/amazon.png',
    description:
      'Use your Amazon.com Gift Card* towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.',
    currency: 'USD',
    amount: 25.6,
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
    name: 'Buffalo',
    image: '/images/gift-6.png',
    description:
      'Buffalo Wild Wings® is a sports bar with beer and wings and a crazy amount of TVs showing all the games. And rowdy fans and all the sauces for all the wings. Did we mention beer? Because we pour more beer than anyone in the country. So bring your friends, your outside voice and cheer on your favorite team to victory at any of our 1,200+ locations nationwide. Why aren’t you here already? www.buffalowildwings.com',
  },
  {
    name: 'Best Buy',
    image: '/images/best-buy.png',
    description:
      'Best Buy® has all of the tech that tech lovers love. Whether you’re a video game enthusiast, a kitchen gadget groupie, or a fan of wireless headphones, there’s lots of tech for you to discover in store, online or on our app. And if you’re not sure what you’re looking for, Blue Shirts and Geek Squad Agents are here for you every step of the way to share expert advice and guidance.',
  },
  {
    name: 'Adidas',
    image: '/images/adidas.png',
    description:
      'Our love for sport drives who we are and what we do. Every day. adidas has a clear mission: be the globally leading and most popular sporting goods brand. We are not just designing products for all kinds of sports. We are designing products for athletes. Athletes always strive for their personal best. Athletes find inspiration in sports no matter what they do. We help them to achieve their peak performance by making them faster, stronger, smarter and cooler. adidas gift cards can be redeemed in over 150 adidas Sport Performance, adidas Originals, or adidas Outlet stores in the US, as well as online at adidas.com.',
  },
  {
    name: 'Reward',
    image: '/images/reward.png',
    description:
      'The printed Reward Link is delivered via mail and lets a recipient choose from dozens of premium gift cards—and with digital and plastic options, they’re just a few clicks away from getting the gift card they really want.',
  },
  {
    name: 'Buffalo',
    image: '/images/gift-6.png',
    description:
      'Buffalo Wild Wings® is a sports bar with beer and wings and a crazy amount of TVs showing all the games. And rowdy fans and all the sauces for all the wings. Did we mention beer? Because we pour more beer than anyone in the country. So bring your friends, your outside voice and cheer on your favorite team to victory at any of our 1,200+ locations nationwide. Why aren’t you here already? www.buffalowildwings.com',
  },
  {
    name: 'Best Buy',
    image: '/images/best-buy.png',
    description:
      'Best Buy® has all of the tech that tech lovers love. Whether you’re a video game enthusiast, a kitchen gadget groupie, or a fan of wireless headphones, there’s lots of tech for you to discover in store, online or on our app. And if you’re not sure what you’re looking for, Blue Shirts and Geek Squad Agents are here for you every step of the way to share expert advice and guidance.',
  },
  {
    name: 'Adidas',
    image: '/images/adidas.png',
    description:
      'Our love for sport drives who we are and what we do. Every day. adidas has a clear mission: be the globally leading and most popular sporting goods brand. We are not just designing products for all kinds of sports. We are designing products for athletes. Athletes always strive for their personal best. Athletes find inspiration in sports no matter what they do. We help them to achieve their peak performance by making them faster, stronger, smarter and cooler. adidas gift cards can be redeemed in over 150 adidas Sport Performance, adidas Originals, or adidas Outlet stores in the US, as well as online at adidas.com.',
  },
  {
    name: 'Reward',
    image: '/images/reward.png',
    description:
      'The printed Reward Link is delivered via mail and lets a recipient choose from dozens of premium gift cards—and with digital and plastic options, they’re just a few clicks away from getting the gift card they really want.',
  },
];

const GiftCards = () => {
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
      setCol(4);
    }
  }, [isSmallDevice, isMediumDevice, isLargeDevice]);

  const handleTooltip = index => {
    const itemRowNumber = Math.ceil(index / col);
    setPushItemTo(itemRowNumber * col - index + index);
    setShowTooltip(true);
    setSelected(index - 1);
  };

  return (
    <div className='bg-gradient-to-br from-[#FCE3EB] to-white'>
      <div className='container py-20'>
        <Heading label='Collect Gifts With The Best 100+ Gift Card Registry ' />
        <div className='my-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-5 sm:px-0 mx-auto sm:max-w-full gap-x-5 sm:gap-x-10 relative'>
          {giftCards.map((giftCard, index) => {
            return (
              <Fragment key={index}>
                <div
                  className={`w-full py-5 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 ease-easing relative ${
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
                    width={287}
                    height={170}
                    src={giftCard.image}
                    alt={giftCard.name}
                    className='w-full'
                  />
                </div>
                {index + 1 === pushItemTo && showTooltip && (
                  <div className='-mt-3 bg-white col-span-full border-2 border-gray-200 px-14 py-12 rounded-lg relative z-20'>
                    <div className='absolute right-5 top-5'>
                      <button
                        onClick={() => {
                          setShowTooltip(prev => !prev);
                          setSelected(null);
                        }}
                      >
                        <XIcon className='w-6 h-6 hover:text-gray-500 transition duration-300' />
                      </button>
                    </div>
                    <div className='flex md:divide-x divide-gray-100 md:flex-row'>
                      <img
                        src={tooltip.image}
                        alt={tooltip.name}
                        className='w-64 h-40 object-cover md:mr-10 hidden md:block'
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
                      <div className='mt-16 flex items-center space-x-16'>
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
                            <strong className='font-semibold uppercase'>
                              Amount
                            </strong>
                            : ${tooltip.amount}
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
        <div className='text-center'>
          <LinkButton label='See More' outline href='/' />
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
