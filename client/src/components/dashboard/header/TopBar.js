import { logout } from '@features/auth/authSlice';
import { Menu, Popover, Transition } from '@headlessui/react';
import {
  LogoutIcon,
  UserIcon,
  SearchIcon,
  LoginIcon,
  HomeIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { WeddingDayCountDown } from '@components/index';
import { Fragment } from 'react';

const DashboardTopBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  return (
    <div className='bg-secondary-alternative border-b-[3px] border-primary'>
      <div className='max-w-[1620px] pr-12 md:pr-16 xxl:pr-0 ml-6 sm:ml-14'>
        <div className='flex flex-col justify-between py-5 space-y-3 xs:items-center xs:flex-row xs:space-y-0'>
          <div className='space-y-2'>
            <h4 className='text-[12px] font-semibold hidden lg:block'>
              Your Wedding Day Countdown
            </h4>
            <div className='flex items-center lg:space-x-20'>
              <div className='hidden lg:block'>
                <WeddingDayCountDown sm blackBorder />
              </div>
              <h3 className='text-base capitalize customLabel'>
                👋 Welcome{' '}
                {user?.venue ? user?.venue?.businessName : user?.coupleName}!
              </h3>
            </div>
          </div>
          <div className='flex items-center space-x-5'>
            {/* <Link href="/">
              <a className="flex items-center space-x-2 text-sm font-semibold text-gray-700 transition duration-300 md:space-x-3 font-inter md:text-base hover:text-primary">
                <SearchIcon className="w-[14px] h-[14px]" />
                <span className="text-[14px]">Search</span>
              </a>
            </Link> */}
            <Link href='#'>
              <a className='flex items-center space-x-2 text-sm font-semibold text-gray-700 transition duration-300 md:space-x-3 font-inter md:text-base hover:text-primary'>
                <img
                  src='/icons/lifebuoy.svg'
                  alt='help'
                  className='w-[24px] h-[24px]'
                />
              </a>
            </Link>
            <Link href='#'>
              <a className='!mr-5 relative font-inter text-sm md:text-base text-gray-700 hover:text-primary font-semibold transition duration-300'>
                <img
                  src='/icons/notification.svg'
                  alt='notification'
                  className='w-[24px] h-[24px] '
                />
                <span className='absolute top-[-12px] right-[-20px] w-[25px] h-[25px] text-[7px] flex items-center justify-center bg-[#FFB1B6] rounded-full'>
                  0
                </span>
              </a>
            </Link>

            <Popover className='relative !ml-auto xs:!ml-5 inline-block lg:hidden'>
              {({ open }) => (
                <>
                  <Popover.Button>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      className='w-5 h-5'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.125 12.4375C7.125 12.2014 7.20833 11.9931 7.375 11.8125C7.54167 11.6319 7.75 11.5417 8 11.5417C8.25 11.5417 8.45833 11.6319 8.625 11.8125C8.79167 11.9931 8.875 12.2014 8.875 12.4375C8.875 12.6736 8.79167 12.8819 8.625 13.0625C8.45833 13.2431 8.25 13.3333 8 13.3333C7.75 13.3333 7.54167 13.2431 7.375 13.0625C7.20833 12.8819 7.125 12.6736 7.125 12.4375ZM7.125 0H8C10.2222 0 12.1111 0.777778 13.6667 2.33333C15.2222 3.88889 16 5.77778 16 8C16 10.2222 15.2222 12.1111 13.6667 13.6667C12.1111 15.2222 10.2222 16 8 16C5.77778 16 3.88889 15.2222 2.33333 13.6667C0.777778 12.1111 0 10.2222 0 8C0 6.72222 0.284722 5.52083 0.854167 4.39583C1.42361 3.27083 2.20833 2.34722 3.20833 1.625V1.58333L9.25 7.625L8 8.875L3.16667 4.08333C2.25 5.22222 1.79167 6.52778 1.79167 8C1.79167 9.72222 2.39583 11.1875 3.60417 12.3958C4.8125 13.6042 6.27778 14.2083 8 14.2083C9.72222 14.2083 11.1875 13.6042 12.3958 12.3958C13.6042 11.1875 14.2083 9.72222 14.2083 8C14.2083 6.44444 13.7014 5.08333 12.6875 3.91667C11.6736 2.75 10.4028 2.05556 8.875 1.83333V3.54167H7.125V0ZM13.3333 8C13.3333 8.25 13.2431 8.45833 13.0625 8.625C12.8819 8.79167 12.6736 8.875 12.4375 8.875C12.2014 8.875 11.9931 8.79167 11.8125 8.625C11.6319 8.45833 11.5417 8.25 11.5417 8C11.5417 7.75 11.6319 7.54167 11.8125 7.375C11.9931 7.20833 12.2014 7.125 12.4375 7.125C12.6736 7.125 12.8819 7.20833 13.0625 7.375C13.2431 7.54167 13.3333 7.75 13.3333 8ZM2.66667 8C2.66667 7.75 2.75694 7.54167 2.9375 7.375C3.11806 7.20833 3.32639 7.125 3.5625 7.125C3.79861 7.125 4.00694 7.20833 4.1875 7.375C4.36806 7.54167 4.45833 7.75 4.45833 8C4.45833 8.25 4.36806 8.45833 4.1875 8.625C4.00694 8.79167 3.79861 8.875 3.5625 8.875C3.32639 8.875 3.11806 8.79167 2.9375 8.625C2.75694 8.45833 2.66667 8.25 2.66667 8Z'
                        fill='#292D32'
                      />
                    </svg>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='bg-white shadow-lg absolute z-10 w-max p-5 mt-3 transform translate-x-[-69%] left-1/2 lg:max-w-3xl'>
                      <span className='absolute top-[-10px] right-[5.5rem] w-5 h-5 rotate-45 z-[-1] bg-white'></span>

                      <div className='space-y-2'>
                        <h4 className='text-[12px] font-semibold'>
                          Your Wedding Day Countdown
                        </h4>
                        <div className='inline-block'>
                          <WeddingDayCountDown sm blackBorder />
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Menu as='div' className='relative'>
              {({ open }) => (
                <>
                  <Menu.Button className='flex items-center space-x-2 text-sm font-semibold text-gray-700 transition duration-300 md:space-x-3 font-inter md:text-base hover:text-primary'>
                    <svg
                      width='17'
                      height='16'
                      viewBox='0 0 17 16'
                      className='w-5 h-5'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect width='3.75' height='4' fill='#292D32' />
                      <rect x='6.5625' width='3.75' height='4' fill='#292D32' />
                      <rect x='13.125' width='3.75' height='4' fill='#292D32' />
                      <rect y='6' width='3.75' height='4' fill='#292D32' />
                      <rect
                        x='6.5625'
                        y='6'
                        width='3.75'
                        height='4'
                        fill='#292D32'
                      />
                      <rect
                        x='13.125'
                        y='6'
                        width='3.75'
                        height='4'
                        fill='#292D32'
                      />
                      <rect y='12' width='3.75' height='4' fill='#292D32' />
                      <rect
                        x='6.5625'
                        y='12'
                        width='3.75'
                        height='4'
                        fill='#292D32'
                      />
                      <rect
                        x='13.125'
                        y='12'
                        width='3.75'
                        height='4'
                        fill='#292D32'
                      />
                    </svg>
                  </Menu.Button>
                  <Transition
                    show={open}
                    as='div'
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items
                      // static
                      // className='absolute right-0 z-50 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg w-52 ring-1 ring-black ring-opacity-5 focus:outline-none'
                      className='absolute right-0 z-50 flex w-56 mt-4 origin-top-right bg-white shadow-lg focus:outline-none'
                    >
                      <span className='absolute top-[-10px] right-[4px] w-5 h-5 rotate-45 z-[-1] bg-white'></span>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href='/'>
                            <a
                              className={`group font-inter ${
                                active ? 'bg-gray-100' : 'hover:bg-gray-100'
                              } hover:bg-gray-100 text-gray-600 flex items-center w-full px-3 py-2 text-base transition duration-300`}
                            >
                              <HomeIcon
                                className='w-5 h-5 mr-2'
                                aria-hidden='true'
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
                            <LoginIcon
                              className='w-5 h-5 mr-2'
                              aria-hidden='true'
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
