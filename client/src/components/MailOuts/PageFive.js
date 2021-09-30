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
import InvitationCard from "./InvitationCard";
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

        {/* Need a pagination here */}

        <WebsitePreviewContainer data={"Your Wedding Website"} />

        <div className="flex items-center flex-wrap px-[1.15rem] xs:space-y-0 space-x-3 md:space-x-5 justify-center my-[50px]">
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
