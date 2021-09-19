import React from "react";
import { useSelector } from "react-redux";
import WeddingDayCountDown from "../WeddingDayCountDown";
import { useWindowSize } from "@hooks/useWindowSize";
const TabPreview = () => {
  const { user } = useSelector((state) => state.user);
  const size = useWindowSize();
  return (
    <div
      className={`${size.width < 600 ? "tabPreview" : ""} mx-auto  relative`}
    >
      <img
        src="/preview/tab.png"
        alt=""
        className={`md:max-h-[395px] mx-auto swiper-lazy ${
          size.width < 480 ? "tabPreview" : ""
        }`}
      />
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      {/* <div className={`absolute !top-[17px] !bottom-[192px] left-[70px] right-[72px] ${
          size.width < 600 ? "tabImagesWrapper" : ""
        }`}> */}
      <div
        className={`absolute !top-[17px] !bottom-[133px] left-[70px] right-[72px] ${
          size.width < 768 ? "tabImagesWrapper" : ""
        } ${size.width < 600 ? "tabImagesWrapper" : ""}`}
      >
        <h1 className="absolute !top-[10px] !left-[10px] ">
          {user?.coupleName}
        </h1>
         <div
          className={`absolute !bottom-[0px] left-[0px] rigth-[10px] bg-[#00000069] w-full py-2 `} >
            <h1 className={`text-[#ffffff] text-center ${
                size.width < 480 ? "text-[12px]" : ""
              }`}>
                We’re Getting Married!
            </h1>
        </div>
        <img
          src={user?.questions?.couplePictures[0]?.url}
          alt="website preview"
          className={`!h-[100%] ${size.width < 480 ? "tabImage" : ""}`}
          // className={`!h-[66%] ${size.width < 480 ? "tabImage" : ""}`}
          style={{ width: "-webkit-fill-available" }}
        />
        {/* <div className="bg-[#f9d1de] border-t-2 border-black">
          <div className="pt-2 text-center">
            <h1 className={`${
          size.width < 600 ? "!text-[12px]" : ""
        }`} > Wedding Day Countdown </h1>
          </div>
          <div className="py-2 ">
            <WeddingDayCountDown sm preview/>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TabPreview;
