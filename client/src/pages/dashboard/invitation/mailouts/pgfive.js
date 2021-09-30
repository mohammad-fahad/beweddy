import Head from "next/head";
import {
  DashboardHeader,
  WebsitePreviewContainer,
} from "@components/dashboard";
import { Button, Footer, Heading, Loader } from "@components/index";
import { withAuthRoute } from "@hoc/withAuthRoute";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";

import { QRCode } from "react-qrcode-logo";
import { LinkIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSelector } from "react-redux";

const PageFive = () => {
  const { user } = useSelector((state) => state.user);

  const [value, setValue] = useState(`${process.env.NEXT_PUBLIC_CLIENT_URL}`);
  return (
    <>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom="mb-[2.1rem]">
        <DashboardHeader
          title="Mail Out Invites"
          hideCoupleName
          hideMarginTop
        />
        <div className="grid grid-cols-12 w-full justify-between ">
          <div className="col-span-6 p-20">
            <img
              src="https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg"
              alt=""
            />
          </div>
          <div className="col-span-6 p-20">
            <h1 className="text-4xl">
              Painted Beach Wedding <br /> Invitations
            </h1>
            <p className="my-5">
              If you’re searching for the perfect invitation for your beach
              wedding, look no further. Painterly, abstract brushstrokes
              representing the sky, sea and sand fill the background of the
              design, with your information set in classic fonts overlaid on
              top. The modern painted design paired with a classic layout is a
              gorgeous combination that is sure to make an impression.
            </p>
            <button
              className={`capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 px-3 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText mb-20`}
            >
              View Product
            </button>
            <p className="text-[30px]">Other Views</p>
            <div className="grid grid-cols-12 w-full justify-between">
              <div className="col-span-4 m-5">
                {" "}
                <img
                  src="https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg"
                  alt=""
                />{" "}
              </div>
              <div className="col-span-4 m-5">
                <img
                  src="https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg"
                  alt=""
                />
              </div>
              <div className="col-span-4 m-5">
                <img
                  src="https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Need a pagination here */}
        <WebsitePreviewContainer data={"Your Wedding Website"} />
        <div className="flex items-center flex-wrap px-[1.15rem] xs:space-y-0 space-x-3 md:space-x-5 justify-center my-[50px] ">
          <Link href="/dashboard/website/edit">
            <a
              className={`capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 px-3 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText`}
            >
              {/* <PencilIcon className='hidden w-5 h-5 sm:inline-block' /> */}
              <span>Edit your website</span>
            </a>
          </Link>
          <Link href={`/couple/${user?.username}`}>
            <a
              target="_blank"
              className={`capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 px-3 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText`}
            >
              {/* <GlobeAltIcon className='hidden w-5 h-5 sm:inline-block' /> */}
              <span>Preview Website</span>
            </a>
          </Link>
          <Link href="/dashboard/features/qrcode-and-links">
            <a
              className={`sm:mt-3 xs:mt-0 capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 px-3 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText`}
            >
              <LinkIcon className="hidden w-5 h-5 sm:inline-block" />
              <span>Superlink</span>
            </a>
          </Link>
        </div>
      </DashboardLayout>

      <Footer hideSocial />
    </>
  );
};

export default PageFive;
