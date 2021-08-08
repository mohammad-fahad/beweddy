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
    icon: '/icons/menu-board.svg',
    title: 'RSVP',
    paragraph:
      'RSVP to help make arrangements for potential food, beverages, seating, and more.',
  },
  {
    icon: '/icons/note-favorite.svg',
    title: 'Send Calendar Invites & Reminders',
    paragraph:
      'Calender Invites help guests remember the date of your wedding. Also reminds them to come celebrate with you.',
  },
  {
    icon: '/icons/document-text.svg',
    title: 'Customizable Forms',
    paragraph:
      'Customizable forms to ask your wedding party to help you prepare for your big day.',
  },
  {
    icon: '/icons/link-2.svg',
    title: 'Super Link',
    paragraph:
      'Share your custom link so people can visit your site to see your website, registries, and RSVP.',
  },
];

const GiftRegistryPage = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Address & RSVP</title>
        <meta name='description' content='Collect Addresses & RSVP' />
      </Head>
      <Header />
      <PageTitle title='Address & RSVP' />
      <HeroSection
        heading={<>Collect Addresses & RSVP</>}
        paragraph='With these fun features you can, Text E-mail and even DM your wedding party to gather addresses.'
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
        title='How Address & RSVP Works'
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
