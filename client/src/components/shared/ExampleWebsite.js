import { Heading, LinkButton } from '@components/shared';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

const ExampleWebsite = ({ label, href, seo }) => {
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
  
  return (
    <>
      <Head>
        <title>BeWeddy | {seo.title}</title>
      </Head>
      <motion.div
        className={`bg-gradient-to-br from-[#FCE3EB] to-white`}
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
      >
        <motion.div className='container min-h-screen pb-16' variants={stagger}>
          <motion.div
            variants={fadeInUp}
            className='min-h-[20vh] flex items-center justify-center'
          >
            <Link href='/'>
              <a className='text-center'>
                <img src='/images/logo.png' alt='' className='h-24 mx-auto' />
              </a>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className='w-full min-h-[70vh] flex items-center justify-center'
          >
            <div className={`flex flex-col items-center justify-center`}>
              <Heading label='Here is an example preview of the website your creating!' />
              <motion.img
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
              />
              <div className='my-5 text-center'>
                <LinkButton className='!rounded-md' {...{ href, label }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ExampleWebsite;
