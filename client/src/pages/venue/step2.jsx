import { Button, Heading, CreateWebsiteContainer } from "@components/index";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const BusinessLink = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log("bisnessName", data);
    // push({ query: { step: 2 } });
  };

  return (
    <CreateWebsiteContainer seo={{ title: "Couple Names" }} page="1">
      <form
        className={`flex flex-col items-center justify-center w-full -mt-9 sm:mt-0`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="pb-8 mx-auto text-[36px] text-center commonTitle">
          What Is Your Website URL ?
        </h2>
        <div className="w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-primary" />

        {/* </motion.div> */}
        <motion.div
          className="flex flex-col flex-wrap items-center justify-center gap-2 md:gap-5 xl:flex-row"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-nowrap">
            <div className="max-w-[700px] sm:w-[700px] w-full flex-col flex  items-start justify-center">
              <input
                type="text"
                className="max-w-[700px] sm:w-[700px] w-full text-sm md:text-lg font-normal py-2 md:py-3 px-3 md:px-4 placeholder-primary border-[3px] border-primary rounded-[5px]"
                placeholder="www.beweddy.com"
                {...register("websiteLink", {
                  required: {
                    value: true,
                    message: "Website Link name is required!",
                  },
                })}
              />

              <p className="h-4 mt-2 text-sm font-light text-red-400">
                {errors?.websiteLink?.message}
              </p>
            </div>
            <h3 className="font-inter font-bold font-[24px] capitalize leading-[29px]">
              Want us to build a custom website?
            </h3>
          </div>
        </motion.div>
        <div className="flex flex-wrap items-center gap-5 my-3 text-center md:my-10 sm:flex-nowrap">
          <Button
            label="Back"
            className="opacity-50 !bg-[#bebebe] !rounded-[10px] !w-[178px] !h-[59px]"
            onClick={() => push("/create-website", null, { shallow: true })}
          />
          <Button
            label="Next"
            type="submit"
            className="!rounded-[10px] !w-[178px] !h-[59px]"
          />
        </div>
      </form>
    </CreateWebsiteContainer>
  );
};

export default BusinessLink;
