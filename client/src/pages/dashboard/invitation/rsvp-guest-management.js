import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { useSelector } from 'react-redux';
import { PlusIcon, SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getGuests } from '@services/GuestManagement';

const AttendingStatus = ({ status }) => {
  if (status === 'yes') {
    return (
      <span className='min-w-[85px] inline-block px-5 border border-green-400 py-1 font-semibold leading-tight bg-green-100 rounded-sm text-green-800'>
        Yes
      </span>
    );
  }
  return status === 'maybe' ? (
    <span className='min-w-[85px] inline-block px-5 border border-yellow-400 py-1 font-semibold leading-tight bg-yellow-100 rounded-sm'>
      Maybe
    </span>
  ) : (
    <span className='min-w-[85px] inline-block px-5 border border-secondary py-1 font-semibold leading-tight bg-secondary-alternative rounded-sm'>
      No
    </span>
  );
};

const RSVPGuestManagementPage = () => {
  const { user } = useSelector(state => state.user);
  const { data, isLoading, isFetching } = useQuery(
    ['guests', user.token],
    getGuests
  );
  // const countAttending = guests?.filter(guest => guest.rsvp === 'yes').length;

  return (
    <>
      <Head>
        <title>Beweddy | Guest Management</title>
      </Head>
      {(isLoading || isFetching) && <Loader />}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom='mb-[2.1rem]' shadow>
        <DashboardHeader title='Guest Management' />
        <div className='shadow-box space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 xxl:pr-0 flex items-center  justify-between flex-wrap'>
              <div>
                <Heading
                  h3
                  className='!font-alice !text-4xl !font-light commonTitle1'
                >
                  {user.coupleName}’s wedding
                </Heading>
                <p className='text-base text-gray-700 mt-2'>
                  Number of Your RSVP: <strong>{data?.guests?.length}</strong>
                </p>
              </div>
              <Link href='/dashboard/invitation/text'>
                <a className='flex my-3 text-base font-semibold font-inter items-center space-x-3 border-2 border-gray-500 py-2 px-5 bg-secondary-alternative text-primary hover:bg-secondary-alternative/50 transition duration-300 rounded-md'>
                  <PlusIcon className='w-5 h-5' />
                  <span>Invite Guests</span>
                </a>
              </Link>
            </div>
            <div className='px-12 py-5 bg-gray-100 flex space-y-5 xl:space-y-0 xl:items-center justify-between flex-col xl:flex-row'>
              <div className='flex-wrap flex items-center gap-x-5 gap-y-3'>
                <Link href='/dashboard/address-and-rsvp'>
                  <a className='w-full sm:w-max text-sm xl:text-base font-inter font-medium py-2 px-4 bg-white rounded-md flex items-center space-x-3 border-2 border-white hover:border-primary transition duration-300'>
                    <PlusIcon className='w-5 h-5' />
                    <span>Add Guest</span>
                  </a>
                </Link>
                <button className='w-full sm:w-max text-sm xl:text-base font-inter font-medium py-2 px-4 bg-white rounded-md border-2 border-white hover:border-primary transition duration-300'>
                  Export RSVP’s
                </button>
                <div className='relative w-full sm:w-max'>
                  <input
                    type='text'
                    className='w-full text-sm xl:text-base font-inter font-medium py-2 px-4 bg-white rounded-md border-2 border-white hover:border-primary transition duration-300 placeholder-primary'
                    placeholder='Search'
                  />
                  <SearchIcon className='w-5 h-5 absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 box-content' />
                </div>
              </div>
              <div className='grid grid-cols-3 gap-10'>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-3xl lg:text-4xl font-semibold'>
                    {data?.countAttending}
                  </h4>
                  <p className='text-sm lg:text-base font-normal'>Attending</p>
                </div>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-3xl lg:text-4xl font-semibold'>
                    {data?.countDeclined}
                  </h4>
                  <p className='text-sm lg:text-base font-normal'>Declined</p>
                </div>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-3xl lg:text-4xl font-semibold'>
                    {data?.countMaybe}
                  </h4>
                  <p className='text-sm lg:text-base font-normal'>Maybe</p>
                </div>
                {/* <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-3xl lg:text-4xl font-semibold'>
                    {data?.countPending}
                  </h4>
                  <p className='text-sm lg:text-base font-normal'>Pending</p>
                </div> */}
              </div>
            </div>
            <div className='w-full overflow-x-auto mb-20'>
              <table className='w-full overflow-x-auto'>
                <thead>
                  <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-[#FCE0EB] capitalize'>
                    <th className='pl-12 pr-4 py-3 customLabel'>Name</th>
                    <th className='px-4 py-3 customLabel'>Phone</th>
                    <th className='px-4 py-3 customLabel'>Email</th>
                    <th className='px-4 py-3 customLabel' align='center'>
                      Attending?
                    </th>
                    <th className='px-4 py-3 customLabel' align='center'>
                      Confirmed Guests
                    </th>
                    <th className='px-4 py-3 customLabel'>Action</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  {data?.guests?.map(guest => (
                    <tr className='text-gray-700' key={guest?._id}>
                      <td className='pl-12 pr-4 pb-3 pt-6 font-medium customLabel'>
                        {guest?.name}
                      </td>
                      <td className='px-4 pb-3 pt-6 text-sm customLabel'>
                        {guest?.phone?.number}
                      </td>
                      <td className='px-4 pb-3 pt-6 text-sm customLabel'>
                        {guest?.email}
                      </td>
                      <td
                        className='px-4 pb-3 pt-6 text-sm customLabel'
                        align='center'
                      >
                        <AttendingStatus status={guest?.rsvp} />
                      </td>
                      <td
                        className='px-4 pb-3 pt-6 text-sm customLabel'
                        align='center'
                      >
                        {guest?.guestEstimate}
                      </td>
                      <td className='px-4 pb-3 pt-6 text-sm customLabel'>
                        <Link href='/dashboard/invitation/text'>
                          <a className='hover:underline'>Send Invite</a>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(RSVPGuestManagementPage);
