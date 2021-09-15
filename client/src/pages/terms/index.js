import Head from 'next/head';
import { CreateAccount, Footer, Header, HowItWork } from '@components/index';
import Banner from '@components/Others/Terms/Banner';
import PageTitle from '@components/Others/PageTitle';
import PageHeading from '@components/Others/PageHeading';
import Paragraph from '@components/Others/Terms/Paragraph';

const Terms = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Terms & Conditions</title>
      </Head>

      <Header />
      <PageTitle title="Terms of Use" />
      <PageHeading lineOne="The following describes the Terms of Service Conditions of Use for our website." />
      <Banner />
      <Paragraph />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default Terms;
