import Head from "next/head";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
      staggerChildren: 0.05,
    },
  },
};

export const CreateWebsiteContainer = ({ seo, page, children }) => {
  return (
    <>
      <Head>
        <title>BeWeddy | {seo.title}</title>
      </Head>
      <motion.div
        className={`bg-gradient-to-br from-[#FCE3EB] to-white max-w-full`}
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        {page && (
          <div className="pt-10 text-lg text-center ">
            {/* {page} / 5 */}
            <div className="flex justify-center w-full gap-4">
              <div
                className={`w-[71px] h-[5px] customStep ${
                  page == 1 ? "bg-primary" : " bg-[#cccccc]"
                } `}
              />
              <div
                className={`w-[71px] h-[5px] customStep ${
                  page == 2 ? "bg-primary" : " bg-[#cccccc]"
                } `}
              />
              <div
                className={`w-[71px] h-[5px] customStep ${
                  page == 3 ? "bg-primary" : " bg-[#cccccc]"
                } `}
              />
              <div
                className={`w-[71px] h-[5px] customStep ${
                  page == 4 ? "bg-primary" : " bg-[#cccccc]"
                } `}
              />
              <div
                className={`w-[71px] h-[5px] customStep ${
                  page == 5 ? "bg-primary" : " bg-[#cccccc]"
                } `}
              />
              <div
                className={`w-[71px] h-[5px] customStep ${
                  page == 6 ? "bg-primary" : " bg-[#cccccc]"
                } `}
              />
            </div>
          </div>
        )}
        <div
          className={`${
            page ? "min-h-[calc(100vh-48px)]" : "min-h-screen"
          } flex flex-col items-center justify-center container w-full`}
        >
          {/* <div
            className={`${
              page ? 'min-h-[calc(100vh-68px)]' : 'min-h-screen'
            } flex items-center justify-center overflow-x-hidden`}
          > */}
          {children}
          {/* </div> */}
        </div>
      </motion.div>
    </>
  );
};
