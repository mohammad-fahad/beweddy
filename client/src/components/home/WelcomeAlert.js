import { XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const WelcomeAlert = () => {
  const [close, setClose] = useState(false);
  return close ? null : (
    <div className='border-t-4 border-b-4 border-primary bg-secondary-alternative'>
      <div className='max-w-[1350px] px-10 xxl:px-0 mx-auto flex items-center justify-between space-x-10'>
        <p className='text-sm text-medium'>Eat, Drink & BeWeddy!</p>
        <button className='px-5 py-2' onClick={() => setClose(true)}>
          <XIcon className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default WelcomeAlert;
