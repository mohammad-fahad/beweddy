import Image from 'next/image';

const ActivityInfo = () => {
  return (
    // <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 xl:gap-6">
    <div className="flex flex-wrap items-center justify-center gap-x-10">
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/message-notif.svg"
          alt="Text Invitation"
          height={38}
          width={38}
        />
        <h4 className="text-2xl font-medium">280</h4>
        <p className="text-sm font-medium whitespace-nowrap">
          Text Invitations
        </p>
      </div>
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/sms-edit.svg"
          alt="Email Invitations"
          height={38}
          width={38}
        />
        <h4 className="text-2xl font-medium">390</h4>
        <p className="text-sm font-medium whitespace-nowrap">
          Email Invitations
        </p>
      </div>
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/sms-tracking.svg"
          alt="Mail Out Invitations"
          height={38}
          width={38}
        />
        <h4 className="text-2xl font-medium">400</h4>
        <p className="text-sm font-medium whitespace-nowrap">
          Mail Out Invitations
        </p>
      </div>
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/location-tick.svg"
          alt="Addresses Collected"
          height={38}
          width={38}
        />
        <h4 className="text-2xl font-medium">130</h4>
        <p className="text-sm font-medium whitespace-nowrap">
          Addresses Collected
        </p>
      </div>
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/directbox-notif.svg"
          alt="RSVP"
          height={38}
          width={38}
        />
        <h4 className="text-2xl font-medium">138</h4>
        <p className="text-sm font-medium whitespace-nowrap">RSVP</p>
      </div>
    </div>
  );
};
export default ActivityInfo;
