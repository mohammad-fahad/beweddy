import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Footer } from '@components/home';
import { LinkIcon, PencilIcon } from '@heroicons/react/outline';
import { withAuthRoute } from '@hoc/withAuthRoute';
import Head from 'next/head';
import Link from 'next/link';

const DashboardWebsitePage = () => {
  return (
    <>
      <Head>
        <title>Beweddy | Dashboard</title>
      </Head>
      <DashboardTopBar />
      <DashboardLayout>
        <DashboardHeader title='Your website'>
          <div className='flex items-center space-x-5'>
            <Link href='/dashboard/website/edit'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                <PencilIcon className='w-5 h-5' />
                <span>Edit your website</span>
              </a>
            </Link>
            <Link href='/'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
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
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(DashboardWebsitePage);
