import { useState } from 'react';
import Paragraph from './Paragraph';
import { QRCode } from 'react-qrcode-logo';
import { useSelector } from 'react-redux';

const Banner = () => {
  const { user } = useSelector((state) => state.user);
  const [value, setValue] = useState(
    `https://beweddy-delta.vercel.app/couple/${user?.username}`
  );

  return (
    <div className="container mx-auto">
      <div className="flex space-x-2">
        <div>
          <Paragraph />
        </div>

        <div className="hidden mx-auto xl:col-span-1 md:block">
          <div className="space-y-10">
            <h4 className="text-xl font-medium text-center">
              Demo | Your QR Code
            </h4>
            <div className="relative w-full max-w-xs mx-auto">
              <img src="/images/qrcode-mock.png" alt="" className="w-full" />
              <div className="absolute -translate-x-1/2 -translate-y-1/2 qrCode left-1/2 top-1/2">
                <QRCode
                  {...{ value }}
                  size={165}
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
  );
};

export default Banner;
