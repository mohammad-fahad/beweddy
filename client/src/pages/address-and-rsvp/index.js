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
import { LinkButton, Offers } from '@components/shared/index';
import SectionHeading from '@components/shared/HeroSection/SectionHeading';
import Paragraph from '@components/shared/HeroSection/Paragraph';

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
        <meta name="description" content="Collect Addresses & RSVP" />
      </Head>

      <Header />

      <PageTitle title="Address & RSVP" />

      <div className="gradient">
        <div className="container py-20">
          <div className={`grid gap-10 md:grid-cols-3`}>
            <div className={`self-center md:col-span-2`}>
              <SectionHeading className="text-center md:!text-left">
                Collect Addresses & RSVP
              </SectionHeading>

              <Paragraph className="text-center mx-auto md:!mx-0 md:text-left">
                With these fun features you can, Text E-mail and even DM your
                wedding party to gather addresses.
              </Paragraph>

              <div className="flex items-center justify-center md:justify-start">
                <LinkButton
                  href="/create-website"
                  label="Create Your Wedding Website"
                  className="!rounded-[5px] !py-3 !px-7 !m-0 md:!mr-auto"
                />
              </div>
            </div>

            <div className={`self-center md:col-span-1`}>
              <img
                src="/images/rsvp.png"
                alt=""
                className="max-h-[395px] lg:max-h-[450px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Offers
        title="How Address & RSVP Works"
        className="border-b-4"
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
