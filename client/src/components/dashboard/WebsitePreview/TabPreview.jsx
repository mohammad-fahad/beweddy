import React from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "@hooks/useWindowSize";
const TabPreview = () => {
  const { user } = useSelector((state) => state.user);
  const size = useWindowSize();
  return (
    <div
      className={`${
        size.width < 600 ? "tabPreview" : ""
      } mx-auto tabPreview  relative`}
    >
      <img
        src="/preview/tab.png"
        alt=""
        className={`md:max-h-[395px] mx-auto swiper-lazy tabPreview ${
          size.width < 480 ? "tabPreview" : ""
        }`}
      />
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
      <div
        className={`absolute !top-[17px] !bottom-[133px] left-[70px] right-[72px] tabImagesWrapper ${
          size.width < 768 ? "tabImagesWrapper" : ""
        } ${size.width < 600 ? "tabImagesWrapper" : ""}`}
      >
        <div
          className={`absolute !bottom-[0px] left-[0px] rigth-[10px] bg-[#00000069] w-full py-2 `}
        >
          <h1
            className={`text-[#ffffff] text-center capitalize ${
              size.width < 480 ? "text-[12px]" : ""
            }`}
          >
            {user?.coupleName} Getting Married!
          </h1>
        </div>
        <img
          src={user?.questions?.couplePictures[0]?.url}
          alt="website preview"
          className={`!h-[100%] ${size.width < 480 ? "tabImage" : ""} tabImage`}
          style={{ width: "-webkit-fill-available" }}
        />
      </div>
    </div>
  );
};

export default TabPreview;
