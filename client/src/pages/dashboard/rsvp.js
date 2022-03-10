import Head from "next/head";
import { DashboardHeader } from "@components/dashboard";
import { Footer, Heading, Loader } from "@components/index";
import { withAuthRoute } from "@hoc/withAuthRoute";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { useSelector } from "react-redux";
import { PrinterIcon, DocumentDownloadIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useQuery } from "react-query";
import { getGuests } from "@services/GuestManagement";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { CSVLink } from "react-csv";

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

const RSVPGuestInfo = () => {
  const { user } = useSelector((state) => state.user);
  const printRef = useRef();
  const { data, isLoading, isFetching } = useQuery(
    ["guests", user.token],
    getGuests
  );
  // const countAttending = guests?.filter(guest => guest.rsvp === 'yes').length;

  const rsvpData = data
    ? data?.guests?.slice(1)?.map((item) => ({
        name: item.name,
        email: item.email,
        phone: item?.phone?.number,
        address: `${item?.address?.street} ${item?.address?.providence}`,
        city: item?.address?.city,
        state: item?.address?.state,
        zip: item?.address?.zip,
        attending: item?.rsvp,
        guests: item?.guestEstimate,
        allergies: item?.allergies,
      }))
    : [];

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "RSVP Guest",
    pageStyle: `
    @media print {
  @page { size: landscape; }
  .print-btn { visibility: hidden;}
}
    `,
  });

  return (
    <>
      <Head>
        <title>Beweddy | RSVP List</title>
      </Head>
      {(isLoading || isFetching) && <Loader />}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom="mb-[2.1rem]" shadow>
        <DashboardHeader title="RSVP List" />
        <div className="space-y-10 shadow-box">
          <div className="max-w-[1450px] w-full" ref={printRef}>
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
              <div className="flex flex-wrap items-center justify-center gap-3 print:none sm:justify-end">
                <CSVLink data={rsvpData} filename="rsvp-list.csv">
                  <button className="flex items-center px-5 py-2 my-3 space-x-3 text-base font-semibold transition duration-300 border-2 border-gray-500 rounded-md font-inter bg-secondary-alternative text-primary hover:bg-secondary-alternative/50 guestButton print-btn">
                    <DocumentDownloadIcon className="w-5 h-5" />
                    <span>Export as CSV</span>
                  </button>
                </CSVLink>
                <button
                  className="flex items-center px-5 py-2 my-3 space-x-3 text-base font-semibold transition duration-300 border-2 border-gray-500 rounded-md font-inter bg-secondary-alternative text-primary hover:bg-secondary-alternative/50 guestButton print-btn"
                  onClick={handlePrint}
                >
                  <PrinterIcon className="w-5 h-5" />
                  <span>Print</span>
                </button>
              </div>
            </div>

            <div className="w-full mb-20 overflow-x-auto">
              <table className="w-full overflow-x-auto">
                <thead>
                  <tr className="font-semibold tracking-wide text-left text-gray-900 capitalize text-md bg-secondary-alternative">
                    <th className="py-3 pl-12 pr-4 text-sm">Name</th>
                    <th className="px-4 py-3 text-sm">Phone</th>
                    <th className="px-4 py-3 text-sm">Email</th>
                    <th className="px-4 py-3 text-sm">Address</th>
                    <th className="px-4 py-3 text-sm">City</th>
                    <th className="px-4 py-3 text-sm">State</th>
                    <th className="px-4 py-3 text-sm">ZIP</th>
                    <th className="px-4 py-3 text-sm" align="center">
                      Attending?
                    </th>
                    <th className="px-4 py-3 text-sm" align="center">
                      Guests
                    </th>
                    <th className="px-4 py-3 text-sm" align="center">
                      Food Allergies
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {data?.guests?.slice(1)?.map((guest) => (
                    <tr className="text-gray-700" key={guest?._id}>
                      <td className="pt-6 pb-3 pl-12 pr-4 text-xs font-medium">
                        {guest?.name}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-xs">
                        {guest?.phone?.number}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-xs">{guest?.email}</td>
                      <td className="px-4 pt-6 pb-3 text-xs">
                        {guest?.address?.street} {guest?.address?.providence}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-xs">
                        {guest?.address?.city}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-xs">
                        {guest?.address?.state}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-xs">
                        {guest?.address?.zip}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-xs" align="center">
                        <AttendingStatus status={guest?.rsvp} />
                      </td>
                      <td className="px-4 pt-6 pb-3 text-xs" align="center">
                        {guest?.guestEstimate}
                      </td>
                      <td className="px-4 pt-6 pb-3 text-xs" align="center">
                        {guest?.allergies}
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

export default withAuthRoute(RSVPGuestInfo);
