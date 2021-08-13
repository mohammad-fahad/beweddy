import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import Head from 'next/head';

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>Beweddy | Dashboard</title>
      </Head>
      <DashboardTopBar />
      <DashboardLayout></DashboardLayout>
    </>
  );
};

export default DashboardPage;
