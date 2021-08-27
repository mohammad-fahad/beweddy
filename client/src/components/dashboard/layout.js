import Link from 'next/link';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, marginBottom, shadow }) => {
  return (
    <div className='flex space-x-16 py-12'>
      <div className='max-w-xs w-full'>
        <div className={`px-14 ${marginBottom ? marginBottom : 'mb-[3.1rem]'}`}>
          <Link href='/dashboard'>
            <a className={`inline-block ${marginBottom ? 'mt-[-1.3rem]' : ''}`}>
              <img src='/images/logo.png' alt='' className='h-20' />
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
