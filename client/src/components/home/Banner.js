import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
const Banner = ({ setImageLoaded }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <div
      className="relative w-full pb-32 border-b-4 pt-14 xxl:pt-28 border-primary"
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,.7),rgba(0,0,0,.7)) ,url('/images/banner.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 z-10 w-full h-full bg-primary/40" />
      <Image
        layout="fill"
        src="/images/banner.png"
        alt="banner"
        priority
        className="object-cover object-top pointer-events-none"
        onLoad={() => setImageLoaded((prev) => !prev)}
      />
      <div className="container relative z-50">
        <div className="mb-28">
          <h1 className="text-[60px] !sm:text-[36px] lg:text-[60px] text-white text-center font-normal headerTitle ">
            <span className="text-[#F9D1DE] relative inline-block mr-1">
              Free{" "}
              <div className="absolute top-[-27px] lg:top-[-27px] left-[-60px] xl:left-[-60px] xxl:left-[-60px] w-[110px] sm:w-[128px] md:w-[150px] h-[150px] lg:w-[164px] lg:h-[164px] xl:w-48 xl:h-48 headerTitleImage ">
                <img
                  src="/images/banner_circle.svg"
                  alt=""
                  className="w-full"
                />
              </div>
            </span>{" "}
            All-in-One <br /> Wedding Platform
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center pt-32 banner-bubble sm:ml-8 md:px-5 md:mb-20 xl:pt-36">
          <Link href={`${user ? "dashboard" : "/example-website"}`}>
            <a className="flex flex-col items-center justify-center transition duration-300 bg-white border-4 rounded-full cursor-pointer bubble md:-ml-10 bg-white/90 hover:bg-white border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 hover:scale-110">
              <img
                src="/icons/message.svg"
                className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                alt=""
              />
              <h4 className="mt-3 text-xs text-center font-regular sm:font-medium md:text-sm lg:text-base xl:text-lg">
                Text <br /> Invitation
              </h4>
            </a>
          </Link>
          <Link href={`${user ? "dashboard" : "/example-website"}`}>
            <a className="flex flex-col items-center justify-center transition duration-300 bg-white border-4 rounded-full cursor-pointer bubble md:-ml-10 bg-white/90 hover:bg-white border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 hover:scale-110">
              <img
                src="/icons/mail.svg"
                className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                alt=""
              />
              <h4 className="mt-3 text-xs text-center font-regular sm:font-medium md:text-sm lg:text-base xl:text-lg">
                Mail out <br /> Invitation
              </h4>
            </a>
          </Link>
          <Link href={`${user ? "dashboard" : "/example-website"}`}>
            <a className="flex flex-col items-center justify-center transition duration-300 bg-white border-4 rounded-full cursor-pointer bubble md:-ml-10 bg-white/90 hover:bg-white border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 hover:scale-110">
              <img
                src="/icons/rsvp.svg"
                className="-mt-6 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 sm:-mt-8"
                alt=""
              />
              <h4 className="mt-3 text-xs text-center font-regular sm:font-medium md:text-sm lg:text-base xl:text-lg">
                We Need Your <br /> Address
              </h4>
            </a>
          </Link>
          <Link href={`${user ? "dashboard" : "/example-website"}`}>
            <a className="flex flex-col items-center justify-center transition duration-300 bg-white border-4 rounded-full cursor-pointer banner-bubble-item-1 bubble md:-ml-10 bg-white/90 hover:bg-white border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 hover:scale-110">
              <img
                src="/icons/gift_solid.svg"
                className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                alt=""
              />
              <h4 className="mt-3 text-xs text-center font-regular sm:font-medium md:text-sm lg:text-base xl:text-lg">
                Universal <br />
                Gift Registry
              </h4>
            </a>
          </Link>
          <Link href={`${user ? "dashboard" : "/example-website"}`}>
            <a className="mt-[-1.2rem] md:!-mt-0 bubble md:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300">
              <img
                src="/icons/site.svg"
                className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                alt=""
              />
              <h4 className="mt-3 text-xs text-center font-regular sm:font-medium md:text-sm lg:text-base xl:text-lg">
                Wedding
                <br />
                Website
              </h4>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
