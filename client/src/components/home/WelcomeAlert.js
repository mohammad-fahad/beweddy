import { XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const WelcomeAlert = () => {
  const [close, setClose] = useState(false);
  return close ? null : (
    <div className='border-t-4 border-b-4 border-primary bg-secondary-alternative relative'>
      <button
        className='px-5 py-2 absolute top-1/2 -translate-y-1/2 right-5'
        onClick={() => setClose(true)}
      >
        <XIcon className='w-6 h-6 text-gray-400 hover:text-primary transition' />
      </button>
      <div className='max-w-[1350px] py-2 px-10 xxl:px-0 mx-auto flex items-center justify-between space-x-10'>
        <p className='text-base text-medium'>Eat, Drink & BeWeddy!</p>
      </div>
    </div>
  );
};

export default WelcomeAlert;
