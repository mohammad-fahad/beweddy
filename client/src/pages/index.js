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
} from '@components/index';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>BeWeddy | Free All-in-One Wedding Platform</title>
        <meta name='description' content='Free All-in-One Wedding Platform' />
      </Head>
      <Header />
      <Banner />
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
