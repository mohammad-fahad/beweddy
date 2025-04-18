import Head from "next/head";
import { Footer } from "@components/index";
import { withAuthRoute } from "@hoc/withAuthRoute";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import SwiperCore, { Lazy, Autoplay } from "swiper";
import { useForm } from "react-hook-form";
import InputField from "@components/shared/InputField";
import { useEffect, useState, useCallback, useRef } from "react";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";
import DatePicker from "react-datepicker";
import { WeddingNameDatePicker } from "@components/shared";
import { isEmpty } from "lodash";
import moment from "moment";
import { compareDate } from "@helpers/index";
import { toPng } from "html-to-image";
import { nanoid } from "nanoid";
import Logo from "@components/shared/Logo";
import { useSelector } from "react-redux";
import { fileUploader } from "@services/Uploader";

const WeddingSchedule = () => {
  const { user } = useSelector((state) => state.user);
  const [uploading, setUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(
    "/images/dashboardPicture.png"
  );

  console.log(uploadedFile);
  // WeddingName Picker
  const [selectWeddingDay, setSelectWeddingDay] = useState(new Date());
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
    defaultValues: {
      weddingName: user.fullName,
      bridesName: `${user.questions.spouseFirstName} ${user.questions.spouseLastName}`,
      groomName: `${user.questions.firstName} ${user.questions.lastName}`,
    },
    shouldFocusError: false,
    shouldUnregister: true,
  });

  // Watch Input Fields
  watch(["WeddingDate", "tba"]);
  const WeddingDate = getValues("WeddingDate");
  const tba = getValues("tba");

  const onSubmit = (data) => {};

  useEffect(() => {
    if (isEmpty(WeddingDate) || compareDate(WeddingDate)) {
      clearErrors("WeddingDate");
    } else {
      setError("WeddingDate", {
        type: "validate",
        message: "Seems like you have selected past date",
      });
    }
  }, [WeddingDate]);

  useEffect(() => {
    if (tba) {
      setSelectWeddingDay(null);
      clearErrors("WeddingDate");
      setValue("WeddingDate", "");
    }
  }, [tba]);

  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(1990, getYear(new Date()) + 5);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const ref = useRef();

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `Wedding_Schedule_Sheet${nanoid(2)}.png`;
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

  const handleAvatar = async (e) => {
    const file = e.target.files[0];
    console.log(file);
    try {
      setUploading(true);
      const data = await fileUploader(file);
      setUploadedFile(data.secure_url);
      setUploading(false);
    } catch (err) {
      setUploading(false);
      console.error(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Beweddy | Wedding Schedule</title>
      </Head>

      <div className="m-auto">
        <DashboardTopBar coupleName />
        <DashboardLayout shadow>
          <div className="space-y-10 bg-white shadow-box" ref={ref}>
            <div className="max-w-[1300px] w-full">
              <div className="container p-1 sm:p-10 ">
                <div className="flex items-center justify-center">
                  <Logo />
                </div>
                <div className="w-full mx-auto border-4 border-[#E5E5E5] rounded-lg mt-5 ">
                  <div className="w-full " style={{ position: "relative" }}>
                    {/* <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={uploadedFile}
                        alt=""
                        className="w-full h-full"
                      />
                    </div> */}
                    <div className="absolute bg-white bottom-2 right-2">
                      {/* <div className="relative focus:outline-none">
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
                      </div> */}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center py-2 md:py-5 bg-secondary-alternative ">
                    <p className="font-medium text-center text-[32px] !font-alice flex items-center subTitle">
                      <span>
                        <img src="/icons/todo.svg" alt="" className="mr-2" />
                      </span>
                      Wedding Schedule Sheet
                    </p>
                    <p>Please fill out and send to your venue</p>
                  </div>

                  <div className="container p-3 sm:p-16">
                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12 ">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Wedding Name & Date :
                          </p>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            //placeholder="Your Wedding Name"
                            {...register("weddingName", {
                              required: {
                                value: true,
                                message: "Spouse last name is required!",
                              },
                            })}
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          {/* <div className="col-span-12 sm:col-span-6">
                            <InputField
                              label=""
                              
                              value={moment(
                                user?.questions?.weddingDay?.weddingDate
                              ).format("LL")}
                              //placeholder="Your Wedding Name"
                            />
                          </div> */}
                          <div>
                            <DatePicker
                              renderCustomHeader={({
                                date,
                                changeYear,
                                changeMonth,
                                decreaseMonth,
                                increaseMonth,
                                prevMonthButtonDisabled,
                                nextMonthButtonDisabled,
                              }) => (
                                <div
                                  style={{
                                    margin: 10,
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <button
                                    onClick={decreaseMonth}
                                    disabled={prevMonthButtonDisabled}
                                  >
                                    {"<"}
                                  </button>
                                  <select
                                    value={getYear(date)}
                                    onChange={({ target: { value } }) =>
                                      changeYear(value)
                                    }
                                  >
                                    {years.map((option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>

                                  <select
                                    value={months[getMonth(date)]}
                                    onChange={({ target: { value } }) =>
                                      changeMonth(months.indexOf(value))
                                    }
                                  >
                                    {months.map((option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>

                                  <button
                                    onClick={increaseMonth}
                                    disabled={nextMonthButtonDisabled}
                                  >
                                    {">"}
                                  </button>
                                </div>
                              )}
                              selected={selectWeddingDay}
                              popperPlacement="top-end"
                              onChange={(date) => {
                                setSelectWeddingDay(date);
                                setValue(
                                  "WeddingDate",
                                  moment(date).format("LL")
                                );

                                if (tba) {
                                  setValue("tba", false);
                                }
                              }}
                              customInput={
                                <WeddingNameDatePicker {...{ errors }} />
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Brides Full Name & Number   */}

                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Bride's/Partner's Name & Number
                          </p>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            //placeholder="Your Brides Name"
                            {...register("bridesName")}
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            //placeholder="(671) 555-0110"
                            {...register("bridesNumber")}
                          />
                        </div>
                      </div>
                      {/* Groom’s Full Name & Number */}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Groom’s/Partner's Name & Number
                          </p>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            // value={`${user.questions.firstName} ${user.questions.lastName}`}
                            //placeholder="Your Groom’s Name"
                            {...register("groomName")}
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            //placeholder="(671) 555-0110"
                            {...register("groomNumber")}
                          />
                        </div>
                      </div>
                      {/* Bride’s Parent’s Name & Number  */}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Bride’s/Partner's Parent’s Name & Number
                          </p>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            //placeholder="Your Bride’s Parent’s Name"
                            {...register("brideParentName")}
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            //placeholder="(671) 555-0110"
                            {...register("brideParentNumber", {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      {/*Groom’s Parent’s Name & Number*/}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Groom’s/Partner's Parent’s Name & Number
                          </p>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            //placeholder="Your Groom’s Parent’s Name"
                            {...register("groomParentName")}
                          />
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            //placeholder="(671) 555-0110"
                            {...register("groomParentNumber", {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      {/*Number To Contact On Day Of*/}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Number To Contact On Day Of
                          </p>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <InputField
                            label=""
                            //placeholder="+1 650-385-8068"
                            {...register("numberToContact")}
                          />
                        </div>
                      </div>
                      {/* Arrival/Set-Up Time === Cocktail Hour Time */}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Arrival/Set-Up Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("americaTime")}
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Cocktail Hour Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("cocktail")}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Event Room === Luncheon / Dinner Time */}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Event Room
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("eventRoom")}
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Luncheon / Dinner Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("luncheonTime")}
                            />
                          </div>
                        </div>
                      </div>

                      {/*Package or Basic Rental === Luncheon / Dinner Time */}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Package or Basic Rental
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("packageTental")}
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Reception Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("receptionTime")}
                            />
                          </div>
                        </div>
                      </div>
                      {/*Bridal Party Count === Cake Cutting Time */}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Bridal Party Count
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("bridalParty")}
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Cake Cutting Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("cakeCutting")}
                            />
                          </div>
                        </div>
                      </div>
                      {/*Ceremony Time === First Dance Time  */}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Ceremony Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("ceremonyTime")}
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            First Dance Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("firstDance")}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Ceremony Song(s) === Bouquet Toss Time  */}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Ceremony Song(s)
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("ceremonySong")}
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Bouquet Toss Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("bouquestTime")}
                            />
                          </div>
                        </div>
                      </div>
                      {/*Photo Time === Luncheon / Dinner Time */}
                      <div className="grid w-full grid-cols-12 gap-1">
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Photo Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("photoTime")}
                            />
                          </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                          <p className="my-2 font-[14px] font-bold text-[#000000]  ">
                            Departure Time
                          </p>
                          <div
                            style={{ width: "60%" }}
                            className="customFullWidth"
                          >
                            <InputField
                              label=""
                              //placeholder="Note"
                              {...register("departure")}
                            />
                          </div>
                        </div>
                      </div>

                      {/* <input
                type="submit"
                className="bg-[#FFF4F8] border-2 rounded w-[160px] h-[50px] cursor-pointer mt-8 "
              /> */}
                      <button
                        // type="submit"
                        className="bg-[#FFF4F8] border-2 rounded w-[160px] h-[50px] cursor-pointer mt-8 "
                        onClick={onButtonClick}
                      >
                        Download
                      </button>
                    </form>
                  </div>
                </div>
                <footer className="container mt-5">
                  <h3 className="text-[14px] font-bold text-center">
                    Powered by{" "}
                    <span className="font-semibold">BeWeddy.com</span>
                  </h3>
                </footer>
              </div>
            </div>
          </div>
        </DashboardLayout>
        {/* <Footer hideSocial /> */}
      </div>
    </>
  );
};

export default withAuthRoute(WeddingSchedule);
