import Head from "next/head";
import { DashboardHeader, WeddingDayCountDown } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer, FirstReceptionDatePicker } from "@components/index";
import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import SwiperCore, { Lazy, Autoplay } from "swiper";
import useCopyClipboard from "react-use-clipboard";
import Superlink from "@components/Superlink/Superlink";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getYear";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import { convertFromRaw } from "draft-js";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

SwiperCore.use([Lazy, Autoplay]);

const CreateSuperlink = () => {
  // const message = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const content = {
    blocks: [
      {
        key: "637gr",
        text: `Hello, \nWe would like to invite you to our wedding! Please come celebrate with us. Here is a link to our gift registry and website. \n\nWe Need your Address\n\nThank you for your support. Love, Ashley and Nate! \nVisit Our Wedding Website\nwww.beweddy.com/couple/${user?.username}\n\nBless Us With A Gift Card:  \nGift & Registry`,
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 134,
            length: 20,
            key: 0,
          },
          {
            offset: 234,
            length: 26,
            key: 1,
          },
        ],
        data: {},
      },
    ],
    entityMap: {
      0: {
        type: "LINK",
        mutability: "MUTABLE",
        data: {
          url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}/rsvp`,
          targetOption: "_self",
        },
      },
      1: {
        type: "LINK",
        mutability: "MUTABLE",
        data: {
          url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`,
          targetOption: "_self",
        },
      },
    },
  };
  const { user } = useSelector((state) => state.user);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(content))
  );

  // First Reception Picker
  const _firstReception = user.questions?.weddingDay?.firstReception
    ? new Date(user.questions?.weddingDay?.firstReception)
    : "";
  const [value, setValue] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`
  );
  const [selectFirstReception, setSelectFirstReception] =
    useState(_firstReception);
  const [isCopied, setCopied] = useCopyClipboard(value, {
    successDuration: 1500,
  });
  const onDrop = useCallback((acceptedFiles) => {
    if (uploadedFiles.length === 4) {
      setError("couplePictures", {
        type: "maxLength",
        message: "Maximum number of files uploaded",
      });
      return;
    }

    const fileDropped = acceptedFiles[0];
    if (fileDropped["type"].split("/")[0] === "image") {
      setSelectedImageFile(fileDropped);
      return;
    }
    setFile(fileDropped);
    const previewUrl = URL.createObjectURL(fileDropped);
    setPreview(previewUrl);
  });
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const {
    watch,
    register,
    setError,
    getValues,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("hello", data);
  };

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

  const onEditorStateChange = (editorState) => setEditorState(editorState);
  return (
    <>
      <Head>
        <title>Beweddy | Preview Website</title>
      </Head>

      <DashboardTopBar />
      <DashboardLayout>
        <DashboardHeader
          title={
            <h2 className="flex align-center gap-2 !text-[24px] font-semibold leading-7 items-center mudiumTitle">
              Superlink
            </h2>
          }
        ></DashboardHeader>

        <div className="border-4 border-gray-200 rounded-lg">
          <div class="grid grid-cols-12 gap-2 w-full p-8">
            <div class="sm:col-span-7 col-span-12 p-2">
              <>
                <h2 className="mb-4 text-[24px] leading-7 capitalize">
                  Create/ Edit Your Superlink
                </h2>
                <div className="w-[215px] h-[2px] md:h-[4px] mb-4 bg-[#FCE0EB]" />
              </>
              <form onSubmit={handleSubmit(onSubmit)} className="mb-10">
                <div className="my-4">
                  <h2 className="text-[14px] font-bold leading-[17px] mb-3">
                    Featured Photo
                  </h2>
                  <div
                    className="relative focus:outline-none"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <label
                      htmlFor="couplePictures"
                      className="bg-white cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-3 px-10 placeholder-primary border-[3px] border-secondary-alternative/50 rounded-[5px]"
                    >
                      Upload
                    </label>
                    <p className="mt-2 text-sm font-light text-center text-red-400">
                      {errors?.couplePictures?.message}
                    </p>
                  </div>
                </div>
                <div className="w-full my-4">
                  <h2 className="text-[14px] font-bold leading-[17px] mb-3">
                    Title
                  </h2>
                  <input
                    type="text"
                    className=" w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal"
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "First name is required!",
                      },
                    })}
                  />
                </div>
                <div className="my-4">
                  <h2 className="text-[14px] font-bold leading-[17px] mb-3">
                    Wedding Date
                  </h2>
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
                      selected={selectFirstReception}
                      // popperPlacement='top-end'
                      onChange={(date) => {
                        setSelectFirstReception(date);
                        setValue("firstReception", moment(date).format("LL"));
                      }}
                      customInput={
                        <FirstReceptionDatePicker
                          border="border-secondary-alternative/50"
                          {...{ errors }}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="my-4">
                  <h2 className="text-[14px] font-bold leading-[17px] mb-3">
                    Body Text
                  </h2>
                  <div className="relative">
                    <Editor
                      editorState={editorState}
                      wrapperClassName="border-2 border-primary rounded-[5px] overflow-hidden"
                      editorClassName="px-5 py-2 min-h-[300px] !h-[20px] customLabel"
                      onEditorStateChange={onEditorStateChange}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end w-full mt-5">
                  <button className="py-3 px-8 font-inter font-bold text-base rounded-[5px] border-[3px] border-primary flex items-center text-center space-x-2 bg-[#FCE0EB] text-primary hover:bg-[#ffffff] hover:text-[#000000] transition duration-300">
                    Submit For Preview{" "}
                    <img src="/icons/arrow-right.png" alt="" className="ml-3" />
                  </button>
                </div>
              </form>

              <div>
                <h2 className="text-[14px] font-bold leading-[17px]">
                  your Superlink
                </h2>
                <div className="relative w-full my-5">
                  <input
                    type="text"
                    className="text-sm w-full py-3 px-5 text-blue-400 placeholder-blue-400 border font-medium border-primary rounded-[5px]"
                    placeholder="www.bewe.link/superlink"
                    onClick={setCopied}
                  />
                  <div className="absolute right-1 top-[1px] bottom-[3px] flex items-center justify-center bg-[#ffffff] ">
                    <button
                      onClick={setCopied}
                      className="flex items-center justify-center h-full px-2"
                    >
                      Copy
                    </button>
                    <button
                      onClick={setCopied}
                      className="flex items-center justify-center h-full px-2"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="sm:col-span-5 col-span-12 p-2">
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-[24px] leading-7 font-medium mb-8">
                  Your Superlink Preview
                </h1>
                {/* superlink part  */}
                <Superlink user={user} />
                <div className="block w-full my-5 ">
                  <button className="bg-[#FCE0EB] w-[96px] h-[44px] rounded ">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <Footer hideSocial />
    </>
  );
};

export default CreateSuperlink;
