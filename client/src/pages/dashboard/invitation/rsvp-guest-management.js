import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Button, Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { StarIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { PlusIcon, SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';
const RSVPGuestManagementPage = () => {
  const { user } = useSelector(state => state.user);
  return (
    <>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom='mb-[2.1rem]' shadow>
        <DashboardHeader title='Guest Management' />
        <div className='shadow-box space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 xxl:pr-0 flex items-center  justify-between flex-wrap'>
              <div>
                <Heading h3 className='!font-alice !text-4xl !font-light'>
                  {user.coupleName}’s wedding
                </Heading>
                <p className='text-base text-gray-700 mt-2'>
                  Number of Your RSVP: 14
                </p>
              </div>
              <button className='flex my-3 text-base font-semibold font-inter items-center space-x-3 border-2 border-gray-500 py-2 px-5 bg-secondary-alternative text-primary hover:bg-secondary-alternative/50 transition duration-300 rounded-md'>
                <PlusIcon className='w-5 h-5' />
                <span>Invite Guests</span>
              </button>
            </div>
            <div className='px-12 py-5 bg-gray-100 flex space-y-5 xl:space-y-0 xl:items-center justify-between flex-col xl:flex-row'>
              <div className='flex-wrap flex items-center gap-x-5 gap-y-3'>
                <Link href='#'>
                  <a className='w-full sm:w-max text-sm xl:text-base font-inter font-medium py-2 px-4 bg-white rounded-md flex items-center space-x-3 border-2 border-white hover:border-primary transition duration-300'>
                    <PlusIcon className='w-5 h-5' />
                    <span>Add Guest</span>
                  </a>
                </Link>
                <button className='w-full sm:w-max text-sm xl:text-base font-inter font-medium py-2 px-4 bg-white rounded-md border-2 border-white hover:border-primary transition duration-300'>
                  Export RSVP’s
                </button>
                <div className='relative w-full sm:w-max '>
                  <input
                    type='text'
                    className='w-full text-sm xl:text-base font-inter font-medium py-2 px-4 bg-white rounded-md border-2 border-white hover:border-primary transition duration-300 placeholder-primary'
                    placeholder='Search'
                  />
                  <SearchIcon className='w-5 h-5 absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 box-content' />
                </div>
              </div>
              <div className='grid grid-cols-4 gap-10'>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-3xl lg:text-4xl font-semibold'>0</h4>
                  <p className='text-sm lg:text-base font-normal'>Attending</p>
                </div>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-3xl lg:text-4xl font-semibold'>0</h4>
                  <p className='text-sm lg:text-base font-normal'>Declined</p>
                </div>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-3xl lg:text-4xl font-semibold'>0</h4>
                  <p className='text-sm lg:text-base font-normal'>Maybe</p>
                </div>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-3xl lg:text-4xl font-semibold'>0</h4>
                  <p className='text-sm lg:text-base font-normal'>Pending</p>
                </div>
              </div>
            </div>
            <div className='w-full overflow-x-auto mb-20'>
              <table className='w-full overflow-x-auto'>
                <thead>
                  <tr className='text-md font-semibold tracking-wide text-left text-gray-900 bg-[#FCE0EB] capitalize'>
                    <th className='pl-12 pr-4 py-3'>Name</th>
                    <th className='px-4 py-3'>Phone</th>
                    <th className='px-4 py-3'>Email</th>
                    <th className='px-4 py-3' align='center'>
                      Attending?
                    </th>
                    <th className='px-4 py-3' align='center'>
                      Confirmed Guests
                    </th>
                    <th className='px-4 py-3'>Action</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  <tr className='text-gray-700'>
                    <td className='pl-12 pr-4 pb-3 pt-6 font-medium'>
                      Nate Sampson
                    </td>
                    <td className='px-4 pb-3 pt-6 text-sm'>+1 234 567</td>
                    <td className='px-4 pb-3 pt-6 text-sm'>
                      team.nate@gmail.com
                    </td>
                    <td className='px-4 pb-3 pt-6 text-sm' align='center'>
                      <span className='min-w-[85px] inline-block px-5 border border-green-400 py-1 font-semibold leading-tight bg-green-100 rounded-sm text-green-800'>
                        Yes
                      </span>
                    </td>
                    <td className='px-4 pb-3 pt-6 text-sm' align='center'>
                      1-5
                    </td>
                    <td className='px-4 pb-3 pt-6 text-sm'>Send Invite</td>
                  </tr>
                  <tr className='text-gray-700'>
                    <td className='pl-12 pr-4 py-3 font-medium'>
                      Nate Sampson
                    </td>
                    <td className='px-4 py-3 text-sm'>+1 234 567</td>
                    <td className='px-4 py-3 text-sm'>team.nate@gmail.com</td>
                    <td className='px-4 py-3 text-sm' align='center'>
                      <span className='min-w-[85px] inline-block px-5 border border-yellow-400 py-1 font-semibold leading-tight bg-yellow-100 rounded-sm'>
                        Maybe
                      </span>
                    </td>
                    <td className='px-4 py-3 text-sm' align='center'>
                      1-5
                    </td>
                    <td className='px-4 py-3 text-sm'>Send Invite</td>
                  </tr>
                  <tr className='text-gray-700'>
                    <td className='pl-12 pr-4 py-3 font-medium'>
                      Nate Sampson
                    </td>
                    <td className='px-4 py-3 text-sm'>+1 234 567</td>
                    <td className='px-4 py-3 text-sm'>team.nate@gmail.com</td>
                    <td className='px-4 py-3 text-sm' align='center'>
                      <span className='min-w-[85px] inline-block px-5 border border-secondary py-1 font-semibold leading-tight bg-secondary-alternative rounded-sm'>
                        No
                      </span>
                    </td>
                    <td className='px-4 py-3 text-sm' align='center'>
                      1-5
                    </td>
                    <td className='px-4 py-3 text-sm'>Send Invite</td>
                  </tr>
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
