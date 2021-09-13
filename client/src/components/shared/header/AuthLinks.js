import Link from 'next/link';

const AuthLinks = () => {
  return (
    <div className='flex items-center space-x-3'>
      <Link href='/login'>
        <a className='min-w-[102px] text-sm text-primary py-[11px] px-6 border-2 border-primary rounded-md font-bold font-inter hover:text-white hover:bg-primary hover:border-primary transition-colors duration-300'>
          Login
        </a>
      </Link>
      <Link href='/create-website'>
        <a className='min-w-[102px] text-sm text-primary py-[11px] px-6 border-2 border-primary rounded-md font-bold font-inter hover:text-white hover:bg-primary transition-colors duration-300'>
          Sign Up
        </a>
      </Link>
    </div>
  );
};

export default AuthLinks;
