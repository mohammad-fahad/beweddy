import { useRouter } from 'next/router';
import { useState } from 'react';
import DashboardActiveLink from './DashboardActiveLink';
import Drawer from './drawer';

const navLinks = [
  {
    label: 'Your Wedding Website',
    href: '/dashboard/website',
  },
  {
    label: 'We Need Your Address',
    href: '/dashboard/address-and-rsvp',
  },
  {
    label: 'Just Do It List',
    href: '/dashboard/features/todo',
  },
  {
    label: 'QR Code & Links',
    href: '/dashboard/features/qrcode-and-links',
  },
  {
    label: 'Text Invites',
    href: '/dashboard/invitation/text',
  },
  {
    label: 'Email Invites',
    href: '/dashboard/invitation/email',
  },
  {
    label: 'Mailout Invites',
    isComing: true,
    href: '/dashboard/invitation/mailout',
  },
  {
    label: 'Calender Invites',
    href: '/dashboard/invitation/calender',
  },
  {
    label: 'Gift Cards',
    href: '/dashboard/gift-cards',
  },
  {
    label: 'Registries',
    href: '/dashboard/registries',
  },
  {
    label: 'Guest Management',
    href: '/dashboard/invitation/rsvp-guest-management',
  },
];

const specialFeatures = [
  {
    label: 'QR Code',
    href: '/dashboard/features/qrcode',
  },
  {
    label: 'Super link',
    href: '/dashboard/features/supper-link',
  },
  {
    label: 'Templates',
    href: '/dashboard/features/templates',
  },
  {
    label: 'Just To Do List',
    href: '/dashboard/features/todo',
  },
];

const DashboardNavLinks = () => {
  const [open, setOpen] = useState(false);
  const dashboardRoutes = ['/dashboard', '/dashboard/website/edit'];
  // const featuresRoutes = ['/dashboard/features'];
  const { pathname } = useRouter();

  return (
    <div className='flex flex-col space-y-5'>
      <Drawer {...{ open, setOpen }} />
      <div className='flex items-center justify-between space-x-5'>
        <DashboardActiveLink
          href='/dashboard'
          className='text-sm md:!text-base lg:!text-lg !font-semibold'
          customActiveLink={
            dashboardRoutes.includes(pathname) ? 'lg:w-full' : 'w-0'
          }
          customFontActiveLink={
            dashboardRoutes.includes(pathname) ? 'font-bold' : 'font-medium'
          }
        >
          Dashboard
        </DashboardActiveLink>
        <button
          className='sm:pl-5 pr-0 md:pr-5 py-2 lg:py-3'
          onClick={() => setOpen(prev => !prev)}
        >
          <svg
            width='20'
            height='15'
            className='w-4 lg:w-6 h-4 lg:h-6'
            viewBox='0 0 20 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 1.47703C0 0.927025 0.446 0.482025 0.995 0.482025H9.005C9.26889 0.482025 9.52197 0.586855 9.70857 0.773454C9.89517 0.960052 10 1.21313 10 1.47703C10 1.74092 9.89517 1.994 9.70857 2.1806C9.52197 2.3672 9.26889 2.47202 9.005 2.47202H0.995C0.731109 2.47202 0.478028 2.3672 0.291429 2.1806C0.10483 1.994 0 1.74092 0 1.47703Z'
              fill='black'
            />
            <path
              d='M0 7.48203C0 6.93203 0.446 6.48703 0.995 6.48703H19.005C19.2689 6.48703 19.522 6.59186 19.7086 6.77845C19.8952 6.96505 20 7.21814 20 7.48203C20 7.74592 19.8952 7.999 19.7086 8.1856C19.522 8.3722 19.2689 8.47703 19.005 8.47703H0.995C0.731109 8.47703 0.478028 8.3722 0.291429 8.1856C0.10483 7.999 0 7.74592 0 7.48203Z'
              fill='black'
            />
            <path
              d='M0.995 12.492C0.731109 12.492 0.478028 12.5969 0.291429 12.7835C0.10483 12.9701 0 13.2231 0 13.487C0 13.7509 0.10483 14.004 0.291429 14.1906C0.478028 14.3772 0.731109 14.482 0.995 14.482H13.005C13.2689 14.482 13.522 14.3772 13.7086 14.1906C13.8952 14.004 14 13.7509 14 13.487C14 13.2231 13.8952 12.9701 13.7086 12.7835C13.522 12.5969 13.2689 12.492 13.005 12.492H0.995Z'
              fill='black'
            />
          </svg>
        </button>
      </div>
      <div className='hidden lg:flex flex-col space-y-5'>
        {navLinks.map((link, index) => (
          <DashboardActiveLink
            href={link.isComing ? '#' : link.href}
            key={index}
            disabled={link.isComing}
          >
            {link.isComing ? (
              <p className='space-x-2'>
                <span className='opacity-30'>{link.label}</span>
                <small className='text-secondary opacity-50'>Coming Soon</small>
              </p>
            ) : (
              link.label
            )}
          </DashboardActiveLink>
        ))}
      </div>
      {/* <div className='!mt-10'>
        <DashboardActiveLink
          href='/dashboard/features'
          customActiveLink={
            pathname.includes('/dashboard/features') ? 'w-full' : 'w-0'
          }
          customFontActiveLink={
            pathname.includes('/dashboard/features')
              ? 'font-bold'
              : 'font-medium'
          }
        >
          Specials Features
        </DashboardActiveLink>
        <div className='space-y-3 !mt-4'>
          {specialFeatures.map((feature, index) => (
            <div className='flex items-center space-x-3'>
              <span className='w-2 h-2 bg-[#F9D1DE] rounded-full inline-block' />
              <Link href={feature.href}>
                <a className='capitalize font-inter text-sm inline-block font-medium hover:underline'>
                  {feature.label}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default DashboardNavLinks;
