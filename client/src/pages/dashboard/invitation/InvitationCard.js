import React, { useState } from "react";

const InvitationCard = ({ data }) => {
  const [color, setColor] = useState("default");

  const selectColor = (color) => {
    if (color === "default") return "#9196A2";
    if (color === "purple") return "#7C3AED";
    if (color === "red") return "#DC2626";
    if (color === "blue") return "#2563EB";
    if (color === "green") return "#059669";
  };

  const handleClick = (color) => {
    setColor(color);
  };

  return (
    <div className="mb-8">
      <div
        className={`w-full border-2 border-[#343533] rounded flex justify-center items-center py-4`}
        style={{ backgroundColor: selectColor(color) }}
      >
        <img src={data.image} alt="" className="w-[70%] h-48 " />
      </div>

      <div className="my-4">
        <h1 className="text-[14px] font-medium leading-4">{data.name}</h1>
        <div className="flex items-center gap-3 my-3">
          <div
            className="w-5 h-5 bg-purple-600 bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => handleClick("purple")}
          ></div>
          <div
            className="w-5 h-5 bg-red-600 bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => handleClick("red")}
          ></div>
          <div
            className="w-5 h-5 bg-blue-600 bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => handleClick("blue")}
          ></div>
          <div
            className="w-5 h-5 bg-green-600 bg-opacity-100 rounded-full cursor-pointer"
            onClick={() => handleClick("green")}
          ></div>
        </div>
        <button className="px-5 py-2 font-bold capitalize transition duration-300 border-2 rounded-lg border-secondary-alternative/40 font-inter bg-secondary-alternative/20 hover:bg-secondary-alternative/40 hover:border-primary text-[12px]">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default InvitationCard;
