import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import DashboardActiveLink from "./DashboardActiveLink";
import Drawer from "./drawer";
import { Disclosure } from "@headlessui/react";

const navLinks = [
  {
    label: "We Need Your Address",
    href: "/dashboard/address-and-rsvp",
    icon: "/icons/location.svg",
  },
  // {
  //   label: "Wedding Schedule",
  //   href: "/dashboard/wedding-schedule",
  //   icon: "/icons/todo.svg",
  // },
  // {
  //   label: "Vendors Schedule",
  //   href: "/dashboard/vendors-schedule",
  //   icon: "/icons/home.png",
  // },
  {
    label: "Just Do It List",
    href: "/dashboard/features/todo",
    icon: "/icons/ring-tik.svg",
  },
  {
    label: "QR Code & Links",
    href: "/dashboard/features/qrcode-and-links",
    icon: "/icons/qrcode.svg",
  },
  {
    label: "Text Invites",
    href: "/dashboard/invitation/text",
    icon: "/icons/messages.svg",
  },
  {
    label: "Email Invites",
    href: "/dashboard/invitation/email",
    icon: "/icons/email_send.svg",
  },
  {
    label: "Mailout Invites",
    isComing: false,
    href: "/dashboard/invitation/mailout",
    icon: "/icons/email_add.svg",
  },
  {
    label: "Calender Invites",
    href: "/dashboard/invitation/calender",
    icon: "/icons/note_tick.svg",
  },
  {
    label: "Gift Cards",
    href: "/dashboard/gift-cards",
    icon: "/icons/gift-2.svg",
  },
  {
    label: "Registries",
    href: "/dashboard/registries",
    icon: "/icons/registry.svg",
  },
  {
    label: "Guest Management",
    href: "/dashboard/invitation/rsvp-guest-management",
    icon: "/icons/ic_baseline-rsvp.svg",
  },
];

const specialFeatures = [
  {
    label: "QR Code",
    href: "/dashboard/features/qrcode",
  },
  {
    label: "Super link",
    href: "/dashboard/features/supper-link",
  },
  {
    label: "Templates",
    href: "/dashboard/features/templates",
  },
  {
    label: "Just To Do List",
    href: "/dashboard/features/todo",
  },
];

