import Head from "next/head";
import Link from "next/link";
import { DashboardHeader, WeddingDayCountDown } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { CropImage, Footer } from "@components/index";
import { LinkIcon } from "@heroicons/react/outline";
import WebsiteNav from "@components/dashboard/Website/WebsiteNav";

const WebsitePageOne = () => {
  return (
    <>
      <Head>
        <title>Beweddy | Edit Website</title>
      </Head>

      <DashboardTopBar />
      <DashboardLayout>
        <DashboardHeader title="your website" customPadding>
          <div className="flex items-center space-x-5">
            <Link href="/dashboard/website/edit">
              <a className="flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300">
                {/* <PencilIcon className='w-5 h-5' /> */}
                <span>Edit your website</span>
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300">
                <LinkIcon className="w-5 h-5" />
                <span>Share your super link</span>
              </a>
            </Link>
            <Link href="/">
              <a className="py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300">
                Guests Management
              </a>
            </Link>
          </div>
        </DashboardHeader>
        <div className="border-4 border-gray-200 rounded-lg">
          <WebsiteNav />
          {/* banner image */}
          <div>
            <img
              src="/images/website-banner1.png"
              alt="banner"
              className="w-full h-auto bg-center bg-no-repeat bg-cover border-b-[3px] border-primary"
            />
          </div>
          {/* date and Countdown section */}
          <div className="flex flex-col items-center py-6 ">
            <h1 className="text-4xl font-bold ">02/27/2021</h1>
            <div className="w-28 mx-auto h-[2px] md:h-[3px] mb-16 bg-[#FCE0EB] mt-4" />

            <div className="flex justify-center w-full mt-10 space-x-16">
              <div>
                <h4 className="text-[22px] font-medium text-center">
                  Wedding Day Countdown
                </h4>
                <WeddingDayCountDown />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default WebsitePageOne;
