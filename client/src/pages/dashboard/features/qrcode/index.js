import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Button, Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { StarIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { PlusIcon, SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';
const QRCodePage = () => {
  const { user } = useSelector(state => state.user);
  return (
    <>
      <Head>
        <title>Beweddy | QR Code</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom='mb-12' shadow>
        <DashboardHeader title='Personalized QR Code' hideCoupleName />
        <div className='shadow-box mt-14 space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 pr-0 grid grid-cols-3 gap-10'>
              <div className="col-span-2">
                <div className="border-2 border-primary py-10 px-8">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(QRCodePage);
