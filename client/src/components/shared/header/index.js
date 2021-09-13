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
    <header className='relative bg-white'>
      <div className='max-w-[1400px] px-10 xxl:px-0 mx-auto py-5 md:py-6 flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/'>
            <a className='-mt-[0.6rem] inline-block space-y-2'>
              <img
                src='/images/logo.png'
                alt=''
                className='object-contain h-14 sm:h-16 md:h-20 md:w-[200px] w-[235px] '
              />
            </a>
          </Link>
          <div className='flex flex-col space-y-[30px]'>
            <NavLinks />
            <SearchBar />
          </div>
          <div className='flex flex-col space-y-[30px]'>
            {user ? <ProfileLinks {...{ user }} /> : <AuthLinks />}
            <SocialLinks />
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};

{
  /* <div className="flex-1 space-y-8 xl:flex-none ">

            <div className="flex items-center justify-between flex-1 gap-16">
              <div className="hidden xl:block pr-[130px]">
              </div>
              <div className="flex items-center ml-auto xl:ml-0 gap-2 sm:min-w-[197px]">
                {user ? (
                  <div className="hidden ml-auto sm:block">
                    <ProfileLinks {...{ user }} />
                  </div>
                ) : (
                  <div className="items-center hidden gap-2 sm:flex">
                    <AuthLinks />
                  </div>
                )}
                {/* Menu Button */
}
{
  /* <button
                  className='inline-block ml-5 text-sm font-bold transition-colors duration-300 sm:hidden font-inter group hover:text-primary'
                  onClick={() => {
                    setIsSearchOpen(prev => !prev);
                    setIsOpen(false);
                  }}
                >
                  <SearchIcon className='w-8 h-8 text-gray-700' />
                </button> 
                <button
                  className="inline-block ml-5 text-sm font-bold transition-colors duration-300 xl:hidden font-inter group hover:text-primary"
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                    setIsSearchOpen(false);
                  }}
                >
                  {isOpen ? (
                    <XIcon className="w-8 h-8 text-gray-700" />
                  ) : (
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      className="w-8 h-8 text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3335 31.1667H45.3335V36.8333H11.3335V31.1667ZM11.3335 17H56.6668V22.6667H11.3335V17ZM11.3335 51H31.8327V45.3333H11.3335V51Z"
                        fill="black"
                      />
                    </svg>
                  )}
                </button>

              </div>
            </div>
            <div className="items-center justify-between flex-1 hidden gap-10 xl:flex xl:gap-16">

              <SearchBar />
              <SocialLinks />

            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:hidden">
          {user ? <ProfileLinks {...{ user }} /> : <AuthLinks />}
        </div>
       
        <div className="flex items-center justify-between gap-10 xl:hidden xl:gap-20">

            <SearchBar />
          <div className="hidden md:block">
            <SocialLinks />
          </div>
        </div> */
}
