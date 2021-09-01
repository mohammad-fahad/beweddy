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
        <DashboardHeader
          title='Let’s Eat, Drink & BeWeddy.'
          hideCoupleName
          hideMarginTop
        />
        <div className='shadow-box space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 xl:pr-0 flex items-center space-x-10 justify-between'>
              <div>
                <Heading h3 className='!font-alice !text-4xl !font-light'>
                  {user.coupleName}’s wedding
                </Heading>
                <p className='text-base text-gray-700 mt-2'>
                  Number of Your RSVP: 14
                </p>
              </div>
              <div className='grid grid-cols-4 gap-10'>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-4xl font-semibold'>0</h4>
                  <p className='text-base font-normal'>Attending</p>
                </div>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-4xl font-semibold'>0</h4>
                  <p className='text-base font-normal'>Declined</p>
                </div>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-4xl font-semibold'>0</h4>
                  <p className='text-base font-normal'>Maybe</p>
                </div>
                <div className='flex flex-col items-center space-y-5'>
                  <h4 className='text-4xl font-semibold'>0</h4>
                  <p className='text-base font-normal'>Pending</p>
                </div>
              </div>
            </div>
            <div className='px-12 py-5 bg-gray-100 flex items-center space-x-5'>
              <Link href='#'>
                <a className='max-w-[210px] w-full font-inter font-medium py-2 px-4 bg-white rounded-md flex items-center space-x-3 border-2 border-white hover:border-primary transition duration-300'>
                  <PlusIcon className='w-5 h-5' />
                  <span>New Manual RSVP</span>
                </a>
              </Link>
              <div className='relative'>
                <input
                  type='text'
                  className='max-w-[210px] w-full font-inter font-medium py-2 px-4 bg-white rounded-md border-2 border-white hover:border-primary transition duration-300 placeholder-primary'
                  placeholder='Search'
                />
                <SearchIcon className='w-5 h-5 absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 box-content' />
              </div>
              <button className='max-w-[210px] w-full font-inter font-medium py-2 px-4 bg-white rounded-md border-2 border-white hover:border-primary transition duration-300'>
                Export RSVP’s
              </button>
            </div>
            <div class='w-full overflow-x-auto mb-20'>
              <table class='w-full'>
                <thead>
                  <tr class='text-md font-semibold tracking-wide text-left text-gray-900 bg-[#FCE0EB] capitalize'>
                    <th class='pl-12 pr-4 py-3'>Name</th>
                    <th class='px-4 py-3'>Phone</th>
                    <th class='px-4 py-3'>Email</th>
                    <th class='px-4 py-3' align='center'>
                      Attending?
                    </th>
                    <th class='px-4 py-3' align='center'>
                      Number of Guests
                    </th>
                    <th class='px-4 py-3'>Action</th>
                  </tr>
                </thead>
                <tbody class='bg-white'>
                  <tr class='text-gray-700'>
                    <td class='pl-12 pr-4 pb-3 pt-6 font-medium'>
                      Nate Sampson
                    </td>
                    <td class='px-4 pb-3 pt-6 text-sm'>+1 234 567</td>
                    <td class='px-4 pb-3 pt-6 text-sm'>team.nate@gmail.com</td>
                    <td class='px-4 pb-3 pt-6 text-sm' align='center'>
                      <span class='min-w-[85px] inline-block px-5 border border-green-400 py-1 font-semibold leading-tight bg-green-100 rounded-sm text-green-800'>
                        Yes
                      </span>
                    </td>
                    <td class='px-4 pb-3 pt-6 text-sm' align='center'>
                      1-5
                    </td>
                    <td class='px-4 pb-3 pt-6 text-sm'>Send Invite</td>
                  </tr>
                  <tr class='text-gray-700'>
                    <td class='pl-12 pr-4 py-3 font-medium'>Nate Sampson</td>
                    <td class='px-4 py-3 text-sm'>+1 234 567</td>
                    <td class='px-4 py-3 text-sm'>team.nate@gmail.com</td>
                    <td class='px-4 py-3 text-sm' align='center'>
                      <span class='min-w-[85px] inline-block px-5 border border-yellow-400 py-1 font-semibold leading-tight bg-yellow-100 rounded-sm'>
                        Maybe
                      </span>
                    </td>
                    <td class='px-4 py-3 text-sm' align='center'>
                      1-5
                    </td>
                    <td class='px-4 py-3 text-sm'>Send Invite</td>
                  </tr>
                  <tr class='text-gray-700'>
                    <td class='pl-12 pr-4 py-3 font-medium'>Nate Sampson</td>
                    <td class='px-4 py-3 text-sm'>+1 234 567</td>
                    <td class='px-4 py-3 text-sm'>team.nate@gmail.com</td>
                    <td class='px-4 py-3 text-sm' align='center'>
                      <span class='min-w-[85px] inline-block px-5 border border-secondary py-1 font-semibold leading-tight bg-secondary-alternative rounded-sm'>
                        No
                      </span>
                    </td>
                    <td class='px-4 py-3 text-sm' align='center'>
                      1-5
                    </td>
                    <td class='px-4 py-3 text-sm'>Send Invite</td>
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
