import Link from 'next/link';

const CreateAccount = () => {
  return (
    <div className='bg-primary py-16 flex items-center justify-center text-white'>
      <Link href='/register'>
        <a className='space-x-5 text-2xl font-inter font-semibold flex items-center hover:underline'>
          <span>Create Your Account</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default CreateAccount;
