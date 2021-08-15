import Head from 'next/head';
import Link from 'next/link';
import { Image } from 'cloudinary-react';
import { DashboardHeader } from '@components/dashboard';
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
} from '@components/index';
import {
  LinkIcon,
  MinusIcon,
  PencilIcon,
  PlusIcon,
} from '@heroicons/react/outline';
import { withAuthRoute } from '@hoc/withAuthRoute';
import { attemptImageUpload, removeImage } from '@utils/index';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { compareDate } from '@helpers/index';
import { isEmpty } from 'lodash';
import Swiper from 'react-id-swiper';

import SwiperCore, { Lazy, Autoplay } from 'swiper';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
SwiperCore.use([Lazy, Autoplay]);

const params = {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

const EditWebsitePage = () => {
  const { user } = useSelector(state => state.user);
  const { countries } = useSelector(state => state.countryList);

  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    if (countries?.length) {
      setSelectedCountry(
        countries.find(country => country.alpha3Code === 'USA')
      );
    }
  }, [countries]);

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
    defaultValues: user.questions,
    shouldFocusError: false,
    shouldUnregister: true,
  });
  watch('rsvp_estimate_guests');
  return (
    <>
      <Head>
        <title>Beweddy | Edit Website</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar />
      <DashboardLayout>
        <DashboardHeader title='Edit your website'>
          <div className='flex items-center space-x-5'>
            {/* <Link href='/dashboard/website/edit'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                <PencilIcon className='w-5 h-5' />
                <span>Edit your website</span>
              </a>
            </Link> */}
            <Link href='/'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                <LinkIcon className='w-5 h-5' />
                <span>Share your super link</span>
              </a>
            </Link>
            <Link href='/'>
              <a className='py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                Guests Management
              </a>
            </Link>
          </div>
        </DashboardHeader>
        <div className='border-4 border-gray-200 rounded-lg'>
          <Swiper {...params}>
            {user.questions.couplePictures.map((image, index) => (
              <div className='w-full'>
                <div className='aspect-w-16 aspect-h-8'>
                  <Image
                    cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                    publicId={image.public_id}
                    src={!image.public_id ? image.url : null}
                    width='1000'
                    crop='scale'
                    className='object-cover'
                  />
                </div>
                <div className='swiper-lazy-preloader swiper-lazy-preloader-white' />
              </div>
            ))}
          </Swiper>
          <div className='p-10'>
            <h5 className='text-2xl font-medium text-center'>
              {user.coupleName}'s Wedding
            </h5>

            <div className='flex justify-center my-5'>
              <Link href='/'>
                <a className='flex justify-center items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                  <LinkIcon className='w-5 h-5' />
                  <span>Share your super link</span>
                </a>
              </Link>
            </div>
            <h4 className='text-center text-4xl font-medium'>
              ✨ Your Invited To Our Wedding! 💍 ✨
            </h4>
            <p className='text-center text-2xl font-medium mt-5 mb-16'>
              Thanks for your love and support! We want to send you an
              invitation!
            </p>
            <form className='space-y-3 px-20'>
              <div className='space-y-3'>
                <Heading h3 className='!text-[22px] !font-medium'>
                  Your Name Here <span className='text-red-400'>*</span>
                </Heading>
                <div>
                  <input
                    type='text'
                    className='w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                    placeholder='Enter Your Full Name'
                    {...register('name', {
                      required: {
                        value: true,
                        message: 'Name is required!',
                      },
                    })}
                  />
                  <p className='mt-2 text-red-400 font-light text-sm h-4'>
                    {errors?.name?.message}
                  </p>
                </div>
              </div>
              <div className='space-y-3'>
                <Heading h3 className='!text-[22px] !font-medium'>
                  Email <span className='text-red-400'>*</span>
                </Heading>
                <div>
                  <input
                    type='email'
                    className='w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                    placeholder='Enter Your Valid Email'
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email is required!',
                      },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Must be a valid email address',
                      },
                    })}
                  />
                  <p className='mt-2 text-gray-300 capitalize font-light text-sm h-4'>
                    This form is collecting emails.
                  </p>
                  {errors?.email && (
                    <p className='mt-2 text-red-400 font-light text-sm h-4'>
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='space-y-3'>
                <Heading h3 className='!text-[22px] !font-medium'>
                  What is your full address? 🏠{' '}
                  <span className='text-red-400'>*</span>
                </Heading>
                <div>
                  <input
                    type='text'
                    className='w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                    placeholder='Street'
                    {...register('street', {
                      required: {
                        value: true,
                        message: 'Street is required!',
                      },
                    })}
                  />
                  {errors?.street && (
                    <p className='mt-2 text-red-400 font-light text-sm h-4'>
                      {errors?.street?.message}
                    </p>
                  )}
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-full'>
                    <input
                      type='text'
                      className='w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                      placeholder='State'
                      {...register('state', {
                        required: {
                          value: true,
                          message: 'State is required!',
                        },
                      })}
                    />
                    {errors?.state && (
                      <p className='mt-2 text-red-400 font-light text-sm h-4'>
                        {errors?.state?.message}
                      </p>
                    )}
                  </div>
                  <div className='w-full'>
                    <input
                      type='text'
                      className='w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                      placeholder='Providence'
                      {...register('providence', {
                        required: {
                          value: true,
                          message: 'Providence is required!',
                        },
                      })}
                    />
                    {errors?.providence && (
                      <p className='mt-2 text-red-400 font-light text-sm h-4'>
                        {errors?.providence?.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <div className='w-full'>
                  <input
                    type='text'
                    className='w-full rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                    placeholder='Zip'
                    {...register('zip', {
                      required: {
                        value: true,
                        message: 'Zip is required!',
                      },
                    })}
                  />

                  <p className='mt-2 text-red-400 font-light text-sm h-4'>
                    {errors?.zip?.message}
                  </p>
                </div>
                <div className='w-full' />
              </div>
              <div className='space-y-3'>
                <Heading h3 className='!text-[22px] !font-medium'>
                  What is your phone number? 📲
                </Heading>
                <div>
                  <div className='flex items-center'>
                    <Listbox
                      value={selectedCountry}
                      onChange={setSelectedCountry}
                    >
                      <div className='relative -mr-2'>
                        <Listbox.Button className='bg-white cursor-pointer inline-block font-semibold py-[6px] md:py-[10px] px-4 placeholder-gray-400 border-[3px] border-gray-200 rounded-[5px] -mr-1'>
                          <img
                            src={selectedCountry.flag}
                            alt={selectedCountry.name}
                            className='w-7 h-7 object-cover rounded-full mr-8 md:mr-4'
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
                                        selected ? 'font-medium' : 'font-normal'
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
                                absolute inset-y-0 left-0 flex items-center pl-3`}
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
                      className='w-full focus:!border-gray-200 bg-white inline-block font-normal py-2 md:py-3 px-4 pl-5 placeholder-gray-400 border-[3px] border-gray-200 rounded-[5px]'
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
                  <p className='mt-2 text-red-400 font-light text-sm h-4'>
                    {errors?.phone?.message}
                  </p>
                </div>
              </div>
              <div className='space-y-5'>
                <Heading h3 className='!text-[22px] !font-medium'>
                  How do you want your invitation & Reminders Sent? 📲-🖥-💌
                </Heading>
                <div className='flex items-center space-x-10'>
                  <div className='space-x-3 flex items-center'>
                    <input
                      type='checkbox'
                      id='text_invite'
                      value={true}
                      defaultChecked
                      className='text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      {...register('text_invite')}
                    />
                    <label
                      htmlFor='text_invite'
                      className='font-inter font-light text-lg md:text-lg cursor-pointer'
                    >
                      Text - 📲
                    </label>
                  </div>
                  <div className='space-x-3 flex items-center'>
                    <input
                      type='checkbox'
                      id='email_invite'
                      value={true}
                      defaultChecked
                      className='text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      {...register('email_invite')}
                    />
                    <label
                      htmlFor='email_invite'
                      className='font-inter font-light text-lg md:text-lg cursor-pointer'
                    >
                      E-mail - 🖥
                    </label>
                  </div>
                  <div className='space-x-3 flex items-center'>
                    <input
                      type='checkbox'
                      id='mail_invite'
                      value={true}
                      className='text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      {...register('mail_invite')}
                    />
                    <label
                      htmlFor='mail_invite'
                      className='font-inter font-light text-lg md:text-lg cursor-pointer'
                    >
                      Mail - 💌
                    </label>
                  </div>
                  <div className='space-x-3 flex items-center'>
                    <input
                      type='checkbox'
                      id='all_above_invite'
                      value={true}
                      defaultChecked
                      className='text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      {...register('all_above_invite')}
                    />
                    <label
                      htmlFor='all_above_invite'
                      className='font-inter font-light text-lg md:text-lg cursor-pointer'
                    >
                      All The Above - 💯
                    </label>
                  </div>
                </div>
              </div>
              <div className='space-y-5 !mt-5'>
                <Heading h3 className='!text-[22px] !font-medium'>
                  Who is your phone provider?
                </Heading>
                <div className='flex items-center space-x-10'>
                  <div className='space-x-3 flex items-center'>
                    <input
                      type='checkbox'
                      id='at&t_provider'
                      value={true}
                      defaultChecked
                      className='text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      {...register('at&t_provider')}
                    />
                    <label
                      htmlFor='at&t_provider'
                      className='font-inter font-light text-lg md:text-lg cursor-pointer'
                    >
                      AT & T
                    </label>
                  </div>
                  <div className='space-x-3 flex items-center'>
                    <input
                      type='checkbox'
                      id='tMobile_Provider'
                      value={true}
                      defaultChecked
                      className='text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      {...register('tMobile_Provider')}
                    />
                    <label
                      htmlFor='tMobile_Provider'
                      className='font-inter font-light text-lg md:text-lg cursor-pointer'
                    >
                      T - Mobile & Sprint
                    </label>
                  </div>
                  <div className='space-x-3 flex items-center'>
                    <input
                      type='checkbox'
                      id='verizon_provider'
                      value={true}
                      className='text-primary rounded-md border-2 border-gray-300 w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      {...register('verizon_provider')}
                    />
                    <label
                      htmlFor='verizon_provider'
                      className='font-inter font-light text-lg md:text-lg cursor-pointer'
                    >
                      Verizon
                    </label>
                  </div>
                </div>
                <select className='w-28 rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className='space-y-5 !mt-5'>
                <Heading h3 className='!text-[22px] !font-medium'>
                  Can you make it? Please RSVP
                </Heading>
                <div className='flex items-center space-x-16'>
                  <div className='flex items-center'>
                    <input
                      type='radio'
                      id='yes'
                      value='yes'
                      defaultChecked
                      className='hidden'
                      {...register('rsvp')}
                    />
                    <label
                      htmlFor='yes'
                      className='flex items-center space-x-3 cursor-pointer'
                    >
                      <div className='checked-outer border-[3px] rounded-full border-primary w-6 md:w-7 h-6 md:h-7 flex items-center justify-center'>
                        <div className='checked-inner w-2 md:w-3 h-2 md:h-3 rounded-full'></div>
                      </div>
                      <span className='font-inter text-lg font-light'>Yes</span>
                    </label>
                  </div>
                  <div className='flex items-center'>
                    <input
                      type='radio'
                      id='no'
                      value='no'
                      className='hidden'
                      {...register('rsvp')}
                    />
                    <label
                      htmlFor='no'
                      className='flex items-center space-x-3 cursor-pointer'
                    >
                      <div className='checked-outer border-[3px] rounded-full border-primary w-6 md:w-7 h-6 md:h-7 flex items-center justify-center'>
                        <div className='checked-inner w-2 md:w-3 h-2 md:h-3 rounded-full'></div>
                      </div>
                      <span className='font-inter text-lg font-light'>
                        No, we send our best.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='space-y-3 !mt-10'>
                <Heading h3 className='!text-[22px] !font-medium'>
                  RSVP Estimate Guests
                </Heading>
                <input
                  disabled
                  type='text'
                  value={`1 - ${getValues('rsvp_estimate_guests')}`}
                  className='w-28 text-center rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                />
                <input
                  type='range'
                  min='2'
                  max='100'
                  className='block text-center rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                  {...register('rsvp_estimate_guests')}
                />
              </div>
              <div className='!mt-10'>
                <Button
                  className='!mx-0 !rounded-lg'
                  label='Submit'
                  type='submit'
                />
              </div>
            </form>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(EditWebsitePage);
