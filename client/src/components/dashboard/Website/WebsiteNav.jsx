import Link from "next/link";

const WebsiteNav = ({ user }) => {
  // const { user } = useSelector((state) => state.user);
  return (
    <div className="bg-[#ffffff] border-b-[3px] border-primary">
      {/* <div className="xxl:pr-0"> */}
      <div className="w-full px-5 !py-3  md:py-0 md:flex-row md:justify-between">
        <div className="mt-2">
          {user && (
            <Link href="/dashboard/website/edit">
              <a className="flex items-center space-x-3 text-sm font-semibold text-gray-700 transition duration-300 md:text-md whitespace-nowrap font-inter hover:text-primary">
                <span>Edit Website</span>
              </a>
            </Link>
          )}
        </div>
        <h3 className="flex items-center justify-center w-full text-lg capitalize">
          {/* <img src="/apple-touch-icon.png" alt="help" className="w-8 h-8" /> */}
          <span className="pl-2 !font-alice text-[36px] font-medium">
            {user?.coupleName}
          </span>
        </h3>
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
