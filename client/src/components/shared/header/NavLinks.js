import ActiveLink from '../ActiveLink';

const NavLinks = ({ className }) => {
  return (
    <div
      className={`flex md:items-center md:gap-5 ${className ? className : ''}`}
    >
      <ActiveLink href='/wedding-website'>
        <img src='/icons/home.svg' alt='' className='w-5 h-5' />
        <span>Wedding Website</span>
      </ActiveLink>
      <ActiveLink href='/invitations'>
        <img
          src='/icons/chat.svg'
          alt='Text-Email-Mail Invites'
          className='w-5 h-5'
        />
        <span>Text-Email-Mail Invites</span>
      </ActiveLink>
      <ActiveLink href='/gift-and-registry'>
        <img src='/icons/gift.svg' alt='Registry' className='w-5 h-5' />
        <span>Gifts & Registry</span>
      </ActiveLink>
      <ActiveLink href='/address-and-rsvp'>
        <img
          src='/icons/compass.svg'
          alt='Need Your Address'
          className='w-5 h-5'
        />
        <span>Address & RSVP</span>
      </ActiveLink>
    </div>
  );
};

export default NavLinks;
