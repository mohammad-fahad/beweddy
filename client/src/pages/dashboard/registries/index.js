import Head from "next/head";
import { DashboardHeader } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Button, Footer, Loader, RegistryItem } from "@components/index";
import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { withAuthRoute } from "@hoc/withAuthRoute";
import DashboardContainer from "@components/dashboard/DashboardContainer";
import { useQuery } from "react-query";
import { getRegistries } from "@services/Registry";
import { useDispatch, useSelector } from "react-redux";
import { attemptUpdateUserProfile } from "@features/user/userActions";
import { differenceBy } from "lodash";
import VenmoModal from "@components/dashboard/VenmoModal";

const RegistriesPage = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);
  const { data, isLoading, isFetching } = useQuery("registries", getRegistries);
  const [selected, setSelected] = useState([]);

  const [isVenmoModalOpen, setIsVenmoModalOpen] = useState(false);

  //* Filter Registries. If user already added
  const registries = differenceBy(data, user?.registries, "_id");

  //* Handle Card Select
  const handleItemSelect = (id) => {
    const index = selected.findIndex((item) => item === id);
    if (index === -1) {
      setSelected((prev) => [...prev, id]);
    } else {
      setSelected((prev) => prev.filter((item) => item !== id));
    }
  };

  //* Add Registry item to user
  const addRegistries = () => {
    dispatch(attemptUpdateUserProfile({ registries: selected }));
    setSelected([]);
  };

  if (isLoading) return <Loader />;

  return (
    <Fragment>
      <Head>
        <title>Beweddy | Registry</title>
      </Head>
      {loading && <Loader />}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom="mb-[2.1rem]" shadow>
        <DashboardHeader
          title="Registries & Venmo"
          className="!text-[24px] !leading-[29px] font-semibold "
        />
        <DashboardContainer>
          <div className="space-y-20">
            <motion.div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 registry-grid">
              {registries?.length <= 0
                ? "No registries found"
                : registries?.map((registry) => (
                    <RegistryItem
                      key={registry._id}
                      {...{ registry }}
                      onChange={(e) => handleItemSelect(e.target.id)}
                      checked={selected.includes(registry._id)}
                    />
                  ))}
              <div className="border-2 w-[200px] min-h-[150px] border-secondary-alternative bg-secondary-alternative/50 flex flex-col items-center justify-center rounded-lg hover:bg-secondary-alternative transition duration-300">
                <button
                  type="button"
                  className="w-[160px] h-10 py-2 mt-56 text-xs text-white transition-colors duration-300 rounded-lg bg-primary hover:bg-primary/80 md:text-base whitespace-nowrap"
                  onClick={() => setIsVenmoModalOpen(true)}
                >
                  Connect Venmo
                </button>
              </div>
            </motion.div>
            {/* {registries?.length > 0 && (
              <div className="flex flex-wrap items-center space-x-5 sm:flex-nowrap">
                <Button
                  label="Save"
                  type="button"
                  className="mx-0 !py-2 !rounded-[5px]"
                  onClick={addRegistries}
                />
              </div>
            )} */}
          </div>
        </DashboardContainer>
      </DashboardLayout>
      <VenmoModal {...{ isVenmoModalOpen, setIsVenmoModalOpen }} />
      <Footer hideSocial />
    </Fragment>
  );
};

export default withAuthRoute(RegistriesPage);
