import { DashboardHeader } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer } from "@components/home";
import Head from "next/head";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useCallback, useEffect, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { mailoutBox } from "@components/MailOuts/mailoutData";
import { useSelector } from "react-redux";
import { QRCode } from "react-qrcode-logo";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import FullScreenImage from "@components/MailOuts/FullScreenImage";
import { isoToUtcDate } from "@utils/index";
import { CropImage, Loader } from "@components/shared";
import axios from "axios";
import Draggable from "react-draggable";
import Canvas from "@components/shared/Canvas";

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
  // { name: "Font Selection", id: "1" },
  { name: "Inter", id: "2", font: "inter" },
  { name: "Alice", id: "3", font: "alice" },
  { name: "Roboto", id: "4", font: "roboto" },
  { name: "Open Sans", id: "5", font: "openSans" },
  { name: "Lato", id: "6", font: "lato" },
  { name: "Montserrat", id: "7", font: "montserrat" },
  { name: "Poppins", id: "8", font: "poppins" },
];
const colorSelection = [
  { name: "Black", id: "10", color: "#000000" },
  { name: "Red", id: "1", color: "#ff0000" },
  { name: "Orange", id: "2", color: "#ffa500" },
  { name: "Yellow", id: "3", color: "#ffff00" },
  { name: "Green", id: "4", color: "#008000" },
  { name: "Blue", id: "5", color: "#0000ff" },
  { name: "Cyan", id: "6", color: "#00ffff" },
  { name: "white", id: "7", color: "white" },
];

