import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Footer, Heading, Loader, CropImage } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import Image from 'next/image';
import { QRCode } from 'react-qrcode-logo';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react';
import DashboardContainer from '@components/dashboard/DashboardContainer';
import { fileUploader } from '@services/Uploader';
import toast from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';
import { attemptUpdateUserProfile } from '@features/user/userActions';
import { downloadQRCode } from '@utils/index';

const QRCodePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [uploadedFile, setUploadedFile] = useState();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [selectedImageFile, setSelectedImageFile] = useState();
  const [value, setValue] = useState(
    `https://beweddy-delta.vercel.app/couple/${user?.username}`
  );
  const [link, setLink] = useState(
    `https://beweddy-delta.vercel.app/couple/${user?.username}`
  );

  const generateQRCode = async () => {
    try {
      const canvas = document.querySelector('.code > canvas');

      const base64 = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');

      if (base64) {
        const result = await fileUploader(base64);
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const download = () => {};

  const onDrop = useCallback(acceptedFiles => {
    const fileDropped = acceptedFiles[0];
    if (fileDropped['type'].split('/')[0] === 'image') {
      setSelectedImageFile(fileDropped);
      return;
    }
    setFile(fileDropped);
    const previewUrl = URL.createObjectURL(fileDropped);
    setPreview(previewUrl);
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  const onCropSave = async ({ file, preview }) => {
    setPreview(preview);
    setFile(file);
    setLoading(true);
    try {
      const result = await fileUploader(file);
      const qrImage = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/w_100,h_100,c_thumb,r_max,bo_10px_solid_black/v${result.version}/${result.public_id}.${result.format}`;
      dispatch(
        attemptUpdateUserProfile({
          QRCode: {
            avatar: qrImage,
          },
        })
      );
      // toast.success('Image uploaded successfully');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Beweddy | QR Code & Links</title>
      </Head>
      {loading && <Loader />}
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader title='QR Code & Links' />

        <DashboardContainer>
          {/* <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-none xl:grid-cols-3'> */}
          <div className='flex flex-wrap justify-center gap-10'>
            <div className='mb-2 xl:col-span-2'>
              <div className='mb-5'>
                <div className='flex items-center pb-2 space-x-3'>
                  <h3 className='text-2xl'>QR Code</h3>
                </div>
                <span className='h-[4px] inline-block max-w-[215px] w-full bg-secondary-alternative'></span>
              </div>

              <div className='px-8 py-10 border-2 border-primary'>
                <div className='flex flex-col space-y-5'>
                  <Heading h3>Create Your Customize QR Code</Heading>
                  <input
                    type='text'
                    readOnly
                    className='max-w-sm w-full rounded-[5px] border-[3px] border-gray-300 py-3 px-5 text-base font-normal placeholder-gray-300'
                    placeholder='www.beweddy.com/nateandash'
                    value={link}
                    onChange={e => setLink(e.target.value)}
                  />
                  <Heading h3>Upload QR Image</Heading>
                  <div className='flex flex-wrap items-center gap-2 lg:space-x-5'>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <button className='w-full sm:w-max bg-white font-inter cursor-pointer text-center text-sm md:text-base font-medium md:font-semibold py-3 px-6 lg:px-10 placeholder-primary border-[3px] border-secondary-alternative/80 rounded-[5px] transition-colors duration-300 hover:border-primary'>
                        upload Image
                      </button>
                    </div>

                    <button
                      type='button'
                      className='w-full sm:w-max bg-white font-inter cursor-pointer text-center text-sm md:text-base font-medium md:font-semibold py-3 px-6 lg:px-10 placeholder-primary border-[3px] border-secondary-alternative/80 rounded-[5px] transition-colors duration-300 hover:border-primary'
                      onClick={generateQRCode}
                    >
                      Generate
                    </button>
                  </div>
                  <div className='!mt-10'>
                    {/* bg-secondary-alternative/40 */}
                    <button
                      className='w-full sm:w-max  font-inter cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-5 lg:px-10 placeholder-primary border-[3px] border-secondary-alternative/80 rounded-[5px] transition duration-300 hover:bg-secondary-alternative/30 hover:border-primary'
                      onClick={download}
                    >
                      Download Your QR Code
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden mx-auto xl:col-span-1 md:block'>
              <div className='space-y-10'>
                <h4 className='text-xl font-medium text-center'>
                  Demo | Your QR Code
                </h4>
                <div className='relative w-full max-w-xs mx-auto'>
                  <img
                    src='/images/qrcode-mock.png'
                    alt=''
                    className='w-full'
                  />
                  <div className='code absolute -translate-x-1/2 -translate-y-1/2 qrCode left-1/2 top-1/2'>
                    <QRCode
                      {...{ value }}
                      size={165}
                      id='qrcode'
                      eyeRadius={0}
                      logoHeight={50}
                      logoWidth={50}
                      // style={{image}
                      logoImage={user?.QRCode?.avatar}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='grid gap-10 md:grid-cols-2 xl:grid-cols-3'>
            <div className='justify-self-center md:justify-self-stretch'>
              <div className='space-y-8'>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Your Supper Link
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[330px] w-full py-3 px-5 text-center text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.bw.link/123'
                    />
                  </div>
                </div>
                <div className='max-w-[330px]'>
                  <Image
                    width={330}
                    height={660}
                    src='/images/feature-mobile.png'
                  />
                </div>
              </div>
            </div>
            <div className='justify-self-center md:justify-self-stretch max-w-[400px] w-full'>
              <div className='space-y-10'>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Your Website Link
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.beweddy.com/nateandash'
                    />
                  </div>
                  <a
                    href='#'
                    className='block text-sm font-medium capitalize font-inter hover:underline'
                  >
                    Add Your Custom Domain
                  </a>
                </div>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Gift Cards & Registry Link
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.beweddy.com/nateandash/giftcards'
                    />
                  </div>
                  <a
                    href='#'
                    className='block text-sm font-medium capitalize font-inter hover:underline'
                  >
                    Add Gift Cards & Build Registry
                  </a>
                </div>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    We Need Your Address Link
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.beweddy.com/nateandash/needyouraddress'
                    />
                  </div>
                  <a
                    href='#'
                    className='block text-sm font-medium capitalize font-inter hover:underline'
                  >
                    Manage RSVPs
                  </a>
                </div>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Event Details
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='www.beweddy.com/nateandash/needyouraddress'
                    />
                  </div>
                  <a
                    href='#'
                    className='block text-sm font-medium capitalize font-inter hover:underline'
                  >
                    Manage Event Details
                  </a>
                </div>
                <div className='space-y-3'>
                  <Heading h3 className='!font-medium !text-lg'>
                    Link Shortener
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='max-w-[400px] text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]'
                      placeholder='Add link'
                    />
                  </div>
                  <a
                    href='#'
                    className='block text-sm font-medium capitalize font-inter hover:underline'
                  >
                    Shorten the link.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DashboardContainer>
      </DashboardLayout>
      <CropImage
        onSave={onCropSave}
        selectedFile={selectedImageFile}
        // aspectRatio={1 / 1}
      />
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(QRCodePage);
