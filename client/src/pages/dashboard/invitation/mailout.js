import Head from "next/head";
import { DashboardHeader } from "@components/dashboard";
import { Footer } from "@components/index";
import { withAuthRoute } from "@hoc/withAuthRoute";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { useState, useEffect } from "react";
import InvitationCard from "./InvitationCard";
import { mailoutBox } from "@components/MailOuts/mailoutData";
import Pagination from "@components/shared/Pagination";
const MailOutInvitationPage = () => {
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState();
  var addItem = function (
    name,
    main,
    price,
    image1,
    image2,
    image3,
    image4,
    decription,
    backPart,
    color,
    selected
  ) {
    var oldItems = JSON.parse(localStorage.getItem("mailout")) || [];
    var newItem = {
      name,
      main,
      price,
      image1,
      image2,
      image3,
      image4,
      decription,
      backPart,
      color,
      selected,
    };
    oldItems.pop(newItem);
    oldItems.push(newItem);
    localStorage.setItem("mailout", JSON.stringify(oldItems));
  };
  const handleSubmit = () => {
    if (data?.selected?.main) {
      alert("This is a demo card with text, please select an empty card.");
    } else {
      const {
        name,
        main,
        price,
        image1,
        image2,
        image3,
        image4,
        decription,
        backPart,
        color,
        selected,
      } = data;

      addItem(
        name,
        main,
        price,
        image1,
        image2,
        image3,
        image4,
        decription,
        backPart,
        color,
        selected
      );
    }
  };
  const onChangePage = (product) => {
    setCurrentData({
      product,
    });
  };

  return (
    <>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom="mb-[2.1rem]">
        <DashboardHeader
          title="Mail Out Invites"
          hideCoupleName
          hideMarginTop
        />
        <div classNameName="p-10 border-4 border-gray-200 rounded-lg mt-14 space-y-10">
          <div className="flex items-start justify-between ">
            <div className="grid w-full grid-cols-12">
              <div className="col-span-12 p-2">
                <div>
                  <h1 className="text-[18px]">
                    <span>{currentData?.product?.length} </span> Items{" "}
                  </h1>
                </div>
                <div className="flex items-start my-5">
                  <div className="grid w-full grid-cols-12 gap-8">
                    {currentData?.product?.map((card, i) => (
                      // <div class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 ">
                      <div
                        className="col-span-12  md:col-span-4 sm:col-span-6"
                        key={i}
                      >
                        <InvitationCard
                          data={card}
                          key={i}
                          handleSubmit={handleSubmit}
                          setSelected={setData}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Need a pagination here */}

                <Pagination
                  pageSize={6}
                  items={mailoutBox}
                  onChangePage={onChangePage}
                />
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(MailOutInvitationPage);
