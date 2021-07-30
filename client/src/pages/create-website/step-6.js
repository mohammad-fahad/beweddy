import { CreateWebsiteContainer } from '@components/createWebsite';
import { Heading, LinkButton } from '@components/shared';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WebsitePreview = () => {
  return (
    <CreateWebsiteContainer seo={{ title: 'Preview Your Wedding Website' }}>
      <motion.div
        className={`flex flex-col items-center justify-center`}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        initial={{ opacity: 1 }}
      >
        <motion.div
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Heading
            label='Wedding Website Preview'
            lineStyle={{ display: 'none' }}
          />
        </motion.div>
        <motion.div
          className='max-w-4xl w-full mx-auto'
          exit={{ opacity: 0, scale: 1.8 }}
          initial={{ opacity: 0, scale: 1.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
          }}
        >
          <Image
            width={1215}
            height={595}
            src='/images/website-preview.png'
            alt=''
            className='mx-auto max-w-3xl w-full'
          />
        </motion.div>
        <div className='mb-5'>
          <LinkButton
            label='Edit'
            href='/create-website/step-5'
            className='!rounded-lg !bg-secondary-alternative/20 !text-primary !px-8'
          />
        </div>
        <div className='my-5 text-center'>
          <LinkButton
            href='/create-website/step-7'
            label='Launch Your Wedding Platform'
            className='!rounded-lg'
          />
        </div>
      </motion.div>
    </CreateWebsiteContainer>
  );
};

export default WebsitePreview;
