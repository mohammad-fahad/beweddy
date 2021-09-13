import AuthLinks from './AuthLinks';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

const MobileMenu = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-[1400px] px-10 space-y-10 mt-5 pb-16'>
        <NavLinks className='flex-col md:flex-row !space-x-0 sm:!space-x-8 !space-y-6 sm:!space-y-0 !items-start' />
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
