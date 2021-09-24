import React from "react";

const InvitationCard = ({ data }) => {
  return (
    <div className="m-5 p-5">
      <img src={data.image} alt="" className="w-auto h-48" />
      <h1>{data.name}</h1>
      <div className="flex justify-between max-w-xs my-5 mx-10">
        <div className="h-4 w-4 rounded-md bg-purple-600 bg-opacity-100"></div>
        <div className="h-4 w-4 rounded-md bg-red-600 bg-opacity-100"></div>
        <div className="h-4 w-4 rounded-md bg-blue-600 bg-opacity-100"></div>
        <div className="h-4 w-4 rounded-md bg-green-600 bg-opacity-100"></div>
      </div>
      <button className="capitalize border-2 border-secondary-alternative/40 py-2 px-5 rounded-lg font-inter bg-secondary-alternative/20 font-medium hover:bg-secondary-alternative/40 hover:border-primary transition duration-300">
        Order Now
      </button>
    </div>
  );
};

export default InvitationCard;
