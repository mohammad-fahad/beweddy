import Head from 'next/head';
import {
  Banner,
  CreateAccount,
  CreateWebsite,
  Features,
  Footer,
  GiftCards,
  HowItWork,
  Registries,
} from '@components/index';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Free All-in-One Wedding Platform</title>
        <meta name='description' content='Free All-in-One Wedding Platform' />
      </Head>
      <Banner />
      <CreateWebsite />
      <Features />
      <GiftCards />
      <Registries />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default HomePage;
