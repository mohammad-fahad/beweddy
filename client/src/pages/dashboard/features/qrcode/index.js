import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
// import { useSelector } from 'react-redux';
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
        <title>Beweddy | QR Code</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom='mb-[2.1rem]' shadow>
        <DashboardHeader
          title='Personalized QR Code'
          hideCoupleName
          hideMarginTop
        />
        <div className='shadow-box mt-14 space-y-10'>
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
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(QRCodePage);
