import { DashboardHeader } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer } from "@components/home";
import Head from "next/head";

const fakeData = [
  {
    id: "1",
    image:
      "https://designshack.net/wp-content/uploads/free-invitation-templates.jpg",
    name: "Card one",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
    color: "red green blue",
  },
  {
    id: "11",
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg",
    name: "Card two",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "15",
    image:
      "https://www.proweddinginvites.com/images/thumb/files/18/PWIF063.jpg",
    name: "Card three",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "17",
    image:
      "https://legaldbol.com/wp-content/uploads/2019/03/79-Create-Invitation-Card-Template-Free-Vector-in-Photoshop-for-Invitation-Card-Template-Free-Vector.jpg",
    name: "Card four",
    color: "red green blue",

    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "19",
    image:
      "https://file.amockup.com/uploads/2020/08/free-modern-tracing-paper-mock-up1.jpg",
    name: "Card five",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "174",
    image:
      "https://designshack.net/wp-content/uploads/free-invitation-templates.jpg",
    name: "Card one",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "134",
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg",
    name: "Card two",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "1546",
    image:
      "https://www.proweddinginvites.com/images/thumb/files/18/PWIF063.jpg",
    name: "Card three",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "1456",
    image:
      "https://legaldbol.com/wp-content/uploads/2019/03/79-Create-Invitation-Card-Template-Free-Vector-in-Photoshop-for-Invitation-Card-Template-Free-Vector.jpg",
    name: "Card four",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "15464",
    image:
      "https://file.amockup.com/uploads/2020/08/free-modern-tracing-paper-mock-up1.jpg",
    name: "Card five",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "154",
    image:
      "https://designshack.net/wp-content/uploads/free-invitation-templates.jpg",
    name: "Card one",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "14784",
    image:
      "https://cdn3.vectorstock.com/i/1000x1000/42/27/luxury-invitation-card-design-vector-22684227.jpg",
    name: "Card two",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "17412",
    image:
      "https://www.proweddinginvites.com/images/thumb/files/18/PWIF063.jpg",
    name: "Card three",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "13210",
    image:
      "https://legaldbol.com/wp-content/uploads/2019/03/79-Create-Invitation-Card-Template-Free-Vector-in-Photoshop-for-Invitation-Card-Template-Free-Vector.jpg",
    name: "Card four",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
  {
    id: "2301",
    image:
      "https://file.amockup.com/uploads/2020/08/free-modern-tracing-paper-mock-up1.jpg",
    name: "Card five",
    color: "red green blue",
    description:
      "This beautifully minimal wedding invitation is adorned with a charming leaf illustration. The information is set in a classic typeface, and the design is left simple to create a modern, elegant appearance. Colors are easily customizable to match your wedding decor.",
  },
];

const Review = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom="mb-[2.1rem]">
        <DashboardHeader
          title={
            <div>
              <h1 className="text-[24px] font-semibold"> Mail Out Invites</h1>
              <h3 className="text-[12px] font-semibold">
                Invitations/Mail Out Invitation/ Tamplate 1
              </h3>
            </div>
          }
          hideCoupleName
          hideMarginTop
        />
        <div classNameName="p-10 border-4 border-gray-200 rounded-lg mt-14 space-y-10 shadow-box">
          <div className="flex items-start justify-between ">
            <div class="grid grid-cols-12 w-full">
              <div class="col-span-7 p-2">
                <div>
                  <div className="flex justify-between">
                    <h1>Review Design</h1>
                    <button className="flex gap-2">
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.1369 3.46967C14.9963 3.32902 14.8055 3.25 14.6066 3.25C14.4077 3.25 14.2169 3.32902 14.0763 3.46967L4.88388 12.6621C4.78965 12.7563 4.72223 12.8739 4.68856 13.0028L3.68856 16.8313C3.62127 17.0889 3.69561 17.3629 3.88388 17.5511C4.07215 17.7394 4.34614 17.8138 4.60375 17.7465L8.43218 16.7465C8.56111 16.7128 8.67874 16.6454 8.77297 16.5511L17.9654 7.35876C18.2582 7.06586 18.2582 6.59099 17.9654 6.2981L15.1369 3.46967ZM6.08843 13.5788L14.6066 5.06066L16.3744 6.82843L7.8562 15.3466L5.46344 15.9716L6.08843 13.5788Z"
                            fill="#37A8C1"
                          />
                          <path
                            d="M4 19.25C3.58579 19.25 3.25 19.5858 3.25 20C3.25 20.4142 3.58579 20.75 4 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20C19.75 19.5858 19.4142 19.25 19 19.25H4Z"
                            fill="#37A8C1"
                          />
                        </svg>
                      </span>
                      Back to Editor
                    </button>
                  </div>

                  <div className="flex gap-3 mt-5 ">
                    <img
                      src={data?.image}
                      alt={data?.name}
                      className="w-[15%] "
                    />
                    <img
                      src={data?.image}
                      alt={data?.name}
                      className="w-[15%] "
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <h1>Front of Design</h1>
                  <div className="flex items-center justify-center gap-3 mt-5 bg-[#ededed] p-10">
                    <img
                      src={data?.image}
                      alt={data?.name}
                      className="w-[80%] "
                    />
                  </div>
                  <div className="mt-5">
                    <button className="!w-[142px] !h-[36px] bg-[#FCE0EB] font-semibold transition duration-300  font-inter text-[12px] border-2 rounded border-[#d7d7d7]">
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-span-5  px-5">
                <h1 className="text-[30px] font-medium">Next Step</h1>
                <div className="bg-[#f8f8f8] border-2 rounded border-[#e4e4e4] p-5 mt-10">
                  <h1 className="text-[14px] font-medium">
                    Choose Your Envelopes
                  </h1>
                  <h1 className="text-[12px] font-medium max-w-[320px] mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorum fugit saepe iure nulla explicabo hic!
                  </h1>
                  <div className="mt-10">
                    <button className="!w-full !h-[36px] bg-[#FCE0EB] font-semibold transition duration-300  font-inter text-[12px] border-2 rounded border-[#d7d7d7]">
                      Personalize Your Envelopes
                    </button>
                    <button className="!w-full mt-3 !h-[36px] bg-[#ffffff] font-semibold transition duration-300  font-inter text-[12px] border-2 rounded border-[#d7d7d7]">
                      Add Plain Envelopes
                    </button>
                  </div>
                </div>
                {/* 2nd box */}
                <div className="bg-[#f8f8f8] border-2 rounded border-[#e4e4e4] p-5 mt-10">
                  <h1 className="text-[14px] font-medium">Continue Shopping</h1>
                  <h1 className="text-[12px] font-medium max-w-[320px] mt-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorum fugit saepe iure nulla explicabo hic!
                  </h1>
                  <div className="mt-10">
                    <button className="!w-full !h-[36px] bg-[#FCE0EB] font-semibold transition duration-300  font-inter text-[12px] border-2 rounded border-[#d7d7d7]">
                      Back To Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <Footer hideSocial />
    </div>
  );
};

export default Review;

export const getServerSideProps = async ({ params: { id } }) => {
  console.log(id);
  const data = await fakeData.find((item) => item.id === id);
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data || [],
    },
  };
};
