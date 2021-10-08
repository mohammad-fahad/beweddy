import { useState } from "react";
import Paragraph from "./Paragraph";
import { QRCode } from "react-qrcode-logo";
import { useSelector } from "react-redux";
import { useWindowSize } from "@hooks/useWindowSize";

const Banner = () => {
  const { user } = useSelector((state) => state.user);
  const [value, setValue] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`
  );

  const size = useWindowSize();

  return (
    <div className="container mx-auto">
      <div className="grid w-full grid-cols-12 gap-4 mt-5">
        <div
          className={` ${
            size.width < 1200 ? "!col-start-0 !col-span-8 " : ""
          } ${
            size.width < 600 ? "!col-start-0 !col-span-12" : ""
          } col-start-3 col-span-7 p-1 text-lg font-semibold subTitle`}
        >
          <Paragraph />
        </div>
        <div
          className={`sm:col-span-2 col-span-12 p-1 flex justify-end customGrid smallDeviceRemove ${
            size.width < 1200 ? "!col-span-4" : ""
          } ${size.width < 600 ? " !col-span-12 " : ""}`}
        >
          <div className="mx-auto">
            <div className="space-y-10">
              <h4 className="text-[18px] font-medium text-center">
                Demo | Your QR Code
              </h4>
              <div className="relative w-full max-w-xs mx-auto">
                <img src="/images/qrcode-mock.png" alt="" className="w-full" />
                <div className="absolute -translate-x-1/2 -translate-y-1/2 qrCode left-1/2 top-1/2">
                  <QRCode
                    {...{ value }}
                    size={100}
                    eyeRadius={0}
                    logoHeight={50}
                    logoWidth={50}
                    // style={{image}
                    logoImage="/icons/circle-ring.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center col-span-12 smallDeviceAdd">
          <div className="mx-auto">
            <div className="space-y-10">
              <h4 className="text-[18px] font-medium text-center">
                Demo | Your QR Code
              </h4>
              <div className="relative w-full max-w-xs mx-auto">
                <img src="/images/qrcode-mock.png" alt="" className="w-full" />
                <div className="absolute -translate-x-1/2 -translate-y-1/2 qrCode left-1/2 top-1/2">
                  <QRCode
                    {...{ value }}
                    size={100}
                    eyeRadius={0}
                    logoHeight={50}
                    logoWidth={50}
                    // style={{image}
                    logoImage="/icons/circle-ring.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
