import Head from 'next/head';
import { useEffect } from 'react';
import {
  CreateAccount,
  Footer,
  Header,
  HeroSection,
  HowItWork,
  PageTitle,
} from '@components/index';
import { Offers, Features } from '@components/shared/index';

const offers = [
  {
    icon: '/icons/user.svg',
    title: 'Create Your Free Account',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/template.svg',
    title: 'Select A Design Template',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/layout.svg',
    title: 'Easily Customize',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/rocket.svg',
    title: 'Launch & Share With Guests',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const WeddingWebsitePage = () => {
  useEffect(() => {
    alert('This page is under constructions');
  }, []);
  return (
    <>
      <Head>
        <title>BeWeddy | Fun, Free Wedding Website</title>
        <meta name='description' content='Fun, Free Wedding Website' />
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
        grid={{
          gridCols: 'md:grid-cols-2',
          leftCol: 'col-span-1',
          rightCol: 'col-span-1',
        }}
      >
        <img
          src='/images/wedding-laptop.png'
          alt=''
          className='max-w-3xl w-full mx-auto'
        />
      </HeroSection>
      <Offers title='How to Create Your Free Wedding Website' {...{ offers }} />
      <Features />
      <CreateAccount />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default WeddingWebsitePage;
