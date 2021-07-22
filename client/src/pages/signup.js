import { Heading } from '@components/shared';
import Head from 'next/head';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Get Started</title>
      </Head>
      <div className='bg-gradient-to-br from-[#FCE3EB] to-white '>
        <div className='container min-h-screen'>
          <div className='min-h-[20vh] flex items-center justify-center'>
            <Link href='/'>
              <a className='text-center'>
                <img src='/images/logo.png' alt='' className='h-24 mx-auto' />
              </a>
            </Link>
          </div>
          <form className='w-full min-h-[70vh] flex items-center justify-center'>
            <section className='bg-white border-4 border-primary p-10 md:pb-18 md:pt-20 md:px-24 max-w-xl w-full mx-auto rounded-xl'>
              <Heading
                label='Create Your Account'
                color='bg-secondary-alternative'
                style={{
                  fontSize: '40px',
                  lineHeight: 1,
                }}
                lineStyle={{ marginBottom: '35px' }}
              />
              <div className='flex flex-col items-center justify-center space-y-6'>
                <div className='flex items-center gap-3 md:gap-5 justify-center flex-wrap'>
                  <div className='flex items-center space-x-3'>
                    <input
                      type='radio'
                      name='user'
                      id='couple'
                      className='text-primary border-2 border-primary w-[22px] h-[22px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
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
                      name='user'
                      id='venue'
                      className='text-primary border-2 border-primary w-[22px] h-[22px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                    />
                    <label
                      htmlFor='venue'
                      className='font-inter text-lg font-bold cursor-pointer'
                    >
                      For Venue
                    </label>
                  </div>
                </div>
                <button className='border-2 border-primary py-3 px-12 flex items-center space-x-3 rounded-[100px]'>
                  <img src='/icons/gmail.svg' alt='' className='w-5 h-5' />
                  <span>Start with Google</span>
                </button>
                <div className='w-full'>
                  <input
                    type='email'
                    className='w-full font-light py-3 px-4 placeholder-gray-400 border-2 border-primary rounded-lg'
                    placeholder='Your Email'
                  />
                </div>
                <div className='w-full'>
                  <input
                    type='password'
                    className='w-full font-light py-3 px-4 placeholder-gray-400 border-2 border-primary rounded-lg'
                    placeholder='Password'
                  />
                </div>
                <div className='w-full'>
                  <button className='w-full font-light py-3 px-4 placeholder-gray-400 border-2 border-primary bg-primary hover:bg-primary/80 text-white rounded-lg flex items-center justify-center space-x-3 transition duration-300'>
                    <img src='/icons/signup.svg' alt='' className='w-6 h-6' />
                    <span>Signup</span>
                  </button>
                </div>
                <div className='w-full'>
                  <p className='font-light'>
                    By creating an account you accept our{' '}
                    <Link href='/'>
                      <a className='hover:underline'>
                        Terms and conditions
                      </a>
                    </Link>
                    &nbsp;and{' '}
                    <Link href='/'>
                      <a className='hover:underline'>
                        Privacy Policy
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
