import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CreateAccount from "./CreateAccount";
import HowItWork from "./HowItWork";
import { useWindowSize } from "@hooks/useWindowSize";

const Footer = ({ hideSocial, className, websitePreview }) => {
  const { user } = useSelector((state) => state.user);
  const { pathname } = useRouter();
  const size = useWindowSize();

  return (
    <>
      {!hideSocial && (
        <>
          <div className="py-20 pb-16 bg-gray-50">
            <div className="text-center mb-[53px]">
              <h4 className="inline-block mx-auto text-[24px] font-medium pb-3 border-b-4 border-[#FFB1B6]">
                Follow BeWeddy
              </h4>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 socialGap ">
              <a
                target="_blank"
                href="https://facebook.com/"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={size.width < 599 ? 25 : 35}
                  color="#1877F2"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/"
                rel="noopener noreferrer"
              >
                <Twitter
                  size={size.width < 599 ? 25 : 35}
                  color="#1DA1F2"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a
                target="_blank"
                href="https://instagram.com/"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={size.width < 599 ? 25 : 35}
                  color="#E4355F"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={size.width < 599 ? 25 : 35}
                  color="#0A66C2"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a
                target="_blank"
                href="https://gmail.com/"
                rel="noopener noreferrer"
                title="google"
              >
                <img
                  src="/icons/gmail.svg"
                  alt="gmail"
                  className={` ${
                    size.width < 599
                      ? "!w-[25px] !h-[25px]"
                      : "!w-[35px] !h-[35px]"
                  }  hover:scale-125 transition duration-300`}
                />
              </a>
              <a
                target="_blank"
                href="https://youtube.com/"
                rel="noopener noreferrer"
              >
                <Youtube
                  color="#FF0000"
                  size={size.width < 599 ? 25 : 35}
                  className="transition duration-300 hover:scale-125"
                />
              </a>
            </div>
          </div>
          {pathname === "/" && <HowItWork hideBorderBottom />}
          {!user && <CreateAccount />}
        </>
      )}

      <div
        className={`py-8 bg-gradient-to-br from-[#FCE3EB] to-white border-t-[5px] border-b-[5px] border-primary ${
          className ? className : ""
        } `}
      >
        {/* <div className="container flex flex-col-reverse flex-wrap items-center justify-center gap-5 !md:flex-row sm:justify-between"> */}
        <div className="container flex !flex-row flex-wrap items-center justify-center gap-5  sm:justify-between footerWrapper">
          <p className="text-base">
            <span className="mr-1 customLabel">
              &copy; {new Date().getFullYear()}
            </span>
            <strong className="font-semibold customLabel">BeWeddy.</strong>
            <span className="ml-1 customLabel"> All rights reserved.</span>
          </p>
          {/* <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-between sm:gap-6"> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-3 md:flex-row sm:justify-between sm:gap-6">
            {websitePreview ? (
              <>
                <Link href="/terms">
                  <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                    <span className="customLabel">Terms of Uses</span>
                    {/* <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300"></span> */}
                  </a>
                </Link>

                <Link href="/privacy-policy">
                  <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                    <span className="customLabel">Privacy & Policy</span>
                    {/* <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300"></span> */}
                  </a>
                </Link>

                <Link href="/contactUs">
                  <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                    <span className="customLabel">ContactUs</span>
                    {/* <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300"></span> */}
                  </a>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link href="#">
                  <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                    <span className="customLabel">About BeWeddy</span>
                  </a>
                </Link>
                <Link href="#">
                  <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                    <span className="customLabel">How it Works?</span>
                    {/* <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300"></span> */}
                  </a>
                </Link>
                <Link href="/terms">
                  <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                    <span className="customLabel">Terms of Uses</span>
                    {/* <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300"></span> */}
                  </a>
                </Link>
                <Link href="/privacy-policy">
                  <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                    <span className="customLabel">Privacy & Policy</span>
                    {/* <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300"></span> */}
                  </a>
                </Link>
                <Link href="/contactUs">
                  <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                    <span className="customLabel">ContactUs</span>
                    {/* <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-[#FFB1B6] group-hover:w-full transition-all duration-300"></span> */}
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
