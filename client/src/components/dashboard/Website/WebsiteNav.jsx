import { logout } from "@features/auth/authSlice";
import { Menu, Transition } from "@headlessui/react";
import { LogoutIcon, UserIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const WebsiteNav = ({ coupleName }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  return (
    <div className="bg-[#ffffff] border-b-[3px] border-primary">
      <div className="max-w-[1620px] pr-16 xxl:pr-0 ml-14">
        <div className="flex items-center justify-between">
          <h3 className="flex text-lg capitalize">
            <img src="/apple-touch-icon.png" alt="help" className="w-7 h-7" />
            <span className="pl-2 text-2xl font-medium"> Nate&Ashley</span>
          </h3>
          <div className="flex items-center py-5 space-x-5 pr-7">
            <Link href="/">
              <a className="flex items-center space-x-3 text-base font-semibold text-gray-700 transition duration-300 font-inter hover:text-primary">
                <span>Need yout Address- RSVP</span>
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center space-x-3 text-base font-semibold text-gray-700 transition duration-300 font-inter hover:text-primary">
                <span>Back to Dashboard</span>
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center space-x-3 text-base font-semibold text-gray-700 transition duration-300 font-inter hover:text-primary">
                <span>Contact</span>
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center space-x-3 text-base font-semibold text-gray-700 transition duration-300 font-inter hover:text-primary">
                <span>Follow us</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteNav;
