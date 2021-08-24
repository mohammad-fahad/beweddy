import Link from 'next/link';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children, marginBottom }) => {
  return (
    <div className='flex space-x-16 py-12'>
      <div className='max-w-xs w-full'>
        <div className={`px-14 ${marginBottom ? marginBottom : 'mb-20'}`}>
          <Link href='/dashboard'>
            <a>
              <img src='/images/logo.png' alt='' className='h-14' />
            </a>
          </Link>
        </div>
        <Sidebar />
      </div>
      <div className='w-full container pr-16 xxl:pr-0'>{children}</div>
    </div>
  );
};

export default DashboardLayout;
