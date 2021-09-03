import { CreateWebsiteContainer } from '@components/createWebsite';
import { Heading } from '@components/shared';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const VerifyEmail = () => {
  const { success } = useSelector(state => state.auth);
  const { push } = useRouter();
  useEffect(() => {
    if (!success) {
      push({ query: { step: 6 } });
    }
  }, [success]);
  return (
    <CreateWebsiteContainer seo={{ title: 'Verify your account' }}>
      <Link href='/'>
        <a className='text-center mb-10'>
          <img src='/images/logo.png' alt='' className='h-14 md:h-20' />
        </a>
      </Link>
      <Heading
        label='E-Mail Sent to verify'
        color='bg-[#F9D1DE]'
        // className='pt-5 md:pt-0'
        lineStyle={{ marginBottom: '45px' }}
      />
      <div className='max-w-4xl mx-auto space-y-10 text-center'>
        <p className='text-base md:text-xl font-light'>
          <strong className='text-xl font-semibold'>Congratulations!</strong>{' '}
          We're so excited for you and can't wait to show you how we can make
          life easier with a universal registry!
        </p>
        <p className='text-base md:text-xl font-light'>
          <strong className='font-semibold block mb-5'>
            But first things first.
          </strong>{' '}
          To activate your account, please verify your email address.
        </p>
      </div>
      {/* <button className='mt-12 md:mt-16 py-2 md:py-3 inline-block text-sm md:text-base text-center mx-auto px-10 md:px-28 border-[3px] border-primary hover:bg-primary hover:text-white uppercase rounded-3xl whitespace-nowrap transition-colors duration-300'>
        Verify email address
      </button> */}
    </CreateWebsiteContainer>
  );
};

export default VerifyEmail;
