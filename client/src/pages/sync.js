import { Heading } from '@components/shared';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const SyncNowPage = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Sync Now</title>
      </Head>
      <motion.div
        className='bg-white'
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='container py-16'>
          <div className='w-full mb-14'>
            <Link href='/'>
              <a className='text-center'>
                <img src='/images/logo.png' alt='' className='h-24 mx-auto' />
              </a>
            </Link>
          </div>
          <Heading
            label='We looked around a little...And it seems you already have store registries'
            color='bg-secondary-alternative'
            lineStyle={{ marginBottom: '45px' }}
          />
          <h4 className='text-xl text-center font-medium'>
            Want to sync them now?
          </h4>
          <div className='max-w-sm mx-auto md:max-w-3xl my-10'>
            <div className='divide-y divide-gray-200'>
              <div className='flex flex-col gap-5 py-5'>
                <div className='border border-gray-200 p-2 w-56'>
                  <img src='/icons/amazon.png' alt='' className='h-8 mx-auto' />
                </div>
                <div className='flex items-center gap-3 flex-wrap justify-between'>
                  <div className='flex items-center space-x-3'>
                    <input
                      type='checkbox'
                      id='something'
                      value={true}
                      className='text-primary rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      // {...register('something')}
                    />
                    <label
                      htmlFor='something'
                      className='font-inter text-base font-medium cursor-pointer'
                    >
                      Nathan Sampson & Ashley Sampson
                    </label>
                  </div>
                  <p className='font-light'>08/08/2021</p>
                </div>
              </div>
              <div className='flex flex-col gap-5 py-5'>
                <div className='border border-gray-200 p-2 w-56'>
                  <img src='/icons/amazon.png' alt='' className='h-8 mx-auto' />
                </div>
                <div className='flex items-center gap-3 flex-wrap justify-between'>
                  <div className='flex items-center space-x-3'>
                    <input
                      type='checkbox'
                      id='something'
                      value={true}
                      className='text-primary rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      // {...register('something')}
                    />
                    <label
                      htmlFor='something'
                      className='font-inter text-base font-medium cursor-pointer'
                    >
                      Nathan Sampson & Ashley Sampson
                    </label>
                  </div>
                  <p className='font-light'>08/08/2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SyncNowPage;
