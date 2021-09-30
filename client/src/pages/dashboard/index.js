import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  ActivityInfo,
  DashboardHeader,
  WebsitePreviewContainer,
  WeddingDayCountDown,
} from "@components/dashboard";
import { Footer } from "@components/index";
import { withAuthRoute } from "@hoc/withAuthRoute";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { useSelector } from "react-redux";
import { GlobeAltIcon, LinkIcon, PencilIcon } from "@heroicons/react/outline";

const navLinks = [
  {
    label: "We need your address",
    route: "/dashboard/address-and-rsvp",
    icon: "/icons/location.svg",
  },
  {
    label: "Just do it list",
    route: "/dashboard/features/todo",
    icon: "/icons/ring-tik.svg",
  },
  {
    label: "QR Code & links",
    route: "/dashboard/features/qrcode-and-links",
    icon: "/icons/qrcode.svg",
  },
  {
    label: "Text invites",
    route: "/dashboard/invitation/text",
    icon: "/icons/messages.svg",
  },
  {
    label: "Email invites",
    route: "/dashboard/invitation/email",
    icon: "/icons/email_send.svg",
  },
  {
    label: "Mailout invites",
    route: "/dashboard/invitation/mailout",
    icon: "/icons/email_add.svg",
  },
  {
    label: "Calender invites",
    route: "/dashboard/invitation/calender",
    icon: "/icons/note_tick.svg",
  },

  {
    label: "Gift cards",
    route: "/dashboard/gift-cards",
    icon: "/icons/gift-2.svg",
  },
  {
    label: "Registry",
    route: "/dashboard/registries",
    icon: "/icons/registry.svg",
  },

  {
    label: "Guest management",
    route: "/dashboard/invitation/rsvp-guest-management",
    icon: "/icons/ic_baseline-rsvp.svg",
  },
];

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Head>
        <title>Beweddy | Dashboard</title>
      </Head>

      <div className="m-auto">
        {/* {loading && <Loader />} */}
        <DashboardTopBar coupleName />
        <DashboardLayout shadow>
          <DashboardHeader
            title={
              <h1 className="flex gap-2 mb-2 text-2xl mudiumTitle">
                Dashboard <img src="/Emoji.png" alt="dashboard" />
              </h1>
            }
          >
            <div className="flex flex-wrap items-center justify-center space-x-1 xs:space-y-0 sm:space-x-3 md:space-x-5">
              <Link href="/dashboard/website/edit">
                <a
                  className={`capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 sm:px-3 px-1 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText`}
                >
                  {/* <PencilIcon className='hidden w-5 h-5 sm:inline-block' /> */}
                  <span className="customLabel">Edit your website</span>
                </a>
              </Link>
              <Link href={`/couple/${user?.username}`}>
                <a
                  target="_blank"
                  className={`capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 sm:px-3 px-1 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText`}
                >
                  {/* <GlobeAltIcon className='hidden w-5 h-5 sm:inline-block' /> */}
                  <span className="customLabel">Preview Website</span>
                </a>
              </Link>
              <Link href="/dashboard/features/qrcode-and-links">
                <a
                  className={`sm:mt-3 xs:mt-0 capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 sm:px-3 px-1 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText`}
                >
                  <LinkIcon className="hidden w-5 h-5 sm:inline-block" />
                  <span className="customLabel">Superlink</span>
                </a>
              </Link>
            </div>
          </DashboardHeader>
          {/* <div className='border border-r-0 rounded-tl-xl border-secondary bg-secondary-alternative/10'>
          <div className='max-w-[1300px] w-full'>

          </div>
        </div> */}
          <div className="space-y-10 shadow-box">
            <div className="max-w-[1300px] w-full">
              <div className="px-6 my-10 sm:px-12 xxl:pr-0 customMarginPadding">
                <div className="text-center mb-[53px] customBottom">
                  <h3 className="relative inline-block text-2xl font-normal">
                    <span className="absolute inline-block w-full mx-auto bottom-[-12px] left-1/2 h-[2px] max-w-[52px] -translate-x-1/2 bg-primary"></span>
                    Your Apps
                  </h3>
                </div>

                {/* <div className="grid mb-[50px] grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-x-5 gap-y-5 sm:gap-10"> */}
                <div className="flex mb-[50px] mt-5  gap-x-5 gap-y-5 sm:gap-5 justify-center items-center flex-wrap">
                  {navLinks.map((link, index) => (
                    <Link key={index} href={link.route}>
                      <a className="flex w-[150px] flex-col items-center justify-center space-y-5 group">
                        <div className="relative">
                          <div className="pulse flex items-center justify-center border-2 border-transparent group-hover:border-primary rounded-full p-2 w-[90px] h-[90px] group-hover:bg-[#FCE0EB] dashboardImage">
                            <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] relative">
                              {/* <Image width={46} height={46} src={link.icon} /> */}
                              <Image
                                layout="fill"
                                src={link.icon}
                                className="relative object-contain w-full"
                              />
                            </div>
                            <span className="!hidden group-hover:!inline-block">
                              <span></span>
                            </span>
                          </div>
                        </div>
                        <h4 className="text-sm font-semibold text-center capitalize whitespace-nowrap dashboardTitle">
                          {link.label}
                        </h4>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              {/* <div className="relative w-full px-6 border-t-4 border-b-4 md:px-10 gradient border-primary"> */}
              <div className="relative w-full px-6 border-t-4 md:px-10 border-primary">
                <div className="text-center my-[50px] dashboardMaringPadding">
                  <h3 className="relative inline-block text-2xl font-normal">
                    <span className="absolute inline-block w-full mx-auto bottom-[-12px] left-1/2 h-[2px] max-w-[52px] -translate-x-1/2 bg-primary"></span>
                    Your Wedding Stats
                  </h3>
                </div>
                <ActivityInfo />
                <WebsitePreviewContainer minimal />
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="inline-block">
                  <Link href="/dashboard/features/qrcode-and-links">
                    <a
                      className={`sm:mt-3 xs:mt-0 capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 px-3 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText`}
                    >
                      <LinkIcon className="hidden w-5 h-5 sm:inline-block" />
                      <span>Share To Collect Address</span>
                    </a>
                  </Link>
                </div>
                <h1 className="text-[24px] leading-[27px] my-5">
                  Let's Eat, Drint & BeWeddy
                </h1>
              </div>

              {/* optional part. */}
            </div>
          </div>
        </DashboardLayout>
        <Footer hideSocial />
      </div>
    </>
  );
};

export default withAuthRoute(Dashboard);
