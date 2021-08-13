import Link from 'next/link';

const AuthLinks = () => {
  return (
    <>
      <Link href='/login'>
        <a className='text-sm text-primary py-[11px] px-6 border-2 border-primary rounded-md font-bold font-inter hover:text-white hover:bg-primary hover:border-primary transition-colors duration-300'>
          Login
        </a>
      </Link>
      <Link href='/create-website'>
        <a className='text-sm text-primary py-[11px] px-6 border-2 border-primary rounded-md font-bold font-inter hover:text-white hover:bg-primary transition-colors duration-300'>
          Signup
        </a>
      </Link>
    </>
  );
};

export default AuthLinks;
