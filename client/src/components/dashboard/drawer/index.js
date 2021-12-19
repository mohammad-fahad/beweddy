import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import DashboardActiveLink from "../DashboardActiveLink";
import { Disclosure } from "@headlessui/react";
import Logo from "../../shared/Logo";

const navLinks = [
  {
    label: "Your Wedding Website",
    href: "/dashboard/website",
  },
  {
    label: "We Need Your Address",
    href: "/dashboard/address-and-rsvp",
  },
  {
    label: "Just Do It List",
    href: "/dashboard/features/todo",
  },
  {
    label: "QR Code & Links",
    href: "/dashboard/features/qrcode-and-links",
  },
  {
    label: "Text Invites",
    href: "/dashboard/invitation/text",
  },
  {
    label: "Email Invites",
    href: "/dashboard/invitation/email",
  },
  {
    label: "Mailout Invites",
    href: "/dashboard/invitation/mailout",
  },
  {
    label: "Calender Invites",
    href: "/dashboard/invitation/calender",
  },
  {
    label: "Gift Cards",
    href: "/dashboard/gift-cards",
  },
  {
    label: "Registries",
    href: "/dashboard/registries",
  },
  {
    label: "Guest Management",
    href: "/dashboard/invitation/rsvp-guest-management",
  },
];

const Drawer = ({ open, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-y-0 left-0 flex max-w-full pr-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 flex pt-4 pl-2 -mr-8 sm:-mr-10 sm:pl-4">
                    <button
                      type="button"
                      className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex flex-col h-full py-6 bg-white shadow-xl">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="flex items-center justify-center">
                      <Link href="/dashboard">
                        <a className={`inline-block space-y-2`}>
                          {/* <img
                            src="/images/logo.png"
                            alt=""
                            className="h-8 sm:h-[4rem] mx-auto"
                          /> */}
                          <div className="flex items-center justify-center">
                            <Logo />
                          </div>
                          {/* <h3 className="text-base font-medium text-center sm:text-lg">
                            All-In-One Wedding Platform.
                          </h3> */}
                        </a>
                      </Link>
                    </Dialog.Title>
                  </div>
                  <div className="relative flex-1 px-4 mt-6 sm:px-6">
                    {/* Replace with your content */}
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div
                        className="h-full overflow-y-auto border-2 border-gray-200 border-dashed"
                        aria-hidden="true"
                      >
                        <div className="flex flex-col px-5 py-5 space-y-4 xs:space-y-5 xs:px-10">
                          <DashboardActiveLink
                            href="/dashboard"
                            className="text-sm md:!text-base lg:!text-lg !font-semibold hover:opacity-70"
                            onClick={() => setOpen((prev) => !prev)}
                            // customActiveLink={
                            //   dashboardRoutes.includes(pathname)
                            //     ? 'lg:w-full'
                            //     : 'w-0'
                            // }
                            // customFontActiveLink={
                            //   dashboardRoutes.includes(pathname)
                            //     ? 'font-bold'
                            //     : 'font-medium'
                            // }
                          >
                            Dashboard
                          </DashboardActiveLink>

                          <Disclosure>
                            <Disclosure.Button className="py-2">
                              <p className="flex items-center w-full my-1">
                                <img
                                  src="/note 2.png"
                                  alt=""
                                  className="w-5 h-5 mr-3"
                                />
                                Wedding Forms
                              </p>
                            </Disclosure.Button>

                            <Disclosure.Panel className="ml-3 text-gray-500">
                              <div>
                                <Link href="/dashboard/wedding-schedule">
                                  <p className="flex items-center w-full my-1 cursor-pointer">
                                    <img
                                      src="/edot 2.svg"
                                      alt=""
                                      className="w-5 h-5 mr-3"
                                    />
                                    Wedding Schedule
                                  </p>
                                </Link>{" "}
                              </div>
                              <div>
                                <Link href="/dashboard/vendors-schedule">
                                  <p className="flex items-center w-full my-1 cursor-pointer">
                                    <svg
                                      width="{18}"
                                      height="{20}"
                                      className='w-6 h-7 mr-3'
                                      viewBox="0 0 18 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M2 20.0008H16C16.5304 20.0008 17.0391 19.7901 17.4142 19.415C17.7893 19.0399 18 18.5312 18 18.0008V9.00079C18.0008 8.86919 17.9755 8.73872 17.9258 8.61689C17.876 8.49505 17.8027 8.38423 17.71 8.29079L9.71 0.290793C9.52264 0.104542 9.26919 0 9.005 0C8.74081 0 8.48736 0.104542 8.3 0.290793L0.3 8.29079C0.205512 8.38341 0.130342 8.49385 0.0788453 8.61573C0.0273487 8.7376 0.00054925 8.86849 0 9.00079V18.0008C0 18.5312 0.210714 19.0399 0.585786 19.415C0.960859 19.7901 1.46957 20.0008 2 20.0008ZM7 18.0008V13.0008H11V18.0008H7ZM2 9.41079L9 2.41079L16 9.41079V18.0008H13V13.0008C13 12.4704 12.7893 11.9617 12.4142 11.5866C12.0391 11.2115 11.5304 11.0008 11 11.0008H7C6.46957 11.0008 5.96086 11.2115 5.58579 11.5866C5.21071 11.9617 5 12.4704 5 13.0008V18.0008H2V9.41079Z"
                                        fill="black"
                                      />
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
                              onClick={() => setOpen((prev) => !prev)}
                              className="hover:opacity-70"
                            >
                              {link.isComing ? (
                                <p className="space-x-2">
                                  <span className="opacity-30">
                                    {link.label}
                                  </span>
                                  <small className="opacity-50 text-secondary">
                                    Coming Soon
                                  </small>
                                </p>
                              ) : (
                                link.label
                              )}
                            </DashboardActiveLink>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Drawer;
