import Head from 'next/head';
import { CreateAccount, Footer, Header, HowItWork } from '@components/index';
import PageTitle from '@components/Others/PageTitle';
import PageHeading from '@components/Others/PageHeading';
import Banner from '@components/Others/Privacy/Banner';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>BeWeddy | Privacy Policy</title>
      </Head>

      <Header />
      <PageTitle title="Privacy Policy" />
      <PageHeading lineTwo="Welcome To" />
      <Banner />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
