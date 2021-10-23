import React, { useState, useEffect } from "react";
import Link from "next/link";

const InvitationCard = ({ data, handleSubmit, setSelected }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(data.main);
  }, []);

  useEffect(() => {
    setSelected({
      name: data.name,
      main: data.main,
      price: data.price,
      image1: data.image1,
      image2: data.image2,
      image3: data.image3,
      image4: data.image4,
      decription: data.decription,
      backPart: data.backPart,
      color: data.color,
      selected: image,
    });
  }, [image]);

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
            className="w-5 h-5 bg-[#FCE3EB] bg-opacity-100 rounded-full cursor-pointer flex items-center justify-center text-[10px] text-[#000000] border-[1px] border-primary"
            onClick={() => setImage(data?.main)}
          >
            M
          </div>
          {data?.image1 && (
            <div
              className="w-5 h-5 border-[1px] border-primary bg-[#FCE3EB] text-[10px] text-[#000000] flex items-center justify-center bg-opacity-100 rounded-full cursor-pointer"
              onClick={() => setImage(data?.image1)}
            >
              1
            </div>
          )}
          {data?.image2 && (
            <div
              className="w-5 h-5 border-[1px] border-primary bg-[#FCE3EB] text-[10px] text-[#000000] flex items-center justify-center bg-opacity-100 rounded-full cursor-pointer"
              onClick={() => setImage(data?.image2)}
            >
              2
            </div>
          )}
          {data?.image3 && (
            <div
              className="w-5 h-5 border-[1px] border-primary bg-[#FCE3EB] text-[10px] text-[#000000] flex items-center justify-center bg-opacity-100 rounded-full cursor-pointer"
              onClick={() => setImage(data?.image3)}
            >
              3
            </div>
          )}
          {data?.image4 && (
            <div
              className="w-5 h-5 border-[1px] border-primary bg-[#FCE3EB] text-[10px] text-[#000000] flex items-center justify-center bg-opacity-100 rounded-full cursor-pointer"
              onClick={() => setImage(data?.image4)}
            >
              4
            </div>
          )}
          {data?.image5 && (
            <div
              className="w-5 h-5 border-[1px] border-primary bg-[#FCE3EB] text-[10px] text-[#000000] flex items-center justify-center bg-opacity-100 rounded-full cursor-pointer"
              onClick={() => setImage(data?.image5)}
            >
              5
            </div>
          )}

          {/* {data?.image2 && (
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
          )} */}
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
