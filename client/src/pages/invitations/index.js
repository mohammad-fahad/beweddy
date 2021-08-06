import Head from 'next/head';
import {
  CreateAccount,
  Footer,
  Header,
  HeroSection,
  HowItWork,
  PageTitle,
} from '@components/index';
import { Offers } from '@components/shared/index';

const offers = [
  {
    icon: '/icons/outline-textsms.svg',
    title: 'Text Invites',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/outline-mark-email-read.svg',
    title: 'Email Invites',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/chat-mail.png',
    title: 'Mail Out Invites',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    icon: '/icons/insert-invitation.svg',
    title: 'Simple Way To Send Invites',
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

const InvitationsPage = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Send Your Text-Email-Mail Wedding Invitations.</title>
        <meta
          name='description'
          content='Send Your Text-Email-Mail Wedding Invitations.'
        />
      </Head>
      <Header />
      <PageTitle title='Text-Email-Mail Invites ' />
      <HeroSection
        heading={<>Send Your Text-Email-Mail Wedding Invitations.</>}
        paragraph='Useful, Easy to use Features Multiple Options To Send Invitations Manage Your Guests All in One Place'
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
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default InvitationsPage;
