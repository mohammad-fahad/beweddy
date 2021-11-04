import { Button, Heading, CreateWebsiteContainer } from "@components/index";
import { addplan } from "@features/question/venueSlice";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Package = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    // console.log("bisnessName", data);
    // dispatch(addBusinessLink(data));
    dispatch(addplan("free"));
    push({ query: { step: 4 } });
  };

  return (
    <CreateWebsiteContainer seo={{ title: "Couple Names" }} page="1">
      <form
        className={`flex flex-col items-center justify-center w-full -mt-9 sm:mt-0`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="pb-8 mx-auto text-[36px] text-center commonTitle">
          Plan & Pricing
        </h2>
        <div className="w-48 mx-auto h-[2px] md:h-[4px] mb-16 bg-primary" />

        {/* </motion.div> */}
        <motion.div
          className="flex flex-col flex-wrap items-center justify-center gap-2 md:gap-5 xl:flex-row"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div class="grid grid-cols-12 w-full border-2 border-current rounded max-w-[1027px]  p-9 ">
            <div class="sm:col-span-6 col-span-12 p-2">
              <h1 className="font-inter font-semibold text-[32px] leading-[44px]">
                Premium Subscription Plan
              </h1>
              <h3 className="font-inter font-normal text-[24px] leading-[34px] mt-3">
                For venue that need advanced features, services and support
              </h3>
            </div>
            <div class="sm:col-span-6 col-span-12 p-2 flex flex-col items-center justify-center">
              <h1 className="font-inter font-semibold text-[32px] leading-[44px]">
                $50/m
              </h1>
              <button className="border-2 border-current rounded px-5 py-3 text-[16px] font-bold mt-3">
                Free 30 Day Trial
              </button>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-wrap items-center gap-5 my-3 text-center md:my-10 sm:flex-nowrap">
          <Button
            label="Back"
            className="opacity-50 !bg-[#bebebe] !rounded-[10px] !w-[178px] !h-[59px]"
            onClick={() => push({ query: { step: 3 } })}
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

export default Package;
