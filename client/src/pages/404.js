import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='gradient'>
      <div className='container py-16 min-h-screen flex flex-col space-y-8 items-center justify-center'>
        <div className='max-w-lg mx-auto'>
          <img src='/images/404.svg' alt='' className='w-80' />
        </div>
        <h2 className='text-lg md:text-3xl text-center'>
          The page you've requested is not available
        </h2>
        <Link href='/'>
          <a className='font-inter py-2 sm:py-3 px-5 sm:px-8 text-white sm:text-sm bg-primary font-medium rounded hover:bg-transparent border-[3px] border-primary hover:text-black'>
            Back to home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
