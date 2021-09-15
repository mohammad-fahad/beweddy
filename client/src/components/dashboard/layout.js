import Link from "next/link";
import Drawer from "./drawer";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children, shadow }) => {
  return (
    <div className="flex flex-wrap pb-12 lg:space-x-10 xl:space-x-16 lg:flex-nowrap">
      <div className="w-full lg:max-w-xs">
        {/* <div className='grid grid-cols-2 px-12 lg:grid-cols-none lg:px-0'> */}
        <div className="flex flex-row flex-wrap items-center justify-between px-6 lg:flex-col lg:items-start gap-x-5 gap-y-1 lg:gap-0 sm:px-12 lg:px-0 customContentText">
          <div
            className={`lg:pl-14 lg:min-h-[160px] flex lg:items-center py-5 lg:py-0 customPadding`}
          >
            <Link href="/dashboard">
              <a className={`inline-block space-y-2`}>
                <img
                  src="/images/logo.png"
                  alt=""
                  className="h-14 md:h-[4.5rem] customImage"
                />
                <h3 className="text-base font-medium md:text-lg customLabel">
                  All-In-One Wedding Platform.
                </h3>
              </a>
            </Link>
          </div>
          {/* <div className='self-center col-span-1 lg:col-span-full'> */}
          <Sidebar />
          {/* </div> */}
        </div>
      </div>
      {shadow ? (
        <div className="w-full">{children}</div>
      ) : (
        <div className="w-full px-3">{children}</div>
      )}
    </div>
  );
};

export default DashboardLayout;
