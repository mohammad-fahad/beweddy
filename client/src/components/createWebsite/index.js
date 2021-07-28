import Head from 'next/head';
import Link from 'next/link';

export const CreateWebsiteContainer = ({ seo, children }) => {
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
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
