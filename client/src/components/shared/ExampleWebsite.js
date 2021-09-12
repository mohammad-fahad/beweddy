import { Heading, LinkButton } from "@components/shared";
import { motion } from "framer-motion";
import Head from "next/head";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ExampleWebsite = ({ label, href, seo }) => {
  return (
    <>
      <Head>
        <title>BeWeddy | {seo.title}</title>
      </Head>
      <motion.div
        className={`bg-gradient-to-br from-[#FCE3EB] to-white overflow-hidden`}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="container flex items-center justify-center min-h-screen py-10 md:py-0"
          variants={stagger}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center justify-center w-full -mt-9 sm:mt-0"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="max-w-3xl pb-8 mx-auto text-[36px] text-center capitalize">
                Link & Sync Your Gift Registries <br /> All In One Place!
              </h2>
              <div className="w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-primary mt-6" />
            </motion.div>
            <motion.img
              variants={fadeInUp}
              src="/images/wedding-laptop.png"
              alt="Previews"
              className="w-full max-w-2xl mx-auto"
              exit={{
                scale: 3,
                opacity: 0,
                transition: {
                  ease: "linear",
                },
              }}
              initial={{
                scale: 3,
                opacity: 0,
                transition: {
                  ease: "linear",
                },
              }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  ease: "linear",
                },
              }}
            />
            <div className="mt-5 text-center">
              <LinkButton
                className="!px-10 !md:px-15 !rounded-[10px] "
                {...{ href }}
                label="Create Your Website Now"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ExampleWebsite;
