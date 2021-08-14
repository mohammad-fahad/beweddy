import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Divider, Footer, Heading } from '@components/index';
import { LinkIcon, PencilIcon } from '@heroicons/react/outline';
import { withAuthRoute } from '@hoc/withAuthRoute';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const EditWebsitePage = () => {
  const { user } = useSelector(state => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: user.questions,
  });

  return (
    <>
      <Head>
        <title>Beweddy | Edit Website</title>
      </Head>
      <DashboardTopBar />
      <DashboardLayout>
        <DashboardHeader title='Edit your website'>
          <div className='flex items-center space-x-5'>
            {/* <Link href='/dashboard/website/edit'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                <PencilIcon className='w-5 h-5' />
                <span>Edit your website</span>
              </a>
            </Link> */}
            <Link href='/'>
              <a className='flex items-center space-x-3 py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                <LinkIcon className='w-5 h-5' />
                <span>Share your super link</span>
              </a>
            </Link>
            <Link href='/'>
              <a className='py-2 px-5 border-2 border-secondary-alternative rounded-[5px] capitalize font-inter font-semibold hover:bg-secondary/5 transition duration-300'>
                Guests Management
              </a>
            </Link>
          </div>
        </DashboardHeader>
        <div className='border-4 border-gray-200 rounded-lg p-10'>
          <h4 className='text-2xl mb-6 font-medium capitalize'>
            Name (you & your spouse name)
          </h4>
          <form className='space-y-10'>
            <div className='space-y-2'>
              <div className='flex items-center space-x-3'>
                <input
                  type='text'
                  className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                  {...register('firstName', {
                    required: {
                      value: true,
                      message: 'First name is required!',
                    },
                  })}
                />
                <input
                  type='text'
                  className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                  {...register('lastName', {
                    required: {
                      value: true,
                      message: 'Last name is required!',
                    },
                  })}
                />
              </div>
              <div className='flex items-center space-x-3'>
                <input
                  type='text'
                  className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                  {...register('spouseFirstName', {
                    required: {
                      value: true,
                      message: 'Spouse first name is required!',
                    },
                  })}
                />
                <input
                  type='text'
                  className='max-w-xs w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal'
                  {...register('spouseLastName', {
                    required: {
                      value: true,
                      message: 'Spouse last name is required!',
                    },
                  })}
                />
              </div>
            </div>
            <Divider />
            <div className='space-y-5'>
              <Heading h3>Upload images</Heading>
            </div>
          </form>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(EditWebsitePage);
