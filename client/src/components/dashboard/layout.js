import Link from 'next/link';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, shadow }) => {
  return (
    <div className='flex space-x-16 pb-12'>
      <div className='max-w-xs w-full '>
        <div className={`pl-14 min-h-[160px] flex items-center`}>
          <Link href='/dashboard'>
            <a className={`inline-block space-y-2`}>
              <img src='/images/logo.png' alt='' className='h-[4.5rem]' />
              <h3 className='text-lg font-medium'>
                All-In-One Wedding Platform.
              </h3>
            </a>
          </Link>
        </div>
        <Sidebar />
      </div>
      {shadow ? (
        <div className='w-full'>{children}</div>
      ) : (
        <div className='w-full container pr-16 xxl:pr-0'>{children}</div>
      )}
    </div>
  );
};

export default DashboardLayout;
