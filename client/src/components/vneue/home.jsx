import Head from "next/head";
import {
  Banner,
  CreateWebsite,
  Footer,
  GiftCards,
  Header,
  Registries,
  QRFeature,
  WelcomeAlert,
} from "@components/index";
import Features from "@components/home/Features";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

const VenueHome = () => {
  const { user } = useSelector((state) => state.user);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>BeWeddy | Free All-in-One Wedding Platform</title>
        <meta name="description" content="Free All-in-One Wedding Platform" />
      </Head>
      <WelcomeAlert />
      <Header />
      <Banner {...{ setImageLoaded }} />
      <CreateWebsite />
      <Features />
      <GiftCards />
      <Registries />
      <QRFeature />
      <Footer />
    </motion.div>
  );
};

export default VenueHome;
