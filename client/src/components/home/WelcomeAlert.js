import { XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const WelcomeAlert = () => {
  const [close, setClose] = useState(false);
  const { user } = useSelector(state => state.user);
  return close ? null : (
    <div className='relative border-t-4 border-b-4 border-primary bg-secondary-alternative'>
      <button
        className='absolute right-0 px-5 py-2 -translate-y-1/2 top-1/2'
        onClick={() => setClose(true)}
      >
        <XIcon className='w-6 h-6 text-gray-400 transition hover:text-primary' />
      </button>
      <div className='max-w-[1400px] py-2 px-10 xxl:px-0 mx-auto flex items-center justify-between space-x-10'>
        <p className='text-[12px] text-medium flex items-center'>
          <img src='/icons/waving.png' alt='waving' className='pr-1 w-[22px]' />{' '}
          Welcome{' '}
          {user ? (
            <span className='ml-1 capitalize'>
              {user?.role === 'venue'
                ? user?.venue?.businessName
                : user?.coupleName}{' '}
            </span>
          ) : (
            'To BeWeddy '
          )}
        </p>
      </div>
    </div>
  );
};

export default WelcomeAlert;
