import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from '@icons-pack/react-simple-icons';

const SocialSection = ({ name, links }) => {
  return (
    <div>
      <h2 className='text-2xl font-medium capitalize'>Follow {name && name}</h2>
      <div className='w-40  h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-3' />
      <div className='flex flex-wrap mt-6 items-center  gap-5 md:gap-5'>
        {links?.facebook && (
          <a href={links?.facebook}>
            <Facebook
              size={35}
              color='#1877F2'
              className='transition duration-300 hover:scale-125'
            />
          </a>
        )}
        {links?.twitter && (
          <a href={links?.twitter}>
            <Twitter
              size={35}
              color='#1DA1F2'
              className='transition duration-300 hover:scale-125'
            />
          </a>
        )}
        {links?.twitter && (
          <a href={links?.twitter}>
            <Instagram
              size={35}
              color='#E4355F'
              className='transition duration-300 hover:scale-125'
            />
          </a>
        )}
        {links?.linkedIn && (
          <a href={links?.linkedIn}>
            <Linkedin
              size={35}
              color='#0A66C2'
              className='transition duration-300 hover:scale-125'
            />
          </a>
        )}
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
            className='transition duration-300 hover:scale-125'
          />
        </a>
      </div>
    </div>
  );
};

export default SocialSection;
