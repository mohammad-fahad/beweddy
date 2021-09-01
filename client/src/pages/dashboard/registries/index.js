import Head from 'next/head';
import Link from 'next/link';
import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Button, Footer } from '@components/index';
import { LinkIcon, PencilIcon } from '@heroicons/react/outline';
import SwiperCore, { Lazy, Autoplay } from 'swiper';
import { Fragment } from 'react';
import { withAuthRoute } from '@hoc/withAuthRoute';
import Image from 'next/image';
SwiperCore.use([Lazy, Autoplay]);

const registries = [
  {
    title: 'Amazon',
    link: 'https://github.com/muttakinhasib',
    image: '/images/registries/Amazon.png',
  },
  {
    id: 2,
    title: 'Bed Bath & Beyond',
    buttonText: 'Link',
    link: 'https://github.com/muttakinhasib',
    image: '/images/registries/bbbLogo.png',
  },
];

const RegistriesPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Beweddy | Registry</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom='mb-[2.1rem]' shadow>
        <DashboardHeader title='Just Do It List' />
        <div className='shadow-box space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 xxl:pr-0 space-y-20'>
              <div class='grid grid-cols-4 gap-10'>
                {registries?.map(registry => (
                  <div
                    key={registry.id}
                    className='p-2 border-2 border-gray-200 rounded-lg'
                  >
                    <div
                      className={`border flex items-center justify-center h-36 w-full border-3 rounded-lg transition duration-300 relative group`}
                    >
                      <Link href={registry.link}>
                        <a
                          target='_blank'
                          className='rounded-lg flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 absolute inset-0 z-50 group-hover:bg-black/50'
                        >
                          <LinkIcon className='w-8 h-8 text-white' />
                        </a>
                      </Link>
                      <div>
                        <Image
                          width={195}
                          height={95}
                          src={
                            registry.image || '/images/registries/Amazon.png'
                          }
                        />
                      </div>
                    </div>

                    <div className='py-4 text-center '>
                      <h3 className='text-xl font-medium font-inter'>
                        {registry.title}
                      </h3>
                      <button className='py-2 px-10 border-gray-900 border-2 rounded-[5px] mt-5 hover:bg-black transition duration-300 hover:text-white font-inter font-medium	'>
                        Link
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex items-center space-x-5 flex-wrap sm:flex-nowrap'>
                <Button
                  label='Back'
                  className='opacity-50 !rounded-[5px] !py-2 mx-0'
                  onClick={() => push({ query: { step: 1 } })}
                />
                <Button
                  label='Next'
                  type='submit'
                  className='mx-0 !py-2 !rounded-[5px]'
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </Fragment>
  );
};

export default withAuthRoute(RegistriesPage);
