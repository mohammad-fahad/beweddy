import React, { FC, useEffect } from "react";
import { Loader } from "@components/index";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { useRouter } from "next/router";

const StepTwo = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  watch("accountType");

  const { push } = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     push("/reset-password");
  //   }, 5000);
  // }, []);

  return (
    <React.Fragment>
      {/* <Meta title="Forgot Password | Beweddy" /> */}
      {/* Ey part ta fix kore dio @MuttakinHasib */}
      {/* {loading && <Loader />} */}
      <motion.div
        className="bg-gradient-to-br from-[#FCE3EB] to-white w-full"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="container flex items-center justify-center min-h-screen">
          <section className="max-w-2xl px-5 py-8 mx-auto my-10 bg-white border-4 border-primary md:py-10 md:px-24 rounded-xl">
            <p className="text-center font-bold font-inter py-56">
              If this email address was used to create an account, instructions
              to reset your password will be sent to you. Please check your
              email.
            </p>
          </section>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default StepTwo;
