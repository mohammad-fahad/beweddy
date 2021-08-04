import { CreateWebsiteContainer } from '@components/createWebsite';
import { Button, Heading, LinkButton } from '@components/shared';
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
        className={`flex flex-col items-center justify-center overflow-hidden`}
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
          className='container overflow-hidden'
          exit={{ opacity: 0, scale: 1.5 }}
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Swiper {...params}>
            <div>
              <img
                src='/images/wedding-laptop.png'
                alt=''
                className='h-full max-h-[250px] md:max-h-[395px] lg:max-h-[450px] mx-auto swiper-lazy'
              />
              <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
            </div>
            <div>
              <img
                src='/images/wedding-phone.png'
                alt=''
                className='h-full max-h-[250px] md:max-h-[395px] lg:max-h-[450px] mx-auto swiper-lazy'
              />
              <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
            </div>
            <div>
              <img
                src='/images/wedding-macbook.png'
                alt=''
                className='h-full max-h-[250px] md:max-h-[395px] lg:max-h-[450px] mx-auto swiper-lazy'
              />
              <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
            </div>
          </Swiper>
        </motion.div>
        <div className='my-5 text-center'>
          <LinkButton
            href='/create-website/step-7'
            label='Launch Your Wedding Platform'
            className='!rounded-[10px] !py-5 md:!px-10'
          />
        </div>
        <div className='mb-5'>
          {/* <Link href='/create-website/step-1'>
            <a className='underline text-sm md:text-lg font-inter font-medium text-center capitalize hover:underline'>
              Edit your platform
            </a>
          </Link> */}
          <Button
            label='Edit your platform'
            className='!border-secondary-alternative !rounded-[10px] hover:!bg-secondary/5 !bg-transparent !text-primary'
            onClick={() =>
              push('/create-website/step-1', null, { shallow: true })
            }
          />
        </div>
      </motion.div>
    </CreateWebsiteContainer>
  );
};

export default WebsitePreview;
