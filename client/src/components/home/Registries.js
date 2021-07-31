import { LinkButton, Heading } from '@components/shared';
import { XIcon } from '@heroicons/react/solid';
import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, Fragment } from 'react';

const registriesCards = [
  {
    name: 'Amazon',
    image: '/images/amazon-registry.png',
    description:
      'Use your Amazon.com Gift Card* towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.',
    currency: 'USD',
    amount: 25.6,
  },
  {
    name: 'Gift',
    image: '/images/bloomingdale.png',
    description:
      'Gift-giving has never been easier with the 1-800-FLOWERS.COM® Gift Card! Browse a wide selection of fresh flowers, delicious gourmet treats and desserts, beautiful plants, stunning gift baskets and more – and then choose exactly what you want!',
  },
  {
    name: 'Air',
    image: '/images/traveler.png',
    description:
      'Unforgettable travel experiences start with Airbnb. Find travel adventures and new places to go far away or near to you, and access vacation home rentals, new experiences, and places to visit all around the world.',
  },
  {
    name: 'Amazon',
    image: '/images/amazon-registry.png',
    description:
      'Use your Amazon.com Gift Card* towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.',
    currency: 'USD',
    amount: 25.6,
  },
  {
    name: 'Amazon',
    image: '/images/amazon-registry.png',
    description:
      'Use your Amazon.com Gift Card* towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.',
    currency: 'USD',
    amount: 25.6,
  },
  {
    name: 'Gift',
    image: '/images/bloomingdale.png',
    description:
      'Gift-giving has never been easier with the 1-800-FLOWERS.COM® Gift Card! Browse a wide selection of fresh flowers, delicious gourmet treats and desserts, beautiful plants, stunning gift baskets and more – and then choose exactly what you want!',
  },
  {
    isComponent: true,
  },
  {
    name: 'Air',
    image: '/images/traveler.png',
    description:
      'Unforgettable travel experiences start with Airbnb. Find travel adventures and new places to go far away or near to you, and access vacation home rentals, new experiences, and places to visit all around the world.',
  },
];

const Registries = () => {
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
    <div className='bg-white border-t-4 border-primary'>
      <div className='container py-20'>
        <Heading
          label={
            <>
              Sync Your Registries <br /> All in One Place!
            </>
          }
          color='bg-secondary-alternative'
        />
        <div className='my-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-5 sm:px-0 mx-auto sm:max-w-full gap-x-5 sm:gap-x-10 relative'>
          {/* <div className='w-full h-40 flex items-center justify-center p-5 border-4 border-primary rounded-xl overflow-hidden hover:scale-110 transition duration-300 ease-easing'>
            <Image
              width={196}
              height={53}
              src='/images/amazon-registry.png'
              alt='amazon'
            />
          </div> */}
          {registriesCards.map((registriesCard, index) => {
            return (
              <Fragment key={index}>
                {registriesCard.isComponent ? (
                  <div className='w-full h-40 bg-secondary/25 flex flex-col items-center justify-center p-5 border-2 border-secondary rounded-xl overflow-hidden hover:scale-110 transition duration-300 ease-easing my-5'>
                    <Link href='/'>
                      <a className='py-2 px-6 text-white bg-primary hover:bg-primary/80 rounded-3xl text-base mt-5 transition-colors duration-300 whitespace-nowrap'>
                        Create Registry
                      </a>
                    </Link>
                    <Link href='/'>
                      <a className='py-2 px-6 text-blue-500 text-base font-light font-inter hover:underline'>
                        Learn more
                      </a>
                    </Link>
                  </div>
                ) : (
                  <div
                    className={`py-5 relative transition-transform duration-300 ease-easing cursor-pointer ${
                      selected === index ? '' : 'hover:scale-110'
                    }`}
                  >
                    <div
                      className={`w-full h-40 flex items-center justify-center p-5 border-2 border-gray-200 rounded-xl overflow-hidden`}
                      onClick={() => {
                        handleTooltip(index + 1);
                        setTooltip(registriesCard);
                      }}
                    >
                      {selected === index && (
                        <>
                          <div className='absolute bottom-[-18px] left-6 h-8 w-8 border-4 border-gray-200 border-t-transparent border-r-transparent rotate-[135deg] z-10 bg-white'></div>
                          <div className='absolute bottom-[-21px] left-6 h-8 w-8 border-4 border-transparent rotate-[135deg] z-30 bg-white'></div>
                        </>
                      )}
                      <Image
                        width={196}
                        height={53}
                        src={registriesCard.image}
                        alt={registriesCard.name}
                        className='w-full'
                      />
                    </div>
                  </div>
                )}
                {index + 1 === pushItemTo && showTooltip && (
                  <div className='bg-white col-span-full border-2 border-gray-200 px-14 py-12 rounded-lg relative z-20'>
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
          <LinkButton label='See More' href='/' outline />
        </div>
      </div>
    </div>
  );
};

export default Registries;
