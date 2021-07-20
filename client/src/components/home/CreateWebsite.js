import { Button } from '@components/index';
import Link from 'next/link';

const CreateWebsite = () => {
  return (
    <div
      className='bg-secondary min-h-screen relative'
      style={{
        background: `url('/images/leaf-bg.png'), linear-gradient(to right, #FFD9EC, #FEDFF2)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className='mx-auto absolute left-2/4 -translate-x-2/4 -top-3'>
        <Link href='/get-started'>
          <a className='bg-white py-3 px-20 border-2 border-primary text-primary rounded-3xl'>
            Let's Get Started
          </a>
        </Link>
      </div>
      <div className='container py-20'>
        <h2 className='text-6xl text-center mt-16 pb-10'>
          Create Your BeWeddy Website
        </h2>
        <div className='w-48 mx-auto bg-primary h-1 mb-16' />
        <img src='/images/wedding-macbook.png' alt='' className='mx-auto' />
        <div className='mt-10'>
          <Button label='Get Started' className='block mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default CreateWebsite;
