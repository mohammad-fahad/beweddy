import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  ActivityInfo,
  DashboardHeader,
  WebsitePreviewContainer,
  WeddingDayCountDown,
} from '@components/dashboard';
import { Button, Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { StarIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { PlusIcon, SearchIcon } from '@heroicons/react/outline';
const Dashboard = () => {
  const { user } = useSelector(state => state.user);
  return (
    <>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom='mb-12' shadow>
        <DashboardHeader title='Dashboard 🎉' hideCoupleName />
        <div className='shadow-box mt-14 space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='pl-12 py-10 pr-0 flex items-center space-x-10 justify-between'>
              <Heading h3 className='!font-alice !text-4xl !font-light'>
                <div className='flex items-center space-x-5'>
                  <Image width={40} height={50} src='/icons/ring-tik.svg' />
                  <span>All-In-One Wedding Platform.</span>
                </div>
              </Heading>
              <div>
                <h4 className='text-sm font-medium'>Wedding Day Countdown</h4>
                <WeddingDayCountDown sm />
              </div>
            </div>
            <div className='ml-12'>
              <div className='p-10 border-2 border-gray-200 rounded-md grid grid-cols-4 gap-x-10 gap-y-20'>
                <div className='flex items-center justify-center flex-col space-y-5'>
                  <div className='relative'>
                    <div className='pulse flex items-center justify-center border-2 border-primary rounded-full p-2 w-[90px] h-[90px] bg-secondary-alternative'>
                      <Image
                        width={45}
                        height={45}
                        src='/icons/message-notif.svg'
                      />
                      <span>
                        <span></span>
                      </span>
                    </div>
                  </div>
                  <h4 className='text-xl font-semibold text-center capitalize'>
                    Text invites
                  </h4>
                </div>
                <div className='flex items-center justify-center flex-col space-y-5'>
                  <div className='flex items-center justify-center border-2 border-primary rounded-full p-2 w-[90px] h-[90px] bg-secondary-alternative'>
                    <Image
                      width={45}
                      height={45}
                      src='/icons/message-notif.svg'
                    />
                  </div>
                  <h4 className='text-xl font-semibold text-center capitalize'>
                    Text invites
                  </h4>
                </div>
                <div className='flex items-center justify-center flex-col space-y-5'>
                  <div className='flex items-center justify-center border-2 border-primary rounded-full p-2 w-[90px] h-[90px] bg-secondary-alternative'>
                    <Image
                      width={45}
                      height={45}
                      src='/icons/message-notif.svg'
                    />
                  </div>
                  <h4 className='text-xl font-semibold text-center capitalize'>
                    Text invites
                  </h4>
                </div>
                <div className='flex items-center justify-center flex-col space-y-5'>
                  <div className='flex items-center justify-center border-2 border-primary rounded-full p-2 w-[90px] h-[90px] bg-secondary-alternative'>
                    <Image
                      width={45}
                      height={45}
                      src='/icons/message-notif.svg'
                    />
                  </div>
                  <h4 className='text-xl font-semibold text-center capitalize'>
                    Text invites
                  </h4>
                </div>
                <div className='flex items-center justify-center flex-col space-y-5'>
                  <div className='flex items-center justify-center border-2 border-primary rounded-full p-2 w-[90px] h-[90px] bg-secondary-alternative'>
                    <Image
                      width={45}
                      height={45}
                      src='/icons/message-notif.svg'
                    />
                  </div>
                  <h4 className='text-xl font-semibold text-center capitalize'>
                    Text invites
                  </h4>
                </div>
              </div>
            </div>
            <div className='pl-12 my-10'>
              <ActivityInfo />
              <WebsitePreviewContainer minimal />
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(Dashboard);
