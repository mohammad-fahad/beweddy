import { logout } from '@features/auth/authSlice';
import { Menu, Transition } from '@headlessui/react';
import { LogoutIcon, UserIcon, SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const DashboardTopBar = ({ coupleName }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <div className="bg-secondary-alternative border-b-[3px] border-primary">
      <div className="max-w-[1620px] pr-12 md:pr-16 xxl:pr-0 ml-6 sm:ml-14">
        <div className="flex flex-col justify-between py-5 space-y-3 md:items-center sm:flex-row sm:space-y-0">
          <h3 className="text-xl capitalize">👋 Welcome {user?.coupleName}!</h3>
          <div className="flex items-center space-x-5">
            {/* <Link href='/'>
              <a className='flex items-center space-x-2 text-sm font-semibold text-gray-700 transition duration-300 md:space-x-3 font-inter md:text-base hover:text-primary'>
                <SearchIcon className='w-5 h-5 sm:w-6 sm:h-6' />
                <span>Search</span>
              </a>
            </Link> */}
            <Link href="/">
              <a className="flex items-center space-x-2 text-sm font-semibold text-gray-700 transition duration-300 md:space-x-3 font-inter md:text-base hover:text-primary">
                <img
                  src="/icons/lifebuoy.svg"
                  alt="help"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span>Help</span>
              </a>
            </Link>
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="flex items-center space-x-2 text-sm font-semibold text-gray-700 transition duration-300 md:space-x-3 font-inter md:text-base hover:text-primary">
                    <img
                      src="/icons/profile-2user.svg"
                      alt="account"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                    <span>Account</span>
                  </Menu.Button>
                  <Transition
                    show={open}
                    as="div"
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      // static
                      // className='absolute right-0 z-50 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg w-52 ring-1 ring-black ring-opacity-5 focus:outline-none'
                      className="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <Link href="/">
                            <a
                              className={`group font-inter ${
                                active ? 'bg-gray-100' : 'hover:bg-gray-100'
                              } hover:bg-gray-100 text-gray-600 flex items-center w-full px-3 py-2 text-base transition duration-300`}
                            >
                              <UserIcon
                                className="w-5 h-5 mr-2"
                                aria-hidden="true"
                              />
                              Home
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`group font-inter ${
                              active ? 'bg-gray-100' : 'hover:bg-gray-100'
                            } text-gray-600 flex items-center w-full px-3 py-2 text-base transition duration-300`}
                            onClick={() => dispatch(logout())}
                          >
                            <LogoutIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                            Log out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
            <Link href="/">
              <a className="!ml-auto sm:!ml-5 relative font-inter text-sm md:text-base text-gray-700 hover:text-primary font-semibold transition duration-300">
                <img
                  src="/icons/notification.svg"
                  alt="notification"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="absolute top-[-13px] right-[-25px] w-[25px] h-[25px] text-[7px] flex items-center justify-center bg-[#FFB1B6] rounded-full">
                  1
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
