import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  ActivityInfo,
  DashboardHeader,
  WebsitePreviewContainer,
  WeddingDayCountDown,
} from '@components/dashboard';
import { Footer } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { useSelector } from 'react-redux';

const navLinks = [
  {
    label: 'Text invites',
    route: '/dashboard/invitation/text',
    icon: '/icons/messages.svg',
  },
  {
    label: 'Email invites',
    route: '/dashboard/invitation/email',
    icon: '/icons/email_send.svg',
  },
  {
    label: 'Calender invites',
    route: '/dashboard/invitation/calender',
    icon: '/icons/note_tick.svg',
  },
  {
    label: 'Mailout invites',
    route: '/dashboard/invitation/mailout',
    icon: '/icons/email_add.svg',
  },
  {
    label: 'Gift cards',
    route: '/dashboard/invitation/gift-cards',
    icon: '/icons/gift-2.svg',
  },
  {
    label: 'Registry',
    route: '/dashboard/invitation/gift-cards',
    icon: '/icons/registry.svg',
  },
  {
    label: 'QR Code & links',
    route: '/dashboard/features/qrcode',
    icon: '/icons/qrcode.svg',
  },
  {
    label: 'Guest management',
    route: '/dashboard/invitation/guest-management',
    icon: '/icons/ic_baseline-rsvp.svg',
  },
  {
    label: 'Need your address',
    route: '/dashboard/address-and-rsvp',
    icon: '/icons/location.svg',
  },
  {
    label: 'Just do it list',
    route: '/dashboard/features/todo',
    icon: '/icons/ring-tik.svg',
  },
];

const Dashboard = () => {
  const { user } = useSelector(state => state.user);
  return (
    <>
      <Head>
        <title>Beweddy | Dashboard</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout shadow>
        <DashboardHeader title='Dashboard 🎉' hideCoupleName hideMarginTop>
          <div className='py-2'>
            <h4 className='text-sm text-center font-medium'>
              Wedding Day Countdown
            </h4>
            <WeddingDayCountDown sm />
          </div>
        </DashboardHeader>
        <div className='border rounded-tl-xl border-r-0 border-secondary bg-secondary-alternative/10'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 xxl:pr-0 grid lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center'>
              {navLinks.map((link, index) => (
                <Link key={index} href={link.route}>
                  <a className='flex items-center justify-center flex-col space-y-5 group'>
                    <div className='relative'>
                      <div className='pulse flex items-center justify-center border-2 border-transparent group-hover:border-primary rounded-full p-2 w-[90px] h-[90px] group-hover:bg-[#FCE0EB]'>
                        <Image width={45} height={45} src={link.icon} />
                        <span className='!hidden group-hover:!inline-block'>
                          <span></span>
                        </span>
                      </div>
                    </div>
                    <h4 className='text-lg font-medium text-center capitalize'>
                      {link.label}
                    </h4>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='rounded-tl-none shadow-box space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='pl-12 my-10'>
              <h4 className='text-center mb-16 text-2xl font-medium underline'>
                Wedding Status
              </h4>
              <ActivityInfo />
              <WebsitePreviewContainer minimal />
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(Dashboard);
