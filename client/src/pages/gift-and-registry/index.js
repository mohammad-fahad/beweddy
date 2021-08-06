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
    icon: '/icons/user.svg',
    title: 'Add Wedding Gifts',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/template.svg',
    title: 'Guests Buy You Gifts',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/layout.svg',
    title: 'Collect Gifts',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/rocket.svg',
    title: 'Sync Your Registry',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
        heading={<>Everything Your Wedding Registry Should Be</>}
        paragraph='Gifts, experiences, and honeymoon funds in one place Thoughtfully designed to save time for you and guests One-on-one support you won’t find anywhere else'
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
      <Offers title='How Invitations Works' {...{ offers }} />
      <CreateAccount />
      <GiftCards />
      <Registries />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default GiftRegistryPage;
