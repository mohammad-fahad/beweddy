import React from "react";
import { useSelector } from "react-redux";
import WeddingDayCountDown from "../WeddingDayCountDown";
import { useWindowSize } from "@hooks/useWindowSize";

const MobilePreview = () => {
  const { user } = useSelector((state) => state.user);
  const size = useWindowSize();
  return (
    <div
      className={`${
        size.width < 600 ? "customMobileImg" : ""
      } mx-auto  relative`}
    >
      {/* <div > */}
      <img
        src="/preview/mobile.png"
        alt=""
        className={`!max-h-[400px] !md:max-h-[395px] mx-auto swiper-lazy  ${
          size.width < 600 ? "customMobileImg" : ""
        }`}
      />
      {/* </div> */}
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      {/* <div className="absolute !top-[21px] !bottom-[116px] !left-[207px] !right-[208px] customMobile"> */}
      <div className="absolute !top-[21px] !bottom-[27px] !left-[207px] !right-[208px] customMobile">
        <h1 className="absolute !top-[10px] left-[20%] text-[#ffffff]">
          {" "}
          {user?.coupleName}{" "}
        </h1>

        <div
          className={`absolute !bottom-[0px] left-[0px] rigth-[10px] bg-[#00000069] w-full py-1 `}
          style={{
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <h1
            className={`text-[#ffffff] text-center ${
              size.width < 480 ? "text-[12px]" : "text-[15px]"
            }`}
          >
            We’re Getting Married!
          </h1>
        </div>
        <img
          src={user?.questions?.couplePictures[0]?.url}
          alt="website preview"
          // className={`${size.width < 600 ? "responsiveImg" : ""} !h-[69%] `}
          className={`${size.width < 600 ? "responsiveImg" : ""} !h-[100%] `}
          style={{
            width: "-webkit-fill-available",
            borderRadius: "10px",
          }}
        />
        {/* <div
          className="bg-[#f9d1de] border-t-2 border-black"
          style={{
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <div className="pt-4 text-center">
            <h1 className="text-[12px]"> Wedding Day Countdown </h1>
          </div>
          <div className="py-3 ">
            <WeddingDayCountDown sm />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MobilePreview;
