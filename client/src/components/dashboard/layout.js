import DashboardHeader from './header';
import DashboardNavLinks from './navLinks';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex space-x-16 py-14'>
      <div className='max-w-xs w-full'>
        <div className='px-14 mb-14'>
          <img src='/images/logo.png' alt='' className='h-14' />
        </div>
        <div className='border-4 border-[#FCE3EB] border-l-0 rounded-l-none rounded-[20px] bg-[#FFFCFD] py-10 px-14'>
          <DashboardNavLinks />
        </div>
      </div>
      <div className='max-w-full'>
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
