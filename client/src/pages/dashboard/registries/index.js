import Head from 'next/head';
import Link from 'next/link';
import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Button, Footer } from '@components/index';
import { LinkIcon, PencilIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { withAuthRoute } from '@hoc/withAuthRoute';
import Image from 'next/image';
import DashboardContainer from '@components/dashboard/DashboardContainer';

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
  {
    id: 2,
    title: 'Bed Bath & Beyond',
    buttonText: 'Link',
    link: 'https://github.com/muttakinhasib',
    image: '/images/registries/bbbLogo.png',
  },
  {
    id: 2,
    title: 'Bed Bath & Beyond',
    buttonText: 'Link',
    link: 'https://github.com/muttakinhasib',
    image: '/images/registries/bbbLogo.png',
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
        <DashboardHeader title='Registries' />
        <DashboardContainer>
          <div className='space-y-20'>
            <div class='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 registry-grid'>
              {registries?.map(registry => (
                <div
                  key={registry.id}
                  className='p-4 max-w-[250px] bg-white border-2 rounded-md border-gray-200 hover:border-primary transition duration-300 w-full mx-auto'
                >
                  <div
                    className={`border-2 border-primary flex items-center justify-center h-[140px] w-full rounded-[10px] transition duration-300 relative group p-3`}
                  >
                    <Link href={registry.link}>
                      <a
                        target='_blank'
                        className='max-w-[273px] rounded-lg flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 absolute inset-0 z-50 group-hover:bg-black/50'
                      >
                        <LinkIcon className='w-8 h-8 text-white' />
                      </a>
                    </Link>
                    <div>
                      <Image
                        width={200}
                        height={80}
                        src={registry.image || '/images/registries/Amazon.png'}
                      />
                    </div>
                  </div>

                  <div className='py-4 text-center flex flex-col'>
                    <h3 className='text-lg font-semibold font-inter'>
                      {registry.title}
                    </h3>
                    <div>
                      <button className='py-2 inline-block px-8 border-gray-900 border-2 rounded-[5px] mt-5 hover:bg-black transition duration-300 hover:text-white font-inter font-bold'>
                        Link
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex items-center space-x-5 flex-wrap sm:flex-nowrap'>
              <Button
                label='Back'
                className='opacity-50 !rounded-[5px] !py-2 mx-0'
                // onClick={() => push({ query: { step: 1 } })}
              />
              <Button
                label='Next'
                type='submit'
                className='mx-0 !py-2 !rounded-[5px]'
              />
            </div>
          </div>
        </DashboardContainer>
      </DashboardLayout>
      <Footer hideSocial />
    </Fragment>
  );
};

export default withAuthRoute(RegistriesPage);
