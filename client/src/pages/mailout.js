import React from "react";
import Link from "next/link";

const mailout = () => {
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
          <h2 className="text-[30px] font-medium max-w-[500px]">
            Your Purchase was successful. Let’s Eat, Drink & BeWeddy!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default mailout;
