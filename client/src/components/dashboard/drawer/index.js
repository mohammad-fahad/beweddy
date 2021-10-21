import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Fragment, useState } from "react";
import DashboardActiveLink from "../DashboardActiveLink";

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
                          <img
                            src="/images/logo.png"
                            alt=""
                            className="h-8 sm:h-[4rem] mx-auto"
                          />
                          <h3 className="text-base font-medium text-center sm:text-lg">
                            All-In-One Wedding Platform.
                          </h3>
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
