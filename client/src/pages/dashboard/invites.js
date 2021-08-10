import { Button, Heading } from '@components/shared';
import { StarIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const InvitesPage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>BeWeddy | Invites</title>
      </Head>
      <div className='bg-white'>
        <div className='container py-16'>
          <div className='w-full mb-14'>
            <Link href='/'>
              <a className='text-center'>
                <img src='/images/logo.png' alt='' className='h-24 mx-auto' />
              </a>
            </Link>
          </div>
          <Heading
            label='Invites'
            color='bg-secondary-alternative'
            lineStyle={{ marginBottom: '45px' }}
          />
          <h4 className='text-xl text-center font-medium'>
            Upload the design and we will mail and send your
          </h4>
          <div className='max-w-sm mx-auto md:max-w-3xl my-10'>
            <div className='border-2 border-primary p-10 mb-6'>
              <img
                src='/images/invite-card.png'
                alt=''
                className='sm:h-60 object-cover mx-auto'
              />
            </div>
            <p className='font-light'>
              Give your guests an amazing first impression with a stylish
              wedding invitation. These invitations are available in traditional
              sizes and with several different finishing options
            </p>
            <div className='my-16'>
              <Heading
                label='Featured Stores'
                color='bg-secondary-alternative'
                lineStyle={{ marginBottom: '45px' }}
              />
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-10'>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className='space-y-5'>
                    <div className='border-2 border-primary w-full max-h-56 h-full flex items-center justify-center rounded-md p-10'>
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
                        className='!mx-0 text-xs font-medium font-inter !px-6'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvitesPage;
