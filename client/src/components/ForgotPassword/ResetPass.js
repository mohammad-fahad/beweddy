import React, { FC, useState } from "react";
import { Heading, Loader } from "@components/index";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { attemptResetPassword } from "@services/User";

const ResetPass = () => {
  const [loading, setLoading] = useState(false);

  const { query, replace } = useRouter();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  watch("accountType");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await attemptResetPassword({ ...data, token: query.token });
      setLoading(false);
      replace("/login");
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Reset Password</title>
      </Head>

      {/* <Meta title="Reset Your Password | Beweddy" /> */}
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
                className="text-2xl md:text-4xl lg:text-5xl mx-auto text-center font-alice pb-8 capitalize md:!text-[36px]"
                lineStyle={{ marginBottom: "30px" }}
              />

              <div className="flex flex-col items-center justify-center w-full space-y-6">
                <div className="w-full">
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full text-sm md:text-lg font-medium py-2 md:py-3 px-4 md:px-6 placeholder-gray-400 border-[3px] border-primary rounded-lg focus:outline-none"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required!",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters!",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm font-light text-red-400">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <button
                    className="items-center justify-center w-full px-4 py-2 space-x-3 text-sm text-white placeholder-gray-400 transition duration-300 border-2 rounded-lg lex md:text-base md:py-3 border-primary bg-primary hover:bg-primary/80"
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
