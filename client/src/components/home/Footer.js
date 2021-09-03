import { Heading } from '@components/index';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import CreateAccount from './CreateAccount';
import HowItWork from './HowItWork';

const Footer = ({ hideSocial }) => {
  const { user } = useSelector(state => state.user);
  const { pathname } = useRouter();
  return (
    <>
      {!hideSocial && (
        <>
          <div className='bg-gray-50 pb-16 py-20'>
            <Heading
              label='Follow BeWeddy'
              color='bg-secondary-alternative'
              className='lg:!text-4xl'
              lineStyle={{ marginBottom: '30px' }}
            />
            <div className='flex items-center justify-center gap-8 md:gap-14 flex-wrap'>
              <a href='#'>
                <Facebook
                  size={35}
                  color='#1877F2'
                  className='hover:scale-125 transition duration-300'
                />
              </a>
              <a href='#'>
                <Twitter
                  size={35}
                  color='#1DA1F2'
                  className='hover:scale-125 transition duration-300'
                />
              </a>
              <a href='#'>
                <Instagram
                  size={35}
                  color='#E4355F'
                  className='hover:scale-125 transition duration-300'
                />
              </a>
              <a href='#'>
                <Linkedin
                  size={35}
                  color='#0A66C2'
                  className='hover:scale-125 transition duration-300'
                />
              </a>
              <a href='#' title='google'>
                <img
                  src='/icons/gmail.svg'
                  alt='gmail'
                  className='w-[35px] h-[35px] hover:scale-125 transition duration-300'
                />
              </a>
              <a href='#'>
                <Youtube
                  color='#FF0000'
                  size={35}
                  className='hover:scale-125 transition duration-300'
                />
              </a>
            </div>
          </div>
          {pathname === '/' && <HowItWork hideBorderBottom />}
          {!user && <CreateAccount />}
        </>
      )}
      <div className='py-8 bg-gradient-to-br from-[#FCE3EB] to-white border-t-[5px] border-b-[5px] border-primary'>
        <div className='container flex items-center justify-center sm:justify-between gap-5 flex-wrap'>
          <p className='text-base'>
            <strong className='font-semibold'>
              &copy; {new Date().getFullYear()} BeWeddy.
            </strong>{' '}
            All rights reserved.
          </p>
          <div className='flex items-center justify-center sm:justify-between flex-wrap gap-3 sm:gap-6'>
            <Link href='/'>
              <a className='text-primary font-semibold font-inter group hover:text-primary transition-colors duration-300 relative'>
                <span>About BeWeddy!</span>
                <span
                  className={`absolute bottom-[-6px] left-0 w-full h-[2px] bg-primary group-hover:w-full transition-all duration-300`}
                ></span>
              </a>
            </Link>
            <Link href='/'>
              <a className='text-primary/60 font-medium font-inter group hover:text-primary transition-colors duration-300 relative'>
                <span>Privacy Policy</span>
                <span className='absolute bottom-[-6px] left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300'></span>
              </a>
            </Link>
            <Link href='/'>
              <a className='text-primary/60 font-medium font-inter group hover:text-primary transition-colors duration-300 relative'>
                <span>Terms & conditions</span>
                <span className='absolute bottom-[-6px] left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300'></span>
              </a>
            </Link>
            <Link href='/'>
              <a className='text-primary/60 font-medium font-inter group hover:text-primary transition-colors duration-300 relative'>
                <span>Contact us</span>
                <span className='absolute bottom-[-6px] left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300'></span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
