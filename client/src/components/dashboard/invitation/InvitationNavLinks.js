import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import DashboardActiveLink from '../DashboardActiveLink';

const composeMethods = [
  { name: 'Send Text', route: '/dashboard/invitation/text-invites' },
  { name: 'Send MMS', route: '/dashboard/invitation/mms-invites' },
  { name: 'Send Email', route: '/dashboard/invitation/email-invites' },
  { name: 'Supper Link', route: '/dashboard/invitation/supperLink' },
];

const invitationNavLinks = [
  { label: 'Chats', route: 'chat' },
  { label: 'Event Details', route: 'event' },
  { label: 'Mail out invites', route: 'mailout' },
  { label: 'Calender invites', route: 'calender' },
  { label: 'RSVP received', route: 'rsvp-received' },
  { label: 'QR code', route: 'qrcode' },
  { label: 'Templates', route: 'templates' },
  { label: 'Contacts/Lists', route: 'contacts-lists' },
  { label: 'Links', route: 'links' },
  { label: 'Guest management', route: 'guest-management' },
];

const InvitationNavLinks = () => {
  const [selectComposeMethod, setSelectComposeMethod] = useState(
    composeMethods[0]
  );
  return (
    <div className='flex flex-col space-y-8'>
      <div className='space-y-3 !mb-10'>
        <Listbox value={selectComposeMethod} onChange={setSelectComposeMethod}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative font-inter w-max rounded-[5px] border-2 border-primary py-3 pl-5 pr-10 text-base font-semibold hover:bg-secondary-alternative/50'>
              <span className='block truncate'>{selectComposeMethod.name}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon
                  className='w-5 h-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 min-w-[256px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {composeMethods.map((composeMethod, composeMethodIdx) => (
                  <Listbox.Option
                    key={composeMethodIdx}
                    className={({ active }) =>
                      `${
                        active
                          ? 'text-secondary bg-secondary-alternative/50'
                          : 'text-gray-900'
                      }
                          cursor-pointer select-none relative py-2 pl-10 pr-4 font-medium`
                    }
                    value={composeMethod}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? 'font-semibold' : 'font-medium'
                          } block truncate`}
                        >
                          {composeMethod.name}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? 'text-amber-600' : 'text-amber-600'
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className='w-5 h-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
        <Link href={selectComposeMethod.route}>
          <a className='text-center inline-block font-inter w-max rounded-[5px] border-2 border-primary py-3 px-5 text-base font-semibold bg-secondary-alternative/50 hover:bg-secondary-alternative/70 transition duration-300'>
            Compose
          </a>
        </Link>
      </div>
      {invitationNavLinks.map((link, index) => (
        <DashboardActiveLink
          href={`/dashboard/invitation/${link.route}`}
          key={index}
        >
          {link.label}
        </DashboardActiveLink>
      ))}
    </div>
  );
};

export default InvitationNavLinks;
