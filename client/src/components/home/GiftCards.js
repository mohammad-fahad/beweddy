import { LinkButton, Heading } from '@components/shared';
import Image from 'next/image';

const GiftCards = () => {
  return (
    <div className='bg-gradient-to-br from-[#FCE3EB] to-white'>
      <div className='container py-20'>
        <Heading label='Collect Gifts With The Best 100+ Gift Card Registry ' />
        <div className='my-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-xs mx-auto sm:max-w-full gap-10 relative'>
          <div className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>
            <Image
              width={287}
              height={170}
              src='/images/amazon.png'
              alt='amazon'
              className='w-full'
            />
            <div className='bg-white col-span-full absolute z-10 left bottom-0 w-full max-w-xs mx-auto sm:max-w-full border-2 border-gray-300 rounded-md p-10'></div>
          </div>

          <div className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>
            <Image
              width={287}
              height={170}
              src='/images/gift-2.png'
              alt='Gift'
              className='w-full'
            />
          </div>
          <div className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>
            <Image
              width={287}
              height={170}
              src='/images/air.png'
              alt='Air'
              className='w-full'
            />
          </div>
          <div className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>
            <Image
              width={287}
              height={170}
              src='/images/cake.png'
              alt='cake'
              className='w-full'
            />
          </div>
          <div className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>
            <Image
              width={287}
              height={170}
              src='/images/best-buy.png'
              alt='Best Buy'
              className='w-full'
            />
          </div>
          <div className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>
            <Image
              width={287}
              height={170}
              src='/images/adidas.png'
              alt='Adidas'
              className='w-full'
            />
          </div>
          <div className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>
            <Image
              width={287}
              height={170}
              src='/images/gift-6.png'
              alt='Gift'
              className='w-full'
            />
          </div>
          <div className='w-full rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>
            <Image
              width={287}
              height={170}
              src='/images/reward.png'
              alt='Reward'
              className='w-full'
            />
          </div>
        </div>
        <div className='text-center'>
          <LinkButton label='See More' outline href='/' />
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
