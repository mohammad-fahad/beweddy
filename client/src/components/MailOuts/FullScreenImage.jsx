import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { isoToUtcDate } from "@utils/index";
import { QRCode } from "react-qrcode-logo";
import { saveAs } from "file-saver";

export default function FullScreenImage({
  btnText,
  image,
  front,
  textFont,
  textColor,
  user,
  uploadedFile,
  value,
}) {
  const [showModal, setShowModal] = React.useState(false);
  const [product, setProduct] = useState([]);
  const FrontSaveFile = () => {
    saveAs(product[0]?.selected, "beweddy.png");
  };
  const BackSaveFile = () => {
    saveAs(product[0]?.backPart, "beweddy.png");
  };
  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem("mailout")) || []);
  }, []);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`!w-[95px] !h-[36px] bg-[#FCE0EB] font-semibold transition duration-300 font-inter text-[12px]`}
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
                  <h3 className="text-3xl font-semibold subTitle">
                    Image Full Screen
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div class="grid grid-cols-12 w-full">
                  <div class="sm:col-span-6 col-span-12 ">
                    <div className="relative flex-auto p-2">
                      {/* <Image
                        src={product[0]?.selected}
                        width={1200}
                        height={1500}
                        // layout="responsive"
                        className="rounded-lg w-[80%] mx-auto modalImage"
                        objectFit="contain"
                      /> */}
                      <img
                        src={product[0]?.selected}
                        className="rounded-lg w-[100%] mx-auto modalImage"
                        loading="lazy"
                      />
                      <div className="absolute top-0 bottom-0 left-0 right-0 text-center">
                        <Draggable>
                          <div className="flex flex-col items-center justify-center w-full h-[100%]">
                            <h2
                              style={{
                                color: `${textColor.color}`,
                                fontFamily: `${textFont.font}`,
                              }}
                              className={`text-[30px] font-medium leading-10 capitalize subTitle`}
                            >
                              {user?.fullName}
                            </h2>
                            <h4
                              style={{
                                color: `${textColor.color}`,
                                fontFamily: `${textFont.font}`,
                              }}
                              className={`text-[30px] font-medium leading-10 capitalize subTitle`}
                            >
                              And
                            </h4>
                            <h2
                              className={`text-[30px] font-medium leading-10 capitalize subTitle`}
                              style={{
                                color: `${textColor.color}`,
                                fontFamily: `${textFont.font}`,
                              }}
                            >
                              <span>{user?.questions.spouseFirstName}</span>
                              <span className="ml-2">
                                {user?.questions.spouseLastName}
                              </span>
                            </h2>
                            <h4
                              style={{
                                color: `${textColor.color}`,
                                fontFamily: `${textFont.font}`,
                              }}
                              className={`text-[18px] font-medium leading-10 capitalize customLabel sm:max-w-full max-w-[150px] `}
                            >
                              We’re getting married
                              <span className="ml-1">
                                {isoToUtcDate(
                                  user?.questions?.weddingDay?.weddingDate
                                )}{" "}
                              </span>
                            </h4>
                          </div>
                        </Draggable>
                      </div>
                    </div>
                  </div>
                  <div class=" sm:col-span-6 col-span-12">
                    <div className="relative flex-auto p-2 ">
                      {/* <Image
                        src={product[0]?.backPart}
                        width={1200}
                        height={1500}
                        // layout="responsive"
                        className="rounded-lg w-[80%] mx-auto modalImage"
                        objectFit="contain"
                      /> */}

                      <img
                        src={product[0]?.backPart}
                        className="rounded-lg w-[100%] mx-auto modalImage"
                        loading="lazy"
                      />
                      <div className="absolute top-0 bottom-0 left-0 right-0 text-center">
                        <div className="flex flex-col items-center justify-center w-full h-[95%]">
                          <div className="mb-[30px]">
                            <img
                              src={uploadedFile?.url}
                              className="!md:max-h-[150px] !h-[150px] max-w-[300px] mx-auto mailoutImage2"
                            />
                          </div>
                          <div>
                            <h1 className="max-w-[230px] text-[14px] mb-[20px] customLabel">
                              Scan Our Personalized QR Code To Visit Our Wedding
                              Website
                            </h1>
                          </div>
                          <div className="flex items-center justify-center qrCode">
                            <QRCode
                              {...{ value }}
                              size={75}
                              eyeRadius={[
                                {
                                  outer: [10, 10, 0, 10],
                                  inner: [0, 10, 10, 10],
                                },
                                [10, 10, 10, 0], // top/right eye
                                [10, 0, 10, 10], // bottom/left
                              ]}
                              logoHeight={20}
                              logoWidth={20}
                              logoImage="/icons/circle-ring.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="relative flex-auto p-2">
                  <Image
                    src={image}
                    width={1200}
                    height={800}
                    // layout="responsive"
                    className="rounded-lg"
                    objectFit="contain"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 text-center">
                    {front ? (
                      <Draggable>
                        <div className="flex flex-col items-center justify-center w-full h-[100%]">
                          <h2
                            style={{
                              color: `${textColor.color}`,
                              fontFamily: `${textFont.font}`,
                            }}
                            className={`text-[30px] font-medium leading-10 capitalize commonTitle`}
                          >
                            {user?.fullName}
                          </h2>
                          <h4
                            style={{
                              color: `${textColor.color}`,
                              fontFamily: `${textFont.font}`,
                            }}
                            className={`text-[30px] font-medium leading-10 capitalize commonTitle`}
                          >
                            And
                          </h4>
                          <h2
                            className={`text-[30px] font-medium leading-10 capitalize commonTitle`}
                            style={{
                              color: `${textColor.color}`,
                              fontFamily: `${textFont.font}`,
                            }}
                          >
                            <span>{user?.questions.spouseFirstName}</span>
                            <span className="ml-2">
                              {user?.questions.spouseLastName}
                            </span>
                          </h2>
                          <h4
                            style={{
                              color: `${textColor.color}`,
                              fontFamily: `${textFont.font}`,
                            }}
                            className={`text-[18px] font-medium leading-10 capitalize customLabel`}
                          >
                            We’re getting married
                            <span className="ml-1">
                              {isoToUtcDate(
                                user?.questions?.weddingDay?.weddingDate
                              )}{" "}
                            </span>
                          </h4>
                        </div>
                      </Draggable>
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full h-[95%]">
                        <div className="mb-[30px]">
                          <img
                            src={uploadedFile?.url}
                            // src={user?.questions?.couplePictures[0]?.url}
                            // alt=""
                            className="!md:max-h-[150px] !h-[150px] max-w-[300px] mx-auto mailoutImage"
                          />
                        </div>
                        <div>
                          <h1 className="max-w-[230px] text-[14px] mb-[20px]">
                            Scan Our Personalized QR Code To Visit Our Wedding
                            Website
                          </h1>
                        </div>
                        <div className="flex items-center justify-center qrCode">
                          <QRCode
                            {...{ value }}
                            size={75}
                            eyeRadius={[
                              {
                                outer: [10, 10, 0, 10],
                                inner: [0, 10, 10, 10],
                              },
                              [10, 10, 10, 0], // top/right eye
                              [10, 0, 10, 10], // bottom/left
                            ]}
                            logoHeight={20}
                            logoWidth={20}
                            logoImage="/icons/circle-ring.png"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div> */}
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-[#000000] uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="download"
                    onClick={FrontSaveFile}
                  >
                    Front Download
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-[#000000] uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="download"
                    onClick={BackSaveFile}
                  >
                    Back Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
