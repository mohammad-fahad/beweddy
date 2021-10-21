import { DashboardHeader } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer } from "@components/home";
import Head from "next/head";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { AccordionPage } from "@components/shared/CustomAccordion";
import Link from "next/link";
import { useRouter } from "next/router";

const composeMethods = [
  { name: "Select Quality", id: "10" },
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
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem("mailout")) || []);
  }, []);

  useEffect(() => {
    // setTotal(
    //   product.reduce(
    //     (accumulator, current) => accumulator + Number(current.price),
    //     0
    //   )
    // );
    // const total = product.map(t => t.price)
    setTotal(product.map((t) => t.price));
  }, []);

  const router = useRouter();
  const removeProduct = () => {
    router.reload(window.location.pathname);
    localStorage.removeItem("mailout");
  };

  const handleSubmit = () => {
    console.log({
      name: "card one",
      quantity: selectComposeMethod,
      total: "999",
      description:
        "A better way to think of EmailJS in terms of security is not as a service that allows you to send email from Javascript, but rather as a service that allows yo",
    });
  };
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
              <div class="md:col-span-8 col-span-12 p-2">
                <div>
                  <h1 className="text-[24px] font-semibold text-[#000000] ">
                    Your Cart
                  </h1>
                  <h5 className="text-[18px] text-[#545454]">
                    Great choices! Review your items below.
                  </h5>
                </div>

                {product.length > 0 ? (
                  <div>
                    {product?.map((product, index) => (
                      <div class="grid grid-cols-12 w-full mt-5">
                        <div class="md:col-span-7 col-span-12 p-2">
                          <div className="flex justify-center">
                            <div>
                              <img
                                src={product?.main}
                                alt=""
                                className="w-[200px] "
                              />
                            </div>
                            <div className="ml-2">
                              <h1 className="text-[14px] font-bold font-inter">
                                {product?.name}
                              </h1>
                              <h1 className="text-[12px] ffont-normal">
                                Color Theme: {product[0]?.color[0]}
                              </h1>
                              <h1 className="text-[12px] ffont-normal">
                                Paper Type: Signature
                              </h1>
                              <h1 className="text-[12px] ffont-normal">
                                Edit Design
                              </h1>
                              <h1 className="text-[10px] ffont-normal mt-4">
                                {product?.decription}
                              </h1>

                              <div className="mt-5 bg-[#F6F6F6] p-4">
                                <h1>Need Envelopes? </h1>
                                <h1>
                                  Add plain or printed envelopes to your order.
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="md:col-span-5 col-span-12 p-2">
                          <div className="flex justify-between">
                            <div>
                              <Listbox
                                value={selectComposeMethod}
                                onChange={setSelectComposeMethod}
                              >
                                <div className="relative mt-1">
                                  <Listbox.Button className="relative font-inter sm:w-[202px] w-[150px] rounded-[5px] border-2 border-primary py-3 pl-5 pr-10 text-base font-semibold hover:bg-secondary-alternative/50">
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
                                    <Listbox.Options className="absolute z-10 sm:min-w-[256px] min-w-[150px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                            <div>
                              <h1>${product?.price}</h1>
                              <button
                                onClick={removeProduct}
                                className="mt-3 px-4 py-3 border-[1px] border-secondary-alternative/50 rounded-[5px] text-[10px]"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {" "}
                    <h1>Product Not Found</h1>{" "}
                  </div>
                )}

                {/* {product?.map((product, index) => (
                  <div class="grid grid-cols-12 w-full mt-5">
                    <div class="md:col-span-7 col-span-12 p-2">
                      <div className="flex justify-center">
                        <div>
                          <img
                            src={product?.main}
                            alt=""
                            className="w-[200px] "
                          />
                        </div>
                        <div className="ml-2">
                          <h1 className="text-[14px] font-bold font-inter">
                            {product?.name}
                          </h1>
                          <h1 className="text-[12px] ffont-normal">
                            Color Theme: {product[0]?.color[0]}
                          </h1>
                          <h1 className="text-[12px] ffont-normal">
                            Paper Type: Signature
                          </h1>
                          <h1 className="text-[12px] ffont-normal">
                            Edit Design
                          </h1>
                          <h1 className="text-[10px] ffont-normal mt-4">
                            {product?.decription}
                          </h1>

                          <div className="mt-5 bg-[#F6F6F6] p-4">
                            <h1>Need Envelopes? </h1>
                            <h1>
                              Add plain or printed envelopes to your order.
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="md:col-span-5 col-span-12 p-2">
                      <div className="flex justify-between">
                        <div>
                          <Listbox
                            value={selectComposeMethod}
                            onChange={setSelectComposeMethod}
                          >
                            <div className="relative mt-1">
                              <Listbox.Button className="relative font-inter sm:w-[202px] w-[150px] rounded-[5px] border-2 border-primary py-3 pl-5 pr-10 text-base font-semibold hover:bg-secondary-alternative/50">
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
                                <Listbox.Options className="absolute z-10 sm:min-w-[256px] min-w-[150px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                        <div>
                          <h1>${product?.price}</h1>
                          <button
                            onClick={removeProduct}
                            className="mt-3 px-4 py-3 border-[1px] border-secondary-alternative/50 rounded-[5px] text-[10px]"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
                <div className="mt-5 bg-[#F6F6F6] p-4">
                  <h1>Need Envelopes? </h1>
                  <h1>Add plain or printed envelopes to your order.</h1>
                </div>
              </div>
              <div class="md:col-span-4 col-span-12 p-2">
                <div>
                  <div className="flex items-center justify-between border-[1px] border-[#EEEEEE] p-4">
                    <h5 className="text-[14px] font-semibold ">
                      Number Of Items
                    </h5>
                    <h5 className="text-[14px] font-semibold ">
                      {product?.length}
                    </h5>
                  </div>
                  <div className="border-[1px] border-[#EEEEEE] border-t-0 p-4">
                    <div className="flex items-center justify-between mb-5">
                      <h5 className="text-[14px] font-normal ">Subtotal</h5>
                      <h5 className="text-[14px] font-normal ">${total}</h5>
                    </div>
                    <div className="flex items-center justify-between">
                      <h5 className="text-[14px] font-semibold ">Total</h5>
                      <h5 className="text-[14px] font-semibold ">${total}</h5>
                    </div>
                  </div>

                  <div class=" mt-5 flex justify-between">
                    {/* <button className="!w-[48%] !h-[36px] bg-[#ffffff] font-semibold transition duration-300 font-inter text-[12px] border-[1px] rounded border-[#EEEEEE]">
                      update Cart
                    </button> */}
                    <button
                      onClick={handleSubmit}
                      className="!w-[48%] !h-[36px] bg-[#FCE0EB] font-semibold transition duration-300 font-inter text-[12px] border-[1px] rounded border-[#EEEEEE]"
                    >
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
