import React from "react";
import Image from "next/image";
import Link from "next/link";
import Confetti from "react-confetti";

const Payment = () => {
  return (
    <div>
      <div className="container flex items-center justify-center min-h-screen py-5">
        <div className="border-2 rounded-lg border-[#d9d9d9] sm:p-10 p-4 w-full">
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/images/logo.png"
                  alt="Payment"
                  height="61"
                  width="158"
                  objectFit="cover"
                  loading="lazy"
                />
              </a>
            </Link>
          </div>

          <div className="flex justify-center items-center py-[100px] flex-col">
            <Image
              src="/congratulations.png"
              alt="Payment"
              height="116"
              width="96"
              objectFit="cover"
              loading="lazy"
            />
            <h1 className="text-4xl leading-10 font-bold py-[15px] commonTitle">
              Congratulations!
            </h1>
            <p1 className="text-[24px] leading-[44px] font-medium subTitle">
              You Have Sent The Gift To The Couple.
            </p1>
            <p1 className="text-[24px] leading-[44px] font-medium subTitle">
              Let's Eat, Drink & BeWeddy!
            </p1>
          </div>
        </div>
      </div>
      <Confetti />
    </div>
  );
};

export default Payment;
