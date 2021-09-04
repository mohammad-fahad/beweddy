import Head from "next/head";
import Link from "next/link";
import { DashboardHeader, WeddingDayCountDown } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer } from "@components/index";
import { LinkIcon } from "@heroicons/react/outline";
import WebsiteNav from "@components/dashboard/Website/WebsiteNav";
import { useSelector } from "react-redux";
import WebsiteGiftCards from "@components/dashboard/Website/WebsiteGiftCard";
import WebsiteRegistry from "@components/dashboard/Website/websiteRegistry";
import SocialSection from "@components/dashboard/Website/SocialSection";
import { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import WebsiteVideo from "@components/dashboard/Website/WebsiteVideo";
const WebsitePageOne = () => {
  const { user } = useSelector((state) => state.user);
  const [value, setValue] = useState("https://beweddy-delta.vercel.app/");
  console.log(user?.questions);
  return (
    <>
      <Head>
        <title>Beweddy | Edit Website</title>
      </Head>

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
              We met in the 3rd grade and have been best friends ever since! You
              can say it was love at first sight. we call it destiny. we hope
              you will have the honor to dine, laugh, and dance with us. come
              celebrate!
            </p>
          </div>
          <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-10" />
          {/* Reception Details */}
          <h2 className="text-4xl font-medium text-center">
            Reception Details
          </h2>

          <div class="grid grid-cols-12 gap-4 w-full mt-5">
            <div class="col-start-2 col-span-5 p-5">
              <h2 className="text-lg">Receptions</h2>
              <h6>Date 1 : {user?.questions?.weddingDay?.firstReception} </h6>
              <h6>Date 1 : {user?.questions?.weddingDay?.secondReception}</h6>
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
            <div class="col-start-2 col-span-10 p-5">
              <h2 className="text-2xl font-semibold">Timeline</h2>
              <ul>
                {user?.receptionDetails?.map((el) => (
                  <li className="w-full p-3 my-2 border-2 border-gray-300 cursor-pointer">
                    <span className="text-2xl font-bold">{el?.time}</span>
                    {el?.details}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 😇 Bless us with a Gift Card section */}
          <div className="container w-full mt-5">
            <h2 className="text-4xl font-medium text-center">
              😇 Bless us with a Gift Card
            </h2>
            <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-6" />
            <div>
              <WebsiteGiftCards />
            </div>
          </div>

          {/* our Registry section */}

          <div className="container w-full mt-5">
            <h2 className="text-4xl font-medium text-center">Our Registry</h2>
            <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-6" />
            <div>
              <WebsiteRegistry />
            </div>
          </div>

          {/* follow section */}

          <div className="container">
            <div class="grid grid-cols-12 gap-4 w-full mt-5">
              <div class="col-span-6 p-5">
                <SocialSection name={user?.questions?.firstName} />
              </div>
              <div class="col-span-6 p-5">
                <SocialSection name={user?.questions?.spouseFirstName} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Codes  */}

      <div className="bg-gradient-to-br from-[#FCE3EB] to-white border-t-[5px] border-b-[5px] border-primary w-full h-full py-20">
        <div className="flex ">
        
          <div className="container w-full p-0">
            <div className="p-3 bg-white border-4 border-gray-200 rounded-lg">
              <div class="grid grid-cols-12 gap-4 w-full mt-5">
                <div class="col-span-8 p-5 flex justify-center items-center ">
                  <h1 className="text-4xl font-normal">
                    Your Personalized <span className="font-bold">QR Code</span>
                  </h1>
                </div>
                <div class="col-span-4 p-5">
                  <div className="qrCode">
                    <QRCode
                      {...{ value }}
                      size={200}
                      eyeRadius={[
                        {
                          outer: [10, 10, 0, 10],
                          inner: [0, 10, 10, 10],
                        },
                        [10, 10, 10, 0], // top/right eye
                        [10, 0, 10, 10], // bottom/left
                      ]}
                      logoHeight={50}
                      logoWidth={50}
                      logoImage="/icons/circle-ring.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* wedding video */}
      <WebsiteVideo />

      <Footer hideSocial />
    </>
  );
};

export default WebsitePageOne;
