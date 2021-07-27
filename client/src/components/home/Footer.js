import { Heading } from '@components/index';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from '@icons-pack/react-simple-icons';

const Footer = () => {
  return (
    <div className='bg-white py-16'>
      <Heading label='Follow BeWeddy' color='bg-secondary-alternative' />
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
  );
};

export default Footer;
