import { LinkIcon, PencilIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Swiper from 'react-id-swiper';

import SwiperCore, { Lazy, Autoplay } from 'swiper';
SwiperCore.use([Lazy, Autoplay]);

const params = {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

const WebsitePreviewContainer = () => {
  return (
    <div className='mt-10 flex flex-col justify-center space-y-10 rounded-xl border-4 border-secondary-alternative bg-gradient-to-br from-[#FCE3EB] to-white p-16'>
      <h3 className='text-3xl text-center capitalize'>
        Your wedding website preview
      </h3>
      <div className='max-w-xl mx-auto w-full'>
        <Swiper {...params}>
          <div>
            <img
              src='/images/wedding-laptop.png'
              alt=''
              className='md:max-h-[395px] mx-auto swiper-lazy'
            />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
          </div>
          <div>
            <img
              src='/images/wedding-phone.png'
              alt=''
              className='max-h-[250px] md:max-h-[395px] mx-auto swiper-lazy'
            />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
          </div>
          <div>
            <img
              src='/images/wedding-macbook.png'
              alt=''
              className='max-h-[250px] md:max-h-[395px] mx-auto swiper-lazy'
            />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
          </div>
        </Swiper>
      </div>
      <div className='flex items-center space-x-5 justify-center'>
        <Link href='/dashboard/website/edit'>
          <a className='capitalize font-inter font-medium border-4 border-secondary-alternative rounded-[5px] bg-white py-2 px-5 flex items-center space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/5 transition duration-300'>
            <PencilIcon className='w-5 h-5' />
            <span>Edit your website</span>
          </a>
        </Link>
        <Link href='/'>
          <a className='capitalize font-inter font-medium border-4 border-secondary-alternative rounded-[5px] bg-white py-2 px-5 flex items-center space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/5 transition duration-300'>
            <LinkIcon className='w-5 h-5' />
            <span>Share your website link</span>
          </a>
        </Link>
        <Link href='/'>
          <a className='relative capitalize font-inter font-medium border-4 border-secondary-alternative rounded-[5px] bg-white py-2 px-5 flex items-center space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/5 transition duration-300'>
            <LinkIcon className='w-5 h-5' />
            <span>We need your address</span>
            <span className='absolute -bottom-7 left-[-0.8rem] font-light text-sm text-gray-400 capitalize'>
              Share with guests
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WebsitePreviewContainer;
