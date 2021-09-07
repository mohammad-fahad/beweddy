import Link from 'next/link';
import Drawer from './drawer';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, shadow }) => {
  return (
    <div className='flex lg:space-x-10 xl:space-x-16 pb-12 flex-wrap lg:flex-nowrap'>
      <div className='lg:max-w-xs w-full'>
        {/* <div className='grid grid-cols-2 lg:grid-cols-none px-12 lg:px-0'> */}
        <div className='flex flex-row lg:flex-col items-center lg:items-start gap-x-5 gap-y-1 lg:gap-0 justify-between flex-wrap px-6 sm:px-12 lg:px-0'>
          <div
            className={`lg:pl-14 lg:min-h-[160px] flex lg:items-center py-5 lg:py-0`}
          >
            <Link href='/dashboard'>
              <a className={`inline-block space-y-2`}>
                <img
                  src='/images/logo.png'
                  alt=''
                  className='h-14 md:h-[4.5rem]'
                />
                <h3 className='text-base md:text-lg font-medium'>
                  All-In-One Wedding Platform.
                </h3>
              </a>
            </Link>
          </div>
          {/* <div className='col-span-1 self-center lg:col-span-full'> */}
          <Sidebar />
          {/* </div> */}
        </div>
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
