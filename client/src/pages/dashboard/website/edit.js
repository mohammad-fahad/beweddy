import Head from 'next/head';
import Link from 'next/link';
import { produce } from 'immer';
import { generate } from 'shortid';
import { Image } from 'cloudinary-react';
import { DashboardContainer, DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import {
  Button,
  CropImage,
  Divider,
  FirstReceptionDatePicker,
  Footer,
  Heading,
  Loader,
  SecondReceptionDatePicker,
  WeddingDatePicker,
} from '@components/index';
import {
  LinkIcon,
  MinusIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import { withAuthRoute } from '@hoc/withAuthRoute';
import { Popover, Transition } from '@headlessui/react';
import { attemptImageUpload, removeImage } from '@utils/index';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { XIcon } from '@heroicons/react/solid';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { compareDate } from '@helpers/index';
import { isEmpty } from 'lodash';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from '@icons-pack/react-simple-icons';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import { attemptUpdateUserProfile } from '@features/user/userActions';
import { Fragment } from 'react';
import axios from 'axios';
import RegistryModal from '@components/dashboard/RegistryModal';
import OpenRegistryModal from '@components/dashboard/OpenRegistryModal';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getYear';
import 'react-datepicker/dist/react-datepicker.css';
import VenmoModal from '@components/dashboard/VenmoModal';
import { deletePrivetRegistry } from '@services/Registry/privetRegistry';
import { useMutation } from 'react-query';

const EditWebsitePage = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState(false);
  const [spouseFirst, setSpouseFirst] = useState(false);
  const { user, loading: userLoading } = useSelector(state => state.user);

  const { mutateAsync: deleteRegistry, isLoading: isDeleting } =
    useMutation(deletePrivetRegistry);

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistryModalOpen, setIsRegistryModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isVenmoModalOpen, setIsVenmoModalOpen] = useState(false);
  const [selectedImageFile, setSelectedImageFile] = useState();
  const [registryData, setRegistryData] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState(
    user.questions.couplePictures
  );

  const [receptionDetails, setReceptionDetails] = useState(
    user.receptionDetails.length
      ? user.receptionDetails
      : [
          {
            id: generate(),
            time: '5.00 PM',
            details: 'Example of event details',
          },
          {
            id: generate(),
            time: '5:30 PM',
            details: 'Ceremony',
          },
          {
            id: generate(),
            time: '6:00 PM',
            details: 'Ceremony ends/cocktails begin',
          },
          {
            id: generate(),
            time: '7:00 PM',
            details: 'Cocktails ends and guests are ushered into the reception',
          },
          {
            id: generate(),
            time: '7:20 PM',
            details: 'Introduction and first dance—guests asked to join after ',
          },
          {
            id: generate(),
            time: '7:45 PM',
            details: ' Guests take their seats and the first course is served',
          },
          {
            id: generate(),
            time: '8:00 PM',
            details: 'Welcome speech from parents',
          },
          {
            id: generate(),
            time: '8:10 PM',
            details: 'Toasts from maid of honor and best man',
          },
          {
            id: generate(),
            time: '9:00 PM',
            details: 'Parent dances',
          },
          {
            id: generate(),
            time: '9:30 PM ',
            details: 'Cake cutting',
          },
          {
            id: generate(),
            time: '10:00 PM',
            details: 'Send-Off',
          },
        ]
  );

  // WeddingDate Picker
  const _weddingDate = user.questions?.weddingDay?.weddingDate
    ? new Date(user.questions?.weddingDay?.weddingDate)
    : '';

  const [selectWeddingDay, setSelectWeddingDay] = useState(_weddingDate);

  // First Reception Picker
  const _firstReception = user.questions?.weddingDay?.firstReception
    ? new Date(user.questions?.weddingDay?.firstReception)
    : '';

  const [selectFirstReception, setSelectFirstReception] =
    useState(_firstReception);

  // Second Reception Picker
  const _secondReception = user.questions?.weddingDay?.secondReception
    ? new Date(user.questions?.weddingDay?.secondReception)
    : '';

  const [selectSecondReception, setSelectSecondReception] =
    useState(_secondReception);

  const socialLinks = {
    groom_facebook: user?.socialAccounts?.groom?.facebook,
    groom_instagram: user?.socialAccounts?.groom?.instagram,
    groom_linkedIn: user?.socialAccounts?.groom?.linkedIn,
    groom_snapchat: user?.socialAccounts?.groom?.snapchat,
    groom_tiktok: user?.socialAccounts?.groom?.tiktok,
    groom_pinterest: user?.socialAccounts?.groom?.pinterest,
    groom_youTube: user?.socialAccounts?.groom?.youTube,
    groom_twitter: user?.socialAccounts?.groom?.twitter,
    bride_facebook: user?.socialAccounts?.bride?.facebook,
    bride_instagram: user?.socialAccounts?.bride?.instagram,
    bride_linkedIn: user?.socialAccounts?.bride?.linkedIn,
    bride_snapchat: user?.socialAccounts?.bride?.snapchat,
    bride_tiktok: user?.socialAccounts?.bride?.tiktok,
    bride_pinterest: user?.socialAccounts?.bride?.pinterest,
    bride_youTube: user?.socialAccounts?.bride?.youTube,
    bride_twitter: user?.socialAccounts?.bride?.twitter,
  };

  const {
    watch,
    register,
    setError,
    setValue,
    getValues,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      ...user.questions,
      ourStory: user?.ourStory,
      location: user?.location,
      ...socialLinks,
      weddingVideo: user?.weddingVideo,
    },
    shouldFocusError: false,
    shouldUnregister: true,
  });

  // Watch Input Fields
  watch(['weddingDate', 'firstReception', 'secondReception']);

  // Input Fields as Variable
  const weddingDate = getValues('weddingDate');
  const firstReception = getValues('firstReception');
  const secondReception = getValues('secondReception');

  useEffect(() => {
    if (isEmpty(weddingDate) || compareDate(weddingDate)) {
      clearErrors('weddingDate');
    } else {
      setError('weddingDate', {
        type: 'validate',
        message: 'Seems like you have selected past date',
      });
    }
    if (isEmpty(firstReception) || compareDate(firstReception)) {
      clearErrors('firstReception');
    } else {
      setError('firstReception', {
        type: 'validate',
        message: 'Seems like you have selected past date',
      });
    }
    if (isEmpty(secondReception) || compareDate(secondReception)) {
      clearErrors('secondReception');
    } else {
      setError('secondReception', {
        type: 'validate',
        message: 'Seems like you have selected past date',
      });
    }
  }, [weddingDate, firstReception, secondReception]);

  // Handle image uploadedFiles

  const onDrop = useCallback(acceptedFiles => {
    if (uploadedFiles.length === 4) {
      setError('couplePictures', {
        type: 'maxLength',
        message: 'Maximum number of files uploaded',
      });
      return;
    }

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
    setLoading(true);
    setPreview(preview);
    setFile(file);
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
      const { public_id, height, width, secure_url, url } = data;

      // const formData = new FormData();

      // formData.append('image', file);
      // formData.append(
      //   'folder',
      //   process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      // );
      // const data = await attemptImageUpload(formData);

      setUploadedFiles(prev => [
        ...prev,
        { public_id, height, width, secure_url, url },
      ]);

      setValue('couplePictures', uploadedFiles);
      clearErrors('couplePictures');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  // Handle remove images
  const handleRemoveImage = async id => {
    try {
      setLoading(true);
      await removeImage(id);
      setUploadedFiles(prev => prev.filter(image => image.public_id !== id));
      if (uploadedFiles.length === 0) {
        setError('couplePictures', {
          type: 'required',
          message: 'Please upload couple picture file or check do this later',
        });
        setValue('couplePictures', undefined, {
          shouldValidate: true,
        });
      } else {
        setValue('couplePictures', uploadedFiles);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  const onSubmit = data => {
    dispatch(attemptUpdateUserProfile(submitData(data)));
  };

  const submitData = data => {
    const socialAccounts = {
      groom: {
        facebook: data.groom_facebook,
        instagram: data.groom_instagram,
        twitter: data.groom_twitter,
        linkedIn: data.groom_linkedIn,
        snapchat: data.groom_snapchat,
        tiktok: data.groom_tiktok,
        pinterest: data.groom_pinterest,
        youTube: data.groom_youTube,
      },
      bride: {
        facebook: data.bride_facebook,
        instagram: data.bride_instagram,
        twitter: data.bride_twitter,
        linkedIn: data.bride_linkedIn,
        snapchat: data.bride_snapchat,
        tiktok: data.bride_tiktok,
        pinterest: data.bride_pinterest,
        youTube: data.bride_youTube,
      },
    };
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      weddingDate: data.weddingDate,
      firstReception: data.firstReception,
      secondReception: data.secondReception,
      spouseFirstName: data.spouseFirstName,
      spouseLastName: data.spouseLastName,
      ourStory: data.ourStory,
      location: data.location,
      receptionDetails,
      couplePictures: uploadedFiles,
      socialAccounts,
      weddingVideo: data.weddingVideo,
    };
    return payload;
  };

  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };

  const years = range(1990, getYear(new Date()) + 5);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <>
      <Head>
        <title>Beweddy | Edit Website</title>
      </Head>

      {(loading || userLoading || isDeleting) && <Loader />}

      <DashboardTopBar />

      <DashboardLayout shadow>
        <DashboardHeader title='Edit your website' customPadding>
          <div className='flex flex-wrap items-center gap-3 py-3 md:py-0'>
            {/* <Link href='/dashboard/website/edit'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                <PencilIcon className='w-5 h-5' />
                <span>Edit your website</span>
              </a>
            </Link> */}
            <Link href='/dashboard/features/qrcode-and-links'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300 sm:ml-0 ml-5'>
                <LinkIcon className='w-5 h-5' />
                <span>Share your super link</span>
              </a>
            </Link>
            <Link href='/dashboard/invitation/rsvp-guest-management'>
              <a className='py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300 sm:ml-0 ml-5'>
                Guests Management
              </a>
            </Link>
          </div>
        </DashboardHeader>

        <DashboardContainer>
          <div className=''>
            <h4 className='mb-6 text-[24px] font-medium capitalize mudiumTitle'>
              Name (you & your spouse name)
            </h4>
            <form className='space-y-10' onSubmit={handleSubmit(onSubmit)}>
              <div className='space-y-2'>
                <div className='flex flex-wrap items-center gap-5'>
                  <input
                    type='text'
                    className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                    placeholder='Your First Name'
                    {...register('firstName', {
                      required: {
                        value: true,
                        message: 'First name is required!',
                      },
                    })}
                  />
                  <input
                    type='text'
                    className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                    placeholder='Your Last Name'
                    {...register('lastName', {
                      required: {
                        value: true,
                        message: 'Last name is required!',
                      },
                    })}
                  />
                </div>

                <div className='flex flex-wrap items-center gap-5'>
                  <input
                    type='text'
                    className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                    placeholder='Spouse First Name'
                    {...register('spouseFirstName', {
                      required: {
                        value: true,
                        message: 'Spouse first name is required!',
                      },
                    })}
                  />
                  <input
                    type='text'
                    className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                    placeholder='Spouse Last Name'
                    {...register('spouseLastName', {
                      required: {
                        value: true,
                        message: 'Spouse last name is required!',
                      },
                    })}
                  />
                </div>
                <div className='!mt-5'>
                  <button
                    className='border-2 transition-colors duration-300 !border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                    type='submit'
                  >
                    Save
                  </button>
                </div>
              </div>

              <Divider />

              <div className='space-y-5'>
                <h4 className='mb-6 text-[24px] font-medium capitalize mudiumTitle'>
                  Upload 4 images
                </h4>
                <div
                  className='relative focus:outline-none'
                  {...getRootProps()}
                >
                  <p className='text-[12px] mb-3'>
                    Crop Pictures For Cover Photos
                  </p>
                  <input {...getInputProps()} />
                  <label
                    htmlFor='couplePictures'
                    className='bg-white cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/50 rounded-[5px]'
                  >
                    Upload
                  </label>
                  <p className='mt-2 text-sm font-light text-center text-red-400'>
                    {errors?.couplePictures?.message}
                  </p>
                </div>

                <motion.div className='relative grid w-full grid-cols-2 gap-5 mx-auto mb-5 md:mb-10 md:grid-cols-3 lg:grid-cols-4 sm:px-0 sm:max-w-full sm:gap-10'>
                  {uploadedFiles.map(image => (
                    <motion.div
                      key={image.public_id}
                      className='max-w-[150px] md:max-w-[220px] w-full group border-[3px] border-primary rounded-[5px] overflow-hidden relative'
                      layout
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <button
                        type='button'
                        className='absolute z-50 hidden p-1 text-red-400 bg-white border rounded-full group-hover:inline-block right-1 top-1 border-primary'
                        onClick={() => handleRemoveImage(image.public_id)}
                      >
                        <XIcon className='w-5 h-5' />
                      </button>
                      <div className='aspect-w-16 aspect-h-9'>
                        <Image
                          cloudName={
                            process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                          }
                          publicId={image.public_id}
                          src={!image.public_id ? image.url : null}
                          width='200'
                          crop='scale'
                          className='object-cover w-full'
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <button
                  className='border-2 transition-colors duration-300 border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                  type='submit'
                >
                  Save
                </button>
              </div>

              <Divider />

              <div className='space-y-5'>
                {/* <Heading h3>Pick your wedding date</Heading> */}

                <h4 className='mb-6 text-[24px] font-medium capitalize mudiumTitle'>
                  Pick your wedding date
                </h4>

                <div className='inline-block'>
                  <DatePicker
                    renderCustomHeader={({
                      date,
                      changeYear,
                      changeMonth,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled,
                    }) => (
                      <div
                        style={{
                          margin: 10,
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                        >
                          {'<'}
                        </button>
                        <select
                          value={getYear(date)}
                          onChange={({ target: { value } }) =>
                            changeYear(value)
                          }
                        >
                          {years.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <select
                          value={months[getMonth(date)]}
                          onChange={({ target: { value } }) =>
                            changeMonth(months.indexOf(value))
                          }
                        >
                          {months.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                        >
                          {'>'}
                        </button>
                      </div>
                    )}
                    selected={selectWeddingDay}
                    popperPlacement='top-end'
                    onChange={date => {
                      setSelectWeddingDay(date);
                      setValue('weddingDate', moment(date).format('LL'));
                    }}
                    customInput={
                      <WeddingDatePicker
                        placeholder='Select Wedding Date'
                        border='border-secondary-alternative/50'
                        {...{ errors }}
                      />
                    }
                  />
                </div>

                <h4 className='mb-6 text-[24px] font-medium capitalize mudiumTitle'>
                  Pick your Reception date
                </h4>
                <div className='flex flex-wrap items-center gap-5'>
                  <div>
                    <DatePicker
                      renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                      }) => (
                        <div
                          style={{
                            margin: 10,
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <button
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                          >
                            {'<'}
                          </button>
                          <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) =>
                              changeYear(value)
                            }
                          >
                            {years.map(option => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                              changeMonth(months.indexOf(value))
                            }
                          >
                            {months.map(option => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <button
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                          >
                            {'>'}
                          </button>
                        </div>
                      )}
                      selected={selectFirstReception}
                      // popperPlacement='top-end'
                      onChange={date => {
                        setSelectFirstReception(date);
                        setValue('firstReception', moment(date).format('LL'));
                      }}
                      customInput={
                        <FirstReceptionDatePicker
                          border='border-secondary-alternative/50'
                          {...{ errors }}
                        />
                      }
                    />
                  </div>

                  <div>
                    <DatePicker
                      renderCustomHeader={({
                        date,
                        changeYear,
                        changeMonth,
                        decreaseMonth,
                        increaseMonth,
                        prevMonthButtonDisabled,
                        nextMonthButtonDisabled,
                      }) => (
                        <div
                          style={{
                            margin: 10,
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          <button
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                          >
                            {'<'}
                          </button>
                          <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) =>
                              changeYear(value)
                            }
                          >
                            {years.map(option => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <select
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                              changeMonth(months.indexOf(value))
                            }
                          >
                            {months.map(option => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <button
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                          >
                            {'>'}
                          </button>
                        </div>
                      )}
                      selected={selectSecondReception}
                      // popperPlacement='top-end'
                      onChange={date => {
                        setSelectSecondReception(date);
                        setValue('secondReception', moment(date).format('LL'));
                      }}
                      customInput={
                        <SecondReceptionDatePicker
                          border='border-secondary-alternative/50'
                          {...{ errors }}
                        />
                      }
                    />
                  </div>
                </div>
                <div>
                  <button
                    className='border-2 transition-colors duration-300 border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                    type='submit'
                  >
                    Save
                  </button>
                </div>
              </div>

              <Divider />

              <div className='space-y-5'>
                <div className='flex items-center justify-between space-x-5'>
                  {/* <Heading h3></Heading> */}
                  <h4 className='mb-6 text-[24px] font-medium capitalize mudiumTitle'>
                    Our story
                  </h4>
                </div>
                <textarea
                  cols='30'
                  rows='5'
                  className='w-full px-5 py-3 text-base font-normal border-2 border-gray-200 rounded-lg focus:ring-0 focus:border-primary'
                  placeholder='We sincerely hope we will have the honor to dine, laugh, and dance with you on our wedding weekend. It would mean the world to us.'
                  {...register('ourStory')}
                ></textarea>

                <button
                  className='border-2 transition-colors duration-300 border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                  type='submit'
                >
                  Save
                </button>
              </div>

              <Divider />
              <div className='flex flex-col space-y-5'>
                <div className='flex items-center justify-between space-x-5'>
                  <h4 className='text-[24px] font-medium capitalize mudiumTitle'>
                    Address
                  </h4>
                </div>
                <div className='w-full max-w-xs'>
                  <input
                    type='text'
                    className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                    placeholder='Enter your location'
                    {...register('location')}
                  />
                </div>
                <div className='flex flex-row items-center justify-between w-full'>
                  {/* <div className='w-full max-w-xs'>
                    <input
                      type='text'
                      className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                      placeholder='Enter your location'
                      {...register('location')}
                    />
                  </div> */}

                  {/* <div className='flex justify-end w-full'>
                    <iframe
                      width='55%'
                      height='400'
                      frameBorder='0'
                      scrolling='no'
                      marginHeight='0'
                      marginWidth='0'
                      src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=365%20Queen%20Street%20South,%20Mississauga,%20ON%20L5M%201M3+(Leedway%20group)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                    />
                  </div> */}
                </div>
                <div>
                  <button
                    className='inline-block border-2 transition-colors duration-300 border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                    type='submit'
                  >
                    Save
                  </button>
                </div>
              </div>

              <Divider />

              <div className='space-y-5'>
                <div className='flex items-center justify-between space-x-5'>
                  <h4 className='mb-6 text-[24px] font-medium capitalize mudiumTitle'>
                    Reception Details
                  </h4>
                </div>
                {receptionDetails.map((reception, index) => (
                  <div
                    key={index}
                    className='flex items-center !border-gray-200'
                  >
                    <Datetime
                      className='w-[100px] rounded-[5px] border-2 rounded-r-none !focus:!border-gray-200 !border-gray-200  text-base font-bold placeholder-gray-200 border-r-0 datepiceker'
                      inputProps={{ placeholder: '12.00 PM' }}
                      id='datepickerInput'
                      dateFormat={false}
                      value={reception.time}
                      onChange={e => {
                        const time = e._d;
                        const startTimeFormat = moment(time).format('hh:mm a');
                        setReceptionDetails(prev =>
                          produce(prev, value => {
                            value[index].time = startTimeFormat;
                          })
                        );
                      }}
                    />

                    <div className='relative w-full'>
                      <input
                        type='text'
                        className='w-full rounded-[5px] rounded-l-none border-l-0 border-2 !focus:!border-gray-200 !border-gray-200 py-2  text-base font-normal placeholder-gray-300 !px-0 '
                        placeholder='Details'
                        value={reception.details}
                        onChange={e => {
                          const details = e.target.value;
                          setReceptionDetails(prev =>
                            produce(prev, value => {
                              value[index].details = details;
                            })
                          );
                        }}
                      />

                      <button
                        type='button'
                        className='absolute -translate-y-1/2 top-1/2 right-[1px] bg-[#ffffff] py-2'
                        onClick={() =>
                          setReceptionDetails(prev =>
                            prev.filter(x => x.id !== reception.id)
                          )
                        }
                      >
                        <MinusIcon className='h-5 w-7' />
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type='button'
                  className='font-inter flex items-center space-x-3 rounded-[5px] border-2 focus:!border-gray-200 border-gray-200 py-2 px-4 text-base font-normal placeholder-gray-300'
                  onClick={() =>
                    setReceptionDetails(prev => [
                      ...prev,
                      {
                        id: generate(),
                        time: '',
                        details: '',
                      },
                    ])
                  }
                >
                  <PlusIcon className='h-5 w-7' />
                  <span>Add New</span>
                </button>
                <button
                  className='border-2 transition-colors duration-300 border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                  type='submit'
                >
                  Save
                </button>
              </div>

              <Divider />

              <Heading h3></Heading>
              <h4 className='mb-6 text-[24px] font-medium cursor-pointer capitalize mudiumTitle'>
                Add Gift Card
              </h4>

              <div>
                <div className='flex items-center gap-3 md:gap-10'>
                  <motion.div className='relative grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6 sm:max-w-full sm:gap-10'>
                    <Link href='/dashboard/gift-cards'>
                      <motion.a
                        layout
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='max-w-[200px] min-h-[120px] w-full h-full border-2 border-secondary-alternative bg-secondary-alternative/50 flex items-center justify-center rounded-lg hover:bg-secondary-alternative transition duration-300'
                      >
                        <PlusIcon className='w-8 h-8' />
                      </motion.a>
                    </Link>
                    {user?.giftCards?.map((gift, i) => (
                      <motion.div
                        key={i}
                        layout
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='inline-block relative max-w-[200px] max-h-[120px] w-full h-full overflow-hidden transition duration-300 cursor-pointer rounded-xl ease-easing'
                      >
                        <Image
                          width={200}
                          height={120}
                          src={gift.image}
                          alt={gift.name}
                        />

                        <div
                          className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center transition duration-300 opacity-0 bg-primary/80 hover:opacity-100'
                          onClick={() =>
                            dispatch(
                              attemptUpdateUserProfile({
                                removeGiftCard: gift._id,
                              })
                            )
                          }
                        >
                          <MinusIcon className='w-12 h-12 text-white' />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <Link href='/dashboard/gift-cards/'>
                  <a className='block mt-5 text-sm font-semibold text-right hover:underline font-inter'>
                    See All Gift Card Options
                  </a>
                </Link>
              </div>

              <button
                className='border-2 transition-colors duration-300 border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                type='submit'
              >
                Save
              </button>

              <Divider />

              <div className='space-y-5'>
                {/* <Heading h3></Heading> */}
                <h4 className='mb-6 text-[24px] font-medium capitalize mudiumTitle'>
                  Connect your registry & Venmo
                </h4>
                <div className='flex items-center space-x-3'>
                  <div className='border-2 w-[200px] min-h-[150px] border-secondary-alternative bg-secondary-alternative/50 flex flex-col items-center justify-center rounded-lg hover:bg-secondary-alternative transition duration-300'>
                    <Link href='/dashboard/registries'>
                      <a
                        // type='button'
                        className='inline-block text-center mt-5 text-xs w-[160px] py-2 text-white transition-colors duration-300 rounded-lg bg-primary hover:bg-primary/80 md:text-base whitespace-nowrap'
                        // onClick={() => setIsModalOpen(true)}
                      >
                        Connect Registry
                      </a>
                    </Link>
                    <button
                      type='button'
                      className='w-[160px] py-2 mt-5 text-xs text-white transition-colors duration-300 rounded-lg bg-primary hover:bg-primary/80 md:text-base whitespace-nowrap'
                      onClick={() => setIsVenmoModalOpen(true)}
                    >
                      Connect Venmo
                    </button>
                    {/* <Link href="/">
                      <a className="py-2 text-base font-light text-blue-500 font-inter hover:underline">
                        Learn more
                      </a>
                    </Link> */}
                  </div>
                  <div className='border-2 w-[200px] min-h-[150px] border-secondary-alternative bg-secondary-alternative/50 flex flex-col items-center justify-center rounded-lg hover:bg-secondary-alternative transition duration-300'>
                    <button
                      type='button'
                      className='inline-block text-center text-xs w-[160px] py-2 text-white transition-colors duration-300 rounded-lg bg-primary hover:bg-primary/80 md:text-base whitespace-nowrap'
                      onClick={() => setIsModalOpen(true)}
                    >
                      Create Registry
                    </button>
                  </div>
                </div>
                <motion.div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 sm:gap-5 md:gap-10'>
                  {user?.registries?.map((registry, i) => (
                    <motion.div
                      key={i}
                      layout
                      exit={{ opacity: 0 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='scale-[.85] xs:scale-95 sm:scale-100 cursor-pointer p-4 max-w-[250px] inline-block bg-white border-4 rounded-md border-gray-200 hover:border-primary transition duration-300 w-full mx-auto'
                    >
                      <div
                        className={`border-2 overflow-hidden border-primary flex items-center justify-center h-[140px] w-full rounded-[10px] transition duration-300 relative group p-3`}
                      >
                        {/* <Link href={registry.link}>
                          <a
                            target='_blank'
                            className='max-w-[273px] rounded-lg flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 absolute inset-0 z-50 group-hover:bg-black/50'
                          >
                            <LinkIcon className='w-8 h-8 text-white' />
                          </a>
                        </Link> */}
                        <div className='absolute top-0 bottom-0 left-0 right-0 space-x-3 flex items-center justify-center transition duration-300 opacity-0 bg-primary/80 hover:opacity-100'>
                          <button
                            type='button'
                            className='rounded-xl bg-white p-2 hover:bg-red-100 group'
                            onClick={async () => {
                              if (confirm('Are you sure?')) {
                                try {
                                  await deleteRegistry(
                                    {
                                      id: registry?._id,
                                      token: user?.token,
                                    },
                                    {
                                      onSuccess: () => {
                                        dispatch(attemptUpdateUserProfile({}));
                                      },
                                    }
                                  );
                                } catch (err) {
                                  console.error(err);
                                }
                              }
                            }}
                          >
                            <TrashIcon className='w-6 h-6' />
                          </button>
                          <button
                            type='button'
                            className='rounded-xl bg-white p-2 hover:bg-red-100 group'
                            onClick={() => {
                              setIsUpdate(true);
                              setRegistryData(registry);
                              setIsRegistryModalOpen(true);
                            }}
                          >
                            <PencilIcon className='w-6 h-6' />
                          </button>
                        </div>
                        <div>
                          <Image
                            width={200}
                            height={80}
                            src={
                              isEmpty(registry.image)
                                ? '/images/placeholder.webp'
                                : registry.image
                            }
                          />
                        </div>
                      </div>

                      <div className='flex flex-col py-4 text-center'>
                        <h3 className='text-lg font-semibold font-inter'>
                          {registry.title}
                        </h3>
                        {/* <div>
                          <button type="button" onClick={() => {
                            setRegistryData(registry)
                            setIsRegistryModalOpen(true)
                          }}
                            className='py-2 inline-block px-8 border-gray-900 border-2 rounded-[5px] mt-5 hover:bg-black transition duration-300 hover:text-white font-inter font-bold'>
                            Connect
                          </button>
                        </div> */}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <Link href='/dashboard/registries'>
                  <a className='block mt-5 text-sm font-semibold text-right hover:underline font-inter'>
                    See All Wedding Registry Options
                  </a>
                </Link>
                <div>
                  <button
                    className='border-2 transition-colors duration-300 border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                    type='submit'
                  >
                    Save
                  </button>
                </div>
              </div>

              <Divider />

              <div className='flex items-center flex-col md:flex-row justify-center gap-5 w-full !mb-20'>
                <div className='w-full space-y-10'>
                  <h4 className='mb-6 text-[24px] font-medium capitalize mudiumTitle flex items-center'>
                    Follow
                    {nickname ? (
                      <div className='flex items-center justify-center ml-2'>
                        <input
                          type='text'
                          className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                          {...register('firstName', {
                            required: {
                              value: true,
                              message: 'First name is required!',
                            },
                          })}
                        />
                        <button
                          className='transition-colors duration-300 px-3 py-[3px] bg-white text-primary rounded-[5px] border-2 border-gray-200'
                          type='submit'
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <span
                        onClick={() => setNickname(!nickname)}
                        className='ml-2'
                      >
                        {user?.questions?.firstName}
                      </span>
                    )}
                  </h4>
                  <Popover.Group className='flex flex-wrap items-center gap-3'>
                    <Popover className='relative'>
                      <Popover.Button>
                        <Facebook
                          color='#1877F2'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://facebook.com/beweddy'
                              {...register('groom_facebook')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>

                    <Popover className='relative'>
                      <Popover.Button>
                        <Instagram
                          color='#E4405F'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://instagram.com/beweddy'
                              {...register('groom_instagram')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <Twitter
                          color='#1DA1F2'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://twitter.com/beweddy'
                              {...register('groom_twitter')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <Youtube
                          color='#FF0000'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.youtube.com/beweddy'
                              {...register('groom_youTube')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <Linkedin
                          color='#0A66C2'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.linkedin.com/in/beweddy'
                              {...register('groom_linkedIn')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <img
                          src='/icons/tiktok.svg'
                          alt=''
                          className='w-10 customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.tiktok.com/beweddy'
                              {...register('groom_tiktok')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <img
                          src='/icons/snapchat.svg'
                          alt=''
                          className='w-10 customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.snapchat.com/beweddy'
                              {...register('groom_snapchat')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <img
                          src='/icons/pinterest.svg'
                          alt=''
                          className='w-10 customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.pinterest.com/beweddy'
                              {...register('groom_pinterest')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </Popover.Group>
                </div>

                <div className='w-full space-y-10'>
                  <h4 className='mb-6 text-[24px] font-medium capitalize mudiumTitle flex items-center'>
                    Follow
                    <div className='ml-2'>
                      {/* <EditText
                        onBlur={handleSubmit(onSubmit)}
                        inline
                        name="spouseFirstName"
                        }
                      /> */}
                      {spouseFirst ? (
                        <div className='flex items-center justify-center ml-2'>
                          <input
                            type='text'
                            className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                            {...register('spouseFirstName', {
                              required: {
                                value: true,
                                message: 'First name is required!',
                              },
                            })}
                          />
                          <button
                            className='transition-colors duration-300 px-3 py-[3px] bg-white text-primary rounded-[5px] border-2 border-gray-200'
                            type='submit'
                          >
                            Save
                          </button>
                        </div>
                      ) : (
                        <span
                          onClick={() => setSpouseFirst(!spouseFirst)}
                          className='ml-2'
                        >
                          {user?.questions?.spouseFirstName}
                        </span>
                      )}
                    </div>
                  </h4>
                  <Popover.Group className='flex flex-wrap items-center gap-3'>
                    <Popover className='relative'>
                      <Popover.Button>
                        <Facebook
                          color='#1877F2'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://facebook.com/beweddy'
                              {...register('bride_facebook')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>

                    <Popover className='relative'>
                      <Popover.Button>
                        <Instagram
                          color='#E4405F'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://instagram.com/beweddy'
                              {...register('bride_instagram')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>

                    <Popover className='relative'>
                      <Popover.Button>
                        <Twitter
                          color='#1DA1F2'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://twitter.com/beweddy'
                              {...register('bride_twitter')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>

                    <Popover className='relative'>
                      <Popover.Button>
                        <Youtube
                          color='#FF0000'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.youtube.com/beweddy'
                              {...register('bride_youTube')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <Linkedin
                          color='#0A66C2'
                          size={35}
                          className='customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.linkedin.com/in/beweddy'
                              {...register('bride_linkedIn')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <img
                          src='/icons/tiktok.svg'
                          alt=''
                          className='w-10 customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.tiktok.com/beweddy'
                              {...register('bride_tiktok')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <img
                          src='/icons/snapchat.svg'
                          alt=''
                          className='w-10 customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.snapchat.com/beweddy'
                              {...register('bride_snapchat')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className='relative'>
                      <Popover.Button>
                        <img
                          src='/icons/pinterest.svg'
                          alt=''
                          className='w-10 customSocialIcon'
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'
                      >
                        <Popover.Panel>
                          <div className='absolute -bottom-24 left-[-11px]'>
                            <span className='z-10 absolute top-[-1.20rem] rotate-45 left-[10px] w-10 h-10 bg-primary'></span>
                            <input
                              type='text'
                              className='relative z-20 w-max rounded-[5px] border-[3px] border-primary py-3 px-5 text-base font-normal placeholder-gray-300'
                              placeholder='https://www.pinterest.com/beweddy'
                              {...register('bride_pinterest')}
                            />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </Popover.Group>
                </div>
              </div>
              <div>
                <button
                  className='border-2 transition-colors duration-300 border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                  type='submit'
                >
                  Save
                </button>
              </div>

              <Divider />

              <div className='space-y-5'>
                <Heading h3>First Look or Wedding Video</Heading>
                <div className='space-y-3'>
                  <label htmlFor='videoTitle' className='block'>
                    Youtube Video Link
                  </label>
                  <input
                    type='text'
                    id='videoTitle'
                    className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal placeholder-gray-300'
                    placeholder='Paste Your Wedding Youtube Link'
                    {...register('weddingVideo')}
                  />
                </div>
              </div>
              <div>
                <button
                  className='border-2 transition-colors duration-300 border-[#000000] px-3 py-1 bg-white text-primary hover:bg-primary hover:text-white'
                  type='submit'
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </DashboardContainer>
      </DashboardLayout>
      <RegistryModal {...{ isModalOpen, setIsModalOpen }} />
      <OpenRegistryModal
        {...{
          isRegistryModalOpen,
          setIsRegistryModalOpen,
          registryData,
          isUpdate,
          setIsUpdate,
        }}
      />
      <VenmoModal {...{ isVenmoModalOpen, setIsVenmoModalOpen }} />
      <Footer hideSocial />

      <CropImage
        onSave={onCropSave}
        selectedFile={selectedImageFile}
        aspectRatio={16 / 9}
      />
    </>
  );
};

export default withAuthRoute(EditWebsitePage);
