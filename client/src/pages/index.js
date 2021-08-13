import Head from 'next/head';
import {
  Banner,
  CreateAccount,
  CreateWebsite,
  Footer,
  GiftCards,
  Header,
  HowItWork,
  Registries,
  Loader,
} from '@components/index';
import Features from '@components/home/Features';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { user } = useSelector(state => state.user);
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
      {!user && <CreateAccount />}
      <Footer />
    </motion.div>
  );
};

export default HomePage;
