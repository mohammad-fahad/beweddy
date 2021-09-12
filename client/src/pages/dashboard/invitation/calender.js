import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Button, Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { StarIcon } from '@heroicons/react/solid';
const CalendarPage = () => {
    return (
        <>
            <Head>
                <title>Beweddy | Calender invites</title>
            </Head>
            {/* {loading && <Loader />} */}
            <DashboardTopBar />
            <DashboardLayout>
                <DashboardHeader title='Calender Invites' />
            </DashboardLayout>
            <Footer hideSocial />
        </>
    );
};

export default withAuthRoute(CalendarPage);
