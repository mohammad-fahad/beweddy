import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardActiveLink from './DashboardActiveLink';

const navLinks = [
  {
    label: 'Your Website',
    href: '/dashboard/website',
  },
  {
    label: 'We Need Your Address',
    href: '/dashboard/address-and-rsvp',
  },
  {
    label: 'Gift Cards',
    href: '/dashboard/gift-cards',
  },
  {
    label: 'Registries',
    href: '/dashboard/registries',
  },
];

const DashboardNavLinks = () => {
  const dashboardRoutes = [
    '/dashboard',
    '/dashboard/todos',
    '/dashboard/website/edit',
  ];
  const { pathname } = useRouter();
  return (
    <div className='flex flex-col space-y-8'>
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
        <DashboardActiveLink href={link.href} key={index}>
          {link.label}
        </DashboardActiveLink>
      ))}
      <div>
        <DashboardActiveLink href='/dashboard/invitation'>
          Invitations
        </DashboardActiveLink>
        <div className='space-y-3 mt-3'>
          <div className='flex items-center space-x-3'>
            <span className='w-2 h-2 bg-[#F9D1DE] rounded-full inline-block' />
            <Link href='/dashboard/invitation/calender'>
              <a className='capitalize font-inter text-sm inline-block font-medium hover:underline'>
                Calender invites
              </a>
            </Link>
          </div>
          <div className='flex items-center space-x-3'>
            <span className='w-2 h-2 bg-[#F9D1DE] rounded-full inline-block' />
            <Link href='/dashboard/invitation/email'>
              <a className='capitalize font-inter text-sm inline-block font-medium hover:underline'>
                Email invites
              </a>
            </Link>
          </div>
          <div className='flex items-center space-x-3'>
            <span className='w-2 h-2 bg-[#F9D1DE] rounded-full inline-block' />
            <Link href='/dashboard/invitation/text'>
              <a className='capitalize font-inter text-sm inline-block font-medium hover:underline'>
                Text invites
              </a>
            </Link>
          </div>
          <div className='flex items-center space-x-3'>
            <span className='w-2 h-2 bg-[#F9D1DE] rounded-full inline-block' />
            <Link href='/dashboard/invitation/mailout'>
              <a className='capitalize font-inter text-sm inline-block font-medium hover:underline'>
                Mailout invites
              </a>
            </Link>
          </div>
        </div>
      </div>
      <DashboardActiveLink href='guest-registry'>
        Guest Registry
      </DashboardActiveLink>
    </div>
  );
};

export default DashboardNavLinks;
