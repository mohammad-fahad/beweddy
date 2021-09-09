import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Button, Footer, Heading } from '@components/index';
import Image from 'next/image';
import Select from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { Fragment, useEffect, useState } from 'react';
import { withAuthRoute } from '@hoc/withAuthRoute';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
);

import {
  ArrowRightIcon,
  ArrowSmRightIcon,
  CheckIcon,
} from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const animatedComponents = makeAnimated();

const customStyles = {
  control: (
    { borderColor, backgroundColor, boxShadow, ...provided },
    { theme }
  ) => ({
    ...provided,
    width: '100%',
    // backgroundColor: 'rgba(243, 244, 246, 1)',
    borderColor: theme.colors.neutral90,
    '&:hover': {
      borderColor: theme.colors.neutral70,
    },
  }),
  valueContainer: style => ({
    ...style,
    padding: '6px 16px',
  }),
  placeholder: style => ({
    ...style,
    color: 'rgba(156, 163, 175, 1)',
    fontSize: '14px',
  }),
  input: style => ({
    ...style,
    outline: 'none',
    border: 'none',
  }),
};

const EmailInvitesPage = () => {
  const { countries } = useSelector(state => state.countryList);
  const { user } = useSelector(state => state.user);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [selectedCountry, setSelectedCountry] = useState({});
  const { handleSubmit, register, getValues, watch } = useForm({ mode: 'all' });
  watch(['message', 'compose']);
  const message = getValues('message');

  useEffect(() => {
    if (countries?.length) {
      setSelectedCountry(
        countries.find(country => country.alpha3Code === 'USA')
      );
    }
  }, [countries]);

  const onEditorStateChange = editorState => setEditorState(editorState);

  return (
    <Fragment>
      <Head>
        <title>Beweddy | Email Invites</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader title='Email Invites' />
        <div className='shadow-box space-y-10'>
          <div className='max-w-[1300px] w-full'>
            <div className='p-12 xxl:pr-0'>
              <div className='mb-5'>
                <div className='flex items-center space-x-3 pb-2'>
                  <Image src='/icons/email_send.svg' width={46} height={46} />
                  <h3 className='text-2xl'>Send Email Invites</h3>
                </div>
                <span className='h-[4px] inline-block max-w-[215px] w-full bg-secondary-alternative'></span>
              </div>
              <div className='grid md:grid-cols-3 gap-12'>
                <div className='md:col-span-2'>
                  <div className='space-y-6'>
                    <div className='flex justify-between'>
                      <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                        To
                      </Heading>
                      <h5 className='xl:text-[12px] xxl:text-base font-bold'>
                        Recipients: 13
                      </h5>
                    </div>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      // defaultValue={[colourOptions[4], colourOptions[5]]}
                      isMulti
                      styles={customStyles}
                      // options={colourOptions}
                    />
                    <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                      From
                    </Heading>
                    <input
                      type='text'
                      className='border border-primary py-3 px-5 text-sm font-semibold w-full rounded-[5px]'
                      placeholder='team.nate@gmail.com'
                    />
                    <button className='py-3 px-8 text-sm md:text-base font-bold md:font-semibold border border-[#7F7F7F] rounded-[5px] bg-secondary-alternative hover:bg-secondary-alternative/50 transition duration-300'>
                      Upload Photo/Video
                    </button>
                    <div className='space-y-3'>
                      <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                        Compose
                      </Heading>
                      <div className='relative'>
                        {/* <Editor
                          editorState={editorState}
                          wrapperClassName='demo-wrapper'
                          editorClassName='demo-editor'
                          onEditorStateChange={this.onEditorStateChange}
                        /> */}
                        <Editor
                          editorState={editorState}
                          wrapperClassName='border-2 border-primary rounded-[5px] overflow-hidden'
                          editorClassName='px-5 py-2 min-h-[300px]'
                          onEditorStateChange={onEditorStateChange}
                        />
                        {/* <textarea
                          cols='30'
                          rows='10'
                          className='rounded-[20px] p-10 w-full placeholder-primary font-medium text-lg'
                          defaultValue={val}
                          placeholder=''
                          {...register('message')}
                        ></textarea> */}
                        {/* <svg
                          className='absolute bottom-0 right-0'
                          width='114'
                          height='60'
                          viewBox='0 0 114 60'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M113 59L1 1H113V59Z'
                            fill='white'
                            stroke='black'
                          />
                        </svg>

                        <span className='absolute bottom-0 right-0 w-52 h-10 bg-white'></span> */}
                      </div>
                    </div>
                    <button className='py-3 px-8 font-inter font-bold text-base rounded-[5px] border-[3px] border-primary flex items-center text-center space-x-2 bg-[#F3F3F3] text-primary hover:bg-primary hover:text-white transition duration-300'>
                      <span>Preview</span>
                      <ArrowSmRightIcon className='w-6 h-6' />
                    </button>
                  </div>
                </div>
                <div className='mx-auto'>
                  <div className='relative'>
                    <img
                      src='/images/mobile-template.svg'
                      alt=''
                      className='min-w-[338px]'
                    />
                    <div className='absolute max-w-[315px] max-h-[540px] h-full w-full top-[60px] left-[12px] p-2'>
                      <div className='px-1'>
                        <div className='flex items-center justify-between'>
                          <svg
                            width='30'
                            height='42'
                            viewBox='0 0 30 42'
                            fill='none'
                            // className='w-8 h-8'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M12.7053 22.8984L20.6446 14.9591C21.2304 14.3733 21.2304 13.4236 20.6446 12.8378C20.0589 12.252 19.1091 12.252 18.5233 12.8378L9.52332 21.8378C8.93754 22.4236 8.93754 23.3733 9.52332 23.9591L18.5233 32.9591C19.1091 33.5449 20.0589 33.5449 20.6446 32.9591C21.2304 32.3733 21.2304 31.4236 20.6446 30.8378L12.7053 22.8984Z'
                              fill='#007AFF'
                            />
                          </svg>
                          <div className='flex items-center flex-col space-y-2 h-20'>
                            <div className='w-[50px] h-[50px] rounded-full'>
                              <Image
                                src={`${
                                  user.avatar ? user.avatar : '/images/user.png'
                                }`}
                                height={50}
                                width={50}
                              />
                            </div>
                            <h4 className='text-sm text-center font-bold'>
                              {user.firstName}
                            </h4>
                          </div>
                          <span></span>
                        </div>
                        <div className='phone-layout flex flex-col justify-between max-h-[calc(540px-88px)] min-h-[calc(540px-88px)] h-full ml-3 mt-2 pb-2'>
                          <style jsx>
                            {`
                              .phone-layout: {
                                -ms-overflow-style: none;
                                scrollbar-width: none;
                              }
                              .phone-layout::-webkit-scrollbar {
                                display: none;
                              }
                            `}
                          </style>
                          <div className='ml-auto'>
                            <Image
                              width={150}
                              height={230}
                              src='/images/nate&ash.png'
                            />
                          </div>
                          <div className='relative w-full text-white font-medium text-sm rounded-[10px] px-5 py-3 bg-[#1788Fe]'>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: draftToHtml(
                                  convertToRaw(editorState.getCurrentContent())
                                ),
                              }}
                            />
                            <svg
                              width='41'
                              height='29'
                              viewBox='0 0 41 29'
                              fill='none'
                              className='absolute bottom-[-20px] right-0'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M37.8251 27.77L1.65628 3.91393C0.000161409 2.8216 0.773555 0.244385 2.75747 0.244385H38.9263C40.0309 0.244385 40.9263 1.13982 40.9263 2.24439V26.1004C40.9263 27.6933 39.1548 28.647 37.8251 27.77Z'
                                fill='#1788FE'
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </Fragment>
  );
};

export default withAuthRoute(EmailInvitesPage);
