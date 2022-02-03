import Head from "next/head";
import { DashboardHeader } from "@components/dashboard";
import { Footer, Heading, Loader } from "@components/index";
import { withAuthRoute } from "@hoc/withAuthRoute";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { useSelector } from "react-redux";
import { PlusIcon, SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useQuery } from "react-query";
import { getGuests } from "@services/GuestManagement";

const AttendingStatus = ({ status }) => {
  if (status === "yes") {
    return (
      <span className="min-w-[85px] inline-block px-5 border border-green-400 py-1 font-semibold leading-tight bg-green-100 rounded-sm text-green-800">
        Yes
      </span>
    );
  }
  return status === "maybe" ? (
    <span className="min-w-[85px] inline-block px-5 border border-yellow-400 py-1 font-semibold leading-tight bg-yellow-100 rounded-sm">
      Maybe
    </span>
  ) : (
    <span className="min-w-[85px] inline-block px-5 border border-secondary py-1 font-semibold leading-tight bg-secondary-alternative rounded-sm">
      No
    </span>
  );
};

const RSVPGuestManagementPage = () => {
  const { user } = useSelector((state) => state.user);
  const { data, isLoading, isFetching } = useQuery(
    ["guests", user.token],
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
      <DashboardLayout marginBottom="mb-[2.1rem]" shadow>
        <DashboardHeader title="Guest Management" />
        <div className="space-y-10 shadow-box">
          <div className="max-w-[1300px] w-full">
            <div className="flex flex-wrap items-center justify-between p-10 xxl:pr-0">
              <div>
                <Heading
                  h3
                  className="!font-alice !text-4xl !font-light commonTitle1"
                >
                  {user.coupleName}’s wedding
                </Heading>
                <p className="mt-2 text-base text-gray-700">
                  Number of Your RSVP: <strong>{data?.countAttending}</strong>
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
                <Link
                  href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}/rsvp`}
                >
                  <a
                    target="_blank"
                    className="flex items-center px-5 py-2 my-3 space-x-3 text-base font-semibold transition duration-300 border-2 border-gray-500 rounded-md font-inter bg-secondary-alternative text-primary hover:bg-secondary-alternative/50 guestButton"
                  >
                    Share we need your address link
                  </a>
                </Link>
                <Link href="/dashboard/invitation/text">
                  <a className="flex items-center px-5 py-2 my-3 space-x-3 text-base font-semibold transition duration-300 border-2 border-gray-500 rounded-md font-inter bg-secondary-alternative text-primary hover:bg-secondary-alternative/50 guestButton">
                    <PlusIcon className="w-5 h-5" />
                    <span>Invite Guests</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between px-10 py-5 space-y-5 bg-gray-100 xl:space-y-0 xl:items-center xl:flex-row">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <Link href="/dashboard/address-and-rsvp">
                  <a className="flex items-center w-full px-4 py-2 space-x-3 text-sm font-medium transition duration-300 bg-white border-2 border-white rounded-md sm:w-max xl:text-base font-inter hover:border-primary">
                    <PlusIcon className="w-5 h-5" />
                    <span>Add Guest</span>
                  </a>
                </Link>
                {/* <button className='w-full px-4 py-2 text-sm font-medium transition duration-300 bg-white border-2 border-white rounded-md sm:w-max xl:text-base font-inter hover:border-primary'>
                  Export RSVP’s
                </button> */}
                <div className="relative w-full sm:w-max">
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm font-medium transition duration-300 bg-white border-2 border-white rounded-md xl:text-base font-inter hover:border-primary placeholder-primary"
                    placeholder="Search"
                  />
                  <SearchIcon className="box-content absolute w-5 h-5 p-2 -translate-y-1/2 bg-white top-1/2 right-4" />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-10">
                <div className="flex flex-col items-center space-y-5">
                  <h4 className="text-3xl font-semibold lg:text-4xl">
                    {data?.countAttending}
                  </h4>
                  <p className="text-sm font-normal lg:text-base">Attending</p>
                </div>
                <div className="flex flex-col items-center space-y-5">
                  <h4 className="text-3xl font-semibold lg:text-4xl">
                    {data?.countDeclined}
                  </h4>
                  <p className="text-sm font-normal lg:text-base">Declined</p>
                </div>
                <div className="flex flex-col items-center space-y-5">
                  <h4 className="text-3xl font-semibold lg:text-4xl">
                    {data?.countMaybe}
                  </h4>
                  <p className="text-sm font-normal lg:text-base">Maybe</p>
                </div>
                <div className="flex flex-col items-center space-y-5">
                  <h4 className="text-3xl font-semibold lg:text-4xl">
                    {data?.countPending}
                  </h4>
                  <p className="text-sm font-normal lg:text-base">Pending</p>
                </div>
              </div>
            </div>
            <div className="w-full mb-20 overflow-x-auto">
              <table className="w-full overflow-x-auto">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-[#FCE0EB] capitalize">
                    <th className="py-3 pl-12 pr-4 customLabel">Name</th>
                    <th className="px-4 py-3 customLabel">Phone</th>
                    <th className="px-4 py-3 customLabel">Email</th>
                    <th className="px-4 py-3 customLabel" align="center">
                      Attending?
                    </th>
                    <th className="px-4 py-3 customLabel" align="center">
                      Confirmed Guests
                    </th>
                    <th className="px-4 py-3 customLabel">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data?.guests?.map((guest) => (
                    <tr className="text-gray-700" key={guest?._id}>
                      <td className="pt-6 pb-3 pl-12 pr-4 font-medium customLabel">
                        {guest?.name}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-sm customLabel">
                        {guest?.phone?.number}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-sm customLabel">
                        {guest?.email}
                      </td>
                      <td
                        className="px-4 pt-6 pb-3 text-sm customLabel"
                        align="center"
                      >
                        <AttendingStatus status={guest?.rsvp} />
                      </td>
                      <td
                        className="px-4 pt-6 pb-3 text-sm customLabel"
                        align="center"
                      >
                        {guest?.guestEstimate}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-sm customLabel">
                        <Link href="/dashboard/invitation/text">
                          <a className="hover:underline">Send Invite</a>
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
