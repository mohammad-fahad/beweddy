import {
  CreateAccount,
  Footer,
  Header,
  HeroSection,
  HowItWork,
  PageTitle,
} from '@components/index';
import Head from 'next/head';
import { useEffect } from 'react';

const WeddingWebsitePage = () => {
  useEffect(() => {
    alert('This page is under constructions');
  }, []);
  return (
    <>
      <Head>
        <title>BeWeddy | Free All-in-One Wedding Platform</title>
        <meta name='description' content='Free All-in-One Wedding Platform' />
      </Head>
      <Header />
      <PageTitle title='Wedding Website' />
      <HeroSection></HeroSection>
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default WeddingWebsitePage;
