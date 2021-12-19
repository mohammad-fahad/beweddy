import React from "react";
import Link from "next/link";
import Confetti from "react-confetti";

const index = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-10">
        <Link href="/">
          <a>
            <svg
              width="{18}"
              height="{20}"
              viewBox="0 0 18 20"
              className="w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 20.0008H16C16.5304 20.0008 17.0391 19.7901 17.4142 19.415C17.7893 19.0399 18 18.5312 18 18.0008V9.00079C18.0008 8.86919 17.9755 8.73872 17.9258 8.61689C17.876 8.49505 17.8027 8.38423 17.71 8.29079L9.71 0.290793C9.52264 0.104542 9.26919 0 9.005 0C8.74081 0 8.48736 0.104542 8.3 0.290793L0.3 8.29079C0.205512 8.38341 0.130342 8.49385 0.0788453 8.61573C0.0273487 8.7376 0.00054925 8.86849 0 9.00079V18.0008C0 18.5312 0.210714 19.0399 0.585786 19.415C0.960859 19.7901 1.46957 20.0008 2 20.0008ZM7 18.0008V13.0008H11V18.0008H7ZM2 9.41079L9 2.41079L16 9.41079V18.0008H13V13.0008C13 12.4704 12.7893 11.9617 12.4142 11.5866C12.0391 11.2115 11.5304 11.0008 11 11.0008H7C6.46957 11.0008 5.96086 11.2115 5.58579 11.5866C5.21071 11.9617 5 12.4704 5 13.0008V18.0008H2V9.41079Z"
                fill="black"
              />
            </svg>
          </a>
        </Link>
        <img
          className="-ml-20 h-30 w-60"
          src="images/logo.png"
          layout="fill"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center min-h-[70vh]">
        <img src="congratulations.png" className="h-30 w-30" alt="" />
        <h1 className="text-4xl font-alice ">Congratulations!</h1>
        <div className="flex justify-center my-7">
          <span className="h-1 w-52 bg-[#FFB1B6]"></span>
        </div>
        <p className="text-xl font-inter">Your Account Is Active.</p>
      </div>
      <div
        className={`py-8 bg-gradient-to-br from-[#FCE3EB] to-white border-t-[5px] border-b-[5px] border-primary `}
      >
        <p className="text-center font-inter">
          {" "}
          Any Questions Call Or Text (801) 919-7212
        </p>
      </div>
      <Confetti />
    </div>
  );
};

export default index;
