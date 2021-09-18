import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { Button, Heading } from '@components/shared';
import Image from 'next/image';

import DatePicker from 'react-datepicker';

// import required css from library
import 'react-datepicker/dist/react-datepicker.css';
import { Footer } from '@components/home';
import WebsiteNav from '@components/dashboard/Website/WebsiteNav';
import { useQuery } from 'react-query';
import { getCouple } from '@services/Couple';
import { getGiftById } from '@services/Gift';
import { API_URL } from '@utils/index';
import { useRouter } from 'next/router';

const CheckoutPage = props => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const { query } = useRouter();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(['couple', query?.couple], getCouple, {
    initialData: props.user,
  });

  const { data: gift } = useQuery(['gift', query?.giftcard], getGiftById, {
    initialData: props.giftCard,
  });

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'all',
    shouldFocusError: false,
    shouldUnregister: true,
  });

  watch(['guestEstimate', 'provider']);

  const onSubmit = data => console.log(data);

  return (
    <div>
      <WebsiteNav {...{ user }} />
      <div className='container p-9'>
        <h2 className='flex text-lg leading-5'>
          <a className='mr-2 text-sm font-semibold text-gray-700 transition duration-300 font-inter md:text-base hover:text-primary'>
            <img
              src='/icons/waving.png'
              alt='notification'
              className='w-5 h-5 sm:w-6 sm:h-6'
            />
          </a>
          Gift for {user?.coupleName}
        </h2>
        <h1 className='mt-3 text-3xl font-medium leading-9'>Gift Card</h1>
      </div>

      {/* design */}
      <div className='container'>
        <div className='p-16 border-4 border-gray-200 rounded-lg'>
          <form className='px-20 space-y-3' onSubmit={handleSubmit(onSubmit)}>
            {/* <h1 className="text-[22px] leading-7 font-normal not-italic ">
              This Gift Is To
            </h1> */}
            <div className='space-y-3'>
              <Heading
                h3
                className='!text-[22px] leading-7 font-normal not-italic'
              >
                This Gift Is To
              </Heading>
              <div>
                <input
                  type='text'
                  className='w-96 rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                  value={user?.coupleName}
                  placeholder={user?.coupleName}
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is required!',
                    },
                  })}
                />
                <p className='h-4 mt-2 text-sm font-light text-red-400'>
                  {errors?.name?.message}
                </p>

                {/* gift image section */}
                <div>
                  <Image
                    src={gift?.image}
                    alt='Gift image here'
                    height={280}
                    width={400}
                    objectFit='contain'
                  />
                </div>

                {/* target section */}
                <div>
                  <h1 className='text-4xl leading-[44px] text-[#1f1f1f]'>
                    {gift?.title}
                  </h1>
                  <h1 className='text-4xl leading-[44px] text-[#1f1f1f] font-bold my-3'>
                    $25-$500
                  </h1>
                  <h2 className='text-lg text-[#000000] my-3'>
                    See full gift card information and terms
                  </h2>

                  <div className='my-8'>
                    <h2 className='text-lg text-[#000000] my-3'>
                      Choose Amount
                    </h2>
                    <div className='flex gap-3'>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='20'
                          value={20}
                          className='hidden'
                          {...register('rsvp')}
                        />
                        <label
                          htmlFor='20'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-sm border-[#dbdbdb] w-[109px] h-[58px] flex items-center justify-center'>
                            <span className='text-lg font-light font-inter'>
                              $20
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 2nd part */}
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='25'
                          value={25}
                          className='hidden'
                          {...register('rsvp')}
                        />
                        <label
                          htmlFor='25'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-sm border-[#dbdbdb] w-[109px] h-[58px] flex items-center justify-center'>
                            <span className='text-lg font-light font-inter'>
                              $25
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 3rd part */}
                      {/* <span className="">$20</span> */}
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='50'
                          value={50}
                          className='hidden'
                          {...register('rsvp')}
                        />
                        <label
                          htmlFor='50'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-sm border-[#dbdbdb] w-[109px] h-[58px] flex items-center justify-center'>
                            <span className='text-lg font-light font-inter'>
                              $50
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 4th radio button */}
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='100'
                          value={100}
                          className='hidden'
                          {...register('rsvp')}
                        />
                        <label
                          htmlFor='100'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-sm border-[#dbdbdb] w-[109px] h-[58px] flex items-center justify-center'>
                            <span className='text-lg font-light font-inter'>
                              $100
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* 2nd button group start here */}
                    <div className='flex gap-3 my-4'>
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='150'
                          value={150}
                          className='hidden'
                          {...register('rsvp')}
                        />
                        <label
                          htmlFor='150'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-sm border-[#dbdbdb] w-[109px] h-[58px] flex items-center justify-center'>
                            <span className='text-lg font-light font-inter'>
                              $150
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 2nd part */}
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='200'
                          value={200}
                          className='hidden'
                          {...register('rsvp')}
                        />
                        <label
                          htmlFor='200'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-sm border-[#dbdbdb] w-[109px] h-[58px] flex items-center justify-center'>
                            <span className='text-lg font-light font-inter'>
                              $200
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 3rd part */}
                      {/* <span className="">$20</span> */}
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='250'
                          value={250}
                          className='hidden'
                          {...register('rsvp')}
                        />
                        <label
                          htmlFor='250'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-sm border-[#dbdbdb] w-[109px] h-[58px] flex items-center justify-center'>
                            <span className='text-lg font-light font-inter'>
                              $250
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 4th radio button */}
                      <div className='flex items-center'>
                        <input
                          type='radio'
                          id='500'
                          value={500}
                          className='hidden'
                          {...register('rsvp')}
                        />
                        <label
                          htmlFor='500'
                          className='flex items-center space-x-3 cursor-pointer'
                        >
                          <div className='checked-outer border-[2px] rounded-sm border-[#dbdbdb] w-[109px] h-[58px] flex items-center justify-center'>
                            <span className='text-lg font-light font-inter'>
                              $500
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                    {/* radio button */}
                    <div className='space-y-3 !mt-2'>
                      <input
                        disabled
                        type='text'
                        value={`${getValues('guestEstimate')}`}
                        className='w-28 text-center rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                      />
                      <input
                        type='range'
                        min='2'
                        max='2000'
                        className='block text-center rounded-[5px] border-2 w-[230px] border-gray-200 py-3 px-5 text-base font-normal'
                        {...register('guestEstimate')}
                      />
                    </div>
                  </div>
                </div>

                {/* input field */}
                <div className='space-y-3'>
                  <Heading h3 className='!text-[22px] !font-medium'>
                    Your First Name <span className='text-red-400'>*</span>
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='w-[476px] rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                      placeholder='Your First Name'
                      {...register('Fname', {
                        required: {
                          value: true,
                          message: 'First Name is required!',
                        },
                      })}
                    />
                    <p className='h-4 mt-2 text-sm font-light text-red-400'>
                      {errors?.name?.message}
                    </p>
                  </div>
                </div>
                {/* input field */}
                <div className='space-y-3'>
                  <Heading h3 className='!text-[22px] !font-medium'>
                    Your Last Name <span className='text-red-400'>*</span>
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='w-[476px] rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                      placeholder='Your Last Name'
                      {...register('Lname', {
                        required: {
                          value: true,
                          message: 'Your Last Name is required!',
                        },
                      })}
                    />
                    <p className='h-4 mt-2 text-sm font-light text-red-400'>
                      {errors?.name?.message}
                    </p>
                  </div>
                </div>

                <div className='space-y-3'>
                  <Heading h3 className='!text-[22px] !font-medium'>
                    Your Email Address* <span className='text-red-400'>*</span>
                  </Heading>
                  <div>
                    <input
                      type='text'
                      className='w-[476px] rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal'
                      placeholder='Your Email Address'
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Your E-mail is required!',
                        },
                      })}
                    />
                    <p className='h-4 mt-2 text-sm font-light text-red-400'>
                      {errors?.name?.message}
                    </p>
                  </div>
                </div>

                <div className='space-y-3'>
                  <Heading h3 className='!text-[22px] !font-medium'>
                    Personal Message <span className='text-red-400'>*</span>
                  </Heading>
                  <div>
                    <textarea
                      cols='6'
                      rows='5'
                      className='rounded-[5px] p-3 w-[476px] placeholder-[#BDBDBD] font-medium text-lg'
                      defaultValue=''
                      placeholder={`Hope you enjoy this gift! I am so happy and excited for you
- Love the Smith Family`}
                      {...register('message')}
                    />
                    <p className='h-4 mt-2 text-sm font-light text-red-400'>
                      {errors?.name?.message}
                    </p>
                  </div>
                </div>
                {/* radio buttons */}
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='day'
                    value='day'
                    className='hidden'
                    {...register('rsvp')}
                  />
                </div>
                <label
                  htmlFor='no'
                  className='flex items-center space-x-3 cursor-pointer'
                >
                  <div className='checked-outer border-[3px] rounded-full border-primary w-6 md:w-7 h-6 md:h-7 flex items-center justify-center'>
                    <div className='w-2 h-2 rounded-full checked-inner md:w-3 md:h-3'></div>
                  </div>
                  <span className='text-[22px] font-light font-inter'>
                    Send On Wedding Day
                  </span>
                </label>

                {/* datepicker */}

                <div className='mt-10 space-y-3'>
                  <Heading h3 className='!text-[22px] !font-medium'>
                    Delivery Date <span className='text-red-400'>*</span>
                  </Heading>
                  <div>
                    <DatePicker
                      selected={date}
                      // onChange={handleDateChange}
                      showTimeSelect
                      dateFormat='Pp'
                    />
                    <p className='h-4 mt-2 text-sm font-light text-red-400'>
                      {errors?.name?.message}
                    </p>
                  </div>
                </div>

                {/* button section */}
                <div className='flex gap-5 my-4'>
                  <div>
                    <Button
                      label='Back'
                      className='!bg-[#b5b5b5] !border-[bebebe] !w-[154px] !rounded-[5px]'
                    />
                  </div>
                  <div>
                    <Button
                      label='Next'
                      type='submit'
                      className='!rounded-[5px] !w-[154px]'
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer hideSocial />
    </div>
  );
};

export default CheckoutPage;

export const getServerSideProps = async ({ params: { couple, giftcard } }) => {
  const res = await fetch(`${API_URL}/users/${couple}`);
  const resGift = await fetch(`${API_URL}/gifts/${giftcard}`);
  const user = await res.json();
  const giftCard = await resGift.json();

  return {
    props: {
      user,
      giftCard,
    },
  };
};
