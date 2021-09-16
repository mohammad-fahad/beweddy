import Head from 'next/head';
import { CreateAccount, Footer, Header, HowItWork } from '@components/index';
import PageTitle from '@components/Others/PageTitle';
import PageHeading from '@components/Others/PageHeading';
import Banner from '@components/Others/Privacy/Banner';
import { useWindowSize } from '@hooks/useWindowSize';

const PrivacyPolicy = () => {
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>BeWeddy | Privacy Policy</title>
      </Head>

      <Header />
      <PageTitle title="Privacy Policy" />
      {/* <PageHeading lineTwo="Welcome To" /> */}
      <div className="container">
        <div className="grid w-full grid-cols-12 gap-4 mt-5">
          <div
            className={` ${
              size.width < 1200 ? '!col-start-0 !col-span-8 ' : ''
            } ${
              size.width < 600 ? '!col-start-0 !col-span-12' : ''
            } col-start-3 col-span-7 p-1 text-lg font-semibold subTitle`}
          >
            <PageHeading lineTwo="Welcome To" />
          </div>
          <div
            className={`col-span-2 p-1 flex justify-end ${
              size.width < 1200 ? '!col-span-4' : ''
            } ${size.width < 600 ? 'hidden !col-span-12 ' : ''}`}
          ></div>
        </div>
      </div>

      <Banner />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
