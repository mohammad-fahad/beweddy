import { useState } from 'react';
import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Button, Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import DashboardContainer from '@components/dashboard/DashboardContainer';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import 'react-datetime/css/react-datetime.css';
import Datetime from 'react-datetime';
import moment from 'moment';
import { useQuery } from 'react-query';
import { getGuests } from '@services/GuestManagement';
import Select from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
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

const CalendarPage = () => {
  //redux state section
  const { user } = useSelector(state => state.user);
  const [changeText, setChangeText] = useState(false);
  const [startTime, setStartTime] = useState(false);
  const [newDate, setNewDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const { data, isLoading } = useQuery(['guests', user.token], getGuests);

  const [emails, setToEmails] = useState(null);

  const toEmails = data?.guests?.map(guest => ({
    label: guest.email,
    value: guest.email,
  }));

  var yesterday = moment().subtract(1, 'day');
  var valid = function (current) {
    return current.isAfter(yesterday);
  };
  const dateFormat = moment(newDate).format('YYYY-MM-DD');
  const startTimeFormat = moment(start).format();
  const endTimeFormat = moment(end).format();
  const newStartDate = startTimeFormat.slice(10);
  const newEndDate = endTimeFormat.slice(10);
  const startSection = dateFormat + newStartDate;
  const endSection = dateFormat + newEndDate;

  const startUpdate = {
    dateTime: startSection,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  const endUpdate = {
    dateTime: endSection,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  const val = `Hello, \n\nWe would like to invite you to our wedding! Please come celebrate with us. \n\nThank you for your support. Love, ${user.coupleName} !\n\nVisit Our Wedding Website: https://beweddy-delta.vercel.app/couple/${user?.username}\n`;
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      summary: `${user?.coupleName}'s Wedding Day`,
      location: `${user?.location}`,
      description: `${val}`,
    },
  });

  const handleEmails = (newValue, actionMeta) => {
    if (newValue) {
      setToEmails(newValue.map(v => ({ email: v.value })));
    }
    if (actionMeta.action === 'clear') {
      setToEmails(null);
    }
  };

  const getValue = watch('summary');
  //calendar Section
  let gapi = window.gapi;

  let DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ];
  let SCOPES =
    'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar';

  const onSubmit = data => {
    // data.start = startUpdate;
    // data.attendees = emails;
    // data.end = endUpdate;
    // console.log({ data });
    if (data) {
      data.start = startUpdate;
      data.end = endUpdate;
      data.visibility = 'public';
      data.attendees = emails;
      data.reminders = {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 },
          { method: 'popup', minutes: 60 },
        ],
      };
      data.recurrence = ['RRULE:FREQ=DAILY;COUNT=1'];
      gapi.load('client:auth2', () => {
        console.log('loaded client');

        gapi.client.init({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
          clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        });
        gapi.client.load('calendar', 'v3', () => console.log(''));

        gapi.auth2
          .getAuthInstance()
          .signIn()
          .then(() => {
            let request = gapi.client.calendar.events.insert({
              calendarId: 'primary',
              sendNotifications: true,
              resource: data,
            });

            request.execute(event => {
              console.log(event);
              window.open(event.htmlLink);
            });

            /*
                Uncomment the following block to get events
            */

            // get events
            gapi.client.calendar.events
              .list({
                calendarId: 'primary',
                timeMin: new Date().toISOString(),
                showDeleted: false,
                singleEvents: true,

                maxResults: 10,
                orderBy: 'startTime',
              })
              .then(response => {
                const events = response.result.items;
                console.log('EVENTS: ', events);
              });
          });
      });
    }
  };

  const changeToEditable = () => {
    setChangeText(!changeText);
  };

  return (
    <>
      <Head>
        <title>Beweddy | Calender invites</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader title='Calender Invites' />
        <DashboardContainer>
          <div>
            <form className=' w-full' onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-5'>
                <div className='flex items-center pb-2 space-x-3'>
                  <Image src='/icons/uil_calender.png' width={46} height={46} />
                  <h3 className='text-2xl'>Calendar Invites</h3>
                </div>
                <span className='h-[4px] inline-block max-w-[215px] w-full bg-secondary-alternative'></span>
              </div>
              <div className='my-5'>
                {changeText && (
                  <div className='w-full my-3'>
                    <input
                      type='text'
                      className='w-full max-w-[592px] text-sm md:text-lg font-normal py-2 md:py-3 px-4 md:px-6 placeholder-gray-400 border-[2px] border-primary rounded-lg'
                      placeholder='Title'
                      {...register('summary', {
                        required: {
                          value: true,
                          message: 'Title is required!',
                        },
                      })}
                    />
                    {errors.summary && (
                      <p className='mt-2 text-sm font-light text-red-400'>
                        {errors.summary.message}
                      </p>
                    )}
                  </div>
                )}
                {!changeText && (
                  <h2 className='text-2xl font-semibold font-inter'>
                    {getValue}
                  </h2>
                )}
                <p
                  className='text-[#ADADAD] text-sm mt-2'
                  onClick={changeToEditable}
                >
                  Edit Title
                </p>
              </div>
              <div className='space-y-3 w-full max-w-[592px]'>
                <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                  To
                </Heading>

                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={handleEmails}
                  // defaultValue={[colourOptions[4], colourOptions[5]]}
                  isMulti
                  styles={customStyles}
                  options={toEmails}
                />
              </div>
              <div className='my-5'>
                <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                  Description
                </Heading>
                <div className='w-full my-3'>
                  <textarea
                    cols='10'
                    rows='8'
                    className='rounded-[20px]
                    focus:border-purple-100
                     p-10 w-full max-w-[592px] placeholder-primary
                      font-medium text-lg
                       scroll-design'
                    defaultValue={val}
                    placeholder=''
                    {...register('description', {
                      required: {
                        value: true,
                        message: 'Compose message is required!',
                      },
                    })}
                  ></textarea>

                  {errors.description && (
                    <p className='mt-2 text-sm font-light text-red-400'>
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='flex justify-start items-center my-5'>
                <Heading
                  h3
                  className='!text-sm xl:!text-base ml-3 !font-bold space-y-2'
                >
                  <div className='flex items-center space-x-3'>
                    <Image
                      src='/icons/calendar__location.png'
                      width={20}
                      height={20}
                    />
                    <span>Location</span>
                  </div>
                  <input
                    required
                    type='text'
                    className='border border-primary max-w-[275px] py-3 px-5 text-sm font-semibold w-full rounded-[5px]'
                    placeholder='Utah Convention Hall, Utah'
                    {...register('location', {
                      required: {
                        value: true,
                        message: 'Location is required!',
                      },
                    })}
                  />
                </Heading>
              </div>

              <div className='flex flex-col space-y-5 my-5 w-full flex-wrap max-w-[592px]'>
                <div className='flex items-center space-x-3'>
                  <Heading
                    onClick={() => setStartTime(true)}
                    h3
                    className='!text-sm ml-3 xl:!text-base !font-bold space-y-2'
                  >
                    <div className='flex items-center space-x-3'>
                      <Image
                        src='/icons/clock__icon.svg'
                        width={20}
                        height={20}
                      />

                      <span>Select your Date</span>
                    </div>
                    <Datetime
                      isValidDate={valid}
                      dateFormat='YYYY-MM-DD'
                      timeFormat={false}
                      inputProps={{ placeholder: 'Select Date' }}
                      onChange={e => setNewDate(e._d)}
                    />
                  </Heading>
                </div>
                <div className='flex justify-start items-center'>
                  <Heading
                    onClick={() => setStartTime(true)}
                    h3
                    className='!text-sm ml-3 xl:!text-base !font-bold space-y-2'
                  >
                    <div className='flex items-center space-x-3'>
                      <Image
                        src='/icons/clock__icon.svg'
                        width={20}
                        height={20}
                      />
                      <span>Start</span>
                    </div>
                    <Datetime
                      inputProps={{ placeholder: 'Start' }}
                      dateFormat={false}
                      isValidDate={valid}
                      onChange={e => setStart(e._d)}
                    />
                  </Heading>
                </div>
                <div className='flex justify-start items-center'>
                  <Heading
                    h3
                    className='!text-sm ml-3 xl:!text-base !font-bold space-y-3'
                  >
                    <div className='flex items-center space-x-3'>
                      <Image
                        src='/icons/clock__icon.svg'
                        width={20}
                        height={20}
                      />

                      <span>End</span>
                    </div>
                    <Datetime
                      inputProps={{ placeholder: 'End' }}
                      isValidDate={valid}
                      dateFormat={false}
                      onChange={e => setEnd(e._d)}
                    />
                  </Heading>
                </div>
              </div>
              {/* onClick={handleClick}  */}
              <button
                type='submit'
                className='py-3 px-8 text-sm md:text-base font-bold md:font-semibold border border-[#7F7F7F] rounded-[5px] bg-secondary-alternative hover:bg-secondary-alternative/50 transition duration-300'
              >
                Send Calendar Invite
              </button>
            </form>
          </div>
        </DashboardContainer>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(CalendarPage);
