
import ActiveLink from "../ActiveLink";

const NavLinks = ({ className }) => {
  return (
    <div
      className={`flex md:items-center md:gap-5  ${className ? className : ""}`}
    >
      <ActiveLink href="/">
        <img src="/icons/home.svg" alt="" className="w-5 h-5" />
        <span>Home</span>
      </ActiveLink>
      {/* <ActiveLink href='/wedding-website'>
        <HeartIcon className='w-5 h-5' />
        <span>Wedding Website</span>
      </ActiveLink> */}
      <ActiveLink href="/invitations">
        <img
          src="/icons/chat.svg"
          alt="Text-Email-Mail Invites"
          className="w-5 h-5"
        />
        {/* <span>Text-Email-Mail Invites</span> */}
        <span>Invitations</span>
      </ActiveLink>
      <ActiveLink href="/gift-and-registry">
        <img src="/icons/gift.svg" alt="Registry" className="w-5 h-5" />
        <span>Gifts & Registry</span>
      </ActiveLink>
      <ActiveLink href="/address-and-rsvp">
        <img
          src="/icons/compass.svg"
          alt="Need Your Address"
          className="w-5 h-5"
        />
        <span>We Need Your Address</span>
      </ActiveLink>
    </div>
  );
};

export default NavLinks;
