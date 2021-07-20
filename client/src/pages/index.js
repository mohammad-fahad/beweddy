import {
  Banner,
  CreateAccount,
  CreateWebsite,
  Features,
  Footer,
  GiftCards,
  HowItWork,
  Registries,
} from '@components/index';

const HomePage = () => {
  return (
    <>
      <Banner />
      <CreateWebsite />
      <Features />
      <GiftCards />
      <Registries />
      <HowItWork />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default HomePage;
