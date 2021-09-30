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

const Customize = ({ data }) => {
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
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
              <div class="col-span-12 p-2">
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
