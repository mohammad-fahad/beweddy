import { Button, Heading, CreateWebsiteContainer } from "@components/index";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const LoginStep = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "all" });

  watch("accountType");

  const onSubmit = (data) => {
    console.log("login step", data);
    // push({ query: { step: 2 } });
  };

  return (
    <CreateWebsiteContainer seo={{ title: "Couple Names" }} page="1">
      <div className="bg-[#ffffff] py-16 rounded border-2 border-current">
        <form
          className={`flex flex-col items-center justify-center w-full -mt-9 sm:mt-0`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="pb-8 mx-auto text-[36px] text-center commonTitle">
            Create Your Account
          </h2>
          <div className="w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-primary" />

          {/* </motion.div> */}
          <motion.div
            className="flex flex-col flex-wrap items-center justify-center gap-2 md:gap-5 xl:flex-row"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3 sm:flex-nowrap">
              <div className="max-w-[700px] sm:w-[700px] w-full flex-col flex  items-center justify-center ">
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      {...register("accountType")}
                      defaultChecked
                      value="couple"
                    />
                    <span className="ml-2">For Couple</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      value="venue"
                      {...register("accountType")}
                    />
                    <span className="ml-2">For Venue</span>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-wrap items-center gap-5 my-3 text-center md:my-10 sm:flex-nowrap">
            <Button
              label="Next"
              type="submit"
              className="!rounded-[10px] !w-[178px] !h-[59px]"
            />
          </div>
        </form>
      </div>
    </CreateWebsiteContainer>
  );
};

export default LoginStep;
