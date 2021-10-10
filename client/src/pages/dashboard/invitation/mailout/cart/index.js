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

const composeMethods = [
  { name: "5 items - ($1.99/each)", id: "1" },
  { name: "10 items - ($1.99/each)", id: "2" },
  { name: "20 items - ($1.99/each)", id: "3" },
  { name: "30 items - ($1.99/each)", id: "4" },
  { name: "40 items - ($1.99/each)", id: "5" },
  { name: "50 items - ($1.99/each)", id: "6" },
  { name: "100 items - ($1.99/each)", id: "7" },
];

const MailoutCheckout = ({ data }) => {
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
              <div class="col-span-8 p-2">
                <div>
                  <h1 className="text-[24px] font-semibold text-[#000000] ">
                    Your Cart
                  </h1>
                  <h5 className="text-[18px] text-[#545454]">
                    Great choices! Review your items below.
                  </h5>
                </div>
              </div>
              <div class="col-span-4 p-2">
                <div>
                  <div className="flex items-center justify-between border-[1px] border-[#EEEEEE] p-4">
                    <h5 className="text-[14px] font-semibold ">
                      Number Of Items
                    </h5>
                    <h5 className="text-[14px] font-semibold ">2</h5>
                  </div>
                  <div className="border-[1px] border-[#EEEEEE] border-t-0 p-4">
                    <div className="flex items-center justify-between mb-5">
                      <h5 className="text-[14px] font-normal ">Subtotal</h5>
                      <h5 className="text-[14px] font-normal ">$307</h5>
                    </div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-[14px] font-semibold ">Total</h5>
                      <h5 className="text-[14px] font-semibold ">$302</h5>
                    </div>
                  </div>

                  <div class=" mt-5 flex justify-between">
                    <button className="!w-[48%] !h-[36px] bg-[#ffffff] font-semibold transition duration-300 font-inter text-[12px] border-[1px] rounded border-[#EEEEEE]">
                      update Cart
                    </button>
                    <button className="!w-[48%] !h-[36px] bg-[#FCE0EB] font-semibold transition duration-300 font-inter text-[12px] border-[1px] rounded border-[#EEEEEE]">
                      Check out
                    </button>
                  </div>

                  <div className="my-5">
                    <h5 className="text-[10px] font-normal text-[#545454] ">
                      Taxes, Shipping & Discounts will be applied during
                      checkout
                    </h5>
                  </div>

                  <div
                    className="p-5 my-5 bg-[#fafafa]"
                    style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                  >
                    <h2 className="text-[14px] font-semibold text-[#000000] ">
                      When will my order arrive?
                    </h2>
                    <h5 className="text-[12px] font-normal text-[#000000] my-4 ">
                      Most items are printed within 4 business days. Choose your
                      shipping method at checkout to see estimated delivery
                      windows.
                    </h5>
                    <h5 className="text-[12px] font-normal text-[#000000] my-4 ">
                      Added Design Notes? Our team will email you within a few
                      days with edited designs, and we'll print your order once
                      you approve it.
                    </h5>
                    <h2 className="text-[14px] font-semibold text-[#000000] ">
                      Read our Shipping Policies
                    </h2>
                  </div>
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

export default MailoutCheckout;
