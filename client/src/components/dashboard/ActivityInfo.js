import { useWindowSize } from "@hooks/useWindowSize";
import Image from "next/image";

const ActivityInfo = () => {
  const size = useWindowSize();
  return (
    // <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 xl:gap-6">
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-5 sm:gap-5">
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
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
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
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
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
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
      </div>
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/location-tick.svg"
          alt="Addresses Collected"
          height={size.width > 599 ? 38 : 25}
          width={size.width > 599 ? 38 : 25}
        />
        <h4 className="text-2xl font-medium subTitle">130</h4>
        <p className="text-sm font-medium whitespace-nowrap customLabel">
          Addresses Collected
        </p>
      </div>
      <div className="flex w-[150px] flex-col items-center justify-center p-5 space-y-2 text-center transition duration-300">
        <Image
          src="/icons/directbox-notif.svg"
          alt="RSVP"
          height={size.width > 599 ? 38 : 25}
          width={size.width > 599 ? 38 : 25}
        />
        <h4 className="text-2xl font-medium subTitle">138</h4>
        <p className="text-sm font-medium whitespace-nowrap customLabel">RSVP</p>
      </div>
    </div>
  );
};
export default ActivityInfo;
