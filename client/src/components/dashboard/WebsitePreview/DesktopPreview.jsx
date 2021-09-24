import WeddingDayCountDown from "../WeddingDayCountDown";
import { useSelector } from "react-redux";
import { useWindowSize } from "@hooks/useWindowSize";

const DesktopPreview = () => {
  const { user } = useSelector((state) => state.user);
  const size = useWindowSize();
  return (
    <div
      className={`${
        size.width < 600 ? "desktopPreview" : ""
      } mx-auto  relative`}
    >
      <img
        src="/preview/dasktop.png"
        alt=""
        className={` !md:max-h-[395px] mx-auto swiper-lazy  ${
          size.width < 600 ? "desktopPreview" : ""
        }`}
      />
      <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />

      <div
        className={`absolute !top-[21px] !bottom-[69px] left-[74px] right-[77px] ${
          size.width < 600 ? "desktopImagesWrapper" : ""
        }`}
      >
        {/* <h1
          className={`absolute !top-[10px] left-[10px]  ${
            size.width < 480 ? "text-[12px]" : ""
          }`}
        >
          {user?.coupleName}
        </h1> */}
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
          className={`!h-[100%] ${size.width < 600 ? "desktopImage" : ""}`}
          style={{ width: "-webkit-fill-available" }}
        />
      </div>
    </div>
  );
};

export default DesktopPreview;

// <div className="absolute !top-[21px] !bottom-[12.1rem] left-[22px] right-[22px]">
//         <img src={user?.questions?.couplePictures[0]?.url} alt="website preview" className='!h-[57%]' style={{width: "-webkit-fill-available"}} />
//         <div className="bg-[#f9d1de] border-t-2 border-black">
//           <div className='pt-4 text-center'>
//             <h1> Wedding Day Countdown </h1>
//           </div>
//           <div className='py-3 ' >
//               <WeddingDayCountDown sm />
//           </div>
//         </div>
//       </div>
