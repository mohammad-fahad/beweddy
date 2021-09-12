import Link from 'next/link';
import { useSelector } from 'react-redux';

const WebsiteNav = ({ coupleName }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="bg-[#ffffff] border-b-[3px] border-primary">
      {/* <div className="xxl:pr-0"> */}
      <div className="flex flex-col flex-wrap items-center justify-center px-5 md:flex-row md:justify-between">
        <h3 className="flex text-lg capitalize">
          <img src="/apple-touch-icon.png" alt="help" className="w-7 h-7" />
          <span className="pl-2 text-2xl font-medium">{user?.coupleName}</span>
        </h3>
        <div className="flex flex-col flex-wrap items-center py-5 space-x-5 md:flex-row">
          <Link href="/">
            <a className="flex items-center space-x-3 text-base font-semibold text-gray-700 transition duration-300 whitespace-nowrap font-inter hover:text-primary">
              <span>Need your Address- RSVP</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center space-x-3 text-base font-semibold text-gray-700 transition duration-300 whitespace-nowrap font-inter hover:text-primary">
              <span>Back to Dashboard</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center space-x-3 text-base font-semibold text-gray-700 transition duration-300 whitespace-nowrap font-inter hover:text-primary">
              <span>Contact</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center space-x-3 text-base font-semibold text-gray-700 transition duration-300 whitespace-nowrap font-inter hover:text-primary">
              <span>Follow us</span>
            </a>
          </Link>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default WebsiteNav;
