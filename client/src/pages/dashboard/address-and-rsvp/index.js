import Head from "next/head";
import Link from "next/link";
import { Image } from "cloudinary-react";
import { DashboardHeader } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Button, Footer, Heading } from "@components/index";
import { LinkIcon, PencilIcon, SelectorIcon } from "@heroicons/react/outline";
import { withAuthRoute } from "@hoc/withAuthRoute";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Swiper from "react-id-swiper";
import toast from "react-hot-toast";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useCopyClipboard from "react-use-clipboard";
import SwiperCore, { Lazy, Autoplay } from "swiper";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { attemptCreateGuest } from "@features/guest/guestActions";
import { client } from "pages/_app";

SwiperCore.use([Lazy, Autoplay]);

const params = {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

const otherProviders = [
  { id: 1, name: "Other" },
  { id: 7, name: "Metro PCS" },
  { id: 8, name: "Mint Mobile" },
  { id: 9, name: "Page Plus" },
  { id: 10, name: "Red Pocket" },
  { id: 11, name: "Republic Wireless" },
  { id: 12, name: "Sprint" },
  { id: 13, name: "T-Mobile" },
  { id: 14, name: "Tracfone" },
  { id: 15, name: "U.S. Cellular" },
  { id: 17, name: "Ting" },
  { id: 18, name: "Xfinity Mobile" },
];

const providers = {
  "at&t": { sms: "txt.att.net", mms: "mms.att.net" },
  tmobile: { sms: "tmomail.net", mms: "tmomail.net" },
  verizon: { sms: "vtext.com", mms: "vzwpix.com" },
  boostmobile: {
    sms: "sms.myboostmobile.com",
    mms: "myboostmobile.com",
  },
  cricketwireless: {
    sms: "sms.cricketwireless.net",
    mms: "mms.cricketwireless.net",
  },
  virginmobile: { sms: "vmobl.com", mms: "vmpix.com" },
};

const AddressRSVP = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { push } = useRouter();
  const [selectedProvider, setSelectedProvider] = useState(otherProviders[0]);

  const {
    watch,
    register,
    setValue,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    // shouldFocusError: false,
    // shouldUnregister: true,
    defaultValues: {
      guestEstimate: "1",
    },
  });
  watch([
    "guestEstimate",
    "provider",
    "allAbove_invite",
    "email_invite",
    "text_invite",
    "mail_invite",
  ]);

  const allAbove = getValues("allAbove_invite");
  const textInvite = getValues("text_invite");
  const emailInvite = getValues("email_invite");
  const mailInvite = getValues("mail_invite");

  useEffect(() => {
    if (allAbove) {
      setValue("text_invite", true);
      setValue("email_invite", true);
      setValue("mail_invite", true);
    }
    if (
      textInvite === "true" &&
      emailInvite === "true" &&
      mailInvite === "true"
    ) {
      setValue("all_the_above", true);
    }
    if (
      textInvite === "false" &&
      emailInvite === "false" &&
      mailInvite === "false"
    ) {
      setValue("all_the_above", false);
    }
  }, [allAbove, textInvite, mailInvite, emailInvite]);
  const onSubmit = async (data) => {
    dispatch(attemptCreateGuest(submitData(data)));
    console.log("Submitted data", submitData(data))
    await client.invalidateQueries("guests");
    reset()
    push("/dashboard/invitation/rsvp-guest-management");
  };

  const submitData = (data) => {

    const wayOfInvitations = {
      text_invite: data.text_invite,
      email_invite: data.email_invite,
      mail_invite: data.mail_invite,
      allAbove_invite: data.allAbove_invite,
    };
    const address = {
      street: data.street,
      providence: data.providence,
      city: data.city,
      state: data.state,
      zip: data.zip,
    };

    return {
      id: user?._id,
      address,
      wayOfInvitations,
      name: data.name,
      email: data.email,
      phone: { number: data.phone, provider: providers[data.provider] },
      callingCode: "1",
      rsvp: data.rsvp,
      guestEstimate: data.guestEstimate,
    };
  };
  const [valued, setValued] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}/rsvp`
  );
  const [isCopied, setCopied] = useCopyClipboard(valued, {
    successDuration: 1500,
  });

  isCopied && toast.success("Collect address website link copied!");
  return (
    <>
      <Head>
        <title>Beweddy | Address & RSVP</title>
      </Head>
      <DashboardTopBar />
      <DashboardLayout>
        <DashboardHeader
          title={
            <h1 className="!text-[30px] commonTitle">
              We Need Your Address & RSVP
            </h1>
          }
        >
          <div className="flex flex-wrap items-center gap-5 py-5 ">
            <Link href="/dashboard/website/edit">
              <a className="flex space-x-3 white-space-nowrap items-center py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300">
                <PencilIcon className="w-5 h-5" />
                <span className="customLabel">Edit your website</span>
              </a>
            </Link>

            <div onClick={setCopied} className="flex cursor-pointer space-x-3 white-space-nowrap items-center py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300">
              <LinkIcon className="w-5 h-5" />
              <span className="customLabel">Share To Collect Addresses</span>
            </div>

            <Link href="/dashboard/invitation/rsvp-guest-management">
              <a className="flex white-space-nowrap items-center py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300 customLabel">
                Guests Management
              </a>
            </Link>
          </div>
        </DashboardHeader>

        <div className="border-4 border-gray-200 rounded-lg">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={3000}
            swipeable
            emulateTouch
          >
            {user.questions.couplePictures.map((image, index) => (
              <div className="w-full">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                    publicId={image.public_id}
                    src={!image.public_id ? image.url : null}
                    width={image.width}
                    crop="scale"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>

          <div className="px-2 py-10 lg:px-10 lg:py-10">
            <h3 className="text-[24px] font-normal text-center mudiumTitle">
              {user.coupleName}'s Wedding
            </h3>

            <div className="flex justify-center my-5">
              <Link href={`/couple/${user?.username}`}>
                <a
                  target="_blank"
                  className="flex justify-center items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300"
                >
                  <span className="customLabel text-[14px] font-normal">
                    Website Link
                  </span>
                  {/* <LinkIcon className="w-5 h-5" /> */}
                  <img src="/icons/website.png" alt="" className="w-5 h-5" />
                </a>
              </Link>
            </div>
            <h3 className="sm:text-[32px] text-[16px] leading-10 font-medium text-center">
              ✨ You Are Invited To Our Wedding! 💍 ✨
            </h3>
            <p className="mt-2 mb-2 font-normal max-w-[620px] mx-auto text-center sm:mb-16 text-[18px] leading-7 capitalize customLabel">
              Thanks for your love and support! We want to send you an
              invitation. Please Fill Out this Form!
            </p>

            <form
              className="space-y-3 lg:px-20"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-3">
                <Heading h3 className="!text-[18px] !font-medium mudiumTitle">
                  Your Name Here <span className="text-red-400">*</span>
                </Heading>
                <div>
                  <input
                    type="text"
                    className="w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal placeholder-[#757575] text-[14px]"
                    placeholder="Enter Your Full Name"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is required!",
                      },
                    })}
                  />
                  <p className="h-4 mt-2 text-sm font-light text-red-400">
                    {errors?.name?.message}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <Heading h3 className="!text-[18px] !font-medium mudiumTitle">
                  Email <span className="text-red-400">*</span>
                </Heading>
                <div>
                  <input
                    type="email"
                    className="w-full rounded-[5px] border-2 border-gray-200 placeholder-[#757575] text-[14px] py-3 px-5 text-base font-normal"
                    placeholder="Enter Your Valid Email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required!",
                      },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Must be a valid email address",
                      },
                    })}
                  />

                  {errors?.email && (
                    <p className="h-4 mt-2 text-sm font-light text-red-400">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                <Heading h3 className="!text-[18px] !font-medium mudiumTitle">
                  What's your full address? 🏠
                  <span className="text-red-400">*</span>
                </Heading>

                <div className="flex items-center space-x-5">
                  <div className="w-full">
                    <input
                      type="text"
                      className="w-full rounded-[5px] border-2 border-gray-200 py-3 placeholder-[#757575] text-[14px] px-5 text-base font-normal"
                      placeholder="Street"
                      {...register("street", {
                        required: {
                          value: true,
                          message: "Street is required!",
                        },
                      })}
                    />

                    <p className="h-4 mt-2 text-sm font-light text-red-400">
                      {errors?.street?.message}
                    </p>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      className="w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal placeholder-[#757575] text-[14px]"
                      placeholder="Apt/Suite/Other"
                      {...register("providence")}
                    />

                    <p className="h-4 mt-2 text-sm font-light text-red-400">
                      {errors?.providence?.message}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="w-full">
                    <input
                      type="text"
                      className="w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal placeholder-[#757575] text-[14px]"
                      placeholder="City"
                      {...register("city", {
                        required: {
                          value: true,
                          message: "City is required!",
                        },
                      })}
                    />

                    <p className="h-4 mt-2 text-sm font-light text-red-400">
                      {errors?.city?.message}
                    </p>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      className="w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal placeholder-[#757575] text-[14px]"
                      placeholder="State"
                      {...register("state", {
                        required: {
                          value: true,
                          message: "State is required!",
                        },
                      })}
                    />

                    <p className="h-4 mt-2 text-sm font-light text-red-400">
                      {errors?.state?.message}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal placeholder-[#757575] text-[14px]"
                    placeholder="Zip"
                    {...register("zip", {
                      required: {
                        value: true,
                        message: "Zip is required!",
                      },
                    })}
                  />

                  <p className="h-4 mt-2 text-sm font-light text-red-400">
                    {errors?.zip?.message}
                  </p>
                </div>
                <div className="w-full" />
              </div>
              <div className="space-y-3">
                <Heading h3 className="!text-[18px] !font-medium mudiumTitle">
                  What's your phone number? 📲
                </Heading>
                <div className="flex items-center">
                  <Listbox value={`USA`}>
                    <div className="relative -mr-2">
                      <Listbox.Button className="bg-white cursor-pointer inline-block font-semibold py-[6px] md:py-[10px] px-4 placeholder-gray-400 border-[3px] border-gray-200 rounded-[5px] -mr-1">
                        <img
                          src="/logos/usa___logo.svg"
                          alt={`USA`}
                          className="object-cover mr-8 rounded-full w-7 h-7 md:mr-4"
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            className="w-4 h-4 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.05473 10.6C6.10442 10.6722 6.17091 10.7312 6.24848 10.772C6.32604 10.8128 6.41235 10.8341 6.49998 10.8341C6.58761 10.8341 6.67392 10.8128 6.75148 10.772C6.82905 10.7312 6.89554 10.6722 6.94523 10.6L11.8202 3.55837C11.8767 3.47715 11.9097 3.38202 11.9159 3.28332C11.9221 3.18461 11.9011 3.0861 11.8552 2.9985C11.8093 2.9109 11.7402 2.83755 11.6556 2.78642C11.5709 2.73529 11.4739 2.70834 11.375 2.7085H1.62498C1.52631 2.7089 1.42962 2.7362 1.34531 2.78745C1.26099 2.8387 1.19224 2.91197 1.14646 2.99937C1.10067 3.08677 1.07957 3.185 1.08543 3.28349C1.09129 3.38199 1.1239 3.47702 1.17973 3.55837L6.05473 10.6Z"
                              fill="#C4C4C4"
                            />
                          </svg>
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-50 max-w-xs py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          <Listbox.Option
                            className={({ active }) =>
                              `${active
                                ? "text-amber-900 bg-secondary-alternative/20"
                                : "text-gray-900"
                              }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                            }
                            value={`USA`}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`${selected ? "font-medium" : "font-normal"
                                    } block truncate`}
                                >
                                  {`USA`}
                                </span>
                                {selected ? (
                                  <span
                                    className={`${active
                                      ? "text-amber-600"
                                      : "text-amber-600"
                                      }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
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
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full focus:!border-gray-200 placeholder-[#757575] text-[14px] bg-white inline-block font-normal py-2 md:py-3 px-4 pl-5 border-[3px] border-gray-200 rounded-[5px]"
                    placeholder="Enter phone number"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Phone numbers are required!",
                      },
                      pattern: {
                        value: /^([0-9\(\)\/\+ \-]*)$/,
                        message: "Must be a valid phone number",
                      },
                    })}
                  />
                </div>
                <p className="h-4 mt-2 text-sm font-light text-red-400">
                  {errors?.phone?.message}
                </p>
              </div>

              <div className="space-y-5 !mt-5">
                {/* phone provider */}
                <Heading h3 className="!text-[18px] !font-medium mudiumTitle">
                  What's your phone provider?
                </Heading>
                <div>
                  <div class="grid grid-cols-12 gap-2 w-full customGrid customAlignCenter">
                    <div class="md:col-span-4 xs:col-span-6 p-2 customGap">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="AT&T"
                          value="at&t"
                          defaultChecked
                          className="hidden"
                          {...register("provider")}
                        />
                        <label
                          htmlFor="AT&T"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center">
                            <div className="checked-inner w-[10px] h-[10px] rounded-full"></div>
                          </div>
                          <span className="text-[14px] font-light whitespace-nowrap font-inter customLabel">
                            AT&T
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="md:col-span-4 xs:col-span-6 p-2 customGap">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="T-Mobile&Sprint"
                          value="tmobile"
                          className="hidden "
                          {...register("provider")}
                        />
                        <label
                          htmlFor="T-Mobile&Sprint"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center">
                            <div className="checked-inner w-[10px] h-[10px] rounded-full"></div>
                          </div>
                          <span className="text-[14px] font-light whitespace-nowrap font-inter customLabel">
                            T-Mobile & Sprint
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="md:col-span-4 xs:col-span-6 p-2 customGap">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="Verizon"
                          value="verizon"
                          className="hidden "
                          {...register("provider")}
                        />
                        <label
                          htmlFor="Verizon"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center">
                            <div className="checked-inner w-[10px] h-[10px] rounded-full"></div>
                          </div>
                          <span className="text-[14px] font-light whitespace-nowrap font-inter customLabel">
                            Verizon
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="md:col-span-4 xs:col-span-6 p-2 customGap">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="BoostMobile"
                          value="boostmobile"
                          className="hidden"
                          {...register("provider")}
                        />
                        <label
                          htmlFor="BoostMobile"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center">
                            <div className="checked-inner w-[10px] h-[10px] rounded-full"></div>
                          </div>
                          <span className="text-[14px] font-light whitespace-nowrap font-inter customLabel">
                            Boost Mobile
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="md:col-span-4 xs:col-span-6 p-2 customGap">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="CricketWireless"
                          value="cricketwireless"
                          className="hidden"
                          {...register("provider")}
                        />
                        <label
                          htmlFor="CricketWireless"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center">
                            <div className="checked-inner w-[10px] h-[10px] rounded-full"></div>
                          </div>
                          <span className="text-[14px] font-light whitespace-nowrap font-inter customLabel">
                            Cricket Wireless
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="md:col-span-4 xs:col-span-6 p-2 customGap">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="VirginMobile"
                          value="virginmobile"
                          className="hidden"
                          {...register("provider")}
                        />
                        <label
                          htmlFor="VirginMobile"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center">
                            <div className="checked-inner w-[10px] h-[10px] rounded-full"></div>
                          </div>
                          <span className="text-[14px] font-light whitespace-nowrap font-inter customLabel">
                            Virgin Mobile
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-3 p-2 customGap">
                    {/* <Listbox
                      value={selectedPerson}
                      onChange={setSelectedPerson}
                    >
                      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
                      <Listbox.Options>
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            value={person}
                            disabled={person.unavailable}
                          >
                            {person.name}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Listbox> */}
                    <Listbox
                      value={selectedProvider}
                      onChange={setSelectedProvider}
                    >
                      <div className="relative mt-1 text-[14px]">
                        <Listbox.Button className="relative font-inter w-max rounded-[5px] border-2 border-secondary/20 sm:py-3 py-1 pl-5 sm:pr-10 pr-8 text-base font-semibold customLabel">
                          <span className="block truncate text-[14px]">
                            {selectedProvider.name}
                          </span>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
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
                          <Listbox.Options className="absolute min-w-[256px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {otherProviders.map((provider, providerIdx) => (
                              <Listbox.Option
                                key={providerIdx}
                                className={({ active }) =>
                                  `${active
                                    ? "text-secondary bg-secondary-alternative/50"
                                    : "text-gray-900"
                                  }
                          cursor-pointer select-none relative py-2 pl-10 pr-4 font-medium`
                                }
                                value={provider}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={`customLabel ${selected
                                        ? "font-semibold"
                                        : "font-medium"
                                        } block truncate text-[14px]`}
                                    >
                                      {provider.name}
                                    </span>
                                    {selected ? (
                                      <span
                                        className={`customLabel ${active
                                          ? "text-amber-600"
                                          : "text-amber-600"
                                          }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
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
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>

                    {/* <div className="flex items-center">
                      <input
                        type="radio"
                        id="Other"
                        value="Other"
                        className="hidden"
                        {...register("provider")}
                      />
                      <label
                        htmlFor="Other"
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <div className="checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center">
                          <div className="checked-inner w-[10px] h-[10px] rounded-full"></div>
                        </div>
                        <span className="text-lg font-light whitespace-nowrap font-inter customLabel">
                          Other
                        </span>
                      </label>
                    </div> */}
                  </div>
                </div>

                {/* {getValues("provider") === "Other" && (
                  <Listbox
                    value={selectedProvider}
                    onChange={setSelectedProvider}
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="relative font-inter w-max rounded-[5px] border-2 border-secondary/20 py-3 pl-5 pr-10 text-base font-semibold">
                        <span className="block truncate">
                          {selectedProvider.name}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon
                            className="w-5 h-5 text-gray-400"
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
                        <Listbox.Options className="absolute min-w-[256px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {otherProviders.map((provider, providerIdx) => (
                            <Listbox.Option
                              key={providerIdx}
                              className={({ active }) =>
                                `${
                                  active
                                    ? "text-secondary bg-secondary-alternative/50"
                                    : "text-gray-900"
                                }
                          cursor-pointer select-none relative py-2 pl-10 pr-4 font-medium`
                              }
                              value={provider}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`${
                                      selected ? "font-semibold" : "font-medium"
                                    } block truncate`}
                                  >
                                    {provider.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`${
                                        active
                                          ? "text-amber-600"
                                          : "text-amber-600"
                                      }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
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
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                )} */}
              </div>

              <div className="space-y-5">
                <Heading h3 className="!text-[18px] !font-medium mudiumTitle">
                  How do you want your invitation & Reminders Sent?
                </Heading>

                <div class="grid grid-cols-12 gap-2 w-full customGrid customAlignCenter">
                  <div class="md:col-span-3 xs:col-span-6 p-2 customGap">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="text_invite"
                        value={true}
                        defaultChecked
                        className="text-primary rounded-md border-2 placeholder-[#757575] text-[14px] border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        {...register("text_invite")}
                      />
                      <label
                        htmlFor="text_invite"
                        className="text-[14px] font-light cursor-pointer whitespace-nowrap font-inter customLabel"
                      >
                        Text - 📲
                      </label>
                    </div>
                  </div>
                  <div class="md:col-span-3 xs:col-span-6 p-2 customGap">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="email_invite"
                        value={true}
                        defaultChecked
                        className="text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        {...register("email_invite")}
                      />
                      <label
                        htmlFor="email_invite"
                        className="text-[14px] font-light cursor-pointer whitespace-nowrap font-inter customLabel"
                      >
                        E-mail - 🖥
                      </label>
                    </div>
                  </div>
                  <div class="md:col-span-3 xs:col-span-6 p-2 customGap">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="mail_invite"
                        value={true}
                        className="text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        {...register("mail_invite")}
                      />
                      <label
                        htmlFor="mail_invite"
                        className="text-[14px] font-light cursor-pointer whitespace-nowrap font-inter customLabel"
                      >
                        Mail - 💌
                      </label>
                    </div>
                  </div>
                  <div class="md:col-span-3 xs:col-span-6 p-2 customGap">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="allAbove_invite"
                        value={true}
                        defaultChecked
                        className="text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        {...register("allAbove_invite")}
                      />
                      <label
                        htmlFor="allAbove_invite"
                        className="text-[14px] font-light cursor-pointer whitespace-nowrap font-inter customLabel"
                      >
                        All The Above - 💯
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 !mt-5">
                <Heading h3 className="!text-[18px] !font-medium mudiumTitle">
                  Can you make it? Please RSVP
                </Heading>

                <div class="grid grid-cols-12 gap-2 w-full customGrid customAlignCenter">
                  <div class="md:col-span-3 xs:col-span-6 p-2 customGap">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="yes"
                        value="yes"
                        defaultChecked
                        className="hidden"
                        {...register("rsvp")}
                      />
                      <label
                        htmlFor="yes"
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <div className="checked-outer border-[3px] rounded-full border-primary w-6 md:w-7 h-6 md:h-7 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full checked-inner md:w-3 md:h-3"></div>
                        </div>
                        <span className="text-[14px] font-light font-inter customLabel">
                          Yes
                        </span>
                      </label>
                    </div>
                  </div>
                  <div class="md:col-span-3 xs:col-span-6 p-2 customGap">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="maybe"
                        value="maybe"
                        defaultChecked
                        className="hidden"
                        {...register("rsvp")}
                      />
                      <label
                        htmlFor="maybe"
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <div className="checked-outer border-[3px] rounded-full border-primary w-6 md:w-7 h-6 md:h-7 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full checked-inner md:w-3 md:h-3"></div>
                        </div>
                        <span className="text-[14px] font-light font-inter customLabel">
                          Maybe
                        </span>
                      </label>
                    </div>
                  </div>

                  <div class="md:col-span-4 xs:col-span-6 p-2 customGap">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="no"
                        value="no"
                        className="hidden"
                        {...register("rsvp")}
                      />
                      <label
                        htmlFor="no"
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <div className="checked-outer border-[3px] rounded-full border-primary w-6 md:w-7 h-6 md:h-7 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full checked-inner md:w-3 md:h-3"></div>
                        </div>
                        <span className="text-[14px] font-light font-inter customLabel">
                          No, we send our best.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="space-y-3 !mt-10 "
              // title='Please include yourself'
              >
                <Heading
                  h3
                  className="!text-[18px] !m-0 !font-medium mudiumTitle"
                >
                  RSVP Estimate Guests
                </Heading>
                <h2 className="text-[12px]">Please include yourself</h2>
                <input
                  type="text"
                  value={`${getValues("guestEstimate")}`}
                  className="w-28 text-center rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal"
                  {...register("guestEstimate")}
                />
                <div className="py-1 sm:py-3">
                  <input
                    type="range"
                    defaultValue={1}
                    min="1"
                    max="20"
                    className="block cursor-pointer text-center rounded-[5px] border-2 border-gray-200 sm:px-5 px-2 text-base font-normal"
                    {...register("guestEstimate")}
                  />
                </div>
              </div>
              <div className="!mt-10 flex justify-center items-center flex-col">
                <Button
                  className="!mx-0 !rounded-lg !bg-[#FCE0EB] !text-[#000000] sm:w-[205px] sm:h-[70px] h-[50px] !text-[24px] mudiumTitle"
                  label="Submit"
                  type="submit"
                />
                <h1 className="text-[32px] leading-9 font-normal mt-4 mudiumTitle">
                  Eat, Drink, & BeWeddy!
                </h1>
              </div>
            </form>
          </div>

          {/* <div className="py-16 border-t-4 border-primary bg-secondary-alternative/40">
            <div className="text-center">
              <Heading
                h3
                className="!text-[36px] !font-medium mb-10 commonTitle"
              >
                Eat, Drink, & BeWeddy!
              </Heading>
              <div className="max-w-lg mx-auto">
                <img
                  src="/images/thank-you.png"
                  alt=""
                  className="rounded-lg"
                />
              </div>
            </div>
          </div> */}
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(AddressRSVP);
