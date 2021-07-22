import { Heading } from '@components/index';
import {
  Facebook,
  Gmail,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from '@icons-pack/react-simple-icons';

const Footer = () => {
  return (
    <div className='bg-white py-16'>
      <Heading label='Follow BeWeddy' color='bg-secondary' />
      <div className='flex items-center justify-center space-x-16'>
        <a href='#'>
          <Facebook size={35} color='#1877F2' />
        </a>
        <a href='#'>
          <Twitter size={35} color='#1DA1F2' />
        </a>
        <a href='#'>
          <Instagram size={35} color='#E4355F' />
        </a>
        <a href='#'>
          <Linkedin size={35} color='#0A66C2' />
        </a>
        <a href='#' title='google'>
          <img src='/icons/gmail.svg' alt='gmail' className='w-[35px]' />
        </a>
        <a href='#'>
          <Youtube color='#FF0000' size={35} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
