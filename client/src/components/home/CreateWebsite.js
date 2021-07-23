import { LinkButton, Heading } from '@components/index';
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
        <Link href='/signup'>
          <a className='whitespace-nowrap bg-white py-3 px-20 border-2 border-primary text-primary rounded-3xl'>
            Let's Get Started
          </a>
        </Link>
      </div>
      <div className='container py-20'>
        <Heading label='Create Your BeWeddy Website' />
        <img src='/images/wedding-macbook.png' alt='' className='mx-auto' />
        <div className='mt-10 text-center'>
          <LinkButton label='Get Started' href='/signup' />
        </div>
      </div>
    </div>
  );
};

export default CreateWebsite;
