import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function PreviewModal({ btnText, data, handleSubmit }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-[150px] h-[50px] border-[1px] border-primary bg-[#FCE3EB] text-[16px] text-[#000000] flex items-center justify-center bg-opacity-100 rounded-full"
      >
        {btnText}
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center h-screen overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-6xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-[24px] font-normal font-alice subTitle">
                    Image Preview
                  </h3>
                  {/* <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button> */}
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
                {/*body*/}
                <div className="grid w-full grid-cols-12 py-10">
                  <div className="col-span-12 sm:col-span-6 ">
                    <div className="mx-auto w-[90%]">
                      <img
                        src={data?.main}
                        alt={`data?.name`}
                        className="w-[70%] mx-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 p-4 sm:col-span-6 ">
                    <h1 className="text-[24px] font-semibold mb-7 mudiumTitle">
                      {data?.name}
                    </h1>
                    <h1 className="text-[16px] font-normal max-w-[420px] customLabel">
                      {data?.decription}
                    </h1>
                    <Link href={`/dashboard/invitation/mailout/${data?.id}`}>
                      <button
                        onClick={() => handleSubmit(data)}
                        className="px-5 py-2 font-bold capitalize transition duration-300 border-2 rounded-lg border-secondary-alternative/40 font-inter bg-secondary-alternative/20 hover:bg-secondary-alternative/40 hover:border-primary text-[12px] mt-5"
                      >
                        Order Now
                      </button>
                    </Link>
                  </div>
                </div>

                {/* <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