const Customize = ({ data }) => {
  const { user } = useSelector((state) => state.user);
  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
  const [frontPart, setFrontPart] = useState(true);
  const [backPart, setBackPart] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [textFont, setTextFont] = useState(fontSelection[0]);
  const [textColor, setTextColor] = useState(colorSelection[0]);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState(`${process.env.NEXT_PUBLIC_CLIENT_URL}`);

  const [selectComposeMethod, setSelectComposeMethod] = useState(
    composeMethods[0]
  );
  const [fontSelectionMethod, setFontSelectionMethod] = useState(
    fontSelection[0]
  );
  const [colorSelectionMethod, setColorSelectionMethod] = useState(
    colorSelection[0]
  );

  const [selectedImageFile, setSelectedImageFile] = useState();
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [uploadedFile, setUploadedFile] = useState(
    user?.questions?.couplePictures[0]
  );
  const [product, setProduct] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [text, setText] = useState(
    "There was an invitation for you to come to our wedding."
  );

  console.log("text", text);

  function toggleInput() {
    setToggle(false);
  }
  function handleChange(event) {
    setText(event.target.value);
  }
  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem("mailout")) || []);
  }, []);
  useEffect(() => {
    setFrontPart(product[0]?.selected);
    setBackPart(product[0]?.backPart);
  }, [product, uploadedFile]);
  useEffect(() => {
    setUploadedFile(JSON.parse(localStorage.getItem("mailoutImage")));
  }, []);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: { uploadAnnouncement: uploadedFile },
  });
  useEffect(() => {
    setValue("uploadAnnouncement", uploadedFile);
  }, [uploadedFile]);
  const onDrop = useCallback((acceptedFiles) => {
    const fileDropped = acceptedFiles[0];
    if (fileDropped["type"].split("/")[0] === "image") {
      setSelectedImageFile(fileDropped);
      return;
    }
    setFile(fileDropped);
    const previewUrl = URL.createObjectURL(fileDropped);
    setPreview(previewUrl);
  });
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });
  const onCropSave = async ({ file, preview }) => {
    setPreview(preview);
    setFile(file);
    setLoading(true);
    const URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "beweddy_csfhgnsu");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post(URL, formData, config);
      const { public_id, height, width, secure_url, url } = data;
      setLoading(false);

      setUploadedFile({ public_id, height, width, secure_url, url });
      localStorage.removeItem("mailoutImage");
      localStorage.setItem(
        "mailoutImage",
        JSON.stringify({ public_id, height, width, secure_url, url })
      );
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  useEffect(() => {
    setText(JSON.parse(localStorage.getItem("mailoutImageText")));
  }, [text]);

  var addItem = function (text) {
    localStorage.setItem(JSON.stringify("mailoutImageText", text));
  };

  const onSubmit = (data) => {
    setToggle(true);
    setText(data.info);
    addItem(data.info);
  };

  return (
    <div>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      <DashboardTopBar coupleName />
      {loading && <Loader />}
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
                </div>
              </div>
            </div>
          </div>

          {/* 2nd part */}
          <div className="flex items-start justify-between ">
            <div class="grid grid-cols-12 w-full">
              <div class="md:col-span-5 sm:col-span-12 col-span-12 ">
                <div className="mt-5 border-2 border-[#000000] w-full flex">
                  <Listbox
                    value={fontSelectionMethod}
                    onChange={(data) => {
                      setFontSelectionMethod(data);
                      setTextFont(data);
                    }}
                    className="w-[60%]  border-r-2 border-[#000000]"
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full h-full py-1 pl-5 pr-10 text-base font-semibold font-inter">
                        <span
                          className="block truncate !text-[12px]"
                          style={{
                            fontFamily: `${textFont.font}`,
                          }}
                        >
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
                                      style={{
                                        fontFamily: `${composeMethod.font}`,
                                      }}
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
                    onChange={(data) => {
                      setColorSelectionMethod(data);
                      setTextColor(data);
                    }}
                    className="w-[40%]"
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full h-full py-2 pl-5 pr-10 text-base font-semibold font-inter">
                        <span
                          className="block truncate !text-[12px]"
                          style={{
                            color: `${textColor.color}`,
                          }}
                        >
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
                                      style={{
                                        color: `${composeMethod.color}`,
                                      }}
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
                    <li>
                      <div className="accordion-title">
                        <div
                          className="flex items-center justify-between cursor-pointer w-[50%]"
                          onClick={() => setIsActive(!isActive)}
                        >
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
                                <rect
                                  x="3"
                                  y="3"
                                  width="2"
                                  height="2"
                                  fill="black"
                                />
                                <rect y="6" width="2" height="2" fill="black" />
                                <rect
                                  x="3"
                                  y="6"
                                  width="2"
                                  height="2"
                                  fill="black"
                                />
                                <rect y="9" width="2" height="2" fill="black" />
                                <rect
                                  x="3"
                                  y="9"
                                  width="2"
                                  height="2"
                                  fill="black"
                                />
                              </svg>
                            </span>
                            <span>B</span> Background
                          </li>
                          <span className="mt-3">
                            {!isActive ? (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M16.416 8.37595C16.0714 8.14618 15.6057 8.23931 15.376 8.58396L15.3194 8.66881C15.3002 8.6976 15.2833 8.72722 15.2685 8.75748C15.2463 8.78272 15.2254 8.80974 15.2062 8.83853L15.0931 9.00824C15.0739 9.03702 15.057 9.06664 15.0423 9.09691C15.02 9.12214 14.9992 9.14917 14.98 9.17795L14.8668 9.34766C14.8476 9.37644 14.8307 9.40607 14.816 9.43633C14.7937 9.46156 14.7729 9.48859 14.7537 9.51737L14.6405 9.68708C14.6214 9.71586 14.6044 9.74549 14.5897 9.77575C14.5674 9.80098 14.5466 9.82801 14.5274 9.85679L14.4143 10.0265C14.3951 10.0553 14.3781 10.0849 14.3634 10.1152C14.3411 10.1404 14.3203 10.1674 14.3011 10.1962L14.188 10.3659C14.1688 10.3947 14.1519 10.4243 14.1371 10.4546C14.1149 10.4798 14.094 10.5069 14.0748 10.5356L13.9617 10.7054C13.9425 10.7341 13.9256 10.7638 13.9108 10.794C13.8886 10.8193 13.8677 10.8463 13.8486 10.8751L13.7354 11.0448C13.7162 11.0736 13.6993 11.1032 13.6846 11.1334C13.6623 11.1587 13.6415 11.1857 13.6223 11.2145L13.5091 11.3842C13.4899 11.413 13.473 11.4426 13.4583 11.4729C13.436 11.4981 13.4152 11.5251 13.396 11.5539L13.2828 11.7236C13.2637 11.7524 13.2467 11.782 13.232 11.8123C13.2097 11.8375 13.1889 11.8646 13.1697 11.8933L13.0566 12.063C13.0374 12.0918 13.0204 12.1215 13.0057 12.1517C12.9834 12.1769 12.9626 12.204 12.9434 12.2328L12.8303 12.4025C12.8111 12.4313 12.7942 12.4609 12.7794 12.4911C12.7572 12.5164 12.7363 12.5434 12.7171 12.5722L12.604 12.7419C12.5848 12.7707 12.5679 12.8003 12.5532 12.8306C12.5309 12.8558 12.51 12.8828 12.4909 12.9116L12.3777 13.0813C12.3585 13.1101 12.3416 13.1397 12.3269 13.17C12.3046 13.1952 12.2838 13.2222 12.2646 13.251L12.208 13.3359C12.2027 13.3438 12.1974 13.3511 12.192 13.3576C12.1867 13.3641 12.1816 13.3706 12.1766 13.3772C12.1702 13.3821 12.164 13.3872 12.1577 13.3923C12.1456 13.4023 12.1327 13.4109 12.1192 13.4181C12.1122 13.4219 12.1052 13.4257 12.0983 13.4297C12.0905 13.4318 12.0827 13.434 12.0749 13.4363C12.0592 13.441 12.0426 13.4443 12.0256 13.446C12.017 13.4468 12.0085 13.4478 12 13.4489C11.9915 13.4478 11.9829 13.4468 11.9743 13.446C11.9574 13.4443 11.9408 13.441 11.925 13.4363C11.9173 13.434 11.9095 13.4318 11.9017 13.4297C11.8948 13.4257 11.8878 13.4219 11.8808 13.4181C11.8673 13.4109 11.8544 13.4023 11.8422 13.3923C11.836 13.3872 11.8298 13.3821 11.8234 13.3772C11.8184 13.3706 11.8133 13.3641 11.808 13.3577C11.8026 13.3511 11.7973 13.3438 11.792 13.3359L11.7354 13.251C11.7162 13.2222 11.6954 13.1952 11.6731 13.17C11.6584 13.1397 11.6415 13.1101 11.6223 13.0813L11.5091 12.9116C11.4899 12.8828 11.4691 12.8558 11.4468 12.8306C11.4321 12.8003 11.4152 12.7707 11.396 12.7419L11.2828 12.5722C11.2637 12.5434 11.2428 12.5164 11.2206 12.4911C11.2058 12.4609 11.1889 12.4313 11.1697 12.4025L11.0566 12.2328C11.0374 12.204 11.0165 12.1769 10.9943 12.1517C10.9796 12.1215 10.9626 12.0918 10.9434 12.063L10.8303 11.8933C10.8111 11.8646 10.7903 11.8375 10.768 11.8123C10.7533 11.782 10.7363 11.7524 10.7171 11.7236L10.604 11.5539C10.5848 11.5251 10.564 11.4981 10.5417 11.4729C10.527 11.4426 10.51 11.413 10.4909 11.3842L10.3777 11.2145C10.3585 11.1857 10.3377 11.1587 10.3154 11.1334C10.3007 11.1032 10.2838 11.0736 10.2646 11.0448L10.1514 10.8751C10.1323 10.8463 10.1114 10.8193 10.0891 10.794C10.0744 10.7638 10.0575 10.7341 10.0383 10.7054L9.92516 10.5356C9.90597 10.5069 9.88514 10.4798 9.86286 10.4546C9.84814 10.4243 9.8312 10.3947 9.81201 10.3659L9.69887 10.1962C9.67969 10.1674 9.65885 10.1404 9.63658 10.1152C9.62186 10.0849 9.60492 10.0553 9.58573 10.0265L9.47259 9.85679C9.4534 9.82801 9.43257 9.80099 9.4103 9.77575C9.39557 9.74549 9.37864 9.71586 9.35945 9.68708L9.24631 9.51737C9.22712 9.48859 9.20629 9.46156 9.18402 9.43633C9.16929 9.40607 9.15236 9.37644 9.13317 9.34766L9.02003 9.17795C9.00084 9.14917 8.98001 9.12214 8.95774 9.09691C8.94301 9.06664 8.92607 9.03702 8.90689 9.00824L8.79375 8.83852C8.77456 8.80974 8.75372 8.78271 8.73145 8.75748C8.71673 8.72722 8.69979 8.69759 8.6806 8.66881L8.62403 8.58396C8.39427 8.23931 7.92862 8.14618 7.58397 8.37595C7.23932 8.60571 7.14619 9.07136 7.37596 9.41601L7.43253 9.50086C7.45172 9.52965 7.47255 9.55667 7.49482 9.58191C7.50955 9.61217 7.52648 9.64179 7.54567 9.67058L7.65881 9.84029C7.678 9.86907 7.69883 9.8961 7.7211 9.92133C7.73583 9.95159 7.75276 9.98122 7.77195 10.01L7.88509 10.1797C7.90428 10.2085 7.92511 10.2355 7.94738 10.2608C7.96211 10.291 7.97905 10.3206 7.99823 10.3494L8.11137 10.5191C8.13056 10.5479 8.1514 10.5749 8.17367 10.6002C8.18839 10.6304 8.20533 10.6601 8.22452 10.6888L8.33766 10.8586C8.35685 10.8873 8.37768 10.9144 8.39995 10.9396C8.41467 10.9699 8.43161 10.9995 8.4508 11.0283L8.56394 11.198C8.58313 11.2268 8.60396 11.2538 8.62623 11.279C8.64096 11.3093 8.65789 11.3389 8.67708 11.3677L8.79022 11.5374C8.80941 11.5662 8.83024 11.5932 8.85251 11.6184C8.86724 11.6487 8.88418 11.6783 8.90336 11.7071L9.0165 11.8768C9.03569 11.9056 9.05653 11.9326 9.0788 11.9579C9.09352 11.9881 9.11046 12.0178 9.12965 12.0465L9.24279 12.2163C9.26197 12.245 9.28281 12.2721 9.30508 12.2973C9.3198 12.3276 9.33674 12.3572 9.35593 12.386L9.46907 12.5557C9.48826 12.5845 9.50909 12.6115 9.53136 12.6367C9.54609 12.667 9.56302 12.6966 9.58221 12.7254L9.69535 12.8951C9.71454 12.9239 9.73537 12.9509 9.75764 12.9761C9.77237 13.0064 9.7893 13.036 9.80849 13.0648L9.92163 13.2345C9.94082 13.2633 9.96165 13.2903 9.98392 13.3156C9.99865 13.3458 10.0156 13.3754 10.0348 13.4042L10.1479 13.5739C10.1671 13.6027 10.1879 13.6298 10.2102 13.655C10.2249 13.6852 10.2419 13.7149 10.2611 13.7437L10.3742 13.9134C10.3934 13.9421 10.4142 13.9692 10.4365 13.9944C10.4512 14.0247 10.4682 14.0543 10.4873 14.0831L10.5439 14.1679C10.5756 14.2154 10.6092 14.261 10.6447 14.3046C10.6817 14.3501 10.723 14.3901 10.7674 14.4245C10.8016 14.4695 10.8415 14.5112 10.8869 14.5487C10.9773 14.6234 11.0738 14.6877 11.1745 14.7414C11.2266 14.7692 11.2804 14.7902 11.3351 14.8048C11.384 14.8329 11.4369 14.8559 11.4933 14.8728C11.6035 14.9059 11.7161 14.9279 11.8293 14.9389C11.8874 14.9446 11.9445 14.9434 12 14.9362C12.0555 14.9434 12.1126 14.9446 12.1707 14.9389C12.2839 14.9279 12.3965 14.9059 12.5067 14.8728C12.5631 14.8559 12.616 14.8329 12.6649 14.8048C12.7196 14.7902 12.7734 14.7692 12.8255 14.7414C12.9262 14.6877 13.0227 14.6234 13.1131 14.5487C13.1585 14.5112 13.1984 14.4695 13.2326 14.4245C13.277 14.3901 13.3183 14.3501 13.3553 14.3046C13.3908 14.261 13.4244 14.2154 13.4561 14.1679L13.5127 14.0831C13.5318 14.0543 13.5488 14.0247 13.5635 13.9944C13.5858 13.9692 13.6066 13.9421 13.6258 13.9134L13.7389 13.7437C13.7581 13.7149 13.7751 13.6852 13.7898 13.655C13.8121 13.6298 13.8329 13.6027 13.8521 13.5739L13.9652 13.4042C13.9844 13.3754 14.0013 13.3458 14.0161 13.3156C14.0383 13.2903 14.0592 13.2633 14.0784 13.2345L14.1915 13.0648C14.2107 13.036 14.2276 13.0064 14.2424 12.9761C14.2646 12.9509 14.2855 12.9239 14.3046 12.8951L14.4178 12.7254C14.437 12.6966 14.4539 12.667 14.4686 12.6367C14.4909 12.6115 14.5117 12.5845 14.5309 12.5557L14.6441 12.386C14.6633 12.3572 14.6802 12.3276 14.6949 12.2973C14.7172 12.2721 14.738 12.245 14.7572 12.2162L14.8703 12.0465C14.8895 12.0178 14.9065 11.9881 14.9212 11.9579C14.9435 11.9326 14.9643 11.9056 14.9835 11.8768L15.0966 11.7071C15.1158 11.6783 15.1328 11.6487 15.1475 11.6184C15.1697 11.5932 15.1906 11.5662 15.2098 11.5374L15.3229 11.3677C15.3421 11.3389 15.359 11.3093 15.3738 11.279C15.396 11.2538 15.4169 11.2268 15.4361 11.198L15.5492 11.0283C15.5684 10.9995 15.5853 10.9699 15.6 10.9396C15.6223 10.9144 15.6431 10.8873 15.6623 10.8586L15.7755 10.6888C15.7947 10.6601 15.8116 10.6304 15.8263 10.6002C15.8486 10.5749 15.8694 10.5479 15.8886 10.5191L16.0018 10.3494C16.0209 10.3206 16.0379 10.291 16.0526 10.2608C16.0749 10.2355 16.0957 10.2085 16.1149 10.1797L16.228 10.01C16.2472 9.98122 16.2642 9.95159 16.2789 9.92133C16.3012 9.8961 16.322 9.86907 16.3412 9.84029L16.4543 9.67058C16.4735 9.64179 16.4904 9.61217 16.5052 9.58191C16.5274 9.55667 16.5483 9.52965 16.5675 9.50086L16.624 9.41601C16.8538 9.07136 16.7607 8.60571 16.416 8.37595Z"
                                  fill="#292D32"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7.58398 15.6241C7.92862 15.8538 8.39428 15.7607 8.62404 15.416L8.68061 15.3312C8.6998 15.3024 8.71674 15.2728 8.73146 15.2425C8.75373 15.2173 8.77456 15.1903 8.79375 15.1615L8.90689 14.9918C8.92608 14.963 8.94302 14.9334 8.95774 14.9031C8.98001 14.8779 9.00085 14.8508 9.02003 14.8221L9.13318 14.6523C9.15236 14.6236 9.1693 14.5939 9.18403 14.5637C9.2063 14.5384 9.22713 14.5114 9.24632 14.4826L9.35946 14.3129C9.37865 14.2841 9.39558 14.2545 9.41031 14.2242C9.43258 14.199 9.45341 14.172 9.4726 14.1432L9.58574 13.9735C9.60493 13.9447 9.62186 13.9151 9.63659 13.8848C9.65886 13.8596 9.67969 13.8326 9.69888 13.8038L9.81202 13.6341C9.83121 13.6053 9.84815 13.5757 9.86287 13.5454C9.88514 13.5202 9.90598 13.4931 9.92516 13.4644L10.0383 13.2946C10.0575 13.2659 10.0744 13.2362 10.0892 13.206C10.1114 13.1807 10.1323 13.1537 10.1514 13.1249L10.2646 12.9552C10.2838 12.9264 10.3007 12.8968 10.3154 12.8666C10.3377 12.8413 10.3585 12.8143 10.3777 12.7855L10.4909 12.6158C10.5101 12.587 10.527 12.5574 10.5417 12.5271C10.564 12.5019 10.5848 12.4749 10.604 12.4461L10.7172 12.2764C10.7363 12.2476 10.7533 12.218 10.768 12.1877C10.7903 12.1625 10.8111 12.1354 10.8303 12.1067L10.9434 11.937C10.9626 11.9082 10.9796 11.8785 10.9943 11.8483C11.0166 11.8231 11.0374 11.796 11.0566 11.7672L11.1697 11.5975C11.1889 11.5687 11.2058 11.5391 11.2206 11.5089C11.2428 11.4836 11.2637 11.4566 11.2829 11.4278L11.396 11.2581C11.4152 11.2293 11.4321 11.1997 11.4468 11.1694C11.4691 11.1442 11.49 11.1172 11.5091 11.0884L11.6223 10.9187C11.6415 10.8899 11.6584 10.8603 11.6731 10.83C11.6954 10.8048 11.7162 10.7778 11.7354 10.749L11.792 10.6641C11.7973 10.6562 11.8026 10.6489 11.808 10.6424C11.8133 10.6359 11.8184 10.6294 11.8234 10.6228C11.8298 10.6179 11.836 10.6128 11.8423 10.6077C11.8544 10.5977 11.8673 10.5891 11.8808 10.5819C11.8878 10.5781 11.8948 10.5743 11.9017 10.5703C11.9095 10.5682 11.9173 10.566 11.9251 10.5637C11.9408 10.559 11.9574 10.5557 11.9744 10.554C11.983 10.5532 11.9915 10.5522 12 10.5511C12.0085 10.5522 12.0171 10.5532 12.0257 10.554C12.0426 10.5557 12.0592 10.559 12.075 10.5637C12.0827 10.566 12.0905 10.5682 12.0983 10.5703C12.1052 10.5743 12.1122 10.5781 12.1192 10.5819C12.1327 10.5891 12.1456 10.5977 12.1578 10.6077C12.164 10.6128 12.1702 10.6179 12.1766 10.6228C12.1816 10.6294 12.1867 10.6359 12.192 10.6424C12.1974 10.6489 12.2027 10.6562 12.208 10.6641L12.2646 10.749C12.2838 10.7778 12.3046 10.8048 12.3269 10.83C12.3416 10.8603 12.3585 10.8899 12.3777 10.9187L12.4909 11.0884C12.5101 11.1172 12.5309 11.1442 12.5532 11.1694C12.5679 11.1997 12.5848 11.2293 12.604 11.2581L12.7172 11.4278C12.7363 11.4566 12.7572 11.4836 12.7794 11.5089C12.7942 11.5391 12.8111 11.5687 12.8303 11.5975L12.9434 11.7672C12.9626 11.796 12.9835 11.8231 13.0057 11.8483C13.0204 11.8785 13.0374 11.9082 13.0566 11.937L13.1697 12.1067C13.1889 12.1354 13.2097 12.1625 13.232 12.1877C13.2467 12.218 13.2637 12.2476 13.2829 12.2764L13.396 12.4461C13.4152 12.4749 13.436 12.5019 13.4583 12.5271C13.473 12.5574 13.49 12.587 13.5091 12.6158L13.6223 12.7855C13.6415 12.8143 13.6623 12.8413 13.6846 12.8666C13.6993 12.8968 13.7162 12.9264 13.7354 12.9552L13.8486 13.1249C13.8677 13.1537 13.8886 13.1807 13.9109 13.206C13.9256 13.2362 13.9425 13.2659 13.9617 13.2946L14.0748 13.4644C14.094 13.4931 14.1149 13.5202 14.1371 13.5454C14.1519 13.5757 14.1688 13.6053 14.188 13.6341L14.3011 13.8038C14.3203 13.8326 14.3411 13.8596 14.3634 13.8848C14.3781 13.9151 14.3951 13.9447 14.4143 13.9735L14.5274 14.1432C14.5466 14.172 14.5674 14.199 14.5897 14.2242C14.6044 14.2545 14.6214 14.2841 14.6405 14.3129L14.7537 14.4826C14.7729 14.5114 14.7937 14.5384 14.816 14.5637C14.8307 14.5939 14.8476 14.6236 14.8668 14.6523L14.98 14.8221C14.9992 14.8508 15.02 14.8779 15.0423 14.9031C15.057 14.9334 15.0739 14.963 15.0931 14.9918L15.2063 15.1615C15.2254 15.1903 15.2463 15.2173 15.2685 15.2425C15.2833 15.2728 15.3002 15.3024 15.3194 15.3312L15.376 15.416C15.6057 15.7607 16.0714 15.8538 16.416 15.6241C16.7607 15.3943 16.8538 14.9286 16.624 14.584L16.5675 14.4991C16.5483 14.4704 16.5275 14.4433 16.5052 14.4181C16.4905 14.3878 16.4735 14.3582 16.4543 14.3294L16.3412 14.1597C16.322 14.1309 16.3012 14.1039 16.2789 14.0787C16.2642 14.0484 16.2472 14.0188 16.228 13.99L16.1149 13.8203C16.0957 13.7915 16.0749 13.7645 16.0526 13.7392C16.0379 13.709 16.021 13.6794 16.0018 13.6506L15.8886 13.4809C15.8694 13.4521 15.8486 13.4251 15.8263 13.3998C15.8116 13.3696 15.7947 13.3399 15.7755 13.3112L15.6623 13.1414C15.6432 13.1127 15.6223 13.0856 15.6001 13.0604C15.5853 13.0301 15.5684 13.0005 15.5492 12.9717L15.4361 12.802C15.4169 12.7732 15.396 12.7462 15.3738 12.721C15.359 12.6907 15.3421 12.6611 15.3229 12.6323L15.2098 12.4626C15.1906 12.4338 15.1698 12.4068 15.1475 12.3816C15.1328 12.3513 15.1158 12.3217 15.0966 12.2929L14.9835 12.1232C14.9643 12.0944 14.9435 12.0674 14.9212 12.0421C14.9065 12.0119 14.8895 11.9822 14.8704 11.9535L14.7572 11.7838C14.738 11.755 14.7172 11.7279 14.6949 11.7027C14.6802 11.6724 14.6633 11.6428 14.6441 11.614L14.5309 11.4443C14.5117 11.4155 14.4909 11.3885 14.4686 11.3633C14.4539 11.333 14.437 11.3034 14.4178 11.2746L14.3046 11.1049C14.2855 11.0761 14.2646 11.0491 14.2424 11.0239C14.2276 10.9936 14.2107 10.964 14.1915 10.9352L14.0784 10.7655C14.0592 10.7367 14.0383 10.7097 14.0161 10.6844C14.0014 10.6542 13.9844 10.6246 13.9652 10.5958L13.8521 10.4261C13.8329 10.3973 13.8121 10.3702 13.7898 10.345C13.7751 10.3148 13.7581 10.2851 13.7389 10.2563L13.6258 10.0866C13.6066 10.0579 13.5858 10.0308 13.5635 10.0056C13.5488 9.97533 13.5318 9.94571 13.5127 9.91692L13.4561 9.83207C13.4244 9.78461 13.3908 9.73902 13.3553 9.69538C13.3183 9.64992 13.277 9.60991 13.2326 9.57548C13.1984 9.53055 13.1585 9.48879 13.1131 9.45127C13.0227 9.37658 12.9262 9.31231 12.8255 9.25857C12.7734 9.23079 12.7196 9.20977 12.6649 9.1952C12.616 9.1671 12.5631 9.14412 12.5067 9.12718C12.3965 9.09405 12.2839 9.07206 12.1707 9.06106C12.1126 9.05542 12.0555 9.05656 12 9.06383C11.9445 9.05656 11.8874 9.05542 11.8293 9.06106C11.7161 9.07206 11.6035 9.09405 11.4933 9.12718C11.4369 9.14412 11.384 9.1671 11.3351 9.1952C11.2804 9.20977 11.2266 9.23079 11.1745 9.25857C11.0738 9.31231 10.9773 9.37658 10.8869 9.45127C10.8415 9.48879 10.8016 9.53055 10.7674 9.57548C10.723 9.60991 10.6817 9.64992 10.6447 9.69538C10.6092 9.73902 10.5756 9.78461 10.5439 9.83207L10.4873 9.91692C10.4682 9.9457 10.4512 9.97533 10.4365 10.0056C10.4142 10.0308 10.3934 10.0579 10.3742 10.0866L10.2611 10.2563C10.2419 10.2851 10.2249 10.3148 10.2102 10.345C10.1879 10.3702 10.1671 10.3973 10.1479 10.4261L10.0348 10.5958C10.0156 10.6246 9.99866 10.6542 9.98393 10.6844C9.96166 10.7097 9.94083 10.7367 9.92164 10.7655L9.8085 10.9352C9.78931 10.964 9.77237 10.9936 9.75765 11.0239C9.73538 11.0491 9.71455 11.0761 9.69536 11.1049L9.58222 11.2746C9.56303 11.3034 9.54609 11.333 9.53137 11.3633C9.5091 11.3885 9.48826 11.4155 9.46908 11.4443L9.35593 11.614C9.33675 11.6428 9.31981 11.6724 9.30508 11.7027C9.28281 11.7279 9.26198 11.755 9.24279 11.7838L9.12965 11.9535C9.11046 11.9822 9.09353 12.0119 9.0788 12.0421C9.05653 12.0674 9.0357 12.0944 9.01651 12.1232L8.90337 12.2929C8.88418 12.3217 8.86725 12.3513 8.85252 12.3816C8.83025 12.4068 8.80942 12.4338 8.79023 12.4626L8.67709 12.6323C8.6579 12.6611 8.64096 12.6907 8.62624 12.721C8.60397 12.7462 8.58313 12.7732 8.56395 12.802L8.45081 12.9717C8.43162 13.0005 8.41468 13.0301 8.39996 13.0604C8.37769 13.0856 8.35685 13.1127 8.33766 13.1414L8.22452 13.3112C8.20534 13.3399 8.1884 13.3696 8.17367 13.3998C8.1514 13.4251 8.13057 13.4521 8.11138 13.4809L7.99824 13.6506C7.97905 13.6794 7.96212 13.709 7.94739 13.7392C7.92512 13.7645 7.90429 13.7915 7.8851 13.8203L7.77196 13.99C7.75277 14.0188 7.73584 14.0484 7.72111 14.0787C7.69884 14.1039 7.67801 14.1309 7.65882 14.1597L7.54568 14.3294C7.52649 14.3582 7.50955 14.3878 7.49483 14.4181C7.47256 14.4433 7.45172 14.4704 7.43254 14.4991L7.37597 14.584C7.1462 14.9286 7.23933 15.3943 7.58398 15.6241Z"
                                  fill="#292D32"
                                />
                              </svg>
                            )}
                          </span>
                        </div>
                        {isActive && (
                          <fieldset>
                            <small>
                              <div className="flex items-center my-2">
                                <p className="ml-2">Image 1</p>
                              </div>

                              <div className="flex items-center my-2">
                                <p className="ml-2">Image 2</p>
                              </div>

                              <div className="flex items-center my-2">
                                <p className="ml-2">Image 3</p>
                              </div>

                              <div className="flex items-center my-2">
                                <p className="ml-2">Image 4</p>
                              </div>

                              <br />
                              <br />
                            </small>
                          </fieldset>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:col-span-7 sm:col-span-12 col-span-12">
                <div className="mt-5 border-2 border-[#000000] !h-[44px] w-full md:block hidden"></div>
                {/* 2nd box */}
                <div className="border-2 border-[#000000] w-full flex h-[600px] relative">
                  <div className="flex items-center justify-center w-full h-full bg-[#F7F3F3]">
                    <div className="w-[90%] h-[90%] relative">
                      {/* <Canvas
                        image={front ? frontPart : backPart}
                        text={user?.fullName}
                      /> */}

                      <img
                        src={front ? frontPart : backPart}
                        alt={data?.name}
                        className="w-[90%] h-[90%] mx-auto"
                      />
                      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center">
                        {front ? (
                          <div>
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                  {toggle ? (
                                    <p
                                      onClick={toggleInput}
                                      className="text-[10px] font-medium leading-10 capitalize customLabel sm:max-w-full max-w-[150px]"
                                    >
                                      {text}
                                    </p>
                                  ) : (
                                    <div>
                                      <input
                                        {...register("info")}
                                        value={text}
                                        onChange={handleChange}
                                        className="text-[13px] md:text-[15px] border-gray-100 border-2 py-2 px-4 xs:py-3 xs:px-5 placeholder-gray-300 rounded-[5px"
                                      />
                                      <button type="submit" className="ml-3">
                                        Save
                                      </button>
                                    </div>
                                  )}
                                </form>
                              </div>
                            </Draggable>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center w-full h-[95%]">
                            <div className="mb-[30px]">
                              <img
                                src={uploadedFile?.url}
                                className="!md:max-h-[150px] !h-[150px] max-w-[300px] mx-auto mailoutImage"
                              />
                            </div>
                            <div>
                              <h1 className="max-w-[230px] text-[14px] mb-[20px]">
                                Scan Our Personalized QR Code To Visit Our
                                Wedding Website
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
                    </div>
                  </div>
                  {front ? (
                    ""
                  ) : (
                    <div className="absolute top-0 right-0 border-2 border-[#000000] inline-block p-0 m-0 ">
                      {/* camera */}
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div
                          className="relative focus:outline-none"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <label
                            htmlFor="couplePictures"
                            className="bg-white cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-1 px-2 placeholder-primary border-[1px] border-secondary-alternative/50 rounded-[5px]"
                          >
                            {/* Upload */}
                            <img
                              src="/upload.png"
                              alt=""
                              style={{ width: "30px" }}
                            />
                          </label>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
              <div class="col-span-12 flex justify-end border-2 rounded border-[#000000] p-0 m-0">
                <div className="inline-block">
                  <FullScreenImage
                    btnText="Review & Save"
                    image={front ? frontPart : backPart}
                    front={front}
                    textFont={textFont}
                    textColor={textColor}
                    user={user}
                    uploadedFile={uploadedFile}
                    value={value}
                  />
                  {/* <button
                    className={`!w-[95px] !h-[36px] bg-[#FCE0EB] font-semibold transition duration-300 font-inter text-[12px]`}
                  >
                    Full Screen
                  </button> */}
                </div>
              </div>
              <div class="col-span-12 flex justify-end p-0 mt-10">
                {/* <button
                  className={`!w-[95px] !h-[36px] font-semibold transition duration-300 font-inter text-[12px] border-2 rounded border-[#000000]`}
                >
                  Reset Design
                </button> */}
                <Link href="/dashboard/invitation/mailout/cart">
                  <button
                    className={`!w-[95px] !h-[36px] font-semibold transition duration-300 font-inter text-[12px] border-2 rounded border-[#000000]`}
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CropImage
          onSave={onCropSave}
          selectedFile={selectedImageFile}
          // aspectRatio={3 / 2}
        />
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
