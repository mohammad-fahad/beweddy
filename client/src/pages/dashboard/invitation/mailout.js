import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Button, Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { StarIcon } from '@heroicons/react/solid';
const MailOutInvitationPage = () => {
  return (
    <>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom='mb-[2.1rem]'>
        <DashboardHeader title='Mailout Invites' hideCoupleName hideMarginTop />
        <div className='p-10 border-4 border-gray-200 rounded-lg mt-14 space-y-10'>
          <Heading className='!text-4xl' h3>
            Select A Printable Invitation Design{' '}
            <span className='!lowercase'>and</span> Continue
          </Heading>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14  w-full mb-10'>
            {[...Array(6)].map((_, i) => (
              <div key={i} className='space-y-5'>
                <div className='border-2 border-primary w-full min-h-[280px] flex items-center justify-center rounded-md p-10'>
                  <img src='/images/card.png' alt='' className='h-full' />
                </div>
                <div className='space-y-3'>
                  <h4 className='text-lg font-medium'>4" x 6"</h4>
                  <div className='flex items-center gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className='w-5 h-5 text-gray-400' />
                    ))}
                  </div>
                  <h4 className='text-lg font-medium'>From $0.07</h4>
                  <Button
                    label='ADD TO CART'
                    outline
                    className='!mx-0 text-xs !rounded-[5px] font-semibold font-inter !px-6 !border-[3px]'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(MailOutInvitationPage);
