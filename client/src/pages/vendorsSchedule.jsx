import Head from "next/head";
import SwiperCore, { Lazy, Autoplay } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TimePicker from "react-times";
import "react-times/css/material/default.css";
import "react-times/css/classic/default.css";
import InputField from "@components/shared/InputField";
import { useForm } from "react-hook-form";
SwiperCore.use([Lazy, Autoplay]);
const VendorsSchedule = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: new Date(),
    shouldFocusError: false,
    shouldUnregister: true,
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  // timer
  const onTimeChange = (options) => {
    console.log(options);
  };

  const onFocusChange = (focusStatue) => {
    console.log(focusStatue);
  };
  return (
    <>
      <Head>
        <title>Beweddy Wedding schedule</title>
      </Head>

      <div className="container p-1 sm:p-10 ">
        <div className="flex items-center justify-center">
          <img src="/images/logo.png" alt="" className="w-[180px]" />
        </div>
        <div className="w-full border-4 border-[#E5E5E5] rounded-lg mt-5 ">
          <div className="w-full">
            <div className="aspect-w-16 aspect-h-9">
              <img src="/images/banner.png" alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="flex items-center  flex-col justify-center py-2 md:py-5 bg-[#FFD6D8] ">
            <p className="font-medium text-center text-[32px] !font-alice flex items-center">
              <span>
                <img src="/icons/home.png" alt="" className="mr-2" />
              </span>{" "}
              Vendors
            </p>
            <p className="text-[14px] font-inter">
              Please include SOcial Media Handles and Number and/or email
            </p>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-5 md:p-20 sm:10">
            {/* Florist+Arrival Time */}
            <div className="grid w-full grid-cols-12 gap-2 ">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="Florist+Arrival Time"
                  placeholder=""
                  {...register("floristArrivalTime", { required: true })}
                />
                {errors.floristArrivalTime && (
                  <span>This field is required</span>
                )}
              </div>
            </div>
            {/* Caterer+Arrival Time  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="Caterer+Arrival Time "
                  placeholder=""
                  {...register("catererArrivalTime", { required: true })}
                />
                {errors.catererArrivalTime && (
                  <span>This field is required</span>
                )}
              </div>
            </div>
            {/* Cake+Arrival Time  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="Cake+Arrival Time"
                  placeholder=""
                  {...register("cakeArrivalTime", { required: true })}
                />
                {errors.cakeArrivalTime && <span>This field is required</span>}
              </div>
            </div>

            {/* Photo+Arrival Time  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="Photo+Arrival Time"
                  placeholder=""
                  {...register("photoArrivalTime", { required: true })}
                />
                {errors.photoArrivalTime && <span>This field is required</span>}
              </div>
            </div>

            {/* video+Arrival Time  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="video+Arrival Time"
                  placeholder=""
                  {...register("videoArrivalTime", { required: true })}
                />
                {errors.videoArrivalTime && <span>This field is required</span>}
              </div>
            </div>
            {/* DJ+Arrival Time  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="DJ+Arrival Time"
                  placeholder=""
                  {...register("DJArrivalTime", { required: true })}
                />
                {errors.DJArrivalTime && <span>This field is required</span>}
              </div>
            </div>
            {/* MUA/Hair+Arrival Time  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="MUA/Hair+Arrival Time"
                  placeholder=""
                  {...register("muaHairArrivalTime", { required: true })}
                />
                {errors.muaHairArrivalTime && (
                  <span>This field is required</span>
                )}
              </div>
            </div>

            {/* Rentals+Arrival Time  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="Rentals+Arrival Time"
                  placeholder=""
                  {...register("rentalsArrivalTime", { required: true })}
                />
                {errors.rentalsArrivalTime && (
                  <span>This field is required</span>
                )}
              </div>
            </div>

            {/* Dress  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="Dress"
                  placeholder=""
                  {...register("dress", { required: true })}
                />
                {errors.dress && <span>This field is required</span>}
              </div>
            </div>
            {/* Ring  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="Ring"
                  placeholder=""
                  {...register("Ring", { required: true })}
                />
                {errors.Ring && <span>This field is required</span>}
              </div>
            </div>
            {/* Suit/Tie  */}
            <div className="grid w-full grid-cols-12 gap-2">
              <div className="col-span-12 sm:col-span-12">
                <InputField
                  label="Suit/Tie"
                  placeholder=""
                  {...register("suitTie", { required: true })}
                />
                {errors.suitTie && <span>This field is required</span>}
              </div>
            </div>
            {/* alcohol */}
            <div className="mt-8">
              <span className="mr-4">Alcohol</span>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  {...register("alcohol")}
                  defaultChecked
                  value="yes"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  value="no"
                  {...register("alcohol")}
                />
                <span className="ml-2">No</span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#FFF4F8] border-2 rounded w-[160px] h-[50px] cursor-pointer mt-8 "
            >
              Download
            </button>
          </form>
        </div>
        <footer className="container mt-5">
          <h3 className="text-[14px] font-inter text-center">
            Powered by <span className="font-semibold">BeWeddy.com</span>
          </h3>
        </footer>
      </div>
    </>
  );
};

export default VendorsSchedule;
