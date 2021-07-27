import { LinkButton, Heading } from '@components/shared';
import Image from 'next/image';
import Link from 'next/link';

const Registries = () => {
  return (
    <div className='bg-white'>
      <div className='container py-20'>
        <Heading
          label={
            <>
              Sync Your Registries <br /> All in One Place!
            </>
          }
          color='bg-secondary-alternative'
        />
        <div className='my-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-xs mx-auto sm:max-w-full gap-6'>
          <div className='w-full h-40 flex items-center justify-center p-5 border-4 border-primary rounded-xl overflow-hidden hover:scale-105 transition duration-300'>
            <Image
              width={196}
              height={53}
              src='/images/amazon-registry.png'
              alt='amazon'
            />
          </div>
          <div className='w-full h-40 flex items-center justify-center p-5 border-4 border-primary rounded-xl overflow-hidden hover:scale-105 transition duration-300'>
            <Image
              width={196}
              height={53}
              src='/images/bloomingdale.png'
              alt='bloomingdale'
            />
          </div>
          <div className='w-full h-40 flex items-center justify-center p-5 border-4 border-primary rounded-xl overflow-hidden hover:scale-105 transition duration-300'>
            <Image
              width={196}
              height={53}
              src='/images/traveler.png'
              alt='traveler'
            />
          </div>
          <div className='w-full h-40 bg-secondary/25 flex flex-col items-center justify-center p-5 border-4 border-primary rounded-xl overflow-hidden hover:scale-105 transition duration-300'>
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
        <div className='text-center'>
          <LinkButton label='See More' href='/' />
        </div>
      </div>
    </div>
  );
};

export default Registries;
