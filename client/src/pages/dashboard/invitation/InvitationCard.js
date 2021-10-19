import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const InvitationCard = ({ data }) => {
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
        className={`w-full border-2 border-[#343533] rounded flex justify-center items-center cursor-pointer `}
        // style={{ backgroundColor: selectColor(color) }}
      >
        <img
          src={image}
          // src={data.main}
          // alt={`data.${image}`}
          className="w-full h-[300px] "
        />
      </div>
      <div className="my-4">
        <h1 className="text-[14px] font-medium leading-4">{data?.name}</h1>
        <div className="flex items-center gap-3 my-3">
          <div
            className="w-5 h-5 bg-[#F4F4F4] bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => setImage(data.main)}
          ></div>
          <div
            className="w-5 h-5 bg-[#F3DFED] bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => setImage(data.image1)}
          ></div>
          <div
            className="w-5 h-5 bg-[#F4CEB8] bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => setImage(data.image2)}
          ></div>
          <div
            className="w-5 h-5 bg-[#D8EBD2] bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => setImage(data.image3)}
          ></div>
          <div
            className="w-5 h-5 bg-[#DDADD0] bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => setImage(data.image4)}
          ></div>
        </div>
        <Link href={`/dashboard/invitation/mailout/${data?.id}`}>
          <button className="px-5 py-2 font-bold capitalize transition duration-300 border-2 rounded-lg border-secondary-alternative/40 font-inter bg-secondary-alternative/20 hover:bg-secondary-alternative/40 hover:border-primary text-[12px]">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InvitationCard;
