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
      <PageTitle title='Terms of Use' />
      <PageHeading lineOne='The following describes the Terms of Service Conditions of Use for our website.' />

      <div className='bg-gradient-to-br from-[#fddce7] to-white border-t-[2px] border-primary border-b-[2px]'>
        <div className='container grid w-full md:grid-cols-12 gap-4 mt-5'>
          <div className='p-1 text-sm lg:text-base font-normal md:col-span-10 md:col-start-2 subTitle'>
            <Banner />
          </div>
        </div>
      </div>

      <div className='container grid w-full md:grid-cols-12 gap-4 mt-5'>
        <div className='p-1 text-sm lg:text-base font-normal md:col-span-10 md:col-start-2 subTitle'>
          <Paragraph />
        </div>
      </div>

      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default Terms;
