import { CreateWebsiteContainer } from "@components/createWebsite";
import { Button, Heading } from "@components/index";
import { addSentInvitation } from "@features/question/questionSlice";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const providers = [
  { name: "What’s your phone provider?", sms: "", mms: "" },
  { name: "Other", sms: "other", mms: "other" },
  { name: "AT&T", sms: "txt.att.net", mms: "mms.att.net" },
  {
    name: "Boost Mobile",
    sms: "sms.myboostmobile.com",
    mms: "myboostmobile.com",
  },
  {
    name: "C-spire",
    sms: "cspire1.com",
    mss: "cspire1.com",
  },
  {
    name: "Consumer Cellular",
    sms: "mailmymobile.net",
    mss: "mailmymobile.net",
  },
  {
    name: "Cricket",
    sms: "sms.cricketwireless.net",
    mss: "sms.cricketwireless.net",
  },
  {
    name: "Google Fi (Project Fi)",
    sms: "msg.fi.google.com",
    mss: "msg.fi.google.com",
  },
  {
    name: "Metro PCS",
    sms: "mymetropcs.com",
    mss: "mymetropcs.com",
  },
  {
    name: "Mint Mobile",
    sms: "mailmymobile.net",
    mss: "mailmymobile.net",
  },
  {
    name: "Page Plus",
    sms: "vtext.com",
    mss: "mypixmessages.com",
  },
  {
    name: "Red Pocket",
    sms: "mms.att.net",
    mss: "mms.att.net",
  },
  {
    name: "T-Mobile",
    sms: "tmomail.net",
    mms: "tmomail.net",
  },
  { name: "Verizon", sms: "mms.att.net", mms: "vzwpix.com" },
  {
    name: "Cricket Wireless",
    sms: "sms.cricketwireless.net",
    mms: "mms.cricketwireless.net",
  },
  { name: "Virgin Mobile", sms: "vmobl.com", mms: "vmpix.com" },
  {
    name: "Republic Wireless",
    sms: "text.republicwireless.com",
    mms: "text.republicwireless.com",
  },
  {
    name: "Simple Mobile",
    sms: "smtext.com",
    mms: "smtext.com",
  },
  {
    name: "Sprint",
    sms: "messaging.sprintpcs.com",
    mms: "pm.sprint.com ",
  },
  {
    name: "Ting",
    sms: "message.ting.com",
    mms: "message.ting.com",
  },
  {
    name: "Tracfone",
    sms: "mmst5.tracfone.com",
    mms: "mmst5.tracfone.com",
  },
  {
    name: "U.S. Cellular",
    sms: "email.uscc.net",
    mms: "mms.uscc.net",
  },
  {
    name: "Virgin Mobile",
    sms: "vmobl.com",
    mms: "vmpix.com",
  },
  {
    name: "Xfinity Mobile",
    sms: "vtext.com",
    mms: "mypixmessages.com",
  },
];

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
const fadeInLeft = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
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

