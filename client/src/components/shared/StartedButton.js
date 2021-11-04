import React from "react";
import Link from "next/link";

const StartedButton = ({ className }) => {
  return (
    <div
      className={`absolute z-20 mx-auto transition duration-200 left-2/4 -translate-x-2/4 hover:scale-110 ${
        className ? className : ""
      }`}
    >
      <Link href="/register">
        <a className="py-3 text-base font-bold bg-white border-2 p-11 whitespace-nowrap border-primary text-primary rounded-3xl">
          Let's Get Started
        </a>
      </Link>
    </div>
  );
};

export default StartedButton;
