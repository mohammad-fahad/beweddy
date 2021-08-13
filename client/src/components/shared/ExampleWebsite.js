import { Heading, LinkButton } from '@components/shared';
import { motion } from 'framer-motion';
import Head from 'next/head';

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ExampleWebsite = ({ label, href, seo }) => {
  return (
    <>
      <Head>
        <title>BeWeddy | {seo.title}</title>
      </Head>
      <motion.div
        className={`bg-gradient-to-br from-[#FCE3EB] to-white overflow-hidden`}
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
      >
        <motion.div
          className='container min-h-screen py-10 md:py-0 flex items-center justify-center'
          variants={stagger}
        >
          <motion.div
            variants={fadeInUp}
            className='flex flex-col items-center justify-center w-full -mt-9 sm:mt-0'
          >
            <motion.div variants={fadeInUp}>
              <Heading label='Here is an example preview of the website your creating!' className='lg:!text-[40px]' />
            </motion.div>
            <motion.img
              variants={fadeInUp}
              src='/images/wedding-laptop.png'
              alt='Previews'
              className='mx-auto max-w-2xl w-full'
              exit={{
                scale: 3,
                opacity: 0,
                transition: {
                  ease: 'linear',
                },
              }}
              initial={{
                scale: 3,
                opacity: 0,
                transition: {
                  ease: 'linear',
                },
              }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: 'linear',
                },
              }}
            />
            <div className='mt-5 text-center'>
              <LinkButton
                className='!px-10 !md:px-15 !rounded-[10px] '
                {...{ href, label }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ExampleWebsite;
