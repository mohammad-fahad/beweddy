import { CreateWebsiteContainer } from '@components/createWebsite';
import { Heading, LinkButton } from '@components/shared';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Swiper from 'react-id-swiper';

import SwiperCore, { Lazy, Autoplay } from 'swiper';
SwiperCore.use([Lazy, Autoplay]);

const WebsitePreview = () => {
  const params = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  return (
    <CreateWebsiteContainer seo={{ title: 'Preview Your Wedding Website' }}>
      <motion.div
        className={`flex flex-col items-center justify-center`}
        exit={{ opacity: 0 }}
      >
        <motion.div
          exit={{ opacity: 0, scale: 0.5 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Heading
            label='Wedding Website Preview'
            lineStyle={{ marginBottom: '45px' }}
          />
        </motion.div>
        <motion.div
          className='container'
          exit={{ opacity: 0, scale: 1.5 }}
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Swiper {...params}>
            <div>
              <img
                src='/images/wedding-laptop.png'
                alt=''
                className='max-h-[450px] mx-auto swiper-lazy'
              />
              <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
            </div>
            <div>
              <img
                src='/images/wedding-phone.png'
                alt=''
                className='max-h-[450px] mx-auto swiper-lazy'
              />
              <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
            </div>
            <div>
              <img
                src='/images/wedding-macbook.png'
                alt=''
                className='max-h-[460px] mx-auto swiper-lazy'
              />
              <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
            </div>
          </Swiper>
        </motion.div>
        <div className='my-5 text-center'>
          <LinkButton
            href='/create-website/step-7'
            label='Launch Your Wedding Platform'
            className='!rounded-[10px] !py-5 md:!px-10 !text-lg'
          />
        </div>
        <div className='mb-5'>
          <Link href='/create-website/step-1'>
            <a className='text-lg font-inter font-medium text-center capitalize hover:underline'>
              Edit your platform
            </a>
          </Link>
        </div>
      </motion.div>
    </CreateWebsiteContainer>
  );
};

export default WebsitePreview;
