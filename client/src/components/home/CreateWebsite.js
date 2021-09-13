import { LinkButton, Heading } from "@components/index";
import StartedButton from "@components/shared/StartedButton";
import Link from "next/link";
import Swiper from "react-id-swiper";
import { useSelector } from "react-redux";

import SwiperCore, { Lazy, Autoplay } from "swiper";
SwiperCore.use([Lazy, Autoplay]);

const CreateWebsite = () => {
  const { user } = useSelector((state) => state.user);
  const params = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <div
      className="bg-gradient-to-br from-[#FCE3EB] to-white relative banner border-t-[5px] -mt-2 border-primary"
      style={{
        background: `url('/images/leaf-bg.png'), linear-gradient(120.68deg, #FCE3EB 30.04%, #FFFFFF 100%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundColor: "#FEDFF2",
      }}
    >
      <StartedButton className="-top-3" />

      <div className="container py-20">
        <Heading
          label="Create Your BeWeddy Website"
          className="!text-4xl commonTitle"
        />
        <div className="container">
          <Swiper {...params}>
            <div>
              <img
                src="/images/wedding-laptop.png"
                alt=""
                className="md:max-h-[395px] lg:max-h-[550px] mx-auto swiper-lazy"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
            <div>
              <img
                src="/images/wedding-phone.png"
                alt=""
                className="max-h-[250px] md:max-h-[395px] lg:max-h-[550px] mx-auto swiper-lazy"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
            <div>
              <img
                src="/images/wedding-macbook.png"
                alt=""
                className="max-h-[250px] md:max-h-[395px] lg:max-h-[560px] mx-auto swiper-lazy"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </div>
          </Swiper>
        </div>
        {!user && (
          <div className="absolute z-20 mx-auto transition duration-200 left-2/4 -translate-x-2/4 -bottom-5 hover:scale-110">
            <Link href="/create-website">
              <a className="py-5 font-bold text-[24px] bg-[#ffffff] border-4 px-12 whitespace-nowrap border-primary text-primary rounded-full createButton">
                Create Your Wedding Website
              </a>
            </Link>
          </div>
          // <div className="absolute z-20 mx-auto transition duration-200 left-2/4 -translate-x-2/4 -top-3 hover:scale-110">
          //   <Link href="/create-website">
          //     <a className="px-20 py-3 text-base bg-white border-2 whitespace-nowrap md:px-28 border-primary text-primary rounded-3xl">
          //       Create Your Wedding Website
          //     </a>
          //   </Link>
          // </div>
        )}
      </div>
    </div>
  );
};

export default CreateWebsite;
