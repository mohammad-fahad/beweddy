import { useEffect, useState } from 'react';
import { Heading } from '@components/shared';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import {
  CoupleName,
  DemoWebsite,
  GetStarted,
  Preview,
  SentInvitation,
  UploadAnnouncement,
  UploadCouplePicture,
  WeddingDay,
} from '@components/signup/questions';
import { useRouter } from 'next/router';

const SignupPage = () => {
  const { pathname, push, query } = useRouter();
  const [steps, setStep] = useState(1);
  const step = Number(query.step);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = data => {
    if (data) {
      if (step === 9) return;
      push({
        pathname: '/signup',
        query: {
          step: step + 1,
        },
      });
    }
  };

  useEffect(() => {
    console.log(query);
    if (!Object.keys(query).length) {
      push({
        pathname: '/signup',
        query: {
          step: 1,
        },
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>BeWeddy | Get Started</title>
      </Head>
      <div className='bg-gradient-to-br from-[#FCE3EB] to-white '>
        <div className='container min-h-screen'>
          <div className='min-h-[15vh] flex items-center justify-center'>
            <Link href='/'>
              <a className='text-center'>
                <img src='/images/logo.png' alt='' className='h-24 mx-auto' />
              </a>
            </Link>
          </div>
          <form
            className='w-full min-h-[75vh] flex items-center justify-center'
            onSubmit={handleSubmit(onSubmit)}
          >
            <section
              className={`${
                step > 1 ? 'hidden' : 'block'
              } bg-white border-4 my-10 border-primary p-10 md:pb-18 md:pt-20 md:px-24 max-w-xl w-full mx-auto rounded-xl`}
            >
              <Heading
                label='Create Your Account'
                color='bg-secondary-alternative'
                className='!pb-5 md:!text-4xl'
                lineStyle={{ marginBottom: '35px' }}
              />
              <div className='flex flex-col items-center justify-center space-y-6'>
                <div className='flex items-center gap-3 md:gap-5 justify-center flex-wrap'>
                  <div className='flex items-center gap-3'>
                    <input
                      type='radio'
                      id='couple'
                      value='couple'
                      defaultChecked
                      className='text-primary border-2 border-primary w-[22px] h-[22px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      {...register('user')}
                    />
                    <label
                      htmlFor='couple'
                      className='font-inter text-lg font-bold cursor-pointer'
                    >
                      For Couple
                    </label>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <input
                      type='radio'
                      id='venue'
                      value='venue'
                      className='text-primary border-2 border-primary w-[22px] h-[22px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      {...register('user')}
                    />
                    <label
                      htmlFor='venue'
                      className='font-inter text-lg font-bold cursor-pointer'
                    >
                      For Venue
                    </label>
                  </div>
                </div>
                <button className='border-2 text-sm md:text-base border-primary py-3 px-4 md:px-12 flex items-center space-x-3 rounded-[100px]'>
                  <img src='/icons/gmail.svg' alt='' className='w-5 h-5' />
                  <span>Start with Google</span>
                </button>
                <div className='w-full'>
                  <input
                    type='email'
                    className='w-full lowercase font-normal py-3 px-4 placeholder-gray-400 border-2 border-primary rounded-lg'
                    placeholder='Your Email'
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
                  {errors.email && (
                    <p className='mt-2 text-red-400 font-light text-sm'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className='w-full'>
                  <input
                    type='password'
                    className='w-full font-normal py-3 px-4 placeholder-gray-400 border-2 border-primary rounded-lg'
                    placeholder='Password'
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password is required!',
                      },
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                  />
                  {errors.password && (
                    <p className='mt-2 text-red-400 font-light text-sm'>
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className='w-full'>
                  <button
                    type='submit'
                    className='w-full py-3 px-4 placeholder-gray-400 border-2 border-primary bg-primary hover:bg-primary/80 text-white rounded-lg flex items-center justify-center space-x-3 transition duration-300'
                  >
                    <img src='/icons/signup.svg' alt='' className='w-6 h-6' />
                    <span>Signup</span>
                  </button>
                </div>
                <div className='w-full'>
                  <p className='font-light'>
                    Already have an account?{' '}
                    <Link href='/login'>
                      <a className='font-inter font-semibold hover:underline text-secondary'>
                        Login here
                      </a>
                    </Link>
                  </p>
                </div>
                <div className='max-w-xs w-full mx-auto h-[2px] bg-gray-200'></div>
                <div className='w-full'>
                  <p className='font-light'>
                    By creating an account you accept our{' '}
                    <Link href='/'>
                      <a className='font-inter font-semibold hover:underline'>
                        Terms and conditions
                      </a>
                    </Link>
                    &nbsp;and{' '}
                    <Link href='/'>
                      <a className='font-inter font-semibold hover:underline'>
                        Privacy Policy
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </section>
            {step >= 2 && <GetStarted />}
            {step >= 3 && <DemoWebsite />}
            {step >= 4 && <CoupleName {...{ register, errors }} />}
            {step >= 5 && <WeddingDay {...{ register, errors }} />}
            {step >= 6 && (
              <UploadAnnouncement {...{ watch, register, errors }} />
            )}
            {step >= 7 && <SentInvitation {...{ watch, register, errors }} />}
            {step >= 8 && (
              <UploadCouplePicture {...{ watch, register, errors }} />
            )}
            {step >= 9 && <Preview {...{ watch, register, errors }} />}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
