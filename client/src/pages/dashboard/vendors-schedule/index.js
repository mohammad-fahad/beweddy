import Head from "next/head";
import { Footer } from "@components/index";
import { useCallback, useRef, useState, useEffect } from "react";
import { withAuthRoute } from "@hoc/withAuthRoute";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import SwiperCore, { Lazy, Autoplay } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InputField from "@components/shared/InputField";
import { useForm } from "react-hook-form";
import { toPng } from "html-to-image";
import { nanoid } from "nanoid";
import Logo from "@components/shared/Logo";
import { fileUploader } from "@services/Uploader";
SwiperCore.use([Lazy, Autoplay]);

const VendorsSchedule = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(
    "/images/dashboardPicture.png"
  );

  console.log(uploadedFile);

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

  const ref = useRef();

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `Vendors${nanoid(2)}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  useEffect(() => {
    if (uploadedFile) {
      setValue("image", uploadedFile);
    }
  }, [uploadedFile]);

  

  return (
    <>
      <Head>
        <title>Beweddy | Vendors Schedule</title>
      </Head>

      <div className="m-auto">
        <DashboardTopBar coupleName />
        <DashboardLayout shadow>
          <div className="space-y-10 bg-white shadow-box" ref={ref}>
            <div className="max-w-[1300px] w-full">
              <div className="container p-1 sm:p-10 ">
                <div className="flex items-center justify-center">
                  {/* <img src="/images/logo.png" alt="" className="w-[180px]" /> */}
                  <Logo />
                </div>
                <div className="w-full border-4 border-[#E5E5E5] rounded-lg mt-5 ">
                  {/* <div className="w-full " style={{ position: "relative" }}>
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={uploadedFile}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="absolute bg-white bottom-2 right-2">
                      <div className="relative focus:outline-none">
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          onChange={handleAvatar}
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer bg-[#ffffff] py-2 flex px-4 rounded"
                        >
                          <img
                            src="/camera.svg"
                            alt="camera"
                            style={{ marginRight: "5px", width: "20px" }}
                          />
                          Edit Wedding Image
                        </label>
                      </div>
                    </div>
                  </div> */}

                  <div className="flex items-center  flex-col justify-center py-2 md:py-5 bg-[#FFD6D8] ">
                    <p className="font-medium text-center text-[32px] !font-alice flex items-center">
                      <span>
                        <img src="/icons/home.png" alt="" className="mr-2" />
                      </span>{" "}
                      Vendors
                    </p>
                    <p className="text-[14px] font-inter">
                      Please include Social Media Handles and Number and/or
                      email
                    </p>
                    <p className="text-[14px] font-inter">
                      Please fill out and send to your venue
                    </p>
                  </div>

                  {/* form */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-5 md:p-20 sm:10"
                  >
                    {/* Florist+Arrival Time */}
                    <div className="grid w-full grid-cols-12 gap-2 ">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="Florist+Arrival Time"
                          //placeholder="Note"
                          {...register("floristArrivalTime")}
                        />
                      </div>
                    </div>
                    {/* Caterer+Arrival Time  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="Caterer+Arrival Time "
                          //placeholder="Note"
                          {...register("catererArrivalTime")}
                        />
                      </div>
                    </div>
                    {/* Cake+Arrival Time  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="Cake+Arrival Time"
                          //placeholder="Note"
                          {...register("cakeArrivalTime")}
                        />
                      </div>
                    </div>

                    {/* Photo+Arrival Time  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="Photo+Arrival Time"
                          //placeholder="Note"
                          {...register("photoArrivalTime")}
                        />
                      </div>
                    </div>

                    {/* video+Arrival Time  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="video+Arrival Time"
                          //placeholder="Note"
                          {...register("videoArrivalTime")}
                        />
                      </div>
                    </div>
                    {/* DJ+Arrival Time  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="DJ+Arrival Time"
                          //placeholder="Note"
                          {...register("DJArrivalTime")}
                        />
                      </div>
                    </div>
                    {/* MUA/Hair+Arrival Time  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="MUA/Hair+Arrival Time"
                          //placeholder="Note"
                          {...register("muaHairArrivalTime")}
                        />
                      </div>
                    </div>

                    {/* Rentals+Arrival Time  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="Rentals+Arrival Time"
                          //placeholder="Note"
                          {...register("rentalsArrivalTime")}
                        />
                      </div>
                    </div>

                    {/* Dress  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="Dress"
                          //placeholder="Note"
                          {...register("dress")}
                        />
                      </div>
                    </div>
                    {/* Ring  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="Ring"
                          //placeholder="Note"
                          {...register("Ring")}
                        />
                      </div>
                    </div>
                    {/* Suit/Tie  */}
                    <div className="grid w-full grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-12">
                        <InputField
                          label="Suit/Tie"
                          //placeholder="Note"
                          {...register("suitTie")}
                        />
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
                      // type="submit"
                      className="bg-[#FFF4F8] border-2 rounded w-[160px] h-[50px] cursor-pointer mt-8 "
                      onClick={onButtonClick}
                    >
                      Download
                    </button>
                  </form>
                </div>
                <footer className="container mt-5">
                  <h3 className="text-[14px] font-inter text-center">
                    Powered by{" "}
                    <span className="font-semibold">BeWeddy.com</span>
                  </h3>
                </footer>
              </div>
            </div>
          </div>
        </DashboardLayout>
        <Footer hideSocial />
      </div>
    </>
  );
};

export default withAuthRoute(VendorsSchedule);
