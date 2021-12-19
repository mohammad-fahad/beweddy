import React from "react";
import Link from "next/link";
const index = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-10">
        <Link href="/">
          <a>
            <img className="h-7 w-7" src="home2.svg" layout="fill" alt="" />
          </a>
        </Link>
        <img
          className="h-30 w-60 -ml-20"
          src="images/logo.png"
          layout="fill"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <img src="congratulations.png" className="h-30 w-30" alt="" />
        <h1 className="font-alice text-4xl ">Congratulations!</h1>
        <div className="flex justify-center my-7">
          <span className="h-1 w-52 bg-[#FFB1B6]"></span>
        </div>
        <p className="font-inter text-xl">Your Account Is Active.</p>
      </div>
      <div
        className={`py-8 bg-gradient-to-br from-[#FCE3EB] to-white border-t-[5px] border-b-[5px] border-primary `}
      >
        <p className="text-center font-inter">
          {" "}
          Any Questions Call Or Text (801) 919-7212
        </p>
      </div>
    </div>
  );
};

export default index;