const SentInvitation = () => {
  const dispatch = useDispatch();
  const { push, query } = useRouter();
  const { questions } = useSelector((state) => state.question);
  const [selectedProvider, setSelectedProvider] = useState(
    questions.sentInvitation.provider || providers[0]
  );
  const {
    watch,
    register,
    getValues,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", defaultValues: questions.sentInvitation });

  watch([
    "do_this_later",
    "all_the_above",
    "text_invite",
    "email_invite",
    "mail_out_invite",
  ]);
  const allAbove = getValues("all_the_above");
  const textInvite = getValues("text_invite");
  const emailInvite = getValues("email_invite");
  const mailInvite = getValues("mail_out_invite");

  useEffect(() => {
    if (allAbove) {
      setValue("text_invite", true);
      setValue("email_invite", true);
      setValue("mail_out_invite", true);
    }
    if (
      textInvite === "true" &&
      emailInvite === "true" &&
      mailInvite === "true"
    ) {
      setValue("all_the_above", true);
    }
    if (
      textInvite === "false" &&
      emailInvite === "false" &&
      mailInvite === "false"
    ) {
      setValue("all_the_above", false);
    }
  }, [allAbove, textInvite, mailInvite, emailInvite]);

  useEffect(() => {
    register("provider", {
      required: {
        value: true,
        message: "Please select your phone provider",
      },
    });
  }, []);

  useEffect(() => {
    setValue("provider", selectedProvider);
    if (selectedProvider.sms !== "") {
      clearErrors("provider");
    }
  }, [selectedProvider]);

  const onSubmit = (data) => {
    if (selectedProvider.sms === "") {
      setError("provider", {
        type: "required",
        message: "Please select your phone provider",
      });
      return;
    }
    dispatch(
      addSentInvitation({
        ...data,
        callingCode: 1,
      })
    );
    push({ query: { ...query, step: 5 } });
    // push('/create-website/step-5', null, { shallow: true });
  };

  return (
    <CreateWebsiteContainer seo={{ title: "Sent Invitations" }} page="4">
      <motion.form
        className={`flex flex-col items-center justify-center overflow-hidden`}
        onSubmit={handleSubmit(onSubmit)}
        variants={stagger}
      >
        <motion.div
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Heading
            label="How would you like your invitations sent?"
            color="bg-primary"
            className="!text-[36px] commonTitle"
            style={{ paddingBottom: "25px" }}
            lineStyle={{ marginBottom: "25px" }}
          />
        </motion.div>
        <motion.h2
          className="mb-5 text-[24px] font-semibold text-center font-inter  md:mb-8 subTitle"
          variants={fadeInUp}
        >
          (Check all that apply)
        </motion.h2>
        <motion.div
          className="flex flex-col justify-center w-full max-w-xl gap-5 mb-10 md:ml-28"
          variants={fadeInUp}
        >
          <div>
            <label htmlFor="phone" className="block mb-2 text-[18px] subTitle">
              Enter Phone Number
            </label>
            <div className="flex items-center">
              <Listbox value={`USA`}>
                <div className="relative -mr-2">
                  <Listbox.Button className="bg-white cursor-pointer inline-block font-semibold py-[6px] md:py-[10px] px-4 placeholder-gray-400 border-[3px] border-gray-200 rounded-[5px] -mr-1">
                    <img
                      src="/logos/usa___logo.svg"
                      alt={`USA`}
                      className="object-cover mr-8 rounded-full w-7 h-7 md:mr-4"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        className="w-4 h-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.05473 10.6C6.10442 10.6722 6.17091 10.7312 6.24848 10.772C6.32604 10.8128 6.41235 10.8341 6.49998 10.8341C6.58761 10.8341 6.67392 10.8128 6.75148 10.772C6.82905 10.7312 6.89554 10.6722 6.94523 10.6L11.8202 3.55837C11.8767 3.47715 11.9097 3.38202 11.9159 3.28332C11.9221 3.18461 11.9011 3.0861 11.8552 2.9985C11.8093 2.9109 11.7402 2.83755 11.6556 2.78642C11.5709 2.73529 11.4739 2.70834 11.375 2.7085H1.62498C1.52631 2.7089 1.42962 2.7362 1.34531 2.78745C1.26099 2.8387 1.19224 2.91197 1.14646 2.99937C1.10067 3.08677 1.07957 3.185 1.08543 3.28349C1.09129 3.38199 1.1239 3.47702 1.17973 3.55837L6.05473 10.6Z"
                          fill="#C4C4C4"
                        />
                      </svg>
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-50 max-w-xs py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      <Listbox.Option
                        className={({ active }) =>
                          `${
                            active
                              ? "text-amber-900 bg-secondary-alternative/20"
                              : "text-gray-900"
                          }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                        }
                        value={`USA`}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {`USA`}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? "text-amber-600" : "text-amber-600"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <input
                id="phone"
                type="tel"
                className="max-w-sm w-full focus:!border-gray-200 bg-white inline-block font-normal py-2 md:py-3 px-4 pl-5 placeholder-gray-400 border-[3px] border-gray-200 rounded-[5px] subTitle"
                placeholder="Enter phone number"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone numbers are required!",
                  },
                  pattern: {
                    value: /^([0-9\(\)\/\+ \-]*)$/,
                    message: "Must be a valid phone number",
                  },
                })}
              />
            </div>
            {errors.phone && (
              <p className="mt-2 text-sm font-light text-red-400">
                {errors?.phone?.message}
              </p>
            )}
          </div>
          <div>
            <Listbox value={selectedProvider} onChange={setSelectedProvider}>
              <div className="relative">
                <Listbox.Button className="flex items-center justify-between max-w-[28.4rem] text-left w-full focus:!border-gray-200 bg-white font-normal py-2 md:py-3 px-4 text-gray-400 border-[3px] border-gray-200 rounded-[5px]">
                  <span>{selectedProvider?.name}</span>
                  <SelectorIcon className="w-5 h-5" />
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-50 max-h-48 overflow-auto max-w-[28.4rem] text-left w-full focus:!border-gray-200 bg-white font-normal text-sm border-[3px] border-gray-200 rounded-[5px]">
                    {providers.map((provider, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `${
                            active
                              ? "text-amber-900 bg-secondary-alternative/20"
                              : "text-gray-900"
                          }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                        }
                        value={provider}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {provider.name}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? "text-amber-600" : "text-amber-600"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            {errors.provider && (
              <p className="mt-2 text-sm font-light text-red-400">
                {errors?.provider?.message}
              </p>
            )}
          </div>
          <motion.div variants={stagger} className="flex flex-col gap-3">
            <motion.div
              className="flex items-center space-x-3"
              variants={fadeInLeft}
            >
              <input
                type="checkbox"
                id="text_invite"
                value={true}
                defaultChecked
                className="text-primary rounded-md border-2 border-primary w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                {...register("text_invite")}
              />
              <label
                htmlFor="text_invite"
                className="text-lg font-light cursor-pointer font-inter customLabel"
              >
                Text invitation 📲{" "}
                <strong className="text-lg font-semibold customLabel">
                  (Free)
                </strong>
              </label>
            </motion.div>
            <motion.div
              className="flex items-center space-x-3"
              variants={fadeInLeft}
            >
              <input
                type="checkbox"
                id="email_invite"
                value={true}
                defaultChecked
                className="text-primary rounded-md border-2 border-primary w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                {...register("email_invite")}
              />
              <label
                htmlFor="email_invite"
                className="text-lg font-light cursor-pointer font-inter customLabel"
              >
                Email invitation 🖥{" "}
                <strong className="text-lg font-semibold customLabel">
                  (Free)
                </strong>
              </label>
            </motion.div>
            <motion.div
              className="flex items-center space-x-3"
              variants={fadeInLeft}
            >
              <input
                type="checkbox"
                id="mail_out_invite"
                value={true}
                className="text-primary rounded-md border-2 border-primary w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                {...register("mail_out_invite")}
              />
              <label
                htmlFor="mail_out_invite"
                className="relative text-lg font-light cursor-pointer font-inter customLabel"
              >
                Mail Out Invitation (Pricing will depend quantity. 💌)
                <h2 className="absolute right-0 text-xs -bottom-3">
                  Prints, envelopes & postage
                </h2>
              </label>
            </motion.div>
            <motion.div
              className="flex items-center space-x-3"
              variants={fadeInLeft}
            >
              <input
                type="checkbox"
                id="all_the_above"
                value={true}
                className="text-primary rounded-md border-2 border-primary w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                {...register("all_the_above")}
              />
              <label
                htmlFor="all_the_above"
                className="text-lg font-light cursor-pointer font-inter customLabel"
              >
                All-of-the Above
              </label>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center gap-5 my-1 text-center md:my-5 sm:flex-nowrap"
          variants={fadeInUp}
        >
          <Button
            label="Back"
            className="opacity-50 !bg-[#bebebe] !rounded-[10px] w-[178px] h-[59px]"
            onClick={() => push({ query: { ...query, step: 3 } })}
          />
          <Button
            label="Next"
            type="submit"
            className="!rounded-[10px] w-[178px] h-[59px]"
          />
        </motion.div>
      </motion.form>
    </CreateWebsiteContainer>
  );
};

export default SentInvitation;
