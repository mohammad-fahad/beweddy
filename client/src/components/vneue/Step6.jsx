import { Heading, Loader } from "@components/index";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { attemptSignup } from "@features/auth/authActions";
import { useEffect, useState ,Fragment } from "react";
import { resetQuestions } from "@features/question/questionSlice";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";

const vneueSelector = [{ id: 1, name: "Sleepy Ridge" }, { id: 1, name: "Sleepy Ridge 1" }, { id: 1, name: "Sleepy Ridge 2" }, { id: 1, name: "Sleepy Ridge 3" }];

const Step6 = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.venue);
  const { success, loading } = useSelector((state) => state.auth);
  const [selectedProvider, setSelectedProvider] = useState(vneueSelector[0]);
  const { push } = useRouter();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    if (data) {
      dispatch(
        attemptSignup({
          ...data,
          questions,
          role: "venue",
        })
      );
    }
  };

  useEffect(() => {
    if (success) {
      dispatch(resetQuestions());
    }
  }, [success]);

  return (
    <>
      <Head>
        <title>BeWeddy | Get Started</title>
      </Head>
      {loading && <Loader />}
      <motion.div className={`bg-gradient-to-br from-[#FCE3EB] to-white`}>
        <div className="container flex items-center justify-center min-h-screen">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <section
              className={`bg-white border-4 my-5 md:my-10 border-primary py-5 md:py-10 px-10 md:px-24 max-w-xl w-full mx-auto rounded-xl h-[400px]`}
            >
              <h2 className="pb-8 mx-auto text-[36px] text-center commonTitle">
                Select Your Venue
              </h2>
              <div className="w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-primary" />

              <Listbox value={selectedProvider} onChange={setSelectedProvider} className='w-full ' >
                <div className="relative mt-1 w-full">
                  <Listbox.Button className="relative font-inter rounded-[5px] border-2 border-secondary/20 py-3 pl-5 pr-10 text-base font-semibold w-[370px]">
                    <span className="block truncate">
                      {" "}
                      {selectedProvider.name}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute min-w-[370px] py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {vneueSelector.map((provider, providerIdx) => (
                        <Listbox.Option
                          key={providerIdx}
                          className={({ active }) =>
                            `${
                              active
                                ? "text-secondary bg-secondary-alternative/50"
                                : "text-gray-900"
                            }
                            cursor-pointer select-none relative py-2 pl-10 pr-4 font-medium`
                          }
                          value={provider}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? "font-semibold" : "font-medium"
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
            </section>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Step6;
