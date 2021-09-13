import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from '@icons-pack/react-simple-icons';

const SocialLinks = () => {
  return (
    <div className='flex items-center justify-between space-x-5'>
      <a href='#' target='_blank'>
        <Facebook
          size={25}
          className='text-[#DADADA] hover:text-[#1877F2] transition-colors duration-300'
        />
      </a>
      <a href='#' target='_blank'>
        <Twitter
          size={25}
          className='text-[#DADADA] hover:text-[#1DA1F2] transition-colors duration-300'
        />
      </a>
      <a href='#' target='_blank'>
        <Instagram
          size={25}
          className='text-[#DADADA] hover:text-[#E4405F] transition-colors duration-300'
        />
      </a>
      <a href='#' target='_blank'>
        <Linkedin
          size={25}
          className='text-[#DADADA] hover:text-[#0A66C2] transition-colors duration-300'
        />
      </a>
    </div>
  );
};

export default SocialLinks;
