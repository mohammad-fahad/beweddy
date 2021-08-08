import Head from 'next/head';
import {
  CreateAccount,
  Footer,
  GiftCards,
  Header,
  HeroSection,
  HowItWork,
  PageTitle,
  Registries,
} from '@components/index';
import { Offers } from '@components/shared/index';

const offers = [
  {
    icon: '/icons/message-favorite.svg',
    title: 'Personal Note With Each Gift',
    paragraph:
      'Receive Personalized Messages and Notes of Gratitude With Each Gift purchased.',
  },
  {
    icon: '/icons/bookmark-2.svg',
    title: '100+ Gift Card Options',
    paragraph: 'You choose and pick the gift card options you want to receive.',
  },
  {
    icon: '/icons/driver-refresh.svg',
    title: 'Sync & Link Your Registries',
    paragraph: 'You choose and pick the registries you want to feature.',
  },
  {
    icon: '/icons/link-2.svg',
    title: 'Link & Sink All Your Gifts, & Registries',
    paragraph:
      '#1 option to share all your wedding registries & favorite gift card choices so people can love and support you.',
  },
];

const GiftRegistryPage = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Gift & Registry</title>
        <meta
          name='description'
          content='Everything Your Wedding Registry Should Be'
        />
      </Head>
      <Header />
      <PageTitle title='Gift & Registry' />
      <HeroSection
        heading={<>Gifts & Registry</>}
        paragraph='Wedding platform that connects gifts & registries all in one location.'
        grid={{
          gridCols: 'md:grid-cols-3',
          leftCol: 'md:col-span-2',
          rightCol: 'md:col-span-1',
        }}
      >
        <img
          src='/images/feature-mobile.png'
          alt=''
          className='max-h-[395px] lg:max-h-[450px] mx-auto'
        />
      </HeroSection>
      <Offers
        title='How Gifts & Registry Works'
        className='border-b-4'
        {...{ offers }}
      />
      <GiftCards />
      <Registries />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default GiftRegistryPage;
