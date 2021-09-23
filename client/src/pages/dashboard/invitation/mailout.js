import Head from "next/head";
import { DashboardHeader } from "@components/dashboard";
import { Button, Footer, Heading, Loader } from "@components/index";
import { withAuthRoute } from "@hoc/withAuthRoute";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";

const MailOutInvitationPage = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <Head>
        <title>Beweddy | Mailout invites</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom="mb-[2.1rem]">
        <DashboardHeader title="Mailout Invites" hideCoupleName hideMarginTop />
        <div classNameName="p-10 border-4 border-gray-200 rounded-lg mt-14 space-y-10">
          <div classNameName="grid-cols-2">
            <div className="accordion-title">
              <div className="flex justify-between">
                <h1 className="text-lg" onClick={() => setIsActive(!isActive)}>
                  Style
                </h1>
                <img src="/icons/angle-up.png" alt="" className="w-100 h-100" />
              </div>
              {isActive && (
                <fieldset>
                  <small>
                    <input type="checkbox" name="card_style" value="Modern" />
                    <p>Modern</p>

                    <br />
                    <input type="checkbox" name="card_style" value="Floral" />
                    <p>Floral</p>
                    <br />
                    <input type="checkbox" name="card_style" value="Simple" />
                    <p>Simple</p>
                    <br />
                    <input type="checkbox" name="card_style" value="Elegant" />
                    <p>Elegant</p>
                    <br />
                    <br />
                  </small>
                </fieldset>
              )}
            </div>

            <div classNameName="grid-cols-2"></div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(MailOutInvitationPage);
