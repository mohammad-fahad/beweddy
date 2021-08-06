import {
  CreateAccount,
  Footer,
  Header,
  HeroSection,
  HowItWork,
  Offers,
  PageTitle,
} from '@components/index';
import { Features } from '@components/shared/index';
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
      <HeroSection
        heading={<>Fun, Free Wedding Website</>}
        paragraph={
          <>
            Awesome design for Website Easy to use, customizable Options useful
            features for couples and guests
          </>
        }
      >
        <img
          src='/images/wedding-laptop.png'
          alt=''
          className='max-w-3xl w-full mx-auto'
        />
      </HeroSection>
      <Offers />
      <Features />
      <CreateAccount />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default WeddingWebsitePage;
