import React, { useState } from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { Button, Heading, Loader } from "@components/shared";
import Image from "next/image";

import DatePicker from "react-datepicker";

// import required css from library
import "react-datepicker/dist/react-datepicker.css";
import { Footer } from "@components/home";
import WebsiteNav from "@components/dashboard/Website/WebsiteNav";
import { useQuery } from "react-query";
import { getCouple } from "@services/Couple";
import { getGiftById } from "@services/Gift";
import { API_URL } from "@utils/index";
import { useRouter } from "next/router";
import { attemptGiftCardPayment } from "@services/Payment";

const CheckoutPage = (props) => {
  const [loading, setLoading] = useState(false);
  const { query, push, pathname } = useRouter();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(["couple", query?.couple], getCouple, {
    initialData: props.user,
  });

  const { data: gift } = useQuery(["gift", query?.giftcard], getGiftById, {
    initialData: props.giftCard,
  });

  const {
    setValue,
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "all",
    shouldFocusError: false,
    shouldUnregister: true,
  });

  watch(["amount", "customAmount"]);

  const onSubmit = async (data) => {
    const payload = {
      description: data.message,
      title: gift?.title,
      image: gift?.image,
      price: data.amount,
      cancel: `${query.couple}/${query.giftcard}/checkout`,
      gift: {
        coupleName: user?.coupleName,
        coupleEmail: user?.email,
        guestEmail: data.email,
        guestName: data.name,
        cardName: gift?.title,
        message: data.message,
        amount: data.amount,
      },
    };

    try {
      setLoading(true);
      const url = await attemptGiftCardPayment(payload);
      if (url) {
        push(url);
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <WebsiteNav {...{ user }} />
      <div className="container p-9">
        <h2 className="flex text-lg leading-5">
          <a className="mr-2 text-sm font-semibold text-gray-700 transition duration-300 mudiumTitle font-inter md:text-base hover:text-primary">
            <img
              src="/icons/waving.png"
              alt="notification"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </a>
          Gift for {user?.coupleName}
        </h2>
        <h1 className="mt-3 text-3xl font-medium leading-9 mudiumTitle">
          Gift Card
        </h1>
      </div>

      {/* design */}
      <div className="container">
        <div className="border-4 border-gray-200 rounded-lg md:p-10 sm:p-5">
          <form
            className="px-4 py-5 md:px-20 sm:px-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <h1 className="text-[22px] leading-7 font-normal not-italic ">
              This Gift Is To
            </h1> */}
            <div>
              <Heading
                h3
                className="!text-[22px] leading-7 font-normal not-italic mudiumTitle"
              >
                This Gift Is To
              </Heading>
              <div>
                <input
                  type="text"
                  className="sm:w-96 w-[90%] mt-4 rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal"
                  value={user?.coupleName}
                  placeholder={user?.coupleName}
                  {...register("coupleName", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                />
                <p className="h-4 mt-2 text-sm font-light text-red-400">
                  {errors?.coupleName?.message}
                </p>

                {/* gift image section */}
                <div>
                  <Image
                    src={gift?.image || "/images/placeholder.webp"}
                    alt="Gift image here"
                    height={280}
                    width={400}
                    objectFit="contain"
                  />
                </div>

                {/* target section */}
                <div>
                  <h4 className="text-4xl text-[#1f1f1f] mudiumTitle">
                    {gift?.title}
                  </h4>
                  <h4 className="text-4xl text-[#1f1f1f] font-bold sm:my-3 my-1 mudiumTitle">
                    ${getValues("amount")}
                  </h4>
                  {/* <p className='text-lg text-[#000000] sm:my-3 my-1 font-light subTitle'>
                    See full gift card
                    <Link href='#'>
                      <a className='font-semibold capitalize hover:underline subTitle'>
                        information and terms
                      </a>
                    </Link>
                  </p> */}

                  <div className="my-8">
                    <h4 className="text-lg text-[#000000] my-3 customLabel">
                      Choose Amount
                    </h4>
                    <div className="flex flex-wrap space-x-2">
                      <div className="flex items-center mt-2 select-amount">
                        <input
                          type="radio"
                          id="10"
                          value={10}
                          defaultChecked
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor="10"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              $10
                            </span>
                          </div>
                        </label>
                      </div>
                      <div className="flex items-center mt-2 select-amount">
                        <input
                          type="radio"
                          id="20"
                          value={20}
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor="20"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              $20
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 2nd part */}
                      <div className="flex items-center mt-2 select-amount">
                        <input
                          type="radio"
                          id="25"
                          value={25}
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor="25"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              $25
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 3rd part */}
                      {/* <span className="">$20</span> */}
                      <div className="flex items-center mt-2 select-amount">
                        <input
                          type="radio"
                          id="50"
                          value={50}
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor="50"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              $50
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 4th radio button */}
                      <div className="flex items-center mt-2 select-amount">
                        <input
                          type="radio"
                          id="100"
                          value={100}
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor="100"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              $100
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* 2nd button group start here */}
                    <div className="flex flex-wrap space-x-2">
                      <div className="flex items-center mt-2 select-amount">
                        <input
                          type="radio"
                          id="150"
                          value={150}
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor="150"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              $150
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 2nd part */}
                      <div className="flex items-center mt-2 select-amount">
                        <input
                          type="radio"
                          id="200"
                          value={200}
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor="200"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              $200
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 3rd part */}
                      {/* <span className="">$20</span> */}
                      <div className="flex items-center mt-2 select-amount">
                        <input
                          type="radio"
                          id="250"
                          value={250}
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor="250"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              $250
                            </span>
                          </div>
                        </label>
                      </div>
                      {/* 4th radio button */}
                      <div className="flex items-center mt-2 select-amount">
                        <input
                          type="radio"
                          id="500"
                          value={500}
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor="500"
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              $500
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                    {/* radio button */}
                    <p className="mt-4 text-base font-light text-gray-400 customLabel">
                      Or Choose Custom Amount
                    </p>
                    {/* <div className="space-y-3 !mt-2">
                      <div className="flex items-center select-amount">
                        <input
                          type="radio"
                          id={`${getValues("customAmount")}`}
                          value={getValues("customAmount")}
                          className="hidden"
                          {...register("amount")}
                        />
                        <label
                          htmlFor={`${getValues("customAmount")}`}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="range"
                            min="10"
                            defaultValue={10}
                            max="2000"
                            step="1"
                            className="cursor-pointer block text-center rounded-[5px] border-2 sm:w-[230px] w-[150px] border-gray-200 py-3 px-5 text-base font-normal"
                            {...register("customAmount")}
                          />
                          <div className="checked-outer border-[2px] rounded-[5px] border-[#dbdbdb] sm:w-[109px] w-[60px] sm:h-[58px] h-[40px] flex items-center justify-center">
                            <span className="text-lg font-semibold font-inter customLabel">
                              ${getValues("customAmount")}
                            </span>
                          </div>
                        </label>
                      </div>
                    </div> */}
                    <div>
                      <input
                        type="number"
                        className="sm:w-[476px] w-[90%] rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal"
                        value={getValues("amount")}
                        onChange={(e) => setValue("amount", e.target.value)}
                      />
                      {getValues("amount") < 10 && (
                        <p className="h-4 mt-2 text-sm font-light text-red-400">
                          Minimum amount is $10
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* input field */}
                <div className="space-y-3">
                  <div className="space-y-3">
                    <Heading
                      h3
                      className="!text-[22px] !font-medium customLabel"
                    >
                      From - Your Name <span className="text-red-400">*</span>
                    </Heading>
                    <div>
                      <input
                        type="text"
                        className="sm:w-[476px] w-[90%] rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal"
                        placeholder="Your First Name"
                        {...register("name", {
                          required: {
                            value: true,
                            message: "Name is required!",
                          },
                        })}
                      />
                      <p className="h-4 mt-2 text-sm font-light text-red-400">
                        {errors?.name?.message}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Heading
                      h3
                      className="!text-[22px] !font-medium customLabel"
                    >
                      Your Email Address is required for receipt{" "}
                      <span className="text-red-400">*</span>
                    </Heading>
                    <div>
                      <input
                        type="text"
                        className="sm:w-[476px] w-[90%]  rounded-[5px] border-2 border-gray-200 py-3 px-5 text-base font-normal"
                        placeholder="Your Email Address"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Your E-mail is required!",
                          },
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Must be a valid email address",
                          },
                        })}
                      />
                      <p className="h-4 mt-2 text-sm font-light text-red-400">
                        {errors?.email?.message}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Heading
                      h3
                      className="!text-[22px] !font-medium customLabel"
                    >
                      Personal Message <span className="text-red-400">*</span>
                    </Heading>
                    <div>
                      <textarea
                        cols="6"
                        rows="5"
                        className="rounded-[5px] p-3 sm:w-[476px] w-[90%]  placeholder-[#BDBDBD] font-medium text-lg"
                        defaultValue=""
                        placeholder={`Hope you enjoy this gift! I am so happy and excited for you
- Love the Smith Family`}
                        {...register("message")}
                      />
                      <p className="h-4 mt-2 text-sm font-light text-red-400">
                        {errors?.message?.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 my-4">
                  <div>
                    <Button
                      label="Back"
                      className="!bg-[#b5b5b5] !border-[bebebe] sm:w-[154px] w-[100px]  !rounded-[5px]"
                    />
                  </div>
                  <div>
                    <Button
                      label="Next"
                      type="submit"
                      className="!rounded-[5px] sm:w-[154px] w-[100px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer hideSocial />
    </div>
  );
};

export default CheckoutPage;

export const getServerSideProps = async ({ params: { couple, giftcard } }) => {
  const res = await fetch(`${API_URL}/users/${couple}`);
  const resGift = await fetch(`${API_URL}/gifts/${giftcard}`);
  const user = await res.json();
  const giftCard = await resGift.json();

  return {
    props: {
      user,
      giftCard,
    },
  };
};
