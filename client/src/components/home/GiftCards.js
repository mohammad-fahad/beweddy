import { LinkButton, Heading } from '@components/shared';

const GiftCards = () => {
  return (
    <div className='bg-gradient-to-br from-[#FCE3EB] to-white'>
      <div className='container py-20'>
        <Heading label='Collect Gifts With The Best 100+ Gift Card Registry ' />
        <div className='my-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-xs mx-auto sm:max-w-full gap-10'>
          <div className='w-full rounded-xl overflow-hidden'>
            <img src='/images/macys.png' alt='macys' className='w-full' />
          </div>
          <div className='w-full rounded-xl overflow-hidden'>
            <img src='/images/amazon.png' alt='amazon' className='w-full' />
          </div>
          <div className='w-full rounded-xl overflow-hidden'>
            <img src='/images/BestBuy.png' alt='macys' className='w-full' />
          </div>
          <div className='w-full rounded-xl overflow-hidden'>
            <img src='/images/wallmart.png' alt='macys' className='w-full' />
          </div>
        </div>
        <div>
          <LinkButton label='See More' outline href='/' />
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
