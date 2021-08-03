import AuthLinks from './AuthLinks';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const MobileMenu = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-6xl px-10 md:px-0 md:pl-10 container  space-y-10 mt-5 pb-16'>
        <NavLinks className='flex-col md:flex-row !gap-8 !items-start' />
        <div className='md:hidden'>
          {/* <div className='flex items-center gap-5 mb-8'>
            <AuthLinks />
          </div> */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
