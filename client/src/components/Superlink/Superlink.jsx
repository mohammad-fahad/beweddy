import React, { useState } from "react";
import Image from "next/image";
import { isoToUtcDate } from "@utils/index";
import Link from "next/link";
import { QRCode } from "react-qrcode-logo";
import SeeMore from "@hoc/SeeMore";

const Superlink = ({ user }) => {
  const [value, setValue] = useState(`${process.env.NEXT_PUBLIC_CLIENT_URL}`);
  console.log(user);
  return (
    <div className="border-2 border-[#000000] rounded-lg w-full">
      <Image
        src={user?.questions?.couplePictures[0]?.url}
        alt="super link"
        width={500}
        height={300}
        objectFit="cover"
        loading="lazy"
        className="rounded-lg"
      />
      <div className="flex flex-col items-center justify-center p-10 ">
        <h1 className="text-[18px] font-semibold ">
          ✨ <span> {user?.coupleName} </span> ’s Wedding! 💍 ✨
        </h1>

        <div className="flex flex-col items-center justify-center my-4 ">
          <Image
            src="/Line.jpg"
            alt="super link"
            width={150}
            height={20}
            objectFit="contain"
            loading="lazy"
            className="w-full"
          />
          <h1 className="text-[36px] font-medium leading-10 font-inter mudiumTitle my-2">
            {isoToUtcDate(user?.questions?.weddingDay?.weddingDate)}
          </h1>
          <Image
            src="/Line.jpg"
            alt="super link"
            width={150}
            height={20}
            objectFit="contain"
            loading="lazy"
          />
        </div>
        <div className="text-center">
          <h1 className="text-[16px] font-medium leading-[154%]">
            <SeeMore number={160}>{user?.ourStory}</SeeMore>
          </h1>
        </div>

        <div className="w-full my-4 ">
          <Link href="/">
            <a className="flex space-x-3 white-space-nowrap py-2 px-5 border-2 border-[#000000] rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300 buttonPaddig w-full my-3 justify-center items-center !bg-[#F9D1DE] ">
              {/* <LinkIcon className="w-5 h-5" /> */}
              <img src="/icons/card-edit.svg" className="w-5 h-5" alt="" />
              <span className="text-[14px] text-[#292D32] ">
                We Need Your Address & RSVP
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex space-x-3 white-space-nowrap py-2 px-5 border-2 border-[#000000] rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300 buttonPaddig w-full my-3 justify-center items-center ">
              <img src="/icons/link-2.svg" className="w-5 h-5" alt="" />
              <span className="text-[14px] text-[#292D32] ">
                Visit Our Wedding Website
              </span>
            </a>
          </Link>
        </div>
      </div>
      {/* QR sean part */}
      <div className="bg-gradient-to-br from-[#FCE3EB] to-white border-t-[2px] flex justify-center items-center flex-col border-primary py-10 rounded-tl-[10px] rounded-tr-[10px]">
        <h1 className="text-[18px] max-w-[200px] text-center">
          Scan Our Personalized <br />
          <span className="font-bold">Wedding QR Codes. </span>
        </h1>

        <div className="mt-5">
          <QRCode
            {...{ value }}
            size={150}
            eyeRadius={[
              {
                outer: [10, 10, 0, 10],
                inner: [0, 10, 10, 10],
              },
              [10, 10, 10, 0], // top/right eye
              [10, 0, 10, 10], // bottom/left
            ]}
            logoHeight={50}
            logoWidth={50}
            logoImage="/icons/circle-ring.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Superlink;
