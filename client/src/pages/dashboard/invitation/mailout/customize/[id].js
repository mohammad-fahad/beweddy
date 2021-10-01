import { DashboardHeader } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer } from "@components/home";
import Head from "next/head";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { AccordionPage } from "@components/shared/CustomAccordion";
import Image from "next/image";
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
const Customize = ({ data }) => {
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
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
                      className={`!w-[95px] !h-[36px] ${
                        front ? "bg-[#FCE0EB]" : "bg-[#ffffff]"
                      } font-semibold transition duration-300 font-inter text-[12px]`}
                    >
                      Edit Front
                    </button>
                    <button
                      className={`!w-[95px] !h-[36px] ${
                        back ? "bg-[#FCE0EB]" : "bg-[#ffffff]"
                      } font-semibold transition duration-300  font-inter text-[12px]`}
                    >
                      Edit back
                    </button>
                  </div>
                  <button
                    className={`!w-[142px] !h-[36px] bg-[#FCE0EB] font-semibold transition duration-300  font-inter text-[12px] border-2 rounded border-[#000000]`}
                  >
                    Review & Save
                  </button>
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
                    value={selectComposeMethod}
                    onChange={setSelectComposeMethod}
                    className="w-[60%]  border-r-2 border-[#000000]"
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full h-full py-1 pl-5 pr-10 text-base font-semibold font-inter">
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
                        <Listbox.Options className="absolute z-10 min-w-[400px] py-2 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                  <Listbox
                    value={selectComposeMethod}
                    onChange={setSelectComposeMethod}
                    className="w-[40%]"
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full h-full py-2 pl-5 pr-10 text-base font-semibold font-inter">
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
                        <Listbox.Options className="absolute z-10 min-w-[280px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                </div>
                {/* 2nd box */}
                <div className="border-2 border-[#000000] w-full h-[600px] flex">
                  <h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ea, maiores! Odit cupiditate sequi itaque, libero aut
                    tenetur ipsa earum ea iste nihil deleniti doloribus,
                    accusantium sapiente est ex, modi facere minima quae
                    voluptatem temporibus commodi eaque? Cum similique enim
                    obcaecati a quae cupiditate in minima dolor animi fuga
                    inventore alias voluptatem delectus consectetur qui
                    voluptates, rem necessitatibus architecto error itaque ad
                    eaque eos natus corrupti! Inventore praesentium, dolores
                    architecto fugiat, tempora perspiciatis debitis autem quia
                    doloribus ut soluta veniam labore facere suscipit totam
                    commodi laudantium. Explicabo doloremque culpa in temporibus
                    voluptates et, iste provident impedit nemo eos, neque
                    repellat eligendi magnam repudiandae eius cumque earum. Sunt
                    alias officiis soluta doloremque doloribus deserunt,
                    blanditiis laboriosam? Explicabo distinctio quia, officia
                    dolore impedit error harum maxime labore nihil laborum
                    eveniet ea dignissimos nulla nesciunt facilis at tenetur
                    architecto libero? Eum iste explicabo quas ipsam, molestias
                    numquam eaque inventore assumenda enim optio amet, beatae
                    illum voluptate deserunt incidunt voluptatem corporis animi
                    dolorum! Cum consequatur, illo unde, nulla quam id, dolorem
                    nam velit perferendis ex veniam dicta eius tempore quasi quo
                    voluptatem perspiciatis iusto vitae minus repudiandae magnam
                    doloribus vel! Quod fugiat quo eos debitis sed consectetur
                    cupiditate doloremque, aliquam accusantium similique ipsam
                    aspernatur odit deleniti, porro qui corrupti corporis? Animi
                    minus dolore dicta, harum voluptatem suscipit quia officia
                    earum? Assumenda libero nostrum voluptates ipsam suscipit
                    laboriosam consequatur deleniti vitae officia ratione. Quas
                    expedita recusandae vitae, similique, earum facilis
                    perferendis incidunt esse mollitia quasi reprehenderit
                    pariatur? Ea laboriosam similique, et consectetur excepturi
                    ratione voluptatibus unde numquam nihil itaque autem,
                    blanditiis rem suscipit impedit molestiae, tempora ad
                    molestias corrupti vero? Voluptatibus aliquam sint
                    exercitationem ratione explicabo eos blanditiis minima, a
                    ullam odit! Eos quibusdam porro autem ad similique
                  </h1>
                </div>
              </div>
              <div class="col-span-6">
                <div className="mt-5 border-2 border-[#000000] !h-[44px] w-full"></div>
                {/* 2nd box */}
                <div className="border-2 border-[#000000] w-full flex h-[600px] ">
                  <div className="flex items-center justify-center w-full h-full bg-[#F7F3F3]">
                    <img
                      src={data?.image}
                      alt={data?.name}
                      className="w-[80%] h-[90%] "
                    />
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
                    {/* <span className="mr-2">
                      <svg
                        width="1078"
                        height="1354"
                        viewBox="0 0 1078 1354"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d)">
                          <rect
                            x="9"
                            y="2"
                            width="1184"
                            height="1332"
                            rx="10"
                            fill="#FEFEFE"
                          />
                          <rect
                            x="9.5"
                            y="2.5"
                            width="1183"
                            height="1331"
                            rx="9.5"
                            stroke="#EEEEEE"
                          />
                        </g>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M814.664 802.343C814.664 802.757 815 803.093 815.414 803.093L817.907 803.093V805.586C817.907 806 818.243 806.336 818.657 806.336C819.071 806.336 819.407 806 819.407 805.586V802.343C819.407 801.929 819.071 801.593 818.657 801.593L815.414 801.593C815 801.593 814.664 801.929 814.664 802.343Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M818.657 809.664C818.243 809.664 817.907 810 817.907 810.414L817.907 812.907L815.414 812.907C815 812.907 814.664 813.243 814.664 813.657C814.664 814.071 815 814.407 815.414 814.407L818.657 814.407C819.071 814.407 819.407 814.071 819.407 813.657L819.407 810.414C819.407 810 819.071 809.664 818.657 809.664Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M807.343 809.664C807.757 809.664 808.093 810 808.093 810.414L808.093 812.907L810.586 812.907C811 812.907 811.336 813.243 811.336 813.657C811.336 814.071 811 814.407 810.586 814.407L807.343 814.407C806.929 814.407 806.593 814.071 806.593 813.657L806.593 810.414C806.593 810 806.929 809.664 807.343 809.664Z"
                          fill="black"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M811.336 802.343C811.336 802.757 811 803.093 810.586 803.093L808.093 803.093L808.093 805.586C808.093 806 807.757 806.336 807.343 806.336C806.929 806.336 806.593 806 806.593 805.586L806.593 802.343C806.593 801.929 806.929 801.593 807.343 801.593L810.586 801.593C811 801.593 811.336 801.929 811.336 802.343Z"
                          fill="black"
                        />
                        <defs>
                          <filter
                            id="filter0_d"
                            x="0"
                            y="0"
                            width="1206"
                            height="1354"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="2"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow"
                            />
                            <feOffset dx="2" dy="9" />
                            <feGaussianBlur stdDeviation="4.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span> */}
                    Full Screen
                  </button>
                  <button
                    className={`!w-[95px] !h-[36px] ${
                      back ? "bg-[#FCE0EB]" : "bg-[#ffffff]"
                    } font-semibold transition duration-300 font-inter text-[12px]`}
                  >
                    {/* <span className="mr-2">
                      <svg
                        width="1078"
                        height="1354"
                        viewBox="0 0 1078 1354"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d)">
                          <rect
                            x="9"
                            y="2"
                            width="1184"
                            height="1332"
                            rx="10"
                            fill="#FEFEFE"
                          />
                          <rect
                            x="9.5"
                            y="2.5"
                            width="1183"
                            height="1331"
                            rx="9.5"
                            stroke="#EEEEEE"
                          />
                        </g>
                        <path
                          d="M930.483 800.259C929.339 800.387 928.423 801.291 928.29 802.423C927.935 805.464 927.935 808.536 928.29 811.577C928.423 812.709 929.339 813.613 930.483 813.741C933.46 814.073 936.54 814.073 939.517 813.741C940.661 813.613 941.577 812.709 941.71 811.577C941.965 809.392 942.037 807.191 941.925 804.997C941.922 804.94 941.944 804.885 941.984 804.845L943.023 803.806C943.143 803.686 943.348 803.761 943.361 803.93C943.557 806.535 943.503 809.154 943.199 811.752C942.985 813.588 941.51 815.027 939.683 815.231C936.596 815.576 933.404 815.576 930.317 815.231C928.49 815.027 927.015 813.588 926.801 811.752C926.431 808.595 926.431 805.405 926.801 802.248C927.015 800.412 928.49 798.973 930.317 798.769C933.404 798.424 936.596 798.424 939.683 798.769C940.326 798.841 940.926 799.066 941.443 799.407C941.544 799.475 941.554 799.617 941.468 799.704L940.665 800.506C940.599 800.572 940.498 800.583 940.416 800.539C940.142 800.393 939.839 800.295 939.517 800.259C936.54 799.927 933.46 799.927 930.483 800.259Z"
                          fill="black"
                        />
                        <path
                          d="M944.03 801.03C944.323 800.737 944.323 800.263 944.03 799.97C943.737 799.677 943.263 799.677 942.97 799.97L934.5 808.439L932.03 805.97C931.737 805.677 931.263 805.677 930.97 805.97C930.677 806.263 930.677 806.737 930.97 807.03L933.97 810.03C934.263 810.323 934.737 810.323 935.03 810.03L944.03 801.03Z"
                          fill="black"
                        />
                        <defs>
                          <filter
                            id="filter0_d"
                            x="0"
                            y="0"
                            width="1206"
                            height="1354"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feMorphology
                              radius="2"
                              operator="dilate"
                              in="SourceAlpha"
                              result="effect1_dropShadow"
                            />
                            <feOffset dx="2" dy="9" />
                            <feGaussianBlur stdDeviation="4.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span> */}
                    Cut Lines
                  </button>
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

export default Customize;

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
