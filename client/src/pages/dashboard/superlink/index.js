import Head from "next/head";
import { DashboardHeader, WeddingDayCountDown } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer } from "@components/index";
import { useSelector } from "react-redux";
import { useState } from "react";
import SwiperCore, { Lazy, Autoplay } from "swiper";
import useCopyClipboard from "react-use-clipboard";
import Superlink from "@components/Superlink/Superlink";

SwiperCore.use([Lazy, Autoplay]);

const SuperLink = () => {
  const { user } = useSelector((state) => state.user);
  const [value, setValue] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`
  );
  const [isCopied, setCopied] = useCopyClipboard(value, {
    successDuration: 1500,
  });

  return (
    <>
      <Head>
        <title>Beweddy | Preview Website</title>
      </Head>

      <DashboardTopBar />
      <DashboardLayout>
        <DashboardHeader
          title={
            <h2 className="flex align-center gap-2 !text-[24px] font-semibold leading-7 items-center mudiumTitle">
              Superlink
            </h2>
          }
        ></DashboardHeader>

        <div className="border-4 border-gray-200 rounded-lg">
          <div class="grid grid-cols-12 gap-2 w-full p-8">
            <div class="sm:col-start-4 sm:col-span-4 xs:col-span-12 p-2">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[24px] leading-7 font-medium">
                  Your Unique Superlink
                </h1>
                <div className="relative w-full my-5">
                  <input
                    type="text"
                    className="text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]"
                    placeholder="www.bewe.link/superlink"
                    onClick={setCopied}
                  />
                  <div className="absolute right-1 top-[1px] bottom-[3px] flex items-center justify-center bg-[#ffffff] ">
                    <button
                      onClick={setCopied}
                      className="flex items-center justify-center h-full px-2"
                    >
                      Copy
                    </button>
                    <button
                      onClick={setCopied}
                      className="flex items-center justify-center h-full px-2"
                    >
                      Share
                    </button>
                  </div>
                </div>
                {/* superlink part  */}
                <Superlink user={user} />
                <div className="flex items-center justify-center gap-4 my-5">
                  <button className="bg-[#FCE0EB] w-[96px] h-[44px] rounded ">
                    Edit
                  </button>
                  <button className="bg-[#FCE0EB] w-[96px] h-[44px] rounded ">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <Footer hideSocial />
    </>
  );
};

export default SuperLink;
