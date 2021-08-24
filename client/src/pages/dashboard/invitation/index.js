import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';
import { Image } from 'cloudinary-react';
import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import {
  Button,
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

const AddressRSVP = () => {
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
        <div className='border-4 border-gray-200 rounded-lg p-10'>
          <Heading>Send Invitations</Heading>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(AddressRSVP);
