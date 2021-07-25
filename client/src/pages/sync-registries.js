import { Heading } from '@components/shared';
import Head from 'next/head';
import Link from 'next/link';

const SyncRegistries = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Sync or Link Registries</title>
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
            label='Link All Your Wedding Registries You Want Below!'
            color='bg-secondary-alternative'
            lineStyle={{ marginBottom: '45px' }}
          />
          <h4 className='text-xl text-center font-medium'>My Syncs</h4>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-sm mx-auto md:max-w-5xl w-full my-14'>
            <div className='border border-gray-200 p-5'>
              <img src='/icons/amazon.png' alt='' className='h-12 mx-auto' />
            </div>
            <div className='border border-gray-200 p-5'>
              <img src='/icons/amazon.png' alt='' className='h-12 mx-auto' />
            </div>
            <div className='border border-gray-200 p-5'>
              <img src='/icons/amazon.png' alt='' className='h-12 mx-auto' />
            </div>
          </div>
          <Heading
            label='Featured Stores'
            color='bg-secondary-alternative'
            lineStyle={{ marginBottom: '45px' }}
          />
          <div className='max-w-sm mx-auto md:max-w-5xl mb-16'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-10'>
              {[...Array(6)].map((_, i) => (
                <div key={i} className='border-2 border-primary p-2 rounded-md'>
                  <div className='bg-secondary-alternative w-full h-36 rounded-md' />
                  <div className='p-1 pb-3'>
                    <h4 className='text-base font-semibold mt-3 mb-3'>
                      Marrage License
                    </h4>
                    <p className='font-light'>
                      20% pre-event discount on almost all dresses, suiting,
                      jewelry and intimates
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className='font-light'>
              It's also never too late to create a store registry, and the
              rerailers we've partered with have some great registry perks. See
              &nbsp;
              <Link href='/'>
                <a className='font-inter font-semibold hover:underline'>
                  REGISTRY PERKS
                </a>
              </Link>{' '}
              then signup and return here to sync
            </p>
          </div>
          <Heading
            label='Other Stores I Can Sync'
            color='bg-secondary-alternative'
            lineStyle={{ marginBottom: '45px' }}
          />
          <div className='mb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-xs mx-auto sm:max-w-full gap-6'>
            <div className='w-full h-40 flex items-center justify-center p-5 border-4 border-primary rounded-xl overflow-hidden '>
              <img src='/images/amazon-registry.png' alt='amazon' />
            </div>
            <div className='w-full h-40 flex items-center justify-center p-5 border-4 border-primary rounded-xl overflow-hidden '>
              <img src='/images/bloomingdale.png' alt='bloomingdale' />
            </div>
            <div className='w-full h-40 flex items-center justify-center p-5 border-4 border-primary rounded-xl overflow-hidden '>
              <img src='/images/traveler.png' alt='traveler' />
            </div>
            <div className='w-full h-40 bg-secondary/20 flex flex-col items-center justify-center p-5 border-4 border-primary rounded-xl overflow-hidden '>
              <Link href='/'>
                <a className='py-2 px-6 text-white bg-primary hover:bg-primary/80 rounded-3xl text-base mt-5 transition-colors duration-300'>
                  Create Registry
                </a>
              </Link>
              <Link href='/'>
                <a className='py-2 px-6 text-blue-500 text-base font-light font-inter hover:underline'>
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SyncRegistries;
