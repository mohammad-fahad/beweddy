import { logout } from '@features/auth/authSlice';
import { Menu, Transition } from '@headlessui/react';
import { LogoutIcon, UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

const ProfileLinks = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <Menu as='div' className='relative'>
      {({ open }) => (
        <>
          <Menu.Button className='text-center text-gray-700 hover:text-primary transition'>
            <div className='border border-gray-200 rounded-lg py-2 px-6 flex items-center space-x-3'>
              <img src={user.avatar} alt='' className='w-7 h-7 rounded-full' />
              <h4 className='text-base font-semibold whitespace-nowrap'>
                {user.fullName}
              </h4>
            </div>
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
              // className='origin-top-right z-50 absolute right-0 mt-2 w-52 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
              className='absolute z-50 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            >
              <Menu.Item>
                {({ active }) => (
                  <Link href='/dashboard'>
                    <a
                      className={`group font-inter ${
                        active ? 'bg-gray-100' : 'hover:bg-gray-100'
                      } hover:bg-gray-100 text-gray-600 flex items-center w-full px-3 py-2 text-base transition duration-300`}
                    >
                      <UserIcon className='w-5 h-5 mr-2' aria-hidden='true' />
                      Dashboard
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
                    <LogoutIcon className='w-5 h-5 mr-2' aria-hidden='true' />
                    Log out
                  </button>
                )}
              </Menu.Item>

              {/* <Menu.Item>
                      {({ active }) => (
                        <>
                          <Link href='/account'>
                            <a
                              className={
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                              }
                            >
                              My Account
                            </a>
                          </Link>
                          <Link href='/account/orders'>
                            <a
                              className={
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                              }
                            >
                              My Order
                            </a>
                          </Link>
                          <Link href='/account/wishlist'>
                            <a
                              className={
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                              }
                            >
                              My Wishlist
                            </a>
                          </Link>
                          <Link href='/cart'>
                            <a
                              className={
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                              }
                            >
                              My Cart
                            </a>
                          </Link>
                          <button
                            className={
                              'block focus:outline-none px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100'
                            }
                          >
                            Log out
                          </button>
                        </>
                      )}
                    </Menu.Item> */}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default ProfileLinks;
