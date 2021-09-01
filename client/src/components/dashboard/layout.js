import Link from 'next/link';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, marginBottom, shadow }) => {
  return (
    <div className='flex space-x-16 py-12'>
      <div className='max-w-xs w-full'>
        <div className={`pl-14 ${marginBottom ? marginBottom : 'mb-[3.1rem]'}`}>
          <Link href='/dashboard'>
            <a
              className={`inline-block space-y-2 ${
                marginBottom ? 'mt-[-1.3rem]' : ''
              }`}
            >
              <img src='/images/logo.png' alt='' className='h-14' />
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
