import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Footer, Heading, CropImage, Loader } from '@components/index';
import Image from 'next/image';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Fragment, useCallback, useEffect, useState } from 'react';
import { withAuthRoute } from '@hoc/withAuthRoute';
import { Listbox, Transition } from '@headlessui/react';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { getGuests } from '@services/GuestManagement';
import { sendTextInvites } from '@services/Invitation/text';
import { sendMMSInvites } from '@services/Invitation/mms';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import toast from 'react-hot-toast';
// import { getGuests } from '@services/GuestManagement';

const animatedComponents = makeAnimated();

const customStyles = {
  control: (
    { borderColor, backgroundColor, boxShadow, ...provided },
    { theme }
  ) => ({
    ...provided,
    width: '100%',
    // backgroundColor: 'rgba(243, 244, 246, 1)',
    borderColor: theme.colors.neutral90,
    '&:hover': {
      borderColor: theme.colors.neutral70,
    },
  }),
  valueContainer: style => ({
    ...style,
    padding: '6px 16px',
  }),
  placeholder: style => ({
    ...style,
    color: 'rgba(156, 163, 175, 1)',
    fontSize: '14px',
  }),
  input: style => ({
    ...style,
    outline: 'none',
    border: 'none',
  }),
};

const TextInvitesPage = () => {
  const { countries } = useSelector(state => state.countryList);
  const { user } = useSelector(state => state.user);
  const [toPhones, setToPhones] = useState(null);
  const { data, isLoading } = useQuery(['guests', user.token], getGuests);
  const [uploadedFile, setUploadedFile] = useState();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [selectedImageFile, setSelectedImageFile] = useState();
  const phones = data?.guests?.map(guest => ({
    label: `${guest.phone?.number} - ${guest?.name}`,
    value: guest.phone?.number,
    provider: guest.phone?.provider,
  }));

  const [selectedCountry, setSelectedCountry] = useState({});
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    watch,
  } = useForm({ mode: 'all' });

  watch(['message', 'compose']);
  const message = getValues('message');

  useEffect(() => {
    if (countries?.length) {
      setSelectedCountry(
        countries.find(country => country.alpha3Code === 'USA')
      );
    }
  }, [countries]);

  const val = `Hello, \n\nWe would like to invite you to our wedding! Please come celebrate with us. \n\nThank you for your support. Love, ${user.coupleName} !\n\nVisit Our Wedding Website: https://beweddy-delta.vercel.app/couple/${user?.username}\n`;

  const handlePhones = (newValue, actionMeta) => {
    if (newValue) {
      setToPhones(newValue);
    }
    if (actionMeta.action === 'clear') {
      setToPhones(null);
    }
  };

  const onSubmit = async data => {
    try {
      if (data.compose === 'Text') {
        await sendTextInvites({
          phones: toPhones,
          coupleName: user?.coupleName,
          message: data.message,
          from: data.phone,
        });
      } else {
        await sendMMSInvites({
          phones: toPhones,
          from: data.phone,
          message: data.message,
          image: uploadedFile,
          coupleName: user?.coupleName,
        });
      }
      // console.log({
      //   phones: toPhones,
      //   coupleName: user?.coupleName,
      //   message: data.message,
      // });
    } catch (err) {
      console.error(err);
    }
  };

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
    const URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'beweddy_csfhgnsu');

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(URL, formData, config);
      console.log(data);
      toast.success('Image uploaded successfully');
      setLoading(false);
      setUploadedFile({ filename: data.original_filename, url: data.url });
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Beweddy | Text Invites</title>
      </Head>
      {loading && <Loader />}
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader title='Text Invites' />

        <div className='space-y-10 shadow-box'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 xxl:pr-0'>
              <div className='mb-5'>
                <div className='flex items-center pb-2 space-x-3'>
                  <Image src='/icons/messages.svg' width={46} height={46} />
                  <h3 className='text-2xl'>Send Text & MMS Invites</h3>
                </div>
                <span className='h-[4px] inline-block max-w-[215px] w-full bg-secondary-alternative'></span>
              </div>

              <div className='flex flex-wrap items-center justify-center gap-12'>
                <div className='md:col-span-2'>
                  <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex justify-between'>
                      <Heading h3 className='!text-2xl'>
                        New Message
                      </Heading>
                      <div className='flex items-center space-x-3'>
                        <svg
                          width='25'
                          height='25'
                          viewBox='0 0 25 25'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.6226 3.97388H8.62256C6.96856 3.97388 5.62256 5.31988 5.62256 6.97388V7.97388H4.62256C4.35734 7.97388 4.10299 8.07923 3.91545 8.26677C3.72792 8.45431 3.62256 8.70866 3.62256 8.97388C3.62256 9.23909 3.72792 9.49345 3.91545 9.68098C4.10299 9.86852 4.35734 9.97388 4.62256 9.97388H5.62256V11.9739H4.62256C4.35734 11.9739 4.10299 12.0792 3.91545 12.2668C3.72792 12.4543 3.62256 12.7087 3.62256 12.9739C3.62256 13.2391 3.72792 13.4934 3.91545 13.681C4.10299 13.8685 4.35734 13.9739 4.62256 13.9739H5.62256V15.9739H4.62256C4.35734 15.9739 4.10299 16.0792 3.91545 16.2668C3.72792 16.4543 3.62256 16.7087 3.62256 16.9739C3.62256 17.2391 3.72792 17.4934 3.91545 17.681C4.10299 17.8685 4.35734 17.9739 4.62256 17.9739H5.62256V18.9739C5.62256 20.6279 6.96856 21.9739 8.62256 21.9739H19.6226C21.2766 21.9739 22.6226 20.6279 22.6226 18.9739V6.97388C22.6226 5.31988 21.2766 3.97388 19.6226 3.97388ZM7.62256 6.97388C7.62256 6.42288 8.07156 5.97388 8.62256 5.97388V7.97388H7.62256V6.97388ZM7.62256 9.97388H8.62256V11.9739H7.62256V9.97388ZM7.62256 13.9739H8.62256V15.9739H7.62256V13.9739ZM7.62256 18.9739V17.9739H8.62256V19.9739C8.07156 19.9739 7.62256 19.5249 7.62256 18.9739ZM20.6226 18.9739C20.6226 19.5249 20.1736 19.9739 19.6226 19.9739H9.62256V5.97388H19.6226C20.1736 5.97388 20.6226 6.42288 20.6226 6.97388V18.9739Z'
                            fill='black'
                          />
                          <path
                            d='M14.6226 13.4739C15.7271 13.4739 16.6226 12.5784 16.6226 11.4739C16.6226 10.3693 15.7271 9.47388 14.6226 9.47388C13.518 9.47388 12.6226 10.3693 12.6226 11.4739C12.6226 12.5784 13.518 13.4739 14.6226 13.4739Z'
                            fill='black'
                          />
                          <path
                            d='M14.6226 14.3299C13.0606 14.3299 12.1226 15.0449 12.1226 15.7589C12.1226 16.1159 13.0606 16.4739 14.6226 16.4739C16.0886 16.4739 17.1226 16.1169 17.1226 15.7589C17.1226 15.0449 16.1426 14.3299 14.6226 14.3299Z'
                            fill='black'
                          />
                        </svg>
                        <h4 className='text-sm font-bold xl:text-base'>
                          Add or input contacts
                        </h4>
                      </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='Text'
                          value='Text'
                          className='hidden'
                          defaultChecked
                          {...register('compose')}
                        />
                        <label
                          htmlFor='Text'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center'>
                            <div className='checked-inner w-[10px] h-[10px] rounded-full'></div>
                          </div>
                          <span className='text-lg font-light font-inter'>
                            Text
                          </span>
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='Picture'
                          value='Picture'
                          className='hidden'
                          {...register('compose')}
                        />
                        <label
                          htmlFor='Picture'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center'>
                            <div className='checked-inner w-[10px] h-[10px] rounded-full'></div>
                          </div>
                          <span className='text-lg font-light font-inter'>
                            Picture
                          </span>
                        </label>
                      </div>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='calenderInvite'
                          value='calenderInvite'
                          className='hidden'
                          {...register('compose')}
                        />
                        <label
                          htmlFor='calenderInvite'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-full border-primary w-5 h-5 flex items-center justify-center'>
                            <div className='checked-inner w-[10px] h-[10px] rounded-full'></div>
                          </div>
                          <span className='text-lg font-light font-inter'>
                            Calender Invite
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                        To
                      </Heading>
                      <h5 className='xl:text-[12px] xxl:text-base font-bold'>
                        Recipients: 13
                      </h5>
                    </div>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      onChange={handlePhones}
                      // defaultValue={[colourOptions[4], colourOptions[5]]}
                      isMulti
                      styles={customStyles}
                      options={phones}
                    />
                    <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                      From
                    </Heading>
                    <div>
                      <div className='flex items-center'>
                        <Listbox
                          value={selectedCountry}
                          onChange={setSelectedCountry}
                        >
                          <div className='relative -mr-2'>
                            <Listbox.Button className='bg-white cursor-pointer inline-block font-semibold py-[6px] md:py-[10px] px-4 placeholder-gray-400 border border-primary rounded-[5px] -mr-1'>
                              <img
                                src={selectedCountry.flag}
                                alt={selectedCountry.name}
                                className='object-cover mr-8 rounded-full w-7 h-7 md:mr-5'
                              />
                              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                                <svg
                                  width='13'
                                  height='13'
                                  viewBox='0 0 13 13'
                                  fill='none'
                                  className='w-4 h-4 text-gray-400'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M6.05473 10.6C6.10442 10.6722 6.17091 10.7312 6.24848 10.772C6.32604 10.8128 6.41235 10.8341 6.49998 10.8341C6.58761 10.8341 6.67392 10.8128 6.75148 10.772C6.82905 10.7312 6.89554 10.6722 6.94523 10.6L11.8202 3.55837C11.8767 3.47715 11.9097 3.38202 11.9159 3.28332C11.9221 3.18461 11.9011 3.0861 11.8552 2.9985C11.8093 2.9109 11.7402 2.83755 11.6556 2.78642C11.5709 2.73529 11.4739 2.70834 11.375 2.7085H1.62498C1.52631 2.7089 1.42962 2.7362 1.34531 2.78745C1.26099 2.8387 1.19224 2.91197 1.14646 2.99937C1.10067 3.08677 1.07957 3.185 1.08543 3.28349C1.09129 3.38199 1.1239 3.47702 1.17973 3.55837L6.05473 10.6Z'
                                    fill='#C4C4C4'
                                  />
                                </svg>
                              </span>
                            </Listbox.Button>
                            <Transition
                              as={Fragment}
                              leave='transition ease-in duration-100'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                            >
                              <Listbox.Options className='absolute z-50 max-w-xs py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                                {countries?.map((country, countryIdx) => (
                                  <Listbox.Option
                                    key={countryIdx}
                                    className={({ active }) =>
                                      `${
                                        active
                                          ? 'text-amber-900 bg-secondary-alternative/20'
                                          : 'text-gray-900'
                                      }
                                      cursor-pointer select-none relative py-2 pl-10 pr-4`
                                    }
                                    value={country}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`${
                                            selected
                                              ? 'font-medium'
                                              : 'font-normal'
                                          } block truncate`}
                                        >
                                          {country.name}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`${
                                              active
                                                ? 'text-amber-600'
                                                : 'text-amber-600'
                                            }
                                             inset-y-0 left-0 flex items-center pl-3`}
                                          >
                                            <CheckIcon
                                              className='w-5 h-5'
                                              aria-hidden='true'
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>
                        <input
                          id='phone'
                          type='tel'
                          className='w-full focus:!border-primary bg-white inline-block font-normal py-2 md:py-3 px-4 pl-5 placeholder-gray-400 border border-primary rounded-[5px]'
                          placeholder='Enter phone number'
                          {...register('phone', {
                            required: {
                              value: true,
                              message: 'Phone numbers are required!',
                            },
                            pattern: {
                              value: /^([0-9\(\)\/\+ \-]*)$/,
                              message: 'Must be a valid phone number',
                            },
                          })}
                        />
                      </div>
                      {/* <p className='h-4 mt-2 text-sm font-light text-red-400'>
                        {errors?.phone?.message}
                      </p> */}
                    </div>
                    {getValues('compose') === 'Picture' && (
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <button className='py-3 px-8 text-sm md:text-base font-bold md:font-semibold border border-[#7F7F7F] rounded-[5px] bg-secondary-alternative hover:bg-secondary-alternative/50 transition duration-300'>
                          Upload Photo/Video
                        </button>
                      </div>
                    )}
                    <div className='space-y-3'>
                      <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                        Compose
                      </Heading>
                      <div className='relative space-y-3'>
                        <textarea
                          cols='30'
                          rows='10'
                          className='rounded-[20px] focus:border-purple-100 p-10 w-full placeholder-primary font-medium text-lg scroll-design'
                          defaultValue={val}
                          placeholder=''
                          {...register('message', {
                            required: {
                              value: true,
                              message: 'Compose message is required!',
                            },
                            // maxLength: {
                            //   value: 160,
                            //   message: 'Maximum 160 characters is reached!',
                            // },
                          })}
                        ></textarea>
                        {errors.message && (
                          <p className='text-sm text-red-400'>
                            {errors.message.message}
                          </p>
                        )}
                        {/* <svg
                          className='absolute bottom-0 right-0'
                          width='114'
                          height='60'
                          viewBox='0 0 114 60'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M113 59L1 1H113V59Z'
                            fill='white'
                            stroke='black'
                          />
                        </svg>

                        <span className='absolute bottom-0 right-0 h-10 bg-white w-52'></span> */}
                      </div>
                    </div>

                    <button
                      type='submit'
                      className='flex items-center justify-end !mt-10 space-x-3 text-sm md:text-base font-bold text-right'
                    >
                      <span>Send Message</span>
                      <ArrowRightIcon className='w-6 h-6' />
                    </button>
                  </form>
                </div>

                <div className='hidden mx-auto md:block'>
                  <div className='relative'>
                    <img
                      src='/images/mobile-template.svg'
                      alt=''
                      className='min-w-[338px]'
                    />
                    <div className='absolute max-w-[315px] max-h-[540px] h-full w-full top-[60px] left-[12px] p-2'>
                      <div className='px-1'>
                        <div className='flex items-center justify-between'>
                          <svg
                            width='30'
                            height='42'
                            viewBox='0 0 30 42'
                            fill='none'
                            // className='w-8 h-8'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M12.7053 22.8984L20.6446 14.9591C21.2304 14.3733 21.2304 13.4236 20.6446 12.8378C20.0589 12.252 19.1091 12.252 18.5233 12.8378L9.52332 21.8378C8.93754 22.4236 8.93754 23.3733 9.52332 23.9591L18.5233 32.9591C19.1091 33.5449 20.0589 33.5449 20.6446 32.9591C21.2304 32.3733 21.2304 31.4236 20.6446 30.8378L12.7053 22.8984Z'
                              fill='#007AFF'
                            />
                          </svg>
                          <div className='flex flex-col items-center h-20 space-y-2'>
                            <div className='w-[50px] h-[50px] rounded-full'>
                              <Image
                                src={`${
                                  user.avatar ? user.avatar : '/images/user.png'
                                }`}
                                height={50}
                                width={50}
                              />
                            </div>
                            <h4 className='text-sm font-bold text-center'>
                              {user.firstName}
                            </h4>
                          </div>
                          <span></span>
                        </div>
                        <div className='overflow-hidden'>
                          <div className='phone-layout flex flex-col justify-end space-y-5 max-h-[calc(540px-88px)] min-h-[calc(540px-88px)] h-full ml-3 mt-2 pb-2'>
                            <style jsx>
                              {`
                                .phone-layout: {
                                  -ms-overflow-style: none;
                                  scrollbar-width: none;
                                }
                                .phone-layout::-webkit-scrollbar {
                                  display: none;
                                }
                              `}
                            </style>
                            <div className='ml-auto'>
                              {uploadedFile && (
                                <img src={uploadedFile.url} alt='' />
                              )}
                            </div>
                            <div className='relative w-full text-white font-medium text-sm rounded-[10px] px-5 py-3 bg-[#1788Fe]'>
                              <div className='break-words'>{message}</div>
                              <svg
                                width='41'
                                height='29'
                                viewBox='0 0 41 29'
                                fill='none'
                                className='absolute bottom-[-20px] right-0'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M37.8251 27.77L1.65628 3.91393C0.000161409 2.8216 0.773555 0.244385 2.75747 0.244385H38.9263C40.0309 0.244385 40.9263 1.13982 40.9263 2.24439V26.1004C40.9263 27.6933 39.1548 28.647 37.8251 27.77Z'
                                  fill='#1788FE'
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <CropImage
        onSave={onCropSave}
        selectedFile={selectedImageFile}
        // aspectRatio={16 / 9}
      />
      <Footer hideSocial />
    </Fragment>
  );
};

export default withAuthRoute(TextInvitesPage);
