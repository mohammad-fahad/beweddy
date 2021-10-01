import { Heading } from "@components/index";
import Image from "next/image";

const Features = () => {
  return (
    <div className="border-[5px] border-l-0 border-r-0 border-primary">
      <div className="container px-10 py-20 sm:px-0">
        {/* <Heading
          label={`The Only Free Text Messaging Wedding Platform`}
          color="bg-[#F9D1DE]"
          className="!text-4xl"
        /> */}
        <h2 className="max-w-3xl pb-8 mx-auto mt-10 text-4xl text-center capitalize commonTitle">
          The Only Free Text Messaging <br /> Wedding Platform
        </h2>
        <div className="w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-[#F9D1DE]" />
        <div className="grid max-w-4xl gap-16 mx-auto md:grid-cols-12 lg:gap-20">
          <div className="self-center col-span-5 md:col-span-7">
            <div className="space-y-5">
              <div className="flex items-center justify-between pl-0 pr-8 space-x-8 lg:pr-10 timeline sm:pl-7 lg:pl-8 py-7 lg:py-8 lg:space-x-10">
                <p className="customLabel text-[15px] md:text-[16px] lg:text-[16px] font-semibold capitalize !leading-[167.5%]">
                  Text, Email, and Mail Out Invitations
                </p>
                <img
                  src="/icons/mail_outline.svg"
                  alt=""
                  className="w-10 md:w-12 lg:w-14 !ml-auto lg:!ml-10"
                />
              </div>
              <div className="flex items-center pl-8 pr-0 space-x-8 lg:pl-10 timeline sm:pr-7 lg:pr-8 py-7 lg:py-8 lg:space-x-10">
                <img
                  src="/icons/louspeaker.svg"
                  alt=""
                  className="w-10 md:w-12 lg:w-14"
                />
                <p className="customLabel text-[15px] md:text-[16px] lg:text-[16px] font-semibold capitalize !leading-[167.5%]">
                  Send Updates, Reminders, and Collect Addresses From Your
                  Guests
                </p>
              </div>
              <div className="flex items-center pl-0 pr-8 space-x-8 lg:pr-10 timeline sm:pl-7 lg:pl-8 py-7 lg:py-8 lg:space-x-10">
                <p className="customLabel text-[15px] md:text-[16px] lg:text-[16px] font-semibold capitalize !leading-[167.5%]">
                  Text Out Wedding Itinerary, Calendar Invites, Confirm and RSVP
                </p>
                <img
                  src="/icons/archive.svg"
                  alt=""
                  className="w-10 md:w-12 lg:w-14"
                />
              </div>
              <div className="flex items-center pl-8 pr-0 space-x-8 lg:pl-10 timeline sm:pr-7 lg:pr-8 py-7 lg:py-8 lg:space-x-10">
                <img
                  src="/icons/chat.svg"
                  alt=""
                  className="w-10 md:w-12 lg:w-14"
                />
                <p className="customLabel text-[15px] md:text-[16px] lg:text-[16px] font-semibold capitalize !leading-[167.5%]">
                  Give Appreciation by Sending a Thank You Message Via Text or
                  Email
                </p>
              </div>
              {/* <div className='flex items-center pr-8 space-x-8 lg:pr-10 timeline pl-7 lg:pl-8 py-7 lg:py-8 lg:space-x-10'>
                <p className='text-[15px] md:text-lg lg:text-xl font-semibold capitalize !leading-[167.5%]'>
                  Customized QR Code
                </p>
                <img
                  src='/icons/qrLogo.png'
                  alt=''
                  className='w-10 md:w-12 lg:w-14 !ml-auto'
                />
              </div> */}
            </div>
          </div>
          <div className="self-center col-span-5 px-20 mx-auto sm:col-span-6 md:col-span-5 sm:px-0">
            <Image
              width={365}
              height={750}
              src="/images/homePageMoble.png"
              alt=""
              // className='mx-auto w-72'
            />
            {/* <Image
              width={365}
              height={750}
              src="/images/feature-mobile.png"
              alt=""
              // className='mx-auto w-72'
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
