import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import Image from 'next/image';
import DashboardContainer from '@components/dashboard/DashboardContainer';

const SupperLinkPage = () => {
  return (
    <>
      <Head>
        <title>Beweddy | QR Code</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom='mb-[2.1rem]' shadow>
        <DashboardHeader title='Supper Links' hideCoupleName />
        <DashboardContainer>
          <div className='grid xl:grid-cols-3 gap-10'>
            <div className='xl:col-span-1'>
              <div className='space-y-8'>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Your Supper Link
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[330px] w-full py-3 px-5 text-center text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.bw.link/123'
                    />
                  </div>
                </div>
                <div>
                  <Image
                    width={330}
                    height={660}
                    src='/images/feature-mobile.png'
                  />
                </div>
              </div>
            </div>
            <div className='xl:col-span-2'>
              <div className='space-y-10'>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Your Website Link
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.beweddy.com/nateandash'
                    />
                  </div>
                  <a
                    href='#'
                    className='block font-inter font-medium text-sm hover:underline capitalize'
                  >
                    Add Your Custom Domain
                  </a>
                </div>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Gift Cards & Registry Link
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.beweddy.com/nateandash/giftcards'
                    />
                  </div>
                  <a
                    href='#'
                    className='block font-inter font-medium text-sm hover:underline capitalize'
                  >
                    Add Gift Cards & Build Registry
                  </a>
                </div>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    We Need Your Address Link
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.beweddy.com/nateandash/needyouraddress'
                    />
                  </div>
                  <a
                    href='#'
                    className='block font-inter font-medium text-sm hover:underline capitalize'
                  >
                    Manage RSVPs
                  </a>
                </div>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Event Details
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.beweddy.com/nateandash/needyouraddress'
                    />
                  </div>
                  <a
                    href='#'
                    className='block font-inter font-medium text-sm hover:underline capitalize'
                  >
                    Manage Event Details
                  </a>
                </div>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Link Shortener
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='Add link'
                    />
                  </div>
                  <a
                    href='#'
                    className='block font-inter font-medium text-sm hover:underline capitalize'
                  >
                    Shorten the link.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DashboardContainer>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(SupperLinkPage);
