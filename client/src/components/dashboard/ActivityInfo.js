import { useWindowSize } from '@hooks/useWindowSize';
import { getGuests } from '@services/GuestManagement';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

const ActivityInfo = () => {
  const size = useWindowSize();

  const { user } = useSelector(state => state.user);
  const { data, isLoading, isFetching } = useQuery(
    ['guests', user.token],
    getGuests
  );

  return (
    // <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 xl:gap-6">
    <div className='flex flex-wrap items-center justify-center sm:gap-x-5 sm:gap-y-5 sm:gap-5'>
      {/* <div className="flex w-[150px] flex-col items-center justify-center sm:p-5 p-2 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/message-notif.svg"
          alt="Text Invitation"
          height={size.width > 599 ? 38 : 25}
          width={size.width > 599 ? 38 : 25}
          className="dashboardImage"
        />

        <h4 className="text-2xl font-medium subTitle">280</h4>
        <p className="text-sm font-medium whitespace-nowrap customLabel">
          Text Invitations
        </p>
      </div>
      <div className="flex w-[150px] flex-col items-center justify-center sm:p-5 p-2 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/sms-edit.svg"
          alt="Email Invitations"
          height={size.width > 599 ? 38 : 25}
          width={size.width > 599 ? 38 : 25}
        />
        <h4 className="text-2xl font-medium subTitle">390</h4>
        <p className="text-sm font-medium whitespace-nowrap customLabel">
          Email Invitations
        </p>
      </div>
      <div className="flex w-[150px] flex-col items-center justify-center sm:p-5 p-2 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/sms-tracking.svg"
          alt="Mail Out Invitations"
          height={size.width > 599 ? 38 : 25}
          width={size.width > 599 ? 38 : 25}
        />
        <h4 className="text-2xl font-medium subTitle">400</h4>
        <p className="text-sm font-medium whitespace-nowrap customLabel">
          Mail Out Invitations
        </p>
      </div> */}
      <div className='flex w-[150px] flex-col items-center justify-center sm:p-5 p-2 space-y-2 text-center transition duration-300'>
        <Image
          src='/icons/location-tick.svg'
          alt='Addresses Collected'
          height={size.width > 599 ? 38 : 25}
          width={size.width > 599 ? 38 : 25}
        />
        <h4 className='text-2xl font-medium subTitle'>0</h4>
        <p className='text-sm font-medium whitespace-nowrap customLabel'>
          Addresses Collected
        </p>
      </div>
      <div className='flex w-[150px] flex-col items-center justify-center sm:p-5 p-2 space-y-2 text-center transition duration-300'>
        <Image
          src='/icons/directbox-notif.svg'
          alt='RSVP'
          height={size.width > 599 ? 38 : 25}
          width={size.width > 599 ? 38 : 25}
        />
        <h4 className='text-2xl font-medium subTitle'>
          {data?.countAttending}
        </h4>
        <p className='text-sm font-medium whitespace-nowrap customLabel'>
          RSVP
        </p>
      </div>
    </div>
  );
};
export default ActivityInfo;
