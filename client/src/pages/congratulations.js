import React from "react";
import Link from "next/link";
import Confetti from "react-confetti";
const Congratulations = () => {
  return (
    <div>
      <div className="container py-10">
        <Link href="/">
          <a className="mb-10 text-center">
            <img src="/images/logo.png" alt="" className="h-14 md:h-20" />
          </a>
        </Link>

        <div className="flex flex-col items-center justify-center h-[600px] max-w-4xl mx-auto space-y-10 text-center">
          <img src="/congratulations.png" alt="" className="h-14 md:h-20" />
          <h1 className="text-[36px] font-bold">Congratulations!</h1>
          <h2 className="text-[24px] font-medium font-inter max-w-[728px]">
            on partnering with BeWeddy. Our team will contact you in the next 24
            hrs to help onboard your software to your website! Let’s Celebrate.
          </h2>

          <h2 className="text-[24px] font-medium font-inter mt-4 max-w-[728px]">
            Any questions call or text (801) 919-7212
          </h2>
        </div>
      </div>
      {/* </CreateWebsiteContainer> */}
      <Confetti />
    </div>
  );
};

export default Congratulations;
