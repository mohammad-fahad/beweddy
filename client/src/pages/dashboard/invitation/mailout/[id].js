import { DashboardHeader } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer } from "@components/home";
import Head from "next/head";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { AccordionPage } from "@components/shared/CustomAccordion";
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

const Invitation = ({ data }) => {
  const [selectComposeMethod, setSelectComposeMethod] = useState(
    composeMethods[0]
  );

  return (
    <div>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom="mb-[2.1rem]">
        <DashboardHeader
          title="Mail Out Invites"
          hideCoupleName
          hideMarginTop
        />
        <div classNameName="p-10 border-4 border-gray-200 rounded-lg mt-14 space-y-10 shadow-box">
          <div className="flex items-start justify-between ">
            <div class="grid grid-cols-12 w-full">
              <div class="sm:col-span-7 col-span-12 p-2">
                <div>
                  <img
                    src={data?.main}
                    alt={data?.name}
                    className="sm:w-[80%] w-[95%] h-full "
                  />
                </div>
                <div className="mt-10">
                  <img
                    src={data?.backPart}
                    alt={data?.name}
                    className="sm:w-[80%] w-[95%] h-full "
                  />
                </div>
              </div>
              <div class="sm:col-span-5 col-span-12 p-2">
                <h1 className="text-[24px] font-medium leading-7 font-inter max-w-[242px]">
                  {data?.name}
                </h1>
                <div className="mt-[15px]">
                  <h2 coupleName="text-[14px] font-medium ">
                    Color Theme: Pink
                  </h2>
                  <div className="w-[20px] h-[20px] bg-[#FCE0EB] cursor-pointer mt-4 border-2 rounded-full border-black"></div>
                </div>
                <div className="flex items-center mt-4">
                  <Listbox
                    value={selectComposeMethod}
                    onChange={setSelectComposeMethod}
                  >
                    <div className="relative mt-1">
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
                          {composeMethods.map(
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
                  <h1 className="!text-[20px] font-medium ml-4 ">$199</h1>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/dashboard/invitation/mailout/customize/${data?.id}`}
                  >
                    <button className="!w-[202px] !h-[36px] bg-[#FCE0EB] font-bold transition duration-300 border-2 rounded border-[#000000] font-inter text-[12px]">
                      Customize
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <Footer hideSocial />
    </div>
  );
};

export default Invitation;

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
