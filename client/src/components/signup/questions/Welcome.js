import { Heading } from '@components/index';
import Head from 'next/head';

export const Welcome = () => {
  return (
    <div className={`bg-gradient-to-br from-[#FCE3EB] to-white`}>
      <div className='container min-h-screen flex items-center justify-center'>
        <div className={`flex flex-col items-center justify-center`}>
          <Head>
            <title>BeWeddy | Welcome</title>
          </Head>
          <h3 className='text-7xl mb-3'>🎉</h3>
          <Heading
            label='Welcome... Now Eat, Drink, & BeWeddy!'
            color='bg-primary'
          />
          <p className='text-2xl text-center font-normal w-full max-w-xl mb-10'>
            Creating your wedding website & lets get this party started
          </p>
          {/* <Button label="Let's get started" outline type='submit' /> */}
        </div>
      </div>
    </div>
  );
};