const DashboardNavLinks = ({ user }) => {
  const [open, setOpen] = useState(false);
  const dashboardRoutes = ["/dashboard", "/dashboard/website/edit"];
  // const featuresRoutes = ['/dashboard/features'];
  const { pathname } = useRouter();

  return (
    <div className="flex flex-col space-y-5">
      <Drawer {...{ open, setOpen }} />
      <div className="flex items-center justify-between space-x-5">
        <DashboardActiveLink
          href="/dashboard"
          className="text-sm md:!text-base lg:!text-lg !font-semibold customLabel"
          customActiveLink={
            dashboardRoutes.includes(pathname) ? "lg:w-full" : "w-0"
          }
          customFontActiveLink={
            dashboardRoutes.includes(pathname) ? "font-bold" : "font-medium"
          }
        >
          Dashboard
        </DashboardActiveLink>
        <button
          className="py-2 pr-0 sm:pl-5 md:pr-5 lg:py-3"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            width="20"
            height="15"
            className="w-4 h-4 lg:w-6 lg:h-6"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.47703C0 0.927025 0.446 0.482025 0.995 0.482025H9.005C9.26889 0.482025 9.52197 0.586855 9.70857 0.773454C9.89517 0.960052 10 1.21313 10 1.47703C10 1.74092 9.89517 1.994 9.70857 2.1806C9.52197 2.3672 9.26889 2.47202 9.005 2.47202H0.995C0.731109 2.47202 0.478028 2.3672 0.291429 2.1806C0.10483 1.994 0 1.74092 0 1.47703Z"
              fill="black"
            />
            <path
              d="M0 7.48203C0 6.93203 0.446 6.48703 0.995 6.48703H19.005C19.2689 6.48703 19.522 6.59186 19.7086 6.77845C19.8952 6.96505 20 7.21814 20 7.48203C20 7.74592 19.8952 7.999 19.7086 8.1856C19.522 8.3722 19.2689 8.47703 19.005 8.47703H0.995C0.731109 8.47703 0.478028 8.3722 0.291429 8.1856C0.10483 7.999 0 7.74592 0 7.48203Z"
              fill="black"
            />
            <path
              d="M0.995 12.492C0.731109 12.492 0.478028 12.5969 0.291429 12.7835C0.10483 12.9701 0 13.2231 0 13.487C0 13.7509 0.10483 14.004 0.291429 14.1906C0.478028 14.3772 0.731109 14.482 0.995 14.482H13.005C13.2689 14.482 13.522 14.3772 13.7086 14.1906C13.8952 14.004 14 13.7509 14 13.487C14 13.2231 13.8952 12.9701 13.7086 12.7835C13.522 12.5969 13.2689 12.492 13.005 12.492H0.995Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="flex-col hidden space-y-5 lg:flex">
        <div className="pr-5">
          <Link href="/dashboard/website">
            <a
              className="block w-full capitalize text-center px-3 py-3 border-2 border-[#FCE3EB] hover:bg-secondary/10 rounded-[5px] transition duration-300"
              onClick={() => {
                window.open(`/couple/${user?.username}`, "_blank");
                window.focus();
              }}
            >
              Your wedding website
            </a>
          </Link>
        </div>
        <Disclosure>
          <Disclosure.Button className="py-2">
            <p className="flex items-center w-full my-1">
              <img src="/note 2.png" alt="" className="w-5 h-5 mr-3" />
              Wedding Forms
            </p>
          </Disclosure.Button>

          <Disclosure.Panel className="ml-3 text-gray-500">
            <div>
              <Link href="/dashboard/wedding-schedule">
                <p className="flex items-center w-full my-1 cursor-pointer">
                  <img src="/edot 2.svg" alt="" className="w-5 h-5 mr-3" />
                  Wedding Schedule
                </p>
              </Link>{" "}
            </div>
            <div>
              <Link href="/dashboard/vendors-schedule">
                <p className="flex items-center w-full my-1 cursor-pointer">
                <svg width="{18}" height="{20}" className='w-6 h-6 mr-3' viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 20.0008H16C16.5304 20.0008 17.0391 19.7901 17.4142 19.415C17.7893 19.0399 18 18.5312 18 18.0008V9.00079C18.0008 8.86919 17.9755 8.73872 17.9258 8.61689C17.876 8.49505 17.8027 8.38423 17.71 8.29079L9.71 0.290793C9.52264 0.104542 9.26919 0 9.005 0C8.74081 0 8.48736 0.104542 8.3 0.290793L0.3 8.29079C0.205512 8.38341 0.130342 8.49385 0.0788453 8.61573C0.0273487 8.7376 0.00054925 8.86849 0 9.00079V18.0008C0 18.5312 0.210714 19.0399 0.585786 19.415C0.960859 19.7901 1.46957 20.0008 2 20.0008ZM7 18.0008V13.0008H11V18.0008H7ZM2 9.41079L9 2.41079L16 9.41079V18.0008H13V13.0008C13 12.4704 12.7893 11.9617 12.4142 11.5866C12.0391 11.2115 11.5304 11.0008 11 11.0008H7C6.46957 11.0008 5.96086 11.2115 5.58579 11.5866C5.21071 11.9617 5 12.4704 5 13.0008V18.0008H2V9.41079Z" fill="black" />
</svg>

                  Vendors Schedule
                </p>
              </Link>
            </div>
          </Disclosure.Panel>
        </Disclosure>
        {navLinks.map((link, index) => (
          <DashboardActiveLink
            href={link.isComing ? "#" : link.href}
            key={index}
            disabled={link.isComing}
          >
            {link.button ? (
              <button className="w-full px-3 py-3 border-2 border-red-300 rounded-sm">
                {link.label}
              </button>
            ) : (
              // <p className='space-x-2'>
              //   <span className='opacity-30'>{link.label}</span>
              //   <small className='opacity-50 text-secondary'>Coming Soon</small>
              // </p>
              <p className="flex items-center justify-center w-full my-1">
                <img src={link.icon} alt="" className="w-5 h-5 mr-3" />
                {link.label}{" "}
              </p>
              // link.label
            )}
          </DashboardActiveLink>
        ))}
      </div>
    </div>
  );
};

export default DashboardNavLinks;
