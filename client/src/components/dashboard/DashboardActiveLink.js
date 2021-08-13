import Link from 'next/link';
import { useRouter } from 'next/router';

const DashboardActiveLink = ({ href, children }) => {
  const { pathname } = useRouter();

  return (
    <Link href={href} scroll={false}>
      <a
        // target='_blank'
        className={`text-lg max-w-max text-primary font-inter group hover:text-primary transition-colors duration-300 relative ${
          pathname === href ? 'font-bold' : 'font-medium'
        }`}
      >
        {children}
        <span
          className={`absolute bottom-[-10px] left-0 h-[3px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300 ${
            pathname === href ? 'w-full' : 'w-0'
          }`}
        ></span>
      </a>
    </Link>
  );
};

export default DashboardActiveLink;
