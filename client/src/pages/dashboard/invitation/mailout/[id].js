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
const fakeData = [
  {
    id: "1",
    image:
      "https://designshack.net/wp-content/uploads/free-invitation-templates.jpg",
    name: "Card one",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
    color: "red green blue",
  },
  {
    id: "11",
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg",
    name: "Card two",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "15",
    image:
      "https://www.proweddinginvites.com/images/thumb/files/18/PWIF063.jpg",
    name: "Card three",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "17",
    image:
      "https://legaldbol.com/wp-content/uploads/2019/03/79-Create-Invitation-Card-Template-Free-Vector-in-Photoshop-for-Invitation-Card-Template-Free-Vector.jpg",
    name: "Card four",
    color: "red green blue",

    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "19",
    image:
      "https://file.amockup.com/uploads/2020/08/free-modern-tracing-paper-mock-up1.jpg",
    name: "Card five",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "174",
    image:
      "https://designshack.net/wp-content/uploads/free-invitation-templates.jpg",
    name: "Card one",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "134",
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg",
    name: "Card two",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "1546",
    image:
      "https://www.proweddinginvites.com/images/thumb/files/18/PWIF063.jpg",
    name: "Card three",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "1456",
    image:
      "https://legaldbol.com/wp-content/uploads/2019/03/79-Create-Invitation-Card-Template-Free-Vector-in-Photoshop-for-Invitation-Card-Template-Free-Vector.jpg",
    name: "Card four",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "15464",
    image:
      "https://file.amockup.com/uploads/2020/08/free-modern-tracing-paper-mock-up1.jpg",
    name: "Card five",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "154",
    image:
      "https://designshack.net/wp-content/uploads/free-invitation-templates.jpg",
    name: "Card one",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "14784",
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg",
    name: "Card two",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "17412",
    image:
      "https://www.proweddinginvites.com/images/thumb/files/18/PWIF063.jpg",
    name: "Card three",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "13210",
    image:
      "https://legaldbol.com/wp-content/uploads/2019/03/79-Create-Invitation-Card-Template-Free-Vector-in-Photoshop-for-Invitation-Card-Template-Free-Vector.jpg",
    name: "Card four",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "2301",
    image:
      "https://file.amockup.com/uploads/2020/08/free-modern-tracing-paper-mock-up1.jpg",
    name: "Card five",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
];

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
              <div class="col-span-7 p-2">
                <div>
                  {/* <Image
                    src={data?.image}
                    alt={data?.name}
                    width={800}
                    height={500}
                  /> */}
                  <img
                    src={data?.image}
                    alt={data?.name}
                    className="w-[80%] h-full "
                  />
                </div>
                <div className="mt-10">
                  {/* <Image
                    src={data?.image}
                    alt={data?.name}
                    width={800}
                    height={500}
                  /> */}
                  <img
                    src={data?.image}
                    alt={data?.name}
                    className="w-[80%] h-full "
                  />
                </div>
              </div>
              <div class="col-span-5 p-2">
                <h1 className="text-[24px] font-medium leading-7 font-inter max-w-[242px]">
                  {data?.name}
                </h1>
                <div className="mt-[15px]">
                  <h2 coupleName="text-[14px] font-medium ">
                    Color Theme: Pink
                  </h2>
                  <div className="w-[20px] h-[20px] bg-[#FCE0EB] cursor-pointer mt-4 border-2 rounded-full border-black"></div>
                </div>
                <div className="mt-[15px]">
                  <h2 className="text-[14px] font-medium">
                    Paper Type: Signature
                  </h2>
                  <div className="flex items-center gap-3 mt-4">
                    <button className="px-5 py-2 border-2 border-black bg-[#FCE0EB] rounded ">
                      Signature
                    </button>
                    <button className="px-5 py-2 border-2 border-black rounded ">
                      Pearlescent
                    </button>
                    <button className="px-5 py-2 border-2 border-black rounded ">
                      Recyled
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="!h-[30px] !w-[30px]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.1041 10.0333C12.1041 11.177 11.177 12.1041 10.0333 12.1041H3.96663C2.82294 12.1041 1.89579 11.177 1.89579 10.0333V3.96663C1.89579 2.82294 2.82294 1.89579 3.96663 1.89579H10.0333C11.177 1.89579 12.1041 2.82294 12.1041 3.96663V10.0333ZM10.0333 11.2291C10.6937 11.2291 11.2291 10.6937 11.2291 10.0333V3.96663C11.2291 3.30619 10.6937 2.77079 10.0333 2.77079H3.96663C3.30619 2.77079 2.77079 3.30619 2.77079 3.96663V10.0333C2.77079 10.6937 3.30619 11.2291 3.96663 11.2291H10.0333Z"
                      fill="#3DABDA"
                    />
                    <path
                      d="M6.41659 8.74992C6.41659 8.42775 6.67775 8.16659 6.99992 8.16659C7.32208 8.16659 7.58325 8.42775 7.58325 8.74992C7.58325 9.07208 7.32208 9.33325 6.99992 9.33325C6.67775 9.33325 6.41659 9.07208 6.41659 8.74992Z"
                      fill="#3DABDA"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 4.22913C7.24162 4.22913 7.4375 4.425 7.4375 4.66663V7.58329C7.4375 7.82492 7.24162 8.02079 7 8.02079C6.75838 8.02079 6.5625 7.82492 6.5625 7.58329V4.66663C6.5625 4.425 6.75838 4.22913 7 4.22913Z"
                      fill="#3DABDA"
                    />
                  </svg>
                  <p className="text-[#3DABDA] font-[10px] ">
                    Learn More About Our Paper Collection
                  </p>
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
                <div className="mt-10">
                  <AccordionPage description={data?.description} />
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
  const data = await fakeData.find((item) => item.id === id);
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
