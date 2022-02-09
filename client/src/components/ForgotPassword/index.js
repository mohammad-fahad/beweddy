import React, { useState } from "react";
import { Heading, Loader } from "@components/index";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
import { attemptPRRequest } from "@services/User";

const ForgotPassword = ({ newUser }) => {
  const [loading, setLoading] = useState(false);
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  watch("accountType");

  const { push } = useRouter();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await attemptPRRequest(data);
      setLoading(false);
      push("/forgot-password/requested");
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <>
      {/* <Meta title="Forgot Password | Beweddy" /> */}
      {/* Ey part ta fix kore dio @MuttakinHasib */}

      {loading && <Loader />}
      <motion.div
        className="bg-gradient-to-br from-[#FCE3EB] to-white w-full"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container flex items-center justify-center min-h-screen">
          <form
            className="flex items-center justify-center w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <section className="max-w-2xl px-5 py-8 mx-auto my-10 bg-white border-4 border-primary md:py-10 md:px-24 rounded-xl">
              {/* {newUser && ( */}
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
              {/* )} */}
              <Heading
                label={"Forgot Password?"}
                color="bg-[#F9D1DE]"
                className="text-2xl md:text-4xl lg:text-5xl mx-auto text-center font-alice pb-8 capitalize md:!text-[36px]"
                lineStyle={{ marginBottom: "30px" }}
              />

              <p className="my-10 text-center font-inter">
                Enter the email address you used when you joined and we’ll send
                you instructions to reset your password.
              </p>

              <div className="flex flex-col items-center justify-center w-full space-y-6">
                <p className="font-bold text-center">Enter Your Email</p>

                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full text-sm md:text-lg font-medium py-2 md:py-3 px-4 md:px-6 placeholder-gray-400 border-[3px] border-primary rounded-lg focus:outline-none"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required!",
                      },
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Must be a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm font-light text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <button
                    className="flex items-center justify-center w-full px-4 py-2 space-x-3 text-sm text-white placeholder-gray-400 transition duration-300 border-2 rounded-lg md:text-base md:py-3 border-primary bg-primary hover:bg-primary/80"
                    type="submit"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      />
                    </svg>
                    <p className="font-bold">Send Reset Instructions</p>
                  </button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </motion.div>
    </>
  );
};

// ForgotPassword.defaultProps = { newUser: false };

export default ForgotPassword;
