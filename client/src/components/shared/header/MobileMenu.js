import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const MobileMenu = () => {
  return (
    <div className='bg-white'>
      <div className='container space-y-10 pb-16'>
        <NavLinks />
        <div className='md:hidden'>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
