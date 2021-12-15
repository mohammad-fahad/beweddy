import { PencilAltIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSelector } from "react-redux";

const WebsiteNav = ({ user, noEdit }) => {
  const { user: loggedInUser } = useSelector((state) => state.user);
  return (
    <div className="bg-[#ffffff] border-b-[3px] border-primary">
      {/* <div className="xxl:pr-0"> */}
      <div className="w-full flex items-center px-5 !py-3  md:py-0 md:flex-row md:justify-between">
        <div className="">
          {loggedInUser && user && user?.username === loggedInUser?.username && (
            <Link href="/dashboard/website/edit">
              <a className="flex items-center space-x-3 text-sm font-semibold text-gray-700 transition duration-300 md:text-md whitespace-nowrap font-inter hover:text-primary">
                <PencilAltIcon className="w-5 h-5" />
                <span className="subTitle">Edit Website</span>
              </a>
            </Link>
          )}
        </div>
        <h3 className="flex items-center justify-center w-full text-lg capitalize">
          <span className="pl-2 !font-alice text-[36px] font-medium mudiumTitle">
            {user?.coupleName}
          </span>
        </h3>
        <div></div>
        {/* <div className='flex flex-col flex-wrap items-center pt-5 pb-2 space-x-5 md:pb-5 md:flex-row'>
          <Link href={`/couple/${user?.username}/rsvp`}>
            <a className='flex items-center space-x-3 text-sm font-semibold text-gray-700 transition duration-300 md:text-md whitespace-nowrap font-inter hover:text-primary'>
              <span>We Need your Address - RSVP</span>
            </a>
          </Link>
          {user && (
            <Link href='/dashboard'>
              <a className='flex items-center space-x-3 text-sm font-semibold text-gray-700 transition duration-300 md:text-md whitespace-nowrap font-inter hover:text-primary'>
                <span>Back to Dashboard</span>
              </a>
            </Link>
          )}
          <Link href='#'>
            <a className='flex items-center space-x-3 text-sm font-semibold text-gray-700 transition duration-300 md:text-md whitespace-nowrap font-inter hover:text-primary'>
              <span>Follow us</span>
            </a>
          </Link>
        </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default WebsiteNav;
