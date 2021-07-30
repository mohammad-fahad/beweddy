import { Heading } from '@components/shared';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const SignupPage = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = data => {
    if (data) {
      push('/create-website');
    }
  };

  return (
    <>
      <Head>
        <title>BeWeddy | Get Started</title>
      </Head>
      <motion.div
        className={`bg-gradient-to-br from-[#FCE3EB] to-white`}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='container min-h-screen flex items-center justify-center'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <section
              className={`bg-white border-4 my-10 border-primary py-8 md:py-10 px-10 md:px-24 max-w-xl w-full mx-auto rounded-xl`}
            >
              <div className='text-center mb-3'>
                <Link href='/'>
                  <a className='text-center'>
                    <img
                      src='/images/logo.png'
                      alt=''
                      className='h-16 md:h-20 mx-auto'
                    />
                  </a>
                </Link>
              </div>
              <Heading
                label='Create Your Account'
                color='bg-secondary-alternative'
                className='!pb-5 md:!text-[2.55rem]'
                lineStyle={{ marginBottom: '30px' }}
              />
              <div className='flex flex-col items-center justify-center space-y-5'>
                <div className='flex items-center gap-3 sm:space-x-4 justify-center flex-wrap'>
                  <div className='flex items-center gap-3'>
                    <input
                      type='radio'
                      id='couple'
                      value='couple'
                      defaultChecked
                      className='text-primary'
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
                      className='text-primary'
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
                    className='w-full font-normal py-3 px-4 placeholder-gray-400 border-2 border-primary rounded-lg'
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
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default SignupPage;
