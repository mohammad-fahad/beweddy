import { useCallback, useRef, useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import { useSelector } from 'react-redux';
import Heading from './Heading';

const QRCodeGenerator = () => {
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

  return (
    <div className='border-t-4 border-primary bg-secondary-alternative py-16'>
      <div className='container'>
        <div className=' rounded-xl max-w-4xl mx-auto border-gray-200 border-2 bg-white p-10 flex space-x-20'>
          <div className='flex flex-col space-y-8'>
            <h4 className='text-xl font-medium'>Demo QR | Your QR Code</h4>
            <div className='qrCode mx-auto'>
              <QRCode
                {...{ value }}
                size={180}
                eyeRadius={[
                  {
                    // top/left eye
                    outer: [10, 10, 0, 10],
                    inner: [0, 10, 10, 10],
                  },
                  [10, 10, 10, 0], // top/right eye
                  [10, 0, 10, 10], // bottom/left
                ]}
                // logoWidth={50}
                // logoHeight={50}
                logoImage={user.avatar}
              />
            </div>
            <button
              className='bg-white font-inter cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/50 rounded-[5px] transition duration-300 hover:bg-secondary-alternative/30'
              onClick={download}
            >
              Download
            </button>
          </div>
          <div className='flex flex-col space-y-5'>
            <Heading h3>QR Link</Heading>
            <input
              type='text'
              className='w-full rounded-[5px] border-[3px] border-gray-200 py-3 px-5 text-base font-normal placeholder-gray-300'
              placeholder='www.beweddy.com/nateandash'
              onChange={e => setLink(e.target.value)}
            />
            <Heading h3>Upload Photo</Heading>
            <button
              className='bg-white font-inter cursor-pointer text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/50 rounded-[5px] transition-colors duration-300 hover:border-primary'
              onClick={() => alert('Under construction')}
            >
              upload Image
            </button>
            <div>
              <button
                className='bg-white font-inter cursor-pointer text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/50 rounded-[5px] transition-colors duration-300 hover:border-primary'
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
