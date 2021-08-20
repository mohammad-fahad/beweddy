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
    icon: '/icons/message-notif.svg',
    title: 'Text Invites',
    paragraph:
      'This is a new and improved way of getting your invites out faster and more efficiently. (Plus saves money.)',
  },
  {
    icon: '/icons/sms-notification.svg',
    title: 'Email Invites',
    paragraph:
      'This is another simple way of getting your invitations out quicker to your guests. It is also linked to your gift registry and website.',
  },
  {
    icon: '/icons/sms-tracking.svg',
    title: 'Mail Out Invites',
    paragraph:
      "This is the most common way of inviting your guests. It's always fun to receive mail. (I mean.. who wouldn't want good looking people on the fridge.)",
  },
  {
    icon: '/icons/people.svg',
    title: 'Manage Guest List',
    paragraph: 'Communicate with all your guests in one place.',
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
        heading={<>Text, E-Mail, and Mail Out Wedding Invitations</>}
        paragraph='Multiple Options On How to Send Your Invites. All Easy to Use Features.'
        grid={{
          gridCols: 'md:grid-cols-3',
          leftCol: 'md:col-span-2',
          rightCol: 'md:col-span-1',
        }}
      >
        <img
          src='/images/invite.png'
          alt=''
          className='max-h-[395px] lg:max-h-[450px] mx-auto'
        />
      </HeroSection>
      <Offers title='How Invitations Works' {...{ offers }} />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default InvitationsPage;
