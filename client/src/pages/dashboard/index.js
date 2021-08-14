import {
  DashboardHeader,
  ActivityInfo,
  WebsitePreviewContainer,
  WeddingDayCountDown,
} from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { LinkIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>Beweddy | Dashboard</title>
      </Head>
      <DashboardTopBar />
      <DashboardLayout>
        <DashboardHeader title='Welcome to your Beweddy Dashboard'>
          <div className='flex items-center space-x-5'>
            <Link href='/'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-primary rounded-[5px] capitalize font-inter font-semibold hover:bg-gray-100 transition duration-300'>
                <LinkIcon className='w-5 h-5' />
                <span>Share your super link</span>
              </a>
            </Link>
            <Link href='/'>
              <a className='py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                Guests Management
              </a>
            </Link>
          </div>
        </DashboardHeader>
        <ActivityInfo />
        <WebsitePreviewContainer />
        <div className='mt-10 flex w-full space-x-16'>
          <div>
            <h4 className='text-xl font-medium'>Wedding Day Countdown</h4>
            <WeddingDayCountDown />
          </div>
          <button className='font-inter flex items-center justify-center space-x-5 py-8 px-16 rounded-lg border-2 border-secondary/20 bg-secondary-alternative/20 hover:bg-secondary-alternative/5 w-full transition duration-300'>
            <img src='/icons/direct.svg' alt='Registry' className='w-10' />
            <p className='text-xl font-medium capitalize'>
              Build your registry
            </p>
          </button>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;
