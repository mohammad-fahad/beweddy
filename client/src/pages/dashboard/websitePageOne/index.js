import Head from "next/head";
import Link from "next/link";
import { DashboardHeader, WeddingDayCountDown } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { CropImage, Footer } from "@components/index";
import { LinkIcon } from "@heroicons/react/outline";
import WebsiteNav from "@components/dashboard/Website/WebsiteNav";
import { useSelector } from "react-redux";

const WebsitePageOne = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user?.questions);
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
            <div className="w-28 mx-auto h-[2px] md:h-[3px]  bg-[#FCE0EB] mt-4" />
            {/* countdown wrapper */}
            <div className="flex justify-center w-full mt-4 space-x-16">
              <div>
                <h4 className="text-[22px] font-medium text-center">
                  Wedding Day Countdown
                </h4>
                <WeddingDayCountDown />
              </div>
            </div>

            {/* address and rsvp button */}

            <div className="my-8">
              <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mb-10" />
              <Link href="/">
                <a className="w-96 flex items-center justify-center space-x-3 py-4 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300">
                  {/* <LinkIcon className="w-5 h-5" /> */}
                  <img src="/icons/todo.svg" alt="banner" className="w-6 h-6" />
                  <span> We Need Your Address & RSVP</span>
                </a>
              </Link>
              <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-10" />
            </div>
            {/* our story */}
            <div>
              <h2 className="text-4xl font-medium text-center">Our Story </h2>
              <p className="w-10/12 m-auto mt-5 text-2xl font-normal text-center">
                We met in the 3rd grade and have been best friends ever since!
                You can say it was love at first sight. we call it destiny. we
                hope you will have the honor to dine, laugh, and dance with us.
                come celebrate!
              </p>
            </div>
            <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-10" />
            {/* Reception Details */}
            <h2 className="text-4xl font-medium text-center">
              Reception Details{" "}
            </h2>

            <div class="grid grid-cols-12 gap-4 w-full mt-5">
              <div class="col-start-2 col-span-5 p-5">
                <h2 className="text-lg">Receptions</h2>
                <h6>Date 1 : {user?.questions?.weddingDay?.firstReception} </h6>
                <h6>
                  Date 1 : {user?.questions?.weddingDay?.secondReception}{" "}
                </h6>
              </div>
              <div class="col-span-5 p-5 flex justify-end">
                <div>
                  <h2 className="text-lg">Locations</h2>
                  <h6>Utah Convention Hall</h6>
                  <h6>Utah, USA</h6>
                </div>
              </div>
            </div>

            {/* timeline section */}
            <div class="grid grid-cols-12 gap-4 w-full mt-5">
              <div class="col-start-2 col-span-5 p-5">
                <h2 className="text-lg">Timeline</h2>
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
