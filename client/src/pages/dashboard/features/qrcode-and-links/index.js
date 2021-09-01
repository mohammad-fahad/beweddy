import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import Image from 'next/image';
import { QRCode } from 'react-qrcode-logo';
import { useState } from 'react';
const QRCodePage = () => {
  // const { user } = useSelector(state => state.user);
  const [value, setValue] = useState('https://beweddy-delta.vercel.app/');
  const [link, setLink] = useState('https://beweddy-delta.vercel.app/');
  const download = () => {
    const canvas = document.querySelector('.qrCode > canvas');

    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'beweddy.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <>
      <Head>
        <title>Beweddy | QR Code & Links</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader title='Personalized QR Code' />
        <div className='shadow-box space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 xl:pr-0 grid xl:grid-cols-3 gap-10'>
              <div className='xl:col-span-2'>
                <div className='border-2 border-primary py-10 px-8'>
                  <div className='flex flex-col space-y-5'>
                    <Heading h3>Create Your Customize QR Code</Heading>
                    <input
                      type='text'
                      className='w-96 rounded-[5px] border-[3px] border-gray-300 py-3 px-5 text-base font-normal placeholder-gray-300'
                      placeholder='www.beweddy.com/nateandash'
                      value={link}
                      onChange={e => setLink(e.target.value)}
                    />
                    <Heading h3>Upload QR Image</Heading>
                    <div className='flex items-center space-x-5'>
                      <button
                        className='bg-white font-inter cursor-pointer text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/80 rounded-[5px] transition-colors duration-300 hover:border-primary'
                        onClick={() => alert('Under construction')}
                      >
                        upload Image
                      </button>
                      <button
                        className='bg-white font-inter cursor-pointer text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/80 rounded-[5px] transition-colors duration-300 hover:border-primary'
                        onClick={() => setValue(link)}
                      >
                        Generate
                      </button>
                    </div>
                    <div className='!mt-10'>
                      <button
                        className='bg-secondary-alternative/40 font-inter cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/80 rounded-[5px] transition duration-300 hover:bg-secondary-alternative/30 hover:border-primary'
                        onClick={download}
                      >
                        Download Your QR Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='xl:col-span-1'>
                <div className='space-y-10'>
                  <h4 className='text-xl text-center font-medium'>
                    Demo QR | Your QR Code
                  </h4>
                  <div className='relative w-80 mx-auto'>
                    <img
                      src='/images/qrcode-mock.png'
                      alt=''
                      className='w-full'
                    />
                    <div className='qrCode absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
                      <QRCode
                        {...{ value }}
                        size={165}
                        // eyeRadius={[
                        //   {
                        //     // top/left eye
                        //     outer: [10, 10, 0, 10],
                        //     inner: [0, 10, 10, 10],
                        //   },
                        //   [10, 10, 10, 0], // top/right eye
                        //   [10, 0, 10, 10], // bottom/left
                        // ]}
                        logoHeight={50}
                        logoWidth={50}
                        // style={{image}
                        logoImage='/icons/circle-ring.png'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-12 xl:pr-0 grid xl:grid-cols-3 gap-10'>
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
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(QRCodePage);
