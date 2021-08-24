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
SwiperCore.use([Lazy, Autoplay]);

const data = [
  {
    id: 1,
    title: 'Marrage License',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 2,
    title: 'Officiant Fee',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: 'rgb(221 221 221)',
  },
  {
    id: 3,
    title: 'Wedding Floral',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 4,
    title: 'Marrage License',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 5,
    title: 'Officiant Fee',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 6,
    title: 'Wedding Floral',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 7,
    title: 'Marrage License',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 8,
    title: 'Officiant Fee',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#d6d5d5',
  },
  {
    id: 9,
    title: 'Wedding Floral',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 10,
    title: 'Marrage License',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 11,
    title: 'Officiant Fee',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#DADADA',
  },
  {
    id: 12,
    title: 'Wedding Floral',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 13,
    title: 'Marrage License',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
  {
    id: 14,
    title: 'Officiant Fee',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#DADADA',
  },
  {
    id: 15,
    title: 'Wedding Floral',
    buttonText: 'Link',
    link: 'https://github.com/sonjoybarmon',
    color: '#F9D1DE',
  },
];

const RegistriesPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Beweddy | Registry</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar />
      <DashboardLayout className='container'>
        <DashboardHeader title='Registry'>
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
        <div className='p-20 border-4 border-gray-200 rounded-lg space-y-10'>
          <div class='grid grid-cols-3 gap-10'>
            {data?.map(el => (
              <Link href={el.link}>
                <a
                  key={el.id}
                  className='p-2 border-2 border-gray-200 rounded-lg cursor-pointer'
                >
                  <div
                    className={`bg-[${el?.color}] h-48 w-full border-3 rounded-lg hover:bg-black transition duration-300 `}
                  >
                    <div className='flex items-center justify-center w-full h-full opacity-0 hover:opacity-100'>
                      <LinkIcon className='w-8 h-8 text-white' />
                    </div>
                  </div>

                  <div className='py-4 text-center '>
                    <h3 className='text-2xl font-medium font-inter'>
                      {el.title}
                    </h3>
                    <button className='py-2 px-10 border-gray-900 border-2 rounded-[5px] mt-5 hover:bg-black transition duration-300 hover:text-white font-inter font-medium	'>
                      {el.buttonText}
                    </button>
                  </div>
                </a>
              </Link>
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
      </DashboardLayout>
      <Footer hideSocial />
    </Fragment>
  );
};

export default withAuthRoute(RegistriesPage);
