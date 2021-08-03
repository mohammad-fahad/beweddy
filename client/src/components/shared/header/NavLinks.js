import Link from 'next/link';

const NavLinks = ({ className }) => {
  return (
    <div
      className={`flex md:items-center md:gap-5 ${className ? className : ''}`}
    >
      <Link href='/'>
        <a className='flex items-center gap-3 text-base text-primary font-bold font-inter group hover:text-primary transition-colors duration-300 relative'>
          <img src='/icons/home.svg' alt='' className='w-5 h-5' />
          <span>Wedding Website</span>
          <span
            className={`absolute bottom-[-10px] left-0 w-full h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300`}
          ></span>
        </a>
      </Link>
      <Link href='/example-website'>
        <a
          target='_blank'
          className='flex items-center gap-3 text-base text-primary font-bold font-inter group hover:text-primary transition-colors duration-300 relative'
        >
          <img
            src='/icons/chat.svg'
            alt='Text-Email-Mail Invites'
            className='w-5 h-5'
          />
          <span>Text-Email-Mail Invites</span>
          <span className='absolute bottom-[-10px] left-0 w-0 h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300'></span>
        </a>
      </Link>
      <Link href='/example-website'>
        <a
          target='_blank'
          className='flex items-center gap-3 text-base text-primary font-bold font-inter group hover:text-primary transition-colors duration-300 relative'
        >
          <img src='/icons/gift.svg' alt='Registry' className='w-5 h-5' />
          <span>Registry</span>
          <span className='absolute bottom-[-10px] left-0 w-0 h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300'></span>
        </a>
      </Link>
      <Link href='/example-website'>
        <a
          target='_blank'
          className='flex items-center gap-3 text-base text-primary font-bold font-inter group hover:text-primary transition-colors duration-300 relative'
        >
          <img
            src='/icons/compass.svg'
            alt='Need Your Address'
            className='w-5 h-5'
          />
          <span>Address & RSVP</span>
          <span className='absolute bottom-[-10px] left-0 w-0 h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300'></span>
        </a>
      </Link>
    </div>
  );
};

export default NavLinks;
