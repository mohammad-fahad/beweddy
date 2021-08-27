import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardActiveLink from './DashboardActiveLink';

const navLinks = [
  {
    label: 'Your Website',
    href: '/dashboard/website',
  },
  {
    label: 'Send Email Invites',
    href: '/dashboard/invitation/email',
  },
  {
    label: 'Send Text Invites',
    href: '/dashboard/invitation/text',
  },
  {
    label: 'Calender Invites',
    href: '/dashboard/invitation/calender',
  },
  {
    label: 'Mailout Invites',
    isComing: true,
    href: '/dashboard/invitation/mailout',
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
    label: 'RSVP’s & Guest Management',
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
    label: 'Just To Do List',
    href: '/dashboard/features/todo',
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
  const dashboardRoutes = ['/dashboard', '/dashboard/website/edit'];
  const featuresRoutes = ['/dashboard/features'];
  const { pathname } = useRouter();
  return (
    <div className='flex flex-col space-y-5'>
      <DashboardActiveLink
        href='/dashboard'
        customActiveLink={dashboardRoutes.includes(pathname) ? 'w-full' : 'w-0'}
        customFontActiveLink={
          dashboardRoutes.includes(pathname) ? 'font-bold' : 'font-medium'
        }
      >
        Dashboard
      </DashboardActiveLink>
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
      <div className='!mt-10'>
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
      </div>
    </div>
  );
};

export default DashboardNavLinks;
