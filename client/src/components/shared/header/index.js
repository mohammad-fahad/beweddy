import Link from 'next/link';

import { MenuIcon, XIcon } from '@heroicons/react/solid';
import NavLinks from './NavLinks';
import AuthLinks from './AuthLinks';
import SearchBar from './SearchBar';
import SocialLinks from './SocialLinks';
import MobileMenu from './MobileMenu';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='bg-white relative'>
      <div className='max-w-6xl px-10 xxl:px-0 mx-auto xl:container py-10 flex flex-col gap-5'>
        <div className=' flex items-center justify-between gap-5 lg:gap-16 xl:gap-20 flex-wrap'>
          {/* Logo */}
          <Link href='/'>
            <a className='-mt-[0.6rem]'>
              <img
                src='/images/logo.png'
                alt=''
                className='h-20 w-52 object-cover'
              />
            </a>
          </Link>
          <div className='space-y-8 xl:space-y-10 flex-1 xl:flex-none'>
            {/* Navigation Links Start */}
            <div className='flex items-center justify-between flex-1 gap-20'>
              <div className='hidden xl:block w-full'>
                <NavLinks />
              </div>
              {/* Navigation Links Ends */}
              {/* Authentication Links */}
              <div className='flex items-center sm:ml-auto xl:ml-0 gap-2'>
                <AuthLinks />
                {/* Menu Button */}
                <button
                  className='ml-5 inline-block xl:hidden text-sm text-primary font-bold font-inter group hover:text-primary transition-colors duration-300'
                  onClick={() => setIsOpen(prev => !prev)}
                >
                  {isOpen ? (
                    <XIcon className='w-8 h-8' />
                  ) : (
                    <MenuIcon className='w-8 h-8' />
                  )}
                </button>
              </div>
            </div>
            <div className='hidden md:flex items-center justify-between flex-1 gap-10 xl:gap-20'>
              {/* Search Bar Area */}
              <SearchBar />
              {/* Search Bar Area End */}
              {/* Social Links */}
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className='md:hidden'>
          <SearchBar />
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};
