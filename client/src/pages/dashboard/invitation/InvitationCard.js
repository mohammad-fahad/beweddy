import React, { useState, useEffect } from "react";
import PreviewModal from "@components/MailOuts/previewModal";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

const InvitationCard = ({ data, handleSubmit, setSelected }) => {
  const [image, setImage] = useState("");
  const router = useRouter();

  useEffect(() => {
    setImage(data.main);
  }, [data]);

  useEffect(() => {
    setSelected({
      ...data,
      selected: image,
    });
  }, [image]);

  const handleClick = (event) => {
    if (image === "" || image === data.main) {
      toast("This is a demo card with text, please select an empty card.");
    } else {
      handleSubmit(event);
      router.push(`/dashboard/invitation/mailout/${data?.id}`);
    }
  };

  return (
    <div className="mb-8">
      <Toaster />
      <div
        className={`w-full flex justify-center items-center cursor-pointer p-8`}
        // style={{ backgroundColor: selectColor(color) }}
      >
        <div className="h-[284px] max-w-[204px] mx-auto relative">
          <img
            src={image}
            alt={`data?.name`}
            className="h-[284px] max-w-[204px] mx-auto"
            loading="lazy"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center pb-5 transition duration-300 opacity-0 bg-primary/80 hover:opacity-100">
            <PreviewModal
              btnText="Preview"
              data={data}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      <div className="my-4 ">
        <h1 className="text-[14px] font-semibold leading-4 font-inter">
          {data?.name}
        </h1>
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
        {/* <Link href={`/dashboard/invitation/mailout/${data?.id}`}> */}
        <button
          onClick={() => handleClick(data)}
          className="px-5 py-2 font-bold capitalize transition duration-300 border-2 rounded-lg border-secondary-alternative/40 font-inter bg-secondary-alternative/20 hover:bg-secondary-alternative/40 hover:border-primary text-[12px]"
        >
          Order Now
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default InvitationCard;
