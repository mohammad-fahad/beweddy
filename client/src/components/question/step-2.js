import {
  Button,
  Heading,
  CreateWebsiteContainer,
  WeddingDatePicker,
  FirstReceptionDatePicker,
  SecondReceptionDatePicker,
} from "@components/index";
import { addWeddingDay } from "@features/question/questionSlice";
import moment from "moment";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isEmpty } from "lodash";
import { compareDate } from "@helpers/index";

import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";
import "react-datepicker/dist/react-datepicker.css";

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const WeddingDay = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.question);
  const { push } = useRouter();

  // WeddingDate Picker
  const _weddingDate = questions?.weddingDay?.weddingDate
    ? new Date(questions?.weddingDay?.weddingDate)
    : "";

  const [selectWeddingDay, setSelectWeddingDay] = useState(_weddingDate);

  // First Reception Picker
  const _firstReception = questions?.weddingDay?.firstReception
    ? new Date(questions?.weddingDay?.firstReception)
    : "";

  const [selectFirstReception, setSelectFirstReception] =
    useState(_firstReception);

  // Second Reception Picker
  const _secondReception = questions?.weddingDay?.secondReception
    ? new Date(questions?.weddingDay?.secondReception)
    : "";

  const [selectSecondReception, setSelectSecondReception] =
    useState(_secondReception);

  // React Hook Form
  const {
    watch,
    getValues,
    register,
    unregister,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: questions.weddingDay,
    shouldFocusError: false,
    shouldUnregister: true,
  });

  // Watch Input Fields
  watch([
    "have2Reception",
    "tba",
    "weddingDate",
    "firstReception",
    "secondReception",
  ]);

  // Input Fields as Variable
  const tba = getValues("tba");
  const have2Reception = getValues("have2Reception");
  const weddingDate = getValues("weddingDate");
  const firstReception = getValues("firstReception");
  const secondReception = getValues("secondReception");

  // Register & set values
  useEffect(() => {
    register("weddingDate", {
      required: {
        value: !tba,
        message: "Please pick your date",
      },
    });

    setValue("weddingDate", selectWeddingDay);

    if (have2Reception) {
      register("firstReception", {
        required: {
          value: have2Reception,
          message: "First reception date is required!",
        },
      });
      register("secondReception");
      setValue("firstReception", selectFirstReception);
      setValue("secondReception", selectSecondReception);
    } else {
      unregister("firstReception");
      unregister("secondReception");
    }
  }, [register, unregister, tba, have2Reception]);

  // Form submit handler
  const onSubmit = (data) => {
    if (!tba && !compareDate(data.weddingDate)) {
      setError("weddingDate", {
        type: "validate",
        message: "Seems like you have selected past date",
      });
      return;
    }

    if (!compareDate(data.firstReception)) {
      setError("firstReception", {
        type: "validate",
        message: "Seems like you have selected past date",
      });
      return;
    }
    // if (!compareDate(data.secondReception)) {
    //   setError('secondReception', {
    //     type: 'validate',
    //     message: 'Seems like you have selected past date',
    //   });
    //   return;
    // }

    let values;
    if (getValues("tba")) {
      values = {
        ...values,
        tba: data.tba,
      };
    } else {
      values = { ...values, weddingDate: moment(data.weddingDate) };
    }
    if (getValues("have2Reception")) {
      values = {
        ...values,
        have2Reception: data.have2Reception,
        firstReception: moment(data.firstReception),
        secondReception: data.secondReception,
      };
    }

    if (!Object.keys(errors).length) {
      dispatch(addWeddingDay(values));
      push({ query: { step: 3 } });

      // push('/create-website/step-3', null, { shallow: true });
    }
  };

  useEffect(() => {
    if (isEmpty(weddingDate) || compareDate(weddingDate)) {
      clearErrors("weddingDate");
    } else {
      setError("weddingDate", {
        type: "validate",
        message: "Seems like you have selected past date",
      });
    }

    if (isEmpty(firstReception) || compareDate(firstReception)) {
      clearErrors("firstReception");
    } else {
      setError("firstReception", {
        type: "validate",
        message: "Seems like you have selected past date",
      });
    }
    if (isEmpty(secondReception) || compareDate(secondReception)) {
      clearErrors("secondReception");
    } else {
      setError("secondReception", {
        type: "validate",
        message: "Seems like you have selected past date",
      });
    }
  }, [weddingDate, firstReception, secondReception]);

  useEffect(() => {
    if (tba) {
      setSelectWeddingDay(null);
      clearErrors("weddingDate");
      setValue("weddingDate", "");
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

  return (
    <CreateWebsiteContainer seo={{ title: "Wedding Day" }} page="2">
      <motion.form
        className={`flex flex-col w-full h-full items-center justify-center -mt-9 sm:mt-0`}
        onSubmit={handleSubmit(onSubmit)}
        exit={{ opacity: 0 }}
        variants={stagger}
      >
        <motion.div variants={fadeInUp}>
          <Heading
            label={
              <span className="flex align-center commonTitle !text-[36px]">
                When's Your Special Wedding Day?
                <img src="/Emoji.png" alt="emoji" />
              </span>
            }
            color="bg-primary"
            lineStyle={{ marginBottom: "40px" }}
            className="text-[36px] commonTitle"
          />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center justify-center w-full gap-3 mb-5 md:gap-5 md:mb-10"
        >
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
                    onChange={({ target: { value } }) => changeYear(value)}
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
                setValue("weddingDate", moment(date).format("LL"));

                if (tba) {
                  setValue("tba", false);
                }
              }}
              customInput={<WeddingDatePicker {...{ errors }} />}
            />
          </div>
          <motion.div
            variants={fadeInUp}
            className="flex items-center space-x-3"
          >
            <input
              type="checkbox"
              id="tba"
              value={true}
              className="text-sm md:text-base text-primary rounded-md border-2 border-primary w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary customLabel"
              {...register("tba")}
            />
            <label
              htmlFor="tba"
              className="font-inter !text-lg font-normal cursor-pointer customLabel"
            >
              We're still deciding (TBA)
            </label>
          </motion.div>
        </motion.div>
        {/* <motion.div
          variants={fadeInUp}
          className={`w-48 mx-auto h-[2px] md:h-[3px] mb-5 md:mb-10 bg-primary`}
        /> */}
        <motion.div variants={fadeInUp} className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="have2Reception"
            value={true}
            className="text-sm md:text-base text-primary rounded-md border-2 border-primary w-[20px] h-[20px] focus:ring-2 focus:ring-offset-2 focus:ring-primary customLabel"
            {...register("have2Reception")}
          />
          <label
            htmlFor="have2Reception"
            className="flex gap-3 text-lg font-normal cursor-pointer font-inter customLabel"
          >
            Reception and wedding not on the same day?
          </label>
        </motion.div>
        {getValues("have2Reception") && (
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center w-full gap-3 mt-6 mb-5 md:gap-5"
          >
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
                      onChange={({ target: { value } }) => changeYear(value)}
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
                selected={selectFirstReception}
                // popperPlacement='top-end'
                onChange={(date) => {
                  setSelectFirstReception(date);
                  setValue("firstReception", moment(date).format("LL"));
                }}
                customInput={<FirstReceptionDatePicker {...{ errors }} />}
              />
            </div>

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
                      onChange={({ target: { value } }) => changeYear(value)}
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
                selected={selectSecondReception}
                // popperPlacement='top-end'
                onChange={(date) => {
                  setSelectSecondReception(date);
                  setValue("secondReception", moment(date).format("LL"));
                }}
                customInput={<SecondReceptionDatePicker {...{ errors }} />}
              />
            </div>
          </motion.div>
        )}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center gap-5 my-2 text-center md:my-10 sm:flex-nowrap"
        >
          <Button
            label="Back"
            className="opacity-50 !bg-[#bebebe] !rounded-[10px] w-[178px] h-[59px]"
            onClick={() => push({ query: { step: 1 } })}
          />
          <Button
            label="Next"
            type="submit"
            className=" !rounded-[10px] w-[178px] h-[59px]"
          />
        </motion.div>
      </motion.form>
    </CreateWebsiteContainer>
  );
};

export default WeddingDay;
