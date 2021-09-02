import Link from 'next/link';
import NavLinks from './NavLinks';
import AuthLinks from './AuthLinks';
import SearchBar from './SearchBar';
import SocialLinks from './SocialLinks';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileLinks from './profileLinks';
import { XIcon } from '@heroicons/react/outline';

export const Header = () => {
  const { user } = useSelector(state => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <header className='bg-white relative'>
      <div className='max-w-[1400px] px-10 xxl:px-0 mx-auto py-5 md:py-6 flex flex-col gap-5'>
        <div className='flex items-center justify-between lg:gap-10'>
          {/* Logo */}
          <Link href='/'>
            <a className='-mt-[0.6rem]'>
              <img
                src='/images/logo.png'
                alt=''
                className='h-14 sm:h-16 md:h-20 md:w-48 object-contain'
              />
            </a>
          </Link>
          <div className='space-y-8 xl:space-y-10 flex-1 xl:flex-none'>
            {/* Navigation Links Start */}
            <div className='flex items-center justify-between flex-1 gap-20'>
              <div className='hidden xl:block'>
                <NavLinks />
              </div>
              {/* Navigation Links Ends */}
              {/* Authentication Links */}
              <div className='flex items-center ml-auto xl:ml-0 gap-2 sm:min-w-[197px]'>
                {user ? (
                  <div className='hidden sm:block ml-auto'>
                    <ProfileLinks {...{ user }} />
                  </div>
                ) : (
                  <div className='hidden sm:flex items-center gap-2'>
                    <AuthLinks />
                  </div>
                )}
                {/* Menu Button */}
                {/* <button
                  className='ml-5 inline-block sm:hidden text-sm font-bold font-inter group hover:text-primary transition-colors duration-300'
                  onClick={() => {
                    setIsSearchOpen(prev => !prev);
                    setIsOpen(false);
                  }}
                >
                  <SearchIcon className='w-8 h-8 text-gray-700' />
                </button> */}
                <button
                  className='ml-5 inline-block xl:hidden text-sm font-bold font-inter group hover:text-primary transition-colors duration-300'
                  onClick={() => {
                    setIsOpen(prev => !prev);
                    setIsSearchOpen(false);
                  }}
                >
                  {isOpen ? (
                    <XIcon className='w-8 h-8 text-gray-700' />
                  ) : (
                    <svg
                      width='68'
                      height='68'
                      viewBox='0 0 68 68'
                      fill='none'
                      className='w-8 h-8 text-gray-700'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.3335 31.1667H45.3335V36.8333H11.3335V31.1667ZM11.3335 17H56.6668V22.6667H11.3335V17ZM11.3335 51H31.8327V45.3333H11.3335V51Z'
                        fill='black'
                      />
                    </svg>
                  )}
                </button>
                {/* <MenuIcon className='w-8 h-8' /> */}
              </div>
            </div>
            <div className='hidden xl:flex items-center justify-between flex-1 gap-10 xl:gap-20'>
              {/* Search Bar Area */}
              <SearchBar />
              {/* Search Bar Area End */}
              {/* Social Links */}
              {/* <div className='hidden xl:block'> */}
              <SocialLinks />
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className='flex sm:hidden items-center gap-2'>
          {user ? <ProfileLinks {...{ user }} /> : <AuthLinks />}
        </div>
        {/* {isSearchOpen && <SearchBar />} */}
        {/* <div className='hidden xl:hidden sm:flex items-center justify-between flex-1 gap-10 xl:gap-20'> */}
        <div className='xl:hidden flex items-center justify-between flex-1 gap-10 xl:gap-20'>
          {/* Search Bar Area */}
          <SearchBar />
          {/* Search Bar Area End */}
          {/* Social Links */}
          <div className='hidden md:block'>
            <SocialLinks />
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};
