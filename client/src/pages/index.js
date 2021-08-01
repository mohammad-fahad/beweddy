import Head from 'next/head';
import {
  Banner,
  CreateAccount,
  CreateWebsite,
  Features,
  Footer,
  GiftCards,
  Header,
  HowItWork,
  Registries,
  Loader,
} from '@components/index';
import { motion } from 'framer-motion';
import { useState } from 'react';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* {!imageLoaded && <Loader preloader />} */}
      <Head>
        <title>BeWeddy | Free All-in-One Wedding Platform</title>
        <meta name='description' content='Free All-in-One Wedding Platform' />
      </Head>
      <Header />
      <Banner {...{ setImageLoaded }} />
      <CreateWebsite />
      <Features />
      <GiftCards />
      <Registries />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </motion.div>
  );
};

export default HomePage;
