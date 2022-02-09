import React, { FC } from "react";
import { Heading, Loader } from "@components/index";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const ResetPass = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  watch("accountType");

  const onSubmit = (data) => {
    if (data) {
    }
  };

  return (
    <React.Fragment>
      {/* <Meta title="Reset Your Password | Beweddy" /> */}
      {/* Ey part ta fix kore dio @MuttakinHasib */}
      {/* {loading && <Loader />} */}
      <motion.div
        className="bg-gradient-to-br from-[#FCE3EB] to-white w-full"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container flex items-center justify-center min-h-screen">
          <form
            className="flex items-center justify-center w-full"
            onSubmit={onSubmit}
          >
            <section className="max-w-2xl px-5 py-8 mx-auto my-10 bg-white border-4 border-primary md:py-10 md:px-24 rounded-xl">
              <div className="mb-3 text-center">
                <Link href="/">
                  <a className="text-center">
                    <img
                      src="/images/logo.png"
                      alt=""
                      className="h-14 md:h-[60px] mx-auto"
                    />
                  </a>
                </Link>
              </div>

              <Heading
                label="Reset Your Password"
                color="bg-[#F9D1DE]"
                className="text-2xl md:text-4xl lg:text-5xl mx-auto mt-20 text-center font-alice pb-8 capitalize md:!text-[36px]"
                lineStyle={{ marginBottom: "30px" }}
              />

              <div className="flex flex-col items-center w-full justify-center space-y-6">
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full text-sm md:text-lg font-medium py-2 md:py-3 px-4 md:px-6 placeholder-gray-400 border-[3px] border-primary rounded-lg focus:outline-none"
                    // {...register("email", {
                    //   required: {
                    //     value: true,
                    //     message: "Email is required!",
                    //   },
                    //   pattern: {
                    //     value:
                    //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    //     message: "Must be a valid email address",
                    //   },
                    // })}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm font-light text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <small className="my-5 block">Minimum Six Characters</small>
                  <button
                    className="lex items-center justify-center w-full px-4 py-2 space-x-3 text-sm text-white placeholder-gray-400 transition duration-300 border-2 rounded-lg md:text-base md:py-3 border-primary bg-primary hover:bg-primary/80"
                    type="submit"
                  >
                    <p className="font-bold">Reset</p>
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default ResetPass;
