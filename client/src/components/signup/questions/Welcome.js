import { Heading } from '@components/index';
import { motion } from 'framer-motion';
import Head from 'next/head';

export const Welcome = () => {
  return (
    <motion.div
      className={`bg-gradient-to-br from-[#FCE3EB] to-white`}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className='container min-h-screen flex items-center justify-center'>
        <div className={`flex flex-col items-center justify-center`}>
          <Head>
            <title>BeWeddy | Welcome</title>
          </Head>
          <motion.h3
            className='text-7xl mb-3'
            exit={{ opacity: 0, scale: 0.8 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ ease: 'backInOut' }}
          >
            🎉
          </motion.h3>
          <motion.div
            exit={{ opacity: 0, y: 60 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'backInOut', delay: 0.5 }}
          >
            <Heading
              className='md:!text-[42px]'
              label='Welcome... Now Eat, Drink, & BeWeddy!'
              color='bg-primary'
            />
          </motion.div>
          <motion.p
            className='text-2xl text-center font-normal w-full max-w-xl mb-10 capitalize'
            exit={{ opacity: 0, y: 60 }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'backInOut', delay: 0.7 }}
          >
            Creating your wedding website & lets <br />get this party started
          </motion.p>
          {/* <Button label="Let's get started" outline type='submit' /> */}
        </div>
      </div>
    </motion.div>
  );
};
