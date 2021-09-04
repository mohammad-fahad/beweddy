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
import { GlobeAltIcon, LinkIcon, PencilIcon } from '@heroicons/react/outline';

const navLinks = [
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
  {
    label: 'QR Code & links',
    route: '/dashboard/features/qrcode',
    icon: '/icons/qrcode.svg',
  },
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
    label: 'Mailout invites',
    route: '/dashboard/invitation/mailout',
    icon: '/icons/email_add.svg',
  },
  {
    label: 'Calender invites',
    route: '/dashboard/invitation/calender',
    icon: '/icons/note_tick.svg',
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
    label: 'Guest management',
    route: '/dashboard/invitation/guest-management',
    icon: '/icons/ic_baseline-rsvp.svg',
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
        <DashboardHeader title='Dashboard 🎉' />
        {/* <div className='border rounded-tl-xl border-r-0 border-secondary bg-secondary-alternative/10'>
          <div className='max-w-[1300px] w-full'>
            
          </div>
        </div> */}
        <div className='shadow-box space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='px-12 xxl:pr-0 my-10'>
              <div className='text-center mb-[53px]'>
                <h3 className='relative inline-block text-2xl font-normal'>
                  <span className='absolute inline-block w-full mx-auto bottom-[-12px] left-1/2 h-[2px] max-w-[52px] -translate-x-1/2 bg-primary'></span>
                  Your Apps
                </h3>
              </div>
              <div className='grid mb-[50px] lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center'>
                {navLinks.map((link, index) => (
                  <Link key={index} href={link.route}>
                    <a className='flex items-center justify-center flex-col space-y-5 group'>
                      <div className='relative'>
                        <div className='pulse flex items-center justify-center border-2 border-transparent group-hover:border-primary rounded-full p-2 w-[90px] h-[90px] group-hover:bg-[#FCE0EB]'>
                          <Image width={46} height={46} src={link.icon} />
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
            <div className='relative gradient w-full border-t-4 border-b-4 border-primary'>
              <div className='text-center my-[50px]'>
                <h3 className='relative inline-block text-2xl font-normal'>
                  <span className='absolute inline-block w-full mx-auto bottom-[-12px] left-1/2 h-[2px] max-w-[52px] -translate-x-1/2 bg-primary'></span>
                  Your Wedding Stats
                </h3>
              </div>
              <ActivityInfo />
              <WebsitePreviewContainer minimal />
            </div>
            <div className='flex items-center space-x-5 justify-center my-[50px]'>
              <Link href='/dashboard/website/edit'>
                <a
                  className={`capitalize font-inter font-semibold border-2 border-primary rounded-[5px] bg-secondary-alternative py-2 px-5 flex items-center space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300`}
                >
                  <PencilIcon className='w-5 h-5' />
                  <span>Edit your website</span>
                </a>
              </Link>
              <Link href='/dashboard/website'>
                <a
                  className={`capitalize font-inter font-semibold border-2 border-primary rounded-[5px] bg-secondary-alternative py-2 px-5 flex items-center space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300`}
                >
                  <GlobeAltIcon className='w-5 h-5' />
                  <span>Preview Website</span>
                </a>
              </Link>
              <Link href='/'>
                <a
                  className={`capitalize font-inter font-semibold border-2 border-primary rounded-[5px] bg-secondary-alternative py-2 px-5 flex items-center space-x-3 hover:border-secondary/50 hover:bg-secondary-alternative/50 transition duration-300`}
                >
                  <LinkIcon className='w-5 h-5' />
                  <span>Superlink</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(Dashboard);
