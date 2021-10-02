import Link from "next/link";
import { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { useSelector } from "react-redux";

const QRCodeGenerator = () => {
  const { user } = useSelector((state) => state.user);
  const [value, setValue] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`
  );

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h4 className="text-xl font-medium">Personalized QR Code</h4>
      <div>
        <QRCode
          {...{ value }}
          size={200}
          eyeRadius={0}
          logoHeight={50}
          logoWidth={50}
          logoImage="/icons/circle-ring.png"
        />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <Link href="/dashboard/features/qrcode-and-links">
          <a className="bg-secondary-alternative font-inter cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-primary rounded-[5px] transition duration-300 hover:bg-secondary-alternative/30">
            Generate
          </a>
        </Link>
        {user?.qrCode && (
          <a
            href={user?.qrCode}
            download={`${user?.coupleName}`}
            className="bg-secondary-alternative font-inter cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-primary rounded-[5px] transition duration-300 hover:bg-secondary-alternative/30"
          >
            Download
          </a>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
