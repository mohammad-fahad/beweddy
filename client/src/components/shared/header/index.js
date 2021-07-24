import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from '@icons-pack/react-simple-icons';

export const Header = () => {
  return (
    <header className='bg-white'>
      <div className='container py-10 flex items-center justify-between space-x-16'>
        {/* Logo */}
        <Link href='/'>
          <a>
            <img src='/images/logo.png' alt='' className='h-25' />
          </a>
        </Link>
        {/* Navigation */}
        <div className='flex-1 space-y-5'>
          {/* Navigation Links */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-8'>
              <Link href='/'>
                <a className='flex items-center space-x-3 text-primary font-bold font-inter hover:text-primary transition-colors duration-300'>
                  <img src='/icons/home.svg' alt='' className='w-5 h-5' />
                  <span>Home</span>
                </a>
              </Link>
              <Link href='/'>
                <a className='flex items-center space-x-3 text-primary/60 font-bold font-inter hover:text-primary transition-colors duration-300'>
                  <img src='/icons/compass.svg' alt='' className='w-5 h-5' />
                  <span>Need your Address</span>
                </a>
              </Link>
              <Link href='/'>
                <a className='flex items-center space-x-3 text-primary/60 font-bold font-inter hover:text-primary transition-colors duration-300'>
                  <img src='/icons/gift.svg' alt='' className='w-5 h-5' />
                  <span>Registry</span>
                </a>
              </Link>
              <Link href='/'>
                <a className='flex items-center space-x-3 text-primary/60 font-bold font-inter hover:text-primary transition-colors duration-300'>
                  <img src='/icons/chat.svg' alt='' className='w-5 h-5' />
                  <span>Text-Email-Mail Invites</span>
                </a>
              </Link>
            </div>
            <div className='flex items-center space-x-8'>
              <Link href='/login'>
                <a className='text-primary font-bold font-inter hover:text-primary/60 transition-colors duration-300'>
                  Login
                </a>
              </Link>
              <Link href='/signup'>
                <a className='text-primary py-3 px-8 border-2 border-primary rounded-[100px] font-bold font-inter hover:text-white hover:bg-primary transition-colors duration-300'>
                  Signup
                </a>
              </Link>
            </div>
          </div>
          {/* Searchbar & Social Links */}
          <div className='flex items-center space-x-20'>
            <div className='relative flex-1'>
              <input
                type='text'
                className='w-full py-3 px-4 border-2 border-primary border-r-0 rounded-r-none rounded-md text-lg font-inter font-bold placeholder-primary/60 focus:ring-0 focus:border-primary'
                placeholder='Find a couple'
              />
              <button className='absolute -right-2 top-0 bottom-0 border-2 border-primary rounded-md py-3 px-6'>
                <img src='/icons/search.svg' alt='' />
              </button>
            </div>
            <div className='flex items-center space-x-9'>
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
      </div>
    </header>
  );
};
