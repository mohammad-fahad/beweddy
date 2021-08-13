import { SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const DashboardTopBar = () => {
  return (
    <div className='bg-secondary-alternative border-b-[3px] border-primary'>
      <div className='max-w-[1440px] mx-auto px-5 md:px-0'>
        <div className='flex justify-end items-center space-x-5 py-5'>
          <Link href='/'>
            <a className='flex items-center space-x-3 font-inter text-base text-gray-700 hover:text-primary font-semibold transition duration-300'>
              <img src='/icons/lifebuoy.svg' alt='help' className='w-6 h-6' />
              <span>Help</span>
            </a>
          </Link>
          <Link href='/'>
            <a className='flex items-center space-x-3 font-inter text-base text-gray-700 hover:text-primary font-semibold transition duration-300'>
              <img
                src='/icons/profile-2user.svg'
                alt='account'
                className='w-6 h-6'
              />
              <span>Account</span>
            </a>
          </Link>
          <Link href='/'>
            <a className='font-inter text-base text-gray-700 hover:text-primary font-semibold transition duration-300'>
              <SearchIcon className='w-6 h-6' />
            </a>
          </Link>
          <Link href='/'>
            <a className='font-inter text-base text-gray-700 hover:text-primary font-semibold transition duration-300'>
              <img
                src='/icons/notification.svg'
                alt='notification'
                className='w-6 h-6'
              />
            </a>
          </Link>
          <Link href='/'>
            <a className='font-inter text-base text-gray-700 hover:text-primary font-semibold transition duration-300'>
              <img src='/icons/bag.svg' alt='cart' className='w-6 h-6' />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
