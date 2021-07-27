import { LinkButton, Heading } from '@components/index';
import Link from 'next/link';
import Swiper from 'react-id-swiper';

import SwiperCore, { Lazy, Autoplay } from 'swiper';
SwiperCore.use([Lazy, Autoplay]);

const CreateWebsite = () => {
  const params = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  return (
    <div
      className='bg-secondary relative banner'
      style={{
        background: `url('/images/leaf-bg.png'), linear-gradient(to right, #FFD9EC, #FEDFF2)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: '#FEDFF2',
      }}
    >
      <div className='mx-auto absolute left-2/4 -translate-x-2/4 -top-3'>
        <Link href='/signup'>
          <a className='whitespace-nowrap bg-white py-3 px-20 md:px-28 border-2 border-primary text-primary rounded-3xl'>
            Let's Get Started
          </a>
        </Link>
      </div>
      <div className='container py-20'>
        <Heading label='Create Your BeWeddy Website' />
        <Swiper {...params}>
          <div>
            <img
              src='/images/wedding-laptop.png'
              alt=''
              className='mx-auto swiper-lazy'
            />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
          </div>
          <div>
            <img
              src='/images/wedding-phone.png'
              alt=''
              className='mx-auto swiper-lazy'
            />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
          </div>
          <div>
            <img
              src='/images/wedding-macbook.png'
              alt=''
              className='mx-auto swiper-lazy'
            />
            <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
          </div>
        </Swiper>
        <div className='mt-8 text-center'>
          <LinkButton label='Create Your Wedding Website' href='/signup' />
        </div>
      </div>
    </div>
  );
};

export default CreateWebsite;
