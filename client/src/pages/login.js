import { Heading } from '@components/shared';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const { push } = useRouter();
  const {
    watch,
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
        <title>BeWeddy | Login</title>
      </Head>
      <motion.div
        className='bg-gradient-to-br from-[#FCE3EB] to-white w-full'
        // exit={{ opacity: 0 }}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
      >
        <div className='container min-h-screen flex items-center justify-center w-full'>
          <form
            className='w-full flex items-center justify-center'
            onSubmit={handleSubmit(onSubmit)}
          >
            <section
              className={`bg-white border-4 my-10 border-primary py-8 md:py-10 px-10 md:px-24 max-w-xl w-full mx-auto rounded-xl`}
            >
              <div className='text-center mb-3'>
                <Link href='/'>
                  <a className='text-center'>
                    <img
                      src='/images/logo.png'
                      alt=''
                      className='h-14 md:h-[60px] mx-auto'
                    />
                  </a>
                </Link>
              </div>
              <Heading
                label='Welcome Back!'
                color='bg-secondary-alternative'
                className='!pb-5'
                lineStyle={{ marginBottom: '30px' }}
              />
              <div className='flex flex-col items-center justify-center space-y-6'>
                <button className='border-2 text-sm md:text-base border-primary py-3 px-4 md:px-12 flex items-center space-x-3 rounded-[100px]'>
                  <img src='/icons/gmail.svg' alt='' className='w-5 h-5' />
                  <span>Start with Google</span>
                </button>
                <div className='w-full'>
                  <input
                    type='email'
                    className='w-full text-sm md:text-lg font-normal py-2 md:py-3 px-4 md:px-6 placeholder-gray-400 border-[3px] border-primary rounded-lg'
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
                    className='w-full text-sm md:text-lg font-normal py-2 md:py-3 px-4 md:px-6 placeholder-gray-400 border-[3px] border-primary rounded-lg'
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
                    className='w-full text-sm md:text-base py-2 md:py-3 px-4 placeholder-gray-400 border-2 border-primary bg-primary hover:bg-primary/80 text-white rounded-lg flex items-center justify-center space-x-3 transition duration-300'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                      />
                    </svg>
                    <span>Login</span>
                  </button>
                </div>
                <div className='w-full space-y-2'>
                  <Link href='/signup'>
                    <a className='text-sm font-inter font-normal hover:underline hover:text-red-400 text-center block'>
                      Forgot your password?
                    </a>
                  </Link>
                  <p className='text-sm md:text-lg font-semibold text-center'>
                    Don't have an account?&nbsp;
                    <Link href='/signup'>
                      <a className='font-inter font-semibold hover:underline'>
                        Signup here
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

export default LoginPage;
