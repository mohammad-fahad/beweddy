import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from '@icons-pack/react-simple-icons';

const SocialLinks = () => {
  return (
    <div className='flex items-center gap-6 xl:gap-9'>
      <a href='#' target='_blank'>
        <Facebook
          size={25}
          className='text-gray-400 hover:text-[#1877F2] transition-colors duration-300'
        />
      </a>
      <a href='#' target='_blank'>
        <Twitter
          size={25}
          className='text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300'
        />
      </a>
      <a href='#' target='_blank'>
        <Instagram
          size={25}
          className='text-gray-500 hover:text-[#E4405F] transition-colors duration-300'
        />
      </a>
      <a href='#' target='_blank'>
        <Linkedin
          size={25}
          className='text-gray-500 hover:text-[#0A66C2] transition-colors duration-300'
        />
      </a>
    </div>
  );
};

export default SocialLinks;
