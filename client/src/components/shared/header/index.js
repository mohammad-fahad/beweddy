import Link from "next/link";
import NavLinks from "./NavLinks";
import AuthLinks from "./AuthLinks";
import SearchBar from "./SearchBar";
import SocialLinks from "./SocialLinks";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileLinks from "./profileLinks";
import { XIcon } from "@heroicons/react/outline";
import Logo from "../Logo";

export const Header = () => {
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="relative bg-white">
      <div className="max-w-[1400px] px-10 xxl:px-0 mx-auto py-5 md:py-6 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="-mt-[0.6rem] inline-block space-y-2">
              {/* <img
                src='/images/logo.png'
                alt=''
                className='object-contain h-16 md:h-20 w-[155px] md:w-[200px]'
              /> */}
              <Logo />
            </a>
          </Link>
          <div className="hidden 2lg:flex flex-col space-y-[30px]">
            <NavLinks />
            <SearchBar />
          </div>
          <div className="flex flex-row items-center 2lg:flex-col space-x-3 2lg:space-x-0 2lg:space-y-[30px]">
            <div className="hidden sm:block">
              {user ? <ProfileLinks {...{ user }} /> : <AuthLinks />}
            </div>
            <button
              className="inline-block text-sm font-bold transition-colors duration-300 2lg:hidden font-inter group hover:text-primary"
              onClick={() => {
                setIsOpen((prev) => !prev);
                setIsSearchOpen(false);
              }}
            >
              {isOpen ? (
                <XIcon className="w-10 h-10 text-gray-700 sm:w-14 sm:h-14" />
              ) : (
                <svg
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                  className="w-10 h-10 text-gray-700 sm:w-14 sm:h-14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3335 31.1667H45.3335V36.8333H11.3335V31.1667ZM11.3335 17H56.6668V22.6667H11.3335V17ZM11.3335 51H31.8327V45.3333H11.3335V51Z"
                    fill="black"
                  />
                </svg>
              )}
            </button>
            <div className="hidden w-full 2lg:block">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="block 2lg:!hidden space-y-[15px]">
          <div className="block sm:hidden">
            {user ? <ProfileLinks {...{ user }} /> : <AuthLinks />}
          </div>
          <SearchBar />
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </header>
  );
};
