import { DashboardHeader } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer } from "@components/home";
import Head from "next/head";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { mailoutBox } from "@components/MailOuts/mailoutData";

const composeMethods = [
  { name: "5 items - ($1.99/each)", id: "1" },
  { name: "10 items - ($1.99/each)", id: "2" },
  { name: "20 items - ($1.99/each)", id: "3" },
  { name: "30 items - ($1.99/each)", id: "4" },
  { name: "40 items - ($1.99/each)", id: "5" },
  { name: "50 items - ($1.99/each)", id: "6" },
  { name: "100 items - ($1.99/each)", id: "7" },
];

const fontSelection = [
  { name: "Font Selection", id: "1" },
  { name: "Inter", id: "2" },
  { name: "Alice", id: "3" },
  { name: "Roboto", id: "4" },
  { name: "Open Sans", id: "5" },
  { name: "Lato", id: "6" },
  { name: "Montserrat", id: "7" },
  { name: "Poppins", id: "7" },
];
const colorSelection = [
  { name: "White", id: "10" },
  { name: "Red", id: "1" },
  { name: "Orange", id: "2" },
  { name: "Yellow", id: "3" },
  { name: "Green", id: "4" },
  { name: "Blue", id: "5" },
  { name: "Cyan", id: "6" },
  { name: "White", id: "7" },
];

