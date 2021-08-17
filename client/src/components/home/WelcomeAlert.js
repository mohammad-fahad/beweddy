import { XIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const WelcomeAlert = () => {
  const [close, setClose] = useState(false);
  return close ? null : (
    <div className='border-t-4 border-b-4 border-primary bg-secondary-alternative px-16 flex items-center justify-between space-x-10'>
      <p className='text-sm text-medium'>Eat, Drink & BeWeddy!</p>
      <button className='p-5' onClick={() => setClose(true)}>
        <XIcon className='w-6 h-6' />
      </button>
    </div>
  );
};

export default WelcomeAlert;
