import { Footer } from "@components/home";
import { Header, Heading } from "@components/shared";
import CenterTitle from "@components/shared/CenterTitle";
import { useForm } from "react-hook-form";
import React from "react";
import { contactMessage } from "@services/Contact";

const index = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    contactMessage(data);
    reset();
  };

  return (
    <div>
      <Header />
      <CenterTitle title="Contact Us" />
      <div className="container py-14">
        <Heading
          label="www.beweddy.com"
          color="bg-[#F9D1DE]"
          className="!max-w-4xl drop-shadow-2xl  !text-[36px] !font-normal !leading-10 commonTitle lowercase"
          borderClass="!mb-[20px]"
        />
        <div className="text-center !text-[24px] font-normal leading-[167.5%] customLabel">
          <p>Use the contact form below to get a hold of us. Or simply </p>
          <p>
            email us at email:
            <a href="mailto:nate@beweddy.com" className="underline">
              nate@beweddy.com{" "}
            </a>
          </p>
          <p>You can also reach us by phone at</p>
          <a href="tel:801-919-7212" className="underline">
            801-919-7212
          </a>
        </div>
      </div>
      {/* contact form */}
      <div className="border-4 border-l-0 border-r-0 border-primary py-5 bg-[#fce0eb]">
        <div className="container text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-[500px] mx-auto customGrid">
              <div className="relative my-5 space-y-3">
                <div className="text-left">
                  <label className="text-sm font-medium leading-4 customLabel">
                    Name
                  </label>
                </div>
                <input
                  defaultValue=""
                  type="text"
                  name="name"
                  placeholder="Your full Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                  })}
                  className="w-full text-sm md:text-lg font-normal rounded-[5px] p-4 placeholder-gray-400 border-[1px] border-primary"
                />
              </div>
              <div className="relative my-5 space-y-3">
                <div className="text-left">
                  <label className="text-sm font-medium leading-4 customLabel">
                    Your Email
                  </label>
                </div>
                <input
                  defaultValue=""
                  type="text"
                  name="email"
                  placeholder="your@email.com"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required!",
                    },
                  })}
                  className="w-full text-sm md:text-lg font-normal rounded-[5px] p-4 placeholder-gray-400 border-[1px] border-primary"
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="relative my-5 space-y-3">
                <div className="text-left">
                  <label className="text-sm font-medium leading-4 customLabel">
                    Phone Number
                  </label>
                </div>
                <input
                  defaultValue=""
                  type="tel"
                  name="number"
                  placeholder="Your Contact Number"
                  {...register("number")}
                  className="w-full text-sm md:text-lg font-normal rounded-[5px] p-4 placeholder-gray-400 border-[1px] border-primary"
                />
                {errors.number && <span>This field is required</span>}
              </div>

              <div className="relative my-5 space-y-3">
                <div className="text-left">
                  <label className="text-sm font-medium leading-4 customLabel">
                    Message
                  </label>
                </div>
                <textarea
                  cols="6"
                  rows="4"
                  className="rounded-[5px] focus:border-purple-100 p-4 w-full placeholder-gray-400  font-medium text-lg scroll-design"
                  defaultValue=""
                  placeholder="Write your message here. We Will response quickly"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Compose message is required!",
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="mb-10 text-left">
                <button
                  type="submit"
                  className="py-3 text-base font-bold bg-white border-2 p-11 whitespace-nowrap border-primary text-primary rounded-[5px]"
                >
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
