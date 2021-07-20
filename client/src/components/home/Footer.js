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
          <Facebook size={40} color='#1877F2' />
        </a>
        <a href='#'>
          <Twitter size={40} color='#1DA1F2' />
        </a>
        <a href='#'>
          <Instagram size={40} color='#E4405F' />
        </a>
        <a href='#'>
          <Linkedin size={40} color='#0A66C2' />
        </a>
        <a href='#'>
          <img src='/icons/gmail.svg' alt='gmail' className='w-[40px]' />
        </a>
        <a href='#'>
          <Youtube color='#FF0000' size={40} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
