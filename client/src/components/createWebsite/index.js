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
      staggerChildren: 0.05,
    },
  },
};

export const CreateWebsiteContainer = ({ seo, page, children }) => {
  return (
    <>
      <Head>
        <title>BeWeddy | {seo.title}</title>
      </Head>
      <motion.div
        className={`bg-gradient-to-br from-[#FCE3EB] to-white `}
        e
        exit={{ opacity: 0 }}
        initial='initial'
        animate='animate'
      >
        {page && <div className='text-center py-5 text-lg'>{page} / 5</div>}
        <div className='container'>
          <div className={`${page ? 'min-h-[calc(100vh-68px)]':'min-h-screen'} flex items-center justify-center w-screen`}>
            {children}
          </div>
        </div>
      </motion.div>
    </>
  );
};
