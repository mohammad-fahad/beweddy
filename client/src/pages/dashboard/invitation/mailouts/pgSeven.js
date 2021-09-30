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
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";

import { QRCode } from "react-qrcode-logo";
import { LinkIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSelector } from "react-redux";

const pgSeven = () => {
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
            <p className="my-5 text-[#545454]">Great choice!</p>
            <h1 className="text-4xl">
              This sample has been added to your cart
            </h1>

            <p className="my-5 text-[#545454]">
              Keep browsing designs, then check out with promo code 3FREE to get
              your samples for free!
            </p>

            <button
              className={`capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 px-3 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText my-5 w-[414px] flex justify-center`}
            >
              <p>Continue Shopping</p>
            </button>
            <button
              className={`capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[white] py-2 px-3 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText my-5 w-[414px] flex justify-center`}
            >
              <p>View Cart</p>
            </button>
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

export default pgSeven;
