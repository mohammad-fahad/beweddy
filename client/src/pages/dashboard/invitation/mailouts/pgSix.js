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

const composeMethods = [
  { name: "5 items - ($1.99/each)", id: "1" },
  { name: "10 items - ($1.99/each)", id: "2" },
  { name: "20 items - ($1.99/each)", id: "3" },
  { name: "30 items - ($1.99/each)", id: "4" },
  { name: "40 items - ($1.99/each)", id: "5" },
  { name: "50 items - ($1.99/each)", id: "6" },
  { name: "100 items - ($1.99/each)", id: "7" },
];

const PgSix = () => {
  const { user } = useSelector((state) => state.user);

  const [selectComposeMethod, setSelectComposeMethod] = useState(
    composeMethods[0]
  );

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
            <p className="my-5 text-[#545454]">
              Painted Beach Wedding Invitations
            </p>
            <h1 className="text-4xl">Customize Your Sample</h1>

            <p className="my-5">
              Theme color: <span>Pink</span>
            </p>
            <div className="bg-[#FCE0EB] rounded-full h-6 w-6"></div>
            <div className="flex items-center mt-4 my-5">
              <Listbox
                value={selectComposeMethod}
                onChange={setSelectComposeMethod}
              >
                <div className="relative mt-1 my-5">
                  <Listbox.Button className="relative font-inter w-[202px] rounded-[5px] border-2 border-primary py-3 pl-5 pr-10 text-base font-semibold hover:bg-secondary-alternative/50">
                    <span className="block truncate !text-[12px]">
                      {selectComposeMethod.name}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDownIcon
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 min-w-[256px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {composeMethods.map((composeMethod, composeMethodIdx) => (
                        <Listbox.Option
                          key={composeMethodIdx}
                          className={({ active }) =>
                            `${
                              active
                                ? "text-secondary bg-secondary-alternative/50"
                                : "text-gray-900"
                            }
                          cursor-pointer select-none relative py-2 pl-10 pr-4 font-medium !text-[12px]`
                          }
                          value={composeMethod}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? "font-semibold" : "font-medium"
                                } block truncate !text-[12px]`}
                              >
                                {composeMethod.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? "text-amber-600" : "text-amber-600"
                                  }
                                absolute inset-y-0 left-0 flex items-center pl-3 !text-[12px]`}
                                >
                                  <CheckIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <button
              className={`capitalize text-xs md:text-base font-inter font-semibold border-2 border-primary rounded-[5px] bg-[#FCE0EB] py-2 px-3 md:px-5 flex items-center sm:space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300 smallText my-5 w-[414px] flex justify-center`}
            >
              <p>Add to Card</p>
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

export default PgSix;
