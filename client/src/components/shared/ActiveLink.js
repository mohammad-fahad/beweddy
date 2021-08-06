import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();

  return (
    <Link href={href} scroll={false}>
      <a
        // target='_blank'
        className='flex items-center gap-3 text-base text-primary font-bold font-inter group hover:text-primary transition-colors duration-300 relative'
      >
        {children}
        <span
          className={`absolute bottom-[-10px] left-0 h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300 ${
            router.pathname === href ? 'w-full' : 'w-0'
          }`}
        ></span>
      </a>
    </Link>
  );
};

export default ActiveLink;
