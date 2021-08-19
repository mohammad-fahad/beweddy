import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
import { Image } from 'cloudinary-react';
import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Button, Footer, Heading } from '@components/index';
import { LinkIcon, PencilIcon } from '@heroicons/react/outline';
import { withAuthRoute } from '@hoc/withAuthRoute';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';

import SwiperCore, { Lazy, Autoplay } from 'swiper';
import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { addGuest } from '@features/guest/guestSlice';
SwiperCore.use([Lazy, Autoplay]);

const params = {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};

const AddressRSVPPreviewPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const { guest } = useSelector(state => state.rsvp);
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
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    shouldFocusError: false,
    shouldUnregister: true,
  });
  watch('guestEstimate');

  const onSubmit = data => {
    dispatch(addGuest(submitData(data)));
  };

  const submitData = data => {
    const wayOfInvitations = {
      text_invite: data.text_invite,
      email_invite: data.email_invite,
      mail_invite: data.mail_invite,
      allAbove_invite: data.allAbove_invite,
    };
    const address = {
      street: data.street,
      providence: data.providence,
      city: data.city,
      state: data.state,
      zip: data.zip,
    };

    return {
      address,
      wayOfInvitations,
      name: data.name,
      email: data.email,
      phone: data.phone,
      callingCode: selectedCountry.callingCodes[0],
      provider: data.provider,
      rsvp: data.rsvp,
      guestEstimate: data.guestEstimate,
    };
  };
  return (
    <>
      <Head>
        <title>Beweddy | Address & RSVP</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar />
      <DashboardLayout>
        <DashboardHeader title='Address-RSVP'>
          <div className='flex items-center space-x-5'>
            <Link href='/dashboard/website/edit'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                <PencilIcon className='w-5 h-5' />
                <span>Edit your website</span>
              </a>
            </Link>
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
                    width={image.width}
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
            <div className='grid grid-cols-6 gap-10 max-w-3xl mx-auto'>
              <h4 className='text-xl font-medium col-span-2'>Name</h4>
              <span>:</span>
              <h4 className='text-xl font-medium col-span-3'>{guest?.name}</h4>
              <h4 className='text-xl font-medium col-span-2'>Email</h4>
              <span>:</span>
              <h4 className='text-xl font-medium col-span-3'>{guest?.email}</h4>
              <h4 className='text-xl font-medium col-span-2'>Address</h4>
              <span>:</span>
              <h4 className='text-xl font-medium col-span-3'>
                {guest?.address.street}, {guest?.address.providence},{' '}
                {guest?.address.city}, {guest?.address.state},{' '}
                {guest?.address.zip}
              </h4>
              <h4 className='text-xl font-medium col-span-2'>Phone Number</h4>
              <span>:</span>
              <h4 className='text-xl font-medium col-span-3'>{guest?.phone}</h4>
              <h4 className='text-xl font-medium col-span-2'>Phone Provider</h4>
              <span>:</span>
              <h4 className='text-xl font-medium col-span-3'>
                {guest?.provider}
              </h4>
              <h4 className='text-xl font-medium col-span-2'>
                Invitation & Reminders
              </h4>
              <span>:</span>
              <h4 className='text-xl font-medium col-span-3'>Text, Email</h4>
              <h4 className='text-xl font-medium col-span-2'>RSVP Status</h4>
              <span>:</span>
              <h4 className='text-xl font-medium col-span-3'>Yes</h4>
              <h4 className='text-xl font-medium col-span-2'>RSVP Guests</h4>
              <span>:</span>
              <h4 className='text-xl font-medium col-span-3'>
                {guest?.guestEstimate}
              </h4>
              <div className='flex items-center space-x-5 mt-10'>
                <Button
                  type='submit'
                  label='Done'
                  className='!rounded-[5px] !mx-0 font-inter font-medium'
                />
                <Button
                  type='button'
                  label='Edit'
                  outline
                  className='!rounded-[5px] !mr-0 !border-secondary-alternative font-inter font-medium'
                />
              </div>
            </div>
          </div>
          <div className='border-t-4 border-primary py-16 bg-secondary-alternative/40'>
            <div className='text-center'>
              <Heading h3 className='!text-3xl !font-medium mb-10'>
                Eat, Drink, & BeWeddy!
              </Heading>
              <div className='max-w-lg mx-auto'>
                <img
                  src='/images/thank-you.png'
                  alt=''
                  className='rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(AddressRSVPPreviewPage);