const Customize = ({ data }) => {
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
  const [frontPart, setFrontPart] = useState(true);
  const [backPart, setBackPart] = useState(false);
  const [selectComposeMethod, setSelectComposeMethod] = useState(
    composeMethods[0]
  );
  const [fontSelectionMethod, setFontSelectionMethod] = useState(
    fontSelection[0]
  );
  const [colorSelectionMethod, setColorSelectionMethod] = useState(
    colorSelection[0]
  );

  useEffect(() => {
    setFrontPart(data?.image1);
    setBackPart(data?.backPart);
  }, []);

  console.log("data", data);
  return (
    <div>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom="mb-[2.1rem]">
        <DashboardHeader
          title={
            <div>
              <h1 className="text-[24px] font-semibold"> Mail Out Invites</h1>
              <h3 className="text-[12px] font-semibold">
                Invitations/Mail Out Invitation/ Tamplate 1
              </h3>
            </div>
          }
          hideCoupleName
          hideMarginTop
        />
        <div classNameName="p-10 border-4 border-gray-200 rounded-lg mt-14 space-y-10 shadow-box">
          <div className="flex items-start justify-between ">
            <div class="grid grid-cols-12 w-full">
              <div class="col-span-12 p-2">
                <div>
                  <h1 className="text-[24px] font-medium">
                    Beloved Floral Wedding Invitation
                  </h1>
                  <h3 className="text-[14px] font-medium">
                    After saving, you will still be able to return to edit your
                    designs.
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="mt-5 border-2 rounded border-[#000000] inline-block">
                    <button
                      onClick={() => {
                        setFront(true);
                        setBack(false);
                      }}
                      className={`!w-[95px] !h-[36px] ${
                        front ? "bg-[#FCE0EB]" : "bg-[#ffffff]"
                      } font-semibold transition duration-300 font-inter text-[12px]`}
                    >
                      Edit Front
                    </button>
                    <button
                      onClick={() => {
                        setBack(true);
                        setFront(false);
                      }}
                      className={`!w-[95px] !h-[36px] ${
                        back ? "bg-[#FCE0EB]" : "bg-[#ffffff]"
                      } font-semibold transition duration-300  font-inter text-[12px]`}
                    >
                      Edit back
                    </button>
                  </div>
                  <Link
                    href={`/dashboard/invitation/mailout/customize/review/${data?.id}`}
                  >
                    <button
                      className={`!w-[142px] !h-[36px] bg-[#FCE0EB] font-semibold transition duration-300  font-inter text-[12px] border-2 rounded border-[#000000]`}
                    >
                      Review & Save
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd part */}
          <div className="flex items-start justify-between ">
            <div class="grid grid-cols-12 w-full">
              <div class="col-span-6">
                <div className="mt-5 border-2 border-[#000000] w-full flex">
                  <Listbox
                    value={fontSelectionMethod}
                    onChange={setFontSelectionMethod}
                    className="w-[60%]  border-r-2 border-[#000000]"
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full h-full py-1 pl-5 pr-10 text-base font-semibold font-inter">
                        <span className="block truncate !text-[12px]">
                          {fontSelectionMethod?.name}
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
                        <Listbox.Options className="absolute z-10 min-w-[400px] py-2 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {fontSelection?.map(
                            (composeMethod, composeMethodIdx) => (
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
                                        selected
                                          ? "font-semibold"
                                          : "font-medium"
                                      } block truncate !text-[12px]`}
                                    >
                                      {composeMethod.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`${
                                          active
                                            ? "text-amber-600"
                                            : "text-amber-600"
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
                            )
                          )}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                  <Listbox
                    value={colorSelectionMethod}
                    onChange={setColorSelectionMethod}
                    className="w-[40%]"
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full h-full py-2 pl-5 pr-10 text-base font-semibold font-inter">
                        <span className="block truncate !text-[12px]">
                          {colorSelectionMethod?.name}
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
                        <Listbox.Options className="absolute z-10 min-w-[280px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {colorSelection?.map(
                            (composeMethod, composeMethodIdx) => (
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
                                        selected
                                          ? "font-semibold"
                                          : "font-medium"
                                      } block truncate !text-[12px]`}
                                    >
                                      {composeMethod.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`${
                                          active
                                            ? "text-amber-600"
                                            : "text-amber-600"
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
                            )
                          )}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                {/* 2nd box */}
                <div className="border-2 border-[#000000] w-full h-[600px] flex">
                  <ul className="p-5">
                    <li className="flex items-center gap-2">
                      <span>
                        <svg
                          width="5"
                          height="11"
                          viewBox="0 0 5 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="2" height="2" fill="black" />
                          <rect x="3" width="2" height="2" fill="black" />
                          <rect y="3" width="2" height="2" fill="black" />
                          <rect x="3" y="3" width="2" height="2" fill="black" />
                          <rect y="6" width="2" height="2" fill="black" />
                          <rect x="3" y="6" width="2" height="2" fill="black" />
                          <rect y="9" width="2" height="2" fill="black" />
                          <rect x="3" y="9" width="2" height="2" fill="black" />
                        </svg>
                      </span>
                      <span>T</span> Text
                    </li>
                    <li className="flex items-center gap-2 mt-3">
                      <span>
                        <svg
                          width="5"
                          height="11"
                          viewBox="0 0 5 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="2" height="2" fill="black" />
                          <rect x="3" width="2" height="2" fill="black" />
                          <rect y="3" width="2" height="2" fill="black" />
                          <rect x="3" y="3" width="2" height="2" fill="black" />
                          <rect y="6" width="2" height="2" fill="black" />
                          <rect x="3" y="6" width="2" height="2" fill="black" />
                          <rect y="9" width="2" height="2" fill="black" />
                          <rect x="3" y="9" width="2" height="2" fill="black" />
                        </svg>
                      </span>
                      <span>B</span> Background
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-span-6">
                <div className="mt-5 border-2 border-[#000000] !h-[44px] w-full"></div>
                {/* 2nd box */}
                <div className="border-2 border-[#000000] w-full flex h-[600px] relative">
                  <div className="flex items-center justify-center w-full h-full bg-[#F7F3F3]">
                    <img
                      src={front ? frontPart : backPart}
                      alt={data?.name}
                      className="w-[90%] h-[90%] "
                    />
                  </div>
                  <div className="absolute top-0 right-0 border-2 border-[#000000] inline-block p-2">
                    camera
                  </div>
                </div>
              </div>
              <div class="col-span-12 flex justify-end border-2 rounded border-[#000000] p-0 m-0">
                <div className="inline-block">
                  <button
                    className={`!w-[95px] !h-[36px] ${
                      front ? "bg-[#FCE0EB]" : "bg-[#ffffff]"
                    } font-semibold transition duration-300 font-inter text-[12px]`}
                  >
                    Full Screen
                  </button>
                  <button
                    className={`!w-[95px] !h-[36px] ${
                      back ? "bg-[#FCE0EB]" : "bg-[#ffffff]"
                    } font-semibold transition duration-300 font-inter text-[12px]`}
                  >
                    Cut Lines
                  </button>
                </div>
              </div>
              <div class="col-span-12 flex justify-end p-0 mt-10">
                <button
                  className={`!w-[95px] !h-[36px] font-semibold transition duration-300 font-inter text-[12px] border-2 rounded border-[#000000]`}
                >
                  Reset Design
                </button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <Footer hideSocial />
    </div>
  );
};

export default Customize;

export const getServerSideProps = async ({ params: { id } }) => {
  const data = await mailoutBox.find((item) => item.id === id);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data || [],
    },
  };
};
