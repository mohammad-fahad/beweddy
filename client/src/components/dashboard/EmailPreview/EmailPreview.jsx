import React from "react";
import Image from "next/image";
import Link from "next/link";

const EmailPreview = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open large modal
      </button>
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="container">
            <div className="relative w-auto max-w-4xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full p-16 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t">
                  <div class="grid grid-cols-12 gap-4 w-full">
                    <div class="col-span-4 p-5">
                      <Image
                        src="/images/logo.png"
                        height={40}
                        width={100}
                        objectFit="contain"
                      />
                    </div>
                    <div class="col-span-6 p-5">
                      <h1 className="flex items-center text-base font-normal leading-5">
                        Let’s Eat, Drink & BeWeddy.
                        <span className="ml-2">
                          <img src="/Emoji.png" alt="emoji" />
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>

                {/*body*/}
                <div className="relative flex-auto p-6">
                  {/* heading section */}
                  <div className="text-black py-4 border-0 rounded bg-[#FCE0EB] flex justify-center ">
                    <span className="flex items-center text-base font-normal leading-5 align-middle">
                      You have Received an Email Invitaion for Nates & Ashley’s
                      Wedding.
                      <span className="ml-2">
                        <img src="/handet.png" alt="emoji" />
                      </span>
                    </span>
                  </div>
                  {/* image section */}
                  <div className="my-6">
                    <img
                      src="/images/banner.png"
                      alt=""
                      className="h-auto max-w-full align-middle border-none rounded shadow"
                    />
                  </div>

                  {/* body info section */}

                  <div>
                    <h1 className="text-4xl font-normal leading-10 text-center">
                      You’re Invited to Our Wedding
                    </h1>
                    <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-6" />
                  </div>

                  <div className="pt-10">
                    <h6 className="text-lg font-medium">Hello, "First Name"</h6>
                    <div className="py-6">
                      <p className="text-lg font-medium">
                        We would like to invite you to our wedding! Please come
                        celebrate with us. Here is a link
                        <Link href="/">
                          <a className="mx-2 underline text-[#1788FE]">
                            to our gift registry
                          </a>
                        </Link>
                        and
                        <Link href="/">
                          <a className="ml-2 underline text-[#1788FE]">
                            Wedding website
                          </a>
                        </Link>
                        .
                      </p>
                      <p className="my-3 text-lg font-medium">
                        <Link href="/">
                          <a className="underline text-[#1788FE]">
                            We Need your Address
                          </a>
                        </Link>
                        .
                      </p>
                      <p className="mb-3 text-lg font-medium">
                        Thank you for your support. Love,
                      </p>
                      <p className="text-lg font-medium">Ashley and Nate!</p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-40 px-5 py-2 font-medium capitalize transition duration-300 border-2 border-gray-200 rounded-lg font-inter hover:bg-secondary-alternative/40 hover:border-primary"
                    onClick={() => setShowModal(false)}
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className="w-40 px-5 py-2 ml-4 font-medium capitalize transition duration-300 border-2 border-gray-200 rounded-lg font-inter hover:bg-secondary-alternative/40 hover:border-primary"
                    onClick={() => setShowModal(false)}
                  >
                    Edit
                  </button>
                  {/* <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-black uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default EmailPreview;
