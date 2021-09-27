import React from "react";

const InvitationCard = ({ data }) => {
  return (
    <div className="mb-8">
      <img
        src={data.image}
        alt=""
        className="w-full h-48 border-2 border-[#343533] rounded"
      />
      <div className="my-4">
        <h1 className="text-[14px] font-medium leading-4">{data.name}</h1>
        <div className="flex items-center gap-3 my-3">
          <div className="w-4 h-4 bg-purple-600 bg-opacity-100 rounded-md"></div>
          <div className="w-4 h-4 bg-red-600 bg-opacity-100 rounded-md"></div>
          <div className="w-4 h-4 bg-blue-600 bg-opacity-100 rounded-md"></div>
          <div className="w-4 h-4 bg-green-600 bg-opacity-100 rounded-md"></div>
        </div>
        <button className="px-5 py-2 font-bold capitalize transition duration-300 border-2 rounded-lg border-secondary-alternative/40 font-inter bg-secondary-alternative/20 hover:bg-secondary-alternative/40 hover:border-primary text-[12px]">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default InvitationCard;
