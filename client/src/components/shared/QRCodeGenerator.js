import Link from 'next/link';
import { useCallback, useRef, useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
// import QRCode from 'qrcode.react';
import { useSelector } from 'react-redux';
import Heading from './Heading';

const QRCodeGenerator = ({ sidebar }) => {
  const { user } = useSelector(state => state.user);
  const [value, setValue] = useState('https://beweddy-delta.vercel.app/');
  const [link, setLink] = useState('https://beweddy-delta.vercel.app/');
  const download = () => {
    const canvas = document.querySelector('.qrCode > canvas');

    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'beweddy.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  if (sidebar) {
    return (
      <div className='flex flex-col justify-center items-center space-y-5'>
        <h4 className='text-xl font-medium'>Personalized QR Code</h4>
        <div className='qrCode'>
          <QRCode
            {...{ value }}
            size={200}
            eyeRadius={[
              {
                // top/left eye
                outer: [10, 10, 0, 10],
                inner: [0, 10, 10, 10],
              },
              [10, 10, 10, 0], // top/right eye
              [10, 0, 10, 10], // bottom/left
            ]}
            logoHeight={50}
            logoWidth={50}
            // style={{image}
            logoImage='/icons/circle-ring.png'
            // logoImage='https://res.cloudinary.com/muttakinhasib/image/upload/v1621273993/avatar/user_dmy5bs.png'
          />
        </div>
        <div className='space-y-3 flex flex-col items-center'>
          <Link href='/dashboard/features/qrcode-and-links'>
            <a className='bg-secondary-alternative font-inter cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-primary rounded-[5px] transition duration-300 hover:bg-secondary-alternative/30'>
              Generate
            </a>
          </Link>
          <button
            className='bg-secondary-alternative font-inter cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-primary rounded-[5px] transition duration-300 hover:bg-secondary-alternative/30'
            onClick={download}
          >
            Download
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='border-t-4 border-gray-200 bg-gradient-to-br from-[#FCE3EB] to-white py-10'>
      <div className='container'>
        <div className='p-10 flex space-x-28'>
          <div className='flex flex-col space-y-8'>
            <h4 className='text-xl font-medium'>Demo QR | Your QR Code</h4>
            <div className='qrCode'>
              <QRCode
                {...{ value }}
                size={200}
                eyeRadius={[
                  {
                    // top/left eye
                    outer: [10, 10, 0, 10],
                    inner: [0, 10, 10, 10],
                  },
                  [10, 10, 10, 0], // top/right eye
                  [10, 0, 10, 10], // bottom/left
                ]}
                logoHeight={50}
                logoWidth={50}
                // style={{image}
                logoImage='/icons/circle-ring.png'
              />
            </div>
            <button
              className='bg-white font-inter cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/80 rounded-[5px] transition duration-300 hover:bg-secondary-alternative/30'
              onClick={download}
            >
              Download
            </button>
          </div>
          <div className='flex flex-col space-y-5'>
            <Heading h3>QR Link</Heading>
            <input
              type='text'
              className='w-96 rounded-[5px] border-[3px] border-secondary/20 py-3 px-5 text-base font-normal placeholder-gray-300'
              placeholder='www.beweddy.com/nateandash'
              value={link}
              onChange={e => setLink(e.target.value)}
            />
            <Heading h3>Upload Photo</Heading>
            <div>
              <button
                className='bg-white font-inter cursor-pointer text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/80 rounded-[5px] transition-colors duration-300 hover:border-primary'
                onClick={() => alert('Under construction')}
              >
                upload Image
              </button>
            </div>
            <div>
              <button
                className='bg-white font-inter cursor-pointer text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/80 rounded-[5px] transition-colors duration-300 hover:border-primary'
                onClick={() => setValue(link)}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
