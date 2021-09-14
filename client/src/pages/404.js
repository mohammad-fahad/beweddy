import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
const NotFoundPage = () => {
  return (
    <motion.div
      className='gradient'
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className='container flex flex-col items-center justify-center min-h-screen py-16 space-y-8'>
        <div className='max-w-lg mx-auto'>
          {/* <img src='/images/404.svg' alt='' className='w-80' /> */}
          <Image
            src='/images/404.png'
            alt='404 image'
            className='w-full'
            width={320}
            height={120}
          />
        </div>
        <h2 className='text-lg text-center md:text-3xl'>
          Oops! Party Foul <br /> The page you've requested is not available
        </h2>
        <Link href='/'>
          <a className='font-inter py-2 sm:py-3 px-5 sm:px-8 text-white sm:text-sm bg-primary font-medium rounded hover:bg-transparent border-[3px] border-primary hover:text-black'>
            Back to home
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
