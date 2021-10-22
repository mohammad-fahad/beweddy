import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const InvitationCard = ({ data, handleSubmit }) => {
  const [color, setColor] = useState(1);
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(data.main);
  }, []);

  const selectColor = (color) => {
    if (color === "default") return "#9196A2";
    if (color === "purple") return "#7C3AED";
    if (color === "red") return "#DC2626";
    if (color === "blue") return "#2563EB";
    if (color === "green") return "#059669";
  };

  const handleClick = (s) => {
    setImage(s);
  };

  // console.log(`{`data?.${image}`}`);

  return (
    <div className="mb-8">
      <div
        className={`w-full flex justify-center items-center cursor-pointer p-8`}
        // style={{ backgroundColor: selectColor(color) }}
      >
        <img
          src={image}
          alt={`data?.name`}
          className="w-full h-[300px] max-w-[250px] mx-auto "
          loading="lazy"
        />
      </div>
      <div className="my-4">
        <h1 className="text-[14px] font-medium leading-4">{data?.name}</h1>
        <div className="flex items-center gap-3 my-3">
          <div
            className="w-5 h-5 bg-[#000000] bg-opacity-100 rounded-full cursor-pointer flex items-center justify-center text-[10px] text-[#ffffff] border-[1px] border-primary"
            onClick={() => setImage(data?.main)}
          >
            M
          </div>

          {data?.image2 && (
            <div
              className="w-5 h-5 border-[1px] border-primary bg-[#EDEDED] bg-opacity-100 rounded-full cursor-pointer"
              onClick={() => setImage(data?.image1)}
            ></div>
          )}
          <div
            className="w-5 h-5 border-[1px] border-primary bg-[#ffffff] bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => setImage(data?.image2)}
          ></div>
          {data?.image3 && (
            <div
              className="w-5 h-5 border-[1px] border-primary bg-[#F8F8F1] bg-opacity-100 rounded-full cursor-pointer"
              onClick={() => setImage(data?.image3)}
            ></div>
          )}
          {data?.image4 && (
            <div
              className="w-5 h-5 border-[1px] border-primary bg-[#000000] bg-opacity-100 rounded-full cursor-pointer"
              onClick={() => setImage(data?.image4)}
            ></div>
          )}
          {data?.image5 && (
            <div
              className="w-5 h-5 border-[1px] border-primary bg-[#B1C4B1] bg-opacity-100 rounded-full cursor-pointer"
              onClick={() => setImage(data?.image5)}
            ></div>
          )}
        </div>
        <Link href={`/dashboard/invitation/mailout/${data?.id}`}>
          <button
            onClick={() => handleSubmit(data)}
            className="px-5 py-2 font-bold capitalize transition duration-300 border-2 rounded-lg border-secondary-alternative/40 font-inter bg-secondary-alternative/20 hover:bg-secondary-alternative/40 hover:border-primary text-[12px]"
          >
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InvitationCard;
