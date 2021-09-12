import { Button, Heading, CreateWebsiteContainer } from "@components/index";
import { addCoupleName } from "@features/question/questionSlice";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const CoupleName = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { questions } = useSelector((state) => state.question);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", defaultValues: questions.coupleName });

  const onSubmit = (data) => {
    dispatch(addCoupleName(data));
    push({ query: { step: 2 } });
    // push('/create-website/step-2', null, { shallow: true });
  };

  return (
    <CreateWebsiteContainer seo={{ title: "Couple Names" }} page="1">
      <form
        className={`flex flex-col items-center justify-center w-full -mt-9 sm:mt-0`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2
          className="pb-8 mx-auto text-[36px] text-center "
        >
          What's your name? & Who's your lucky spouse-to-be?
        </h2>
        <div className="w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-primary" />
        
        {/* </motion.div> */}
        <motion.div
          className="flex flex-col flex-wrap items-center gap-2 md:gap-5 xl:flex-row"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 sm:flex-nowrap">
            <div className="max-w-[283px] w-full">
              <input
                type="text"
                className="w-full text-sm md:text-lg font-normal py-2 md:py-3 px-3 md:px-4 placeholder-primary border-[3px] border-primary rounded-[5px]"
                placeholder="First Name"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "First name is required!",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Must be a valid name",
                  },
                })}
              />
              <p className="h-4 mt-2 text-sm font-light text-red-400">
                {errors?.firstName?.message}
              </p>
            </div>
            <div className="max-w-[283px] w-full">
              <input
                type="text"
                className="w-full text-sm md:text-lg font-normal py-2 md:py-3 px-3 md:px-4 placeholder-primary border-[3px] border-primary rounded-[5px]"
                placeholder="Last Name"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Last name is required!",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Must be a valid name",
                  },
                })}
              />
              <p className="h-4 mt-2 text-sm font-light text-red-400">
                {errors?.lastName?.message}
              </p>
            </div>
          </div>
          <h2 className="text-3xl text-center font-alice md:text-4xl">&</h2>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:flex-nowrap">
            <div className="max-w-[283px] w-full">
              <input
                type="text"
                className="w-full text-sm md:text-lg font-normal py-2 md:py-3 px-3 md:px-4 placeholder-primary border-[3px] border-primary rounded-[5px]"
                placeholder="First Name"
                {...register("spouseFirstName", {
                  required: {
                    value: true,
                    message: "First name is required!",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Must be a valid name",
                  },
                })}
              />
              <p className="h-4 mt-2 text-sm font-light text-red-400">
                {errors?.spouseFirstName?.message}
              </p>
            </div>
            <div className="max-w-[283px] w-full">
              <input
                type="text"
                className="w-full text-sm md:text-lg font-normal py-2 md:py-3 px-3 md:px-4 placeholder-primary border-[3px] border-primary rounded-[5px]"
                placeholder="Last Name"
                {...register("spouseLastName", {
                  required: {
                    value: true,
                    message: "Last name is required!",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: "Must be a valid name",
                  },
                })}
              />
              <p className="h-4 mt-2 text-sm font-light text-red-400">
                {errors?.spouseLastName?.message}
              </p>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-wrap items-center gap-5 my-3 text-center md:my-10 sm:flex-nowrap">
          <Button
            label="Back"
            className="opacity-50 !bg-[#bebebe] !rounded-[10px]"
            onClick={() => push("/create-website", null, { shallow: true })}
          />
          <Button label="Next" type="submit" className="!rounded-[10px]" />
        </div>
      </form>
    </CreateWebsiteContainer>
  );
};

export default CoupleName;
