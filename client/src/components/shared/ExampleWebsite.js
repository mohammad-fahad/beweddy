import { Heading, LinkButton } from '@components/shared';
import Head from 'next/head';
import Link from 'next/link';

const ExampleWebsite = ({ label, href, seo }) => {
  return (
    <>
      <Head>
        <title>BeWeddy | {seo.title}</title>
      </Head>
      <div className={`bg-gradient-to-br from-[#FCE3EB] to-white`}>
        <div className='container min-h-screen pb-16'>
          <div className='min-h-[20vh] flex items-center justify-center'>
            <Link href='/'>
              <a className='text-center'>
                <img src='/images/logo.png' alt='' className='h-24 mx-auto' />
              </a>
            </Link>
          </div>
          <div className='w-full min-h-[70vh] flex items-center justify-center'>
            <div className={`flex flex-col items-center justify-center`}>
              <Heading label='Here is an example preview of the website your creating!' />
              <img
                src='/images/wedding-laptop.png'
                alt='Previews'
                className='mx-auto max-w-2xl w-full'
              />
              <div className='my-5 text-center'>
                <LinkButton className='!rounded-md' {...{ href, label }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleWebsite;
