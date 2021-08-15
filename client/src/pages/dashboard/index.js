import {
  DashboardHeader,
  ActivityInfo,
  WebsitePreviewContainer,
  WeddingDayCountDown,
} from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Footer } from '@components/home';
import { LinkIcon } from '@heroicons/react/outline';
import { withAuthRoute } from '@hoc/withAuthRoute';
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
        <div className='mt-10 grid grid-cols-3 gap-10'>
          <div className='flex flex-col space-y-8 rounded-lg border-2 border-secondary-alternative bg-secondary-alternative/10 px-10 py-8'>
            <img src='/icons/gift.svg' alt='' className='w-14 h-14' />
            <p className='text-2xl font-medium capitalize'>
              Select gift card <br /> display
            </p>
          </div>
          <div className='flex flex-col space-y-8 rounded-lg border-2 border-secondary-alternative bg-secondary-alternative/10 px-10 py-8'>
            <img src='/icons/mail_outline.svg' alt='' className='w-14 h-14' />
            <div>
              <p className='text-2xl font-medium capitalize'>Invitations</p>
              <div className='flex items-center space-x-10 mt-2'>
                <div>
                  <p className='font-light mb-1'>E-invite</p>
                  <p className='font-light'>Text</p>
                </div>
                <div>
                  <p className='font-light mb-1'>Email</p>
                  <p className='font-light'>Mail</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col space-y-8 rounded-lg border-2 border-secondary-alternative bg-secondary-alternative/10 px-10 py-8'>
            <img src='/icons/direct.svg' alt='' className='w-14 h-14' />
            <p className='text-2xl font-medium capitalize'>
              Collect <br /> Address - RSVP
            </p>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(DashboardPage);
