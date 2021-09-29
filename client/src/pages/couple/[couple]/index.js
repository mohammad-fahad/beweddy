import Head from "next/head";
import Link from "next/link";
import { WeddingDayCountDown } from "@components/dashboard";
import { Footer, Loader } from "@components/index";
import WebsiteNav from "@components/dashboard/Website/WebsiteNav";
import WebsiteGiftCards from "@components/dashboard/Website/WebsiteGiftCard";
import WebsiteRegistry from "@components/dashboard/Website/websiteRegistry";
import SocialSection from "@components/dashboard/Website/SocialSection";
import { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import WebsiteVideo from "@components/dashboard/Website/WebsiteVideo";
import { Image } from "cloudinary-react";
import SwiperCore, { Lazy, Autoplay } from "swiper";
import { useQuery } from "react-query";
import { getCouple } from "@services/Couple";
import { useRouter } from "next/router";
import { generate } from "shortid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NotFoundPage from "pages/404";
import { API_URL, isoToUtcDate } from "@utils/index";

SwiperCore.use([Lazy, Autoplay]);

// const params = {
//   loop: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
//   },
// };

const CoupleWebsitePage = (props) => {
  const [receptionDetails, setReceptionDetails] = useState(
    couple?.receptionDetails?.length
      ? couple.receptionDetails
      : [
          {
            id: generate(),
            time: "5.00 PM",
            details: "Example of event details",
          },
          {
            id: generate(),
            time: "5:30 PM",
            details: "Ceremony",
          },
          {
            id: generate(),
            time: "6:00 PM",
            details: "Ceremony ends/cocktails begin",
          },
          {
            id: generate(),
            time: "7:00 PM",
            details: "Cocktails ends and guests are ushered into the reception",
          },
          {
            id: generate(),
            time: "7:20 PM",
            details: "Introduction and first dance—guests asked to join after ",
          },
          {
            id: generate(),
            time: "7:45 PM",
            details: " Guests take their seats and the first course is served",
          },
          {
            id: generate(),
            time: "8:00 PM",
            details: "Welcome speech from parents",
          },
          {
            id: generate(),
            time: "8:10 PM",
            details: "Toasts from maid of honor and best man",
          },
          {
            id: generate(),
            time: "9:00 PM",
            details: "Parent dances",
          },
          {
            id: generate(),
            time: "9:30 PM ",
            details: "Cake cutting",
          },
          {
            id: generate(),
            time: "10:00 PM",
            details: "Send-Off",
          },
        ]
  );
  const { query } = useRouter();

  const { data: couple, isLoading } = useQuery(
    ["couple", query.couple],
    getCouple,
    {
      initialData: props.user,
    }
  );

  const [value, setValue] = useState(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${couple?.username}`
  );

  if (query.couple && !couple) return <NotFoundPage />;

  if (isLoading) return <Loader />;

  console.log("couple by sonjoy", couple);

  return (
    <>
      <Head>
        <title>Beweddy | {couple?.coupleName}'s Wedding</title>
      </Head>

      <div className="container p-1 sm:p-10 ">
        <div className="w-full mx-auto border-4 border-[#000000] rounded-lg mt-10 ">
          <WebsiteNav user={couple} />
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={3000}
            swipeable
            emulateTouch
          >
            {couple?.questions?.couplePictures.map((image, index) => (
              <div className="w-full">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                    publicId={image.public_id}
                    src={!image.public_id ? image.url : null}
                    width={image.width}
                    crop="scale"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>

          <div className="flex items-center justify-center py-2 md:py-5 ">
            <p className="font-medium text-center text-[32px] !font-alice">
              We’re Getting Married!
            </p>
          </div>

          {/* date and Countdown section */}
          <div className="flex flex-col items-center">
            <h1 className="text-[32px] font-alice font-medium mudiumTitle">
              {isoToUtcDate(couple?.questions?.weddingDay?.weddingDate)}
            </h1>
            <div className="max-w-[222px] w-full mx-auto h-[2px] md:h-[4px]  bg-[#FCE0EB] mt-4" />
            {/* countdown wrapper */}
            <div className="flex justify-center w-full mt-4 space-x-16">
              <div>
                {/* <h4 className="text-[22px] font-medium text-center mb-5 mudiumTitle"> */}
                <h4 className="text-[24px] !font-alice font-normal text-center mb-5 mudiumTitle">
                  Wedding Day Countdown
                </h4>
                <WeddingDayCountDown />
              </div>
            </div>

            {/* address and rsvp button */}

            <div className="sm:my-[40px] my-[10px] sm:space-y-[26px]">
              <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB]" />
              <Link href={`/couple/${couple?.username}/rsvp`}>
                <a className="w-full flex items-center justify-center space-x-3 py-4 px-5 border-2 border-primary bg-[#F9D1DE] rounded-[5px] capitalize font-inter font-bold text-sm hover:bg-secondary/5 transition duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="w-6 h-6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33341 5.33317H3.11119C2.99332 5.33317 2.88027 5.28635 2.79692 5.203C2.71357 5.11965 2.66675 5.0066 2.66675 4.88873V3.11095C2.66675 2.99307 2.71357 2.88003 2.79692 2.79668C2.88027 2.71333 2.99332 2.6665 3.11119 2.6665H9.33341C9.45129 2.6665 9.56433 2.71333 9.64768 2.79668C9.73103 2.88003 9.77786 2.99307 9.77786 3.11095V4.88873C9.77786 5.0066 9.73103 5.11965 9.64768 5.203C9.56433 5.28635 9.45129 5.33317 9.33341 5.33317ZM3.55564 4.44428H8.88897V3.52873H3.55564V4.44428Z"
                      fill="black"
                    />
                    <path
                      d="M9.33341 6.25781H3.11119C2.99332 6.25781 2.88027 6.30464 2.79692 6.38799C2.71357 6.47134 2.66675 6.58438 2.66675 6.70226V8.44448C2.66675 8.56235 2.71357 8.6754 2.79692 8.75875C2.88027 8.8421 2.99332 8.88892 3.11119 8.88892H8.16008L9.77786 7.24448V6.70226C9.77786 6.58438 9.73103 6.47134 9.64768 6.38799C9.56433 6.30464 9.45129 6.25781 9.33341 6.25781ZM8.88897 8.00003H3.55564V7.11115H8.88897V8.00003Z"
                      fill="black"
                    />
                    <path
                      d="M4.91558 14.0042V13.9776L5.0578 13.3598H1.7778V1.77756H10.6667V6.33312L11.5556 5.49312V1.33312C11.5556 1.21524 11.5088 1.1022 11.4254 1.01885C11.3421 0.935497 11.229 0.888672 11.1111 0.888672H1.33336C1.21549 0.888672 1.10244 0.935497 1.01909 1.01885C0.935741 1.1022 0.888916 1.21524 0.888916 1.33312V13.7776C0.888916 13.8954 0.935741 14.0085 1.01909 14.0918C1.10244 14.1752 1.21549 14.222 1.33336 14.222H4.88892C4.89258 14.1489 4.90149 14.0761 4.91558 14.0042Z"
                      fill="black"
                    />
                    <path
                      d="M9.77782 8.52002L9.43115 8.87113C9.51716 8.8534 9.59599 8.81059 9.65769 8.7481C9.71938 8.68561 9.76119 8.60625 9.77782 8.52002Z"
                      fill="black"
                    />
                    <path
                      d="M2.66675 11.9734C2.66675 12.0913 2.71357 12.2043 2.79692 12.2877C2.88027 12.371 2.99332 12.4178 3.11119 12.4178H5.2623L5.39564 11.8401L5.45341 11.5956V11.5734H3.55564V10.6667H6.37341L7.2623 9.77783H3.11119C2.99332 9.77783 2.88027 9.82466 2.79692 9.90801C2.71357 9.99136 2.66675 10.1044 2.66675 10.2223V11.9734Z"
                      fill="black"
                    />
                    <path
                      d="M14.8845 7.40874L13.3867 5.91096C13.3203 5.84431 13.2413 5.79142 13.1544 5.75534C13.0674 5.71926 12.9742 5.70068 12.8801 5.70068C12.7859 5.70068 12.6927 5.71926 12.6058 5.75534C12.5188 5.79142 12.4399 5.84431 12.3734 5.91096L6.28007 12.0398L5.77785 14.1776C5.75905 14.2699 5.75863 14.3649 5.77661 14.4573C5.79459 14.5497 5.83062 14.6376 5.88264 14.716C5.93466 14.7945 6.00165 14.8619 6.07976 14.9144C6.15787 14.9669 6.24558 15.0035 6.33785 15.0221C6.38366 15.0267 6.42982 15.0267 6.47563 15.0221C6.53008 15.0309 6.58562 15.0309 6.64007 15.0221L8.79563 14.5465L14.8845 8.44429C14.951 8.3782 15.0038 8.29961 15.0398 8.21303C15.0759 8.12646 15.0944 8.03362 15.0944 7.93985C15.0944 7.84608 15.0759 7.75324 15.0398 7.66666C15.0038 7.58009 14.951 7.50149 14.8845 7.4354V7.40874ZM8.3423 13.7376L6.71563 14.0976L7.11118 12.4843L11.6801 7.86651L12.9334 9.11985L8.3423 13.7376ZM13.4356 8.61763L12.1823 7.36429L12.889 6.66651L14.1512 7.92874L13.4356 8.61763Z"
                      fill="black"
                    />
                  </svg>

                  <span className="customLabel">
                    We Need Your Address & RSVP
                  </span>
                </a>
              </Link>
              <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB]" />
            </div>
            {/* our story */}
            {couple?.ourStory && (
              <div>
                <h2 className="text-[32px] font-alice font-medium text-center">
                  Our Story
                </h2>
                <p className="sm:w-10/12 w-[98%] m-auto mt-5 text-sm font-normal text-center customLabel md:text-[18px]">
                  {couple?.ourStory}
                </p>
              </div>
            )}
            {couple?.ourStory && (
              <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-10" />
            )}
            {/* Reception Details */}
            {Object.keys(couple?.receptionDetails)?.length !== 0 && (
              <h2 className="text-[32px] font-alice font-medium text-center mt-[17px] commonTitle">
                Reception Details
              </h2>
            )}
            <div class="grid grid-cols-12 gap-4 w-full my-3 md:my-8">
              {couple?.questions?.weddingDay?.firstReception && (
                <div class="col-start-2 col-span-5 p-5 text-lg font-semibold">
                  <h4 className="text-lg">Receptions</h4>
                  <h6>
                    Date 1 : {couple?.questions?.weddingDay?.firstReception}
                  </h6>

                  {couple?.questions?.weddingDay?.secondReception && (
                    <h6>
                      Date 2 : {couple?.questions?.weddingDay?.secondReception}
                    </h6>
                  )}
                </div>
              )}
              {couple?.location && (
                <div class="col-span-5 p-5 flex justify-end">
                  <div>
                    <h2 className="text-lg">Locations</h2>
                    <h6>{couple?.location}</h6>
                  </div>
                </div>
              )}
            </div>
            {/* timeline section */}
            {receptionDetails?.length >= 1 && (
              <div class="grid grid-cols-12 gap-4 w-full my-3 md:my-8">
                <div class="col-start-2 col-span-10">
                  <h4 className="text-[24px] font-medium mb-2">Timeline</h4>
                  <ul className="mt-5 space-y-3">
                    {receptionDetails?.map((el) => (
                      <li className="w-full px-4 py-2 space-x-5 border border-[#D5D5D5] hover:border-primary cursor-pointer">
                        <span className="font-bold text-md md:text-lg customLabel">
                          {el?.time}
                        </span>
                        <span className="font-normal text-md md:text-lg customLabel">
                          {el?.details}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {/* 😇 Bless us with a Gift Card section */}
            <div className="w-full mx-auto my-3 md:my-8">
              {couple?.giftCards?.length > 0 && (
                <div class="grid grid-cols-12 gap-4 w-full my-3 md:my-8">
                  <div class="col-start-2 col-span-10">
                    <h2 className="text-2xl font-medium text-center md:text-[32px] font-alice commonTitle">
                      😇 Bless us with a Gift Card
                    </h2>
                    <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] my-5" />
                    <div className="mt-5 space-y-3">
                      <div className="my-10">
                        <WebsiteGiftCards
                          {...{ couple }}
                          giftCards={couple?.giftCards}
                          coupleWebsite
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {couple?.registries?.length > 0 && (
                <div class="grid grid-cols-12 gap-4 w-full my-3 md:my-8">
                  <div class="col-start-2 col-span-10">
                    <h2 className=" font-medium text-[32px] font-alice text-center commonTitle">
                      Our Registry
                    </h2>
                    <div className="w-64 mx-auto h-[5px] md:h-[5px]  bg-[#FCE0EB] mt-[28px] mb-[50px]" />
                    <div className="mt-5 space-y-3">
                      <div>
                        <WebsiteRegistry registries={couple?.registries} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {(couple?.socialAccounts?.groom ||
              couple?.socialAccounts?.bride) && (
              <div class="flex flex-wrap items-center space-x-4 space-y-4 w-full my-3 md:my-8">
                {couple?.socialAccounts?.groom &&
                  Object?.keys(couple.socialAccounts?.groom)?.length !== 0 && (
                    <div class="col-span-6 p-5">
                      <SocialSection
                        name={couple?.questions?.firstName}
                        links={couple?.socialAccounts?.groom}
                      />
                    </div>
                  )}
                {couple?.socialAccounts?.bride &&
                  Object?.keys(couple.socialAccounts?.bride)?.length !== 0 && (
                    <div class="col-span-6 p-5">
                      <SocialSection
                        name={couple?.questions?.spouseFirstName}
                        links={couple?.socialAccounts?.bride}
                      />
                    </div>
                  )}
              </div>
            )}
          </div>
          {/* QR Codes section */}
          <div class="grid place-items-center sm:py-[100px] py-10 grid-cols-12 w-full bg-gradient-to-br from-[#FCE3EB] to-white border-black border-t-4 border-b-4">
            <div class="col-start-2 sm:col-span-6 col-span-12">
              <div class="p-2 flex justify-start items-center">
                <h1 className="text-[28px] font-normal mudiumTitle max-w-[335px] ">
                  Our Personalized
                  <span className="ml-1 font-bold">QR Code</span> Please Scan.
                </h1>
              </div>
            </div>

            <div className="col-span-4">
              <div className="sm:w-[30%]">
                <QRCode
                  {...{ value }}
                  size={200}
                  eyeRadius={[
                    {
                      outer: [10, 10, 0, 10],
                      inner: [0, 10, 10, 10],
                    },
                    [10, 10, 10, 0],
                    [10, 0, 10, 10],
                  ]}
                  logoHeight={50}
                  logoWidth={50}
                  logoImage="/icons/circle-ring.png"
                />
              </div>
            </div>
          </div>
          {/* <div className="bg-gradient-to-br from-[#FCE3EB] to-white border-black border-t-4 border-b-4 flex justify-center items-center ">
            <div class=" w-6xl mx-auto flex items-center justify-between flex-wrap w-full py-16">
              <div className="flex flex-wrap items-center justify-between w-full">
                <div class="p-2 flex justify-start items-center customItem">
                  <h1 className="text-[28px] font-normal mudiumTitle max-w-[335px] ">
                    Our Personalized
                    <span className="ml-1 font-bold">QR Code</span> Please Scan.
                  </h1>
                </div>

                <div className="sm:w-[30%] customItem">
                  <QRCode
                    {...{ value }}
                    size={200}
                    eyeRadius={[
                      {
                        outer: [10, 10, 0, 10],
                        inner: [0, 10, 10, 10],
                      },
                      [10, 10, 10, 0],
                      [10, 0, 10, 10],
                    ]}
                    logoHeight={50}
                    logoWidth={50}
                    logoImage="/icons/circle-ring.png"
                  />
                </div>
              </div>
            </div>
          </div> */}
          {/* wedding video */}
          <WebsiteVideo
            videoLink={couple?.weddingVideo}
            className="!bg-[#ffffff] !from-transparent !to-transparent"
          />
          <footer className="container">
            {/* footer section */}
            <Footer
              hideSocial
              websitePreview
              className="!bg-[#ffffff] !from-transparent !to-transparent  !border-none"
            />
          </footer>
        </div>
      </div>

      {/* QR Codes  */}

      {/* <div className="bg-gradient-to-br from-[#FCE3EB] to-white border-t-[5px] border-b-[5px] border-primary w-full h-full py-20">
        <div className="flex ">
          <div className="container w-full">
            <div className="p-3 bg-white border-4 border-gray-200 rounded-lg">
              <div class="grid grid-cols-12 gap-4 w-full mt-5 customGrid ">
                <div class="col-span-8  p-5 flex justify-center items-center customItem">
                  <h1 className="text-4xl font-normal mudiumTitle">
                    Your Personalized <span className="font-bold">QR Code</span>
                  </h1>
                </div>
                <div class='col-span-4 p-5 customItem'>
                  <div className='qrCode'>
                    <QRCode
                      {...{ value }}
                      size={200}
                      eyeRadius={[
                        {
                          outer: [10, 10, 0, 10],
                          inner: [0, 10, 10, 10],
                        },
                        [10, 10, 10, 0], // top/right eye//new
                        [10, 0, 10, 10], // bottom/left
                      ]}
                      logoHeight={50}
                      logoWidth={50}
                      logoImage='/icons/circle-ring.png'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* wedding video */}
      {/* <WebsiteVideo /> */}

      {/* <Footer hideSocial /> */}
    </>
  );
};

export default CoupleWebsitePage;

export const getServerSideProps = async ({ params: { couple } }) => {
  const res = await fetch(`${API_URL}/users/${couple}`);
  // const errorCode = res.ok ? false : res.statusCode;
  const user = await res.json();

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user,
      // errorCode,
    },
  };
};
