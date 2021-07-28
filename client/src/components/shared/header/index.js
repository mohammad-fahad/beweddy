import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from '@icons-pack/react-simple-icons';
import { MenuIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

export const Header = () => {
  return (
    <header className='bg-white'>
      <div className='max-w-6xl px-10 xl:px-0 mx-auto xl:container py-10 flex items-center justify-between gap-5 lg:gap-10 xl:gap-16 flex-wrap'>
        {/* Logo */}
        <Link href='/'>
          <a>
            <img src='/images/logo.png' alt='' className='h-24' />
          </a>
        </Link>
        {/* Navigation */}
        <div className='flex gap-10 xl:gap-0 xl:block flex-row-reverse flex-1 xl:space-y-5'>
          {/* Navigation Links */}
          <div className='flex items-center justify-between'>
            <div className='hidden xl:flex items-center gap-8'>
              <Link href='/'>
                <a className='flex items-center gap-3 text-primary font-bold font-inter group hover:text-primary transition-colors duration-300 relative'>
                  <img src='/icons/home.svg' alt='' className='w-5 h-5' />
                  <span>Home</span>
                  <span
                    className={`absolute bottom-[-10px] left-0 w-full h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300`}
                  ></span>
                </a>
              </Link>
              <Link href='/'>
                <a className='flex items-center gap-3 text-primary/60 font-bold font-inter group hover:text-primary transition-colors duration-300 relative'>
                  <img src='/icons/compass.svg' alt='' className='w-5 h-5' />
                  <span>Need your Address</span>
                  <span className='absolute bottom-[-10px] left-0 w-0 h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300'></span>
                </a>
              </Link>
              <Link href='/'>
                <a className='flex items-center gap-3 text-primary/60 font-bold font-inter group hover:text-primary transition-colors duration-300 relative'>
                  <img src='/icons/gift.svg' alt='' className='w-5 h-5' />
                  <span>Registry</span>
                  <span className='absolute bottom-[-10px] left-0 w-0 h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300'></span>
                </a>
              </Link>
              <Link href='/'>
                <a className='flex items-center gap-3 text-primary/60 font-bold font-inter group hover:text-primary transition-colors duration-300 relative'>
                  <img src='/icons/chat.svg' alt='' className='w-5 h-5' />
                  <span>Text-Email-Mail Invites</span>
                  <span className='absolute bottom-[-10px] left-0 w-0 h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300'></span>
                </a>
              </Link>
            </div>
            <div className='flex items-center gap-5'>
              <Link href='/login'>
                <a className='text-primary py-2 px-6 border-2 border-gray-200 rounded-md font-bold font-inter hover:text-white hover:bg-primary hover:border-primary transition-colors duration-300'>
                  Login
                </a>
              </Link>
              <Link href='/signup'>
                <a className='text-primary py-2 px-6 border-2 border-primary rounded-md font-bold font-inter hover:text-white hover:bg-primary transition-colors duration-300'>
                  Signup
                </a>
              </Link>

              <button className='inline-block xl:hidden text-primary font-bold font-inter group hover:text-primary/60 transition-colors duration-300'>
                <MenuIcon className='w-8 h-8' />
              </button>
            </div>
          </div>
          {/* Searchbar & Social Links */}
          <div className='hidden lg:flex flex-1 items-center gap-10 xl:gap-20'>
            <div className='relative flex-1'>
              <input
                type='text'
                className='w-full py-2 px-5 border-2 border-primary border-r-0 rounded-r-none rounded-md text-lg font-inter font-bold placeholder-primary/60 focus:ring-0 focus:border-primary'
                placeholder='Find a couple'
              />
              <button className='absolute bg-primary text-white -right-2 top-0 bottom-0 border-2 border-primary rounded-md py-3 px-7'>
                <SearchIcon className='w-6 h-6' />
              </button>
            </div>
            <div className='hidden xl:flex items-center gap-6 xl:gap-9'>
              <a href='#'>
                <Facebook
                  size={25}
                  className='text-gray-400 hover:text-[#1877F2] transition-colors duration-300'
                />
              </a>
              <a href='#'>
                <Twitter
                  size={25}
                  className='text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300'
                />
              </a>
              <a href='#'>
                <Instagram
                  size={25}
                  className='text-gray-500 hover:text-[#E4405F] transition-colors duration-300'
                />
              </a>
              <a href='#'>
                <Linkedin
                  size={25}
                  className='text-gray-500 hover:text-[#0A66C2] transition-colors duration-300'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='w-full flex lg:hidden items-center gap-10 xl:gap-20'>
          <div className='relative flex-1'>
            <input
              type='text'
              className='w-full py-2 px-5 border-2 border-primary border-r-0 rounded-r-none rounded-md text-lg font-inter font-bold placeholder-primary/60 focus:ring-0 focus:border-primary'
              placeholder='Find a couple'
            />
            <button className='absolute bg-primary text-white -right-2 top-0 bottom-0 border-2 border-primary rounded-md py-3 px-7'>
              <SearchIcon className='w-6 h-6' />
            </button>
          </div>
          <div className='flex items-center gap-6 xl:gap-9'>
            <a href='#'>
              <Facebook
                size={25}
                className='text-gray-400 hover:text-[#1877F2] transition-colors duration-300'
              />
            </a>
            <a href='#'>
              <Twitter
                size={25}
                className='text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300'
              />
            </a>
            <a href='#'>
              <Instagram
                size={25}
                className='text-gray-500 hover:text-[#E4405F] transition-colors duration-300'
              />
            </a>
            <a href='#'>
              <Linkedin
                size={25}
                className='text-gray-500 hover:text-[#0A66C2] transition-colors duration-300'
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
