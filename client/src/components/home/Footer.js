import { Heading } from "@components/index";
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

const Footer = ({ hideSocial }) => {
  const { user } = useSelector((state) => state.user);
  const { pathname } = useRouter();
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
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              <a href="#">
                <Facebook
                  size={35}
                  color="#1877F2"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a href="#">
                <Twitter
                  size={35}
                  color="#1DA1F2"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a href="#">
                <Instagram
                  size={35}
                  color="#E4355F"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a href="#">
                <Linkedin
                  size={35}
                  color="#0A66C2"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a href="#" title="google">
                <img
                  src="/icons/gmail.svg"
                  alt="gmail"
                  className="w-[35px] h-[35px] hover:scale-125 transition duration-300"
                />
              </a>
              <a href="#">
                <Youtube
                  color="#FF0000"
                  size={35}
                  className="transition duration-300 hover:scale-125"
                />
              </a>
            </div>
          </div>
          {pathname === "/" && <HowItWork hideBorderBottom />}
          {!user && <CreateAccount />}
        </>
      )}
      <div className="py-8 bg-gradient-to-br from-[#FCE3EB] to-white border-t-[5px] border-b-[5px] border-primary">
        <div className="container flex flex-wrap items-center justify-center gap-5 sm:justify-between">
          <p className="text-base">
            <strong className="font-semibold">
              &copy; {new Date().getFullYear()} BeWeddy.
            </strong>{" "}
            All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-between sm:gap-6">
            <Link href="/">
              <a className="relative font-semibold transition-colors duration-300 text-primary font-inter group hover:text-primary">
                <span>About BeWeddy!</span>
                <span
                  className={`absolute bottom-[-6px] left-0 w-full h-[2px] bg-primary group-hover:w-full transition-all duration-300`}
                ></span>
              </a>
            </Link>
            <Link href="/">
              <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                <span>Terms of user</span>
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                <span>Privacy Policy</span>
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="relative font-medium transition-colors duration-300 text-primary/60 font-inter group hover:text-primary">
                <span>Contact us</span>
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
