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
    icon: '/icons/card-coin.svg',
    title: 'Create Your Wedding Platform',
    paragraph:
      'All-in-one wedding platform. Everything you need for your special day.',
  },
  {
    icon: '/icons/card-tick.svg',
    title: 'Customize Your Wedding Website',
    paragraph:
      'Link your registries, gift cards, & share your bio with the wedding party.',
  },
  {
    icon: '/icons/card-edit.svg',
    title: 'Easily Customizable',
    paragraph: 'The best wedding platform for all your wedding planning needs.',
  },
  {
    icon: '/icons/user-tag.svg',
    title: 'Link In Bio',
    paragraph: 'Share your love story in our Bio. ',
  },
];

const WeddingWebsitePage = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Fun, Free Wedding Website</title>
        <meta name='description' content='Fun, Free Wedding Website' />
      </Head>
      <Header />
      <PageTitle title='Wedding Website' />
      <HeroSection
        heading={<>Fancy, Fun & Free Wedding Website</>}
        paragraph={
          <>
            One Stop Shop For All Your Wedding Needs. Texting platform,
            Registries, I Need Your Adresses & Much More!
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
      <Offers title='How To Create Your Wedding Website' {...{ offers }} />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default WeddingWebsitePage;
