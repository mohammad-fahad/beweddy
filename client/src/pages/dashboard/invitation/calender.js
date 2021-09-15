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
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';
import moment from 'moment';
import { useQuery } from 'react-query';
import { getGuests } from '@services/GuestManagement';

const CalendarPage = () => {
  //redux state section
  const { user } = useSelector(state => state.user);
  // console.log({ user });
  const [changeText, setChangeText] = useState(false)
  const [startTime, setStartTime] = useState(false)
  const [newDate, setNewDate] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const { data, isLoading } = useQuery(['guests', user.token], getGuests);

  const emails = data?.guests?.map(guest => ({ email: guest.email }));

  var yesterday = moment().subtract(1, 'day');
  var valid = function (current) {
    return current.isAfter(yesterday);
  };

  //#TODO
  const dateFormat = moment(newDate).format("YYYY-MM-DD");
  const startTimeFormat = moment(start).format();
  const endTimeFormat = moment(end).format();
  const newStartDate = startTimeFormat.slice(10)
  const newEndDate = endTimeFormat.slice(10)
  const startSection = dateFormat + newStartDate;
  const endSection = dateFormat + newEndDate;

  const startUpdate = {
    dateTime: startSection,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }
  const endUpdate = {
    dateTime: endSection,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  }
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
      location: "UTAH Convention Hall, UTAH",
      description: `${val}`,

    },
  });

  //calendar Section
  let gapi = window.gapi
  let CLIENT_ID = "658735256071-bhacjo0eesuoin4duputhn3bkt7nle56.apps.googleusercontent.com";
  let API_KEY = "AIzaSyB4aFvm7Ev-v_edhfUhqj7mmyuRzKP8bcg";
  let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  let SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const onSubmit = (data) => {
    // data.start = startUpdate;
    // data.end = endUpdate;
    // console.log({ data })
    if (data) {
      data.start = startUpdate;
      data.end = endUpdate;
      data.attendees = emails;
      data.reminders = {
        'useDefault': false,
        'overrides': [
          { 'method': 'email', 'minutes': 24 * 60 },
          { 'method': 'popup', 'minutes': 10 }
        ]
      };
      data.recurrence = [
        'RRULE:FREQ=DAILY;COUNT=2'
      ];
      gapi.load('client:auth2', () => {
        console.log('loaded client')

        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        gapi.client.load('calendar', 'v3', () => console.log('bam!'))

        gapi.auth2.getAuthInstance().signIn()
          .then(() => {

            var event = {
              'summary': 'Awesome Event!',
              'location': 'UTAH Convention Hall',
              'description': 'Really great refreshments',
              'start': {
                'dateTime': '2022-06-28T09:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              },
              'end': {
                'dateTime': '2022-06-28T17:00:00-07:00',
                'timeZone': 'America/Los_Angeles'
              },
              'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=2'
              ],
              'attendees': [
                { 'email': 'lpage@example.com' },
                { 'email': 'sbrin@example.com' } //dynamic
              ],
              'reminders': {
                'useDefault': false,
                'overrides': [
                  { 'method': 'email', 'minutes': 24 * 60 },
                  { 'method': 'popup', 'minutes': 10 }
                ]
              }
            }

            let request = gapi.client.calendar.events.insert({
              'calendarId': 'primary',
              'resource': data,
            })

            request.execute(event => {
              console.log(event)
              window.open(event.htmlLink)
            })


            /*
                Uncomment the following block to get events
            */

            // get events
            gapi.client.calendar.events.list({
              'calendarId': 'primary',
              'timeMin': (new Date()).toISOString(),
              'showDeleted': false,
              'singleEvents': true,
              'maxResults': 10,
              'orderBy': 'startTime'
            }).then(response => {
              const events = response.result.items
              console.log('EVENTS: ', events)
            })
          })
      })

    }


  };


  const changeToEditable = () => {
    setChangeText(!changeText)
  }


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

            <form
              className=" w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className='mb-5'>
                <div className='flex items-center pb-2 space-x-3'>
                  <Image src='/icons/uil_calender.png' width={46} height={46} />
                  <h3 className='text-2xl'>Calendar Invites</h3>
                </div>
                <span className='h-[4px] inline-block max-w-[215px] w-full bg-secondary-alternative'></span>
              </div>
              <div className="my-5">

                {
                  changeText && <div className="w-full my-3">
                    <input
                      defaultValue={`${user.coupleName}'s Wedding Day`}
                      type="text"
                      className="w-full max-w-[592px] text-sm md:text-lg font-normal py-2 md:py-3 px-4 md:px-6 placeholder-gray-400 border-[2px] border-primary rounded-lg"
                      placeholder="Title"
                      {...register('summary', {
                        required: {
                          value: true,
                          message: 'Title is required!',
                        },
                      })}
                    />
                    {errors.summary && (
                      <p className="mt-2 text-sm font-light text-red-400">
                        {errors.summary.message}
                      </p>
                    )}
                  </div>
                }
                {
                  !changeText &&
                  <h2
                    className="text-2xl font-semibold font-inter">{`${user.coupleName}'s Wedding Day`}</h2>
                }
                <p
                  className="text-[#ADADAD] text-sm mt-2"
                  onClick={changeToEditable}
                >Edit Title</p>
              </div>
              <div className="my-5">
                <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                  Description
                </Heading>
                <div className="w-full my-3">

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
                    <p className="mt-2 text-sm font-light text-red-400">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-start items-center my-5">
                <Image src='/icons/calendar__location.png' width={20} height={20} />
                <Heading h3 className='!text-sm xl:!text-base ml-3 !font-bold'>
                  Auto Generated
                </Heading>
              </div>

              <div className="flex justify-start items-center my-5 w-full flex-wrap max-w-[592px]">
                <div className="flex justify-start items-center">
                  <Image src='/icons/clock__icon.svg' width={20} height={20} />
                  <Heading onClick={() => setStartTime(true)} h3 className='!text-sm ml-3 xl:!text-base !font-bold'>
                    Select your Date
                    <Datetime
                      isValidDate={valid}
                      dateFormat="YYYY-MM-DD" timeFormat={false}
                      // onChange={(e) => console.log(e._d)}
                      onChange={(e) => setNewDate(e._d)}
                    />
                  </Heading>
                </div>
                <div className="flex justify-start items-center">
                  <Image src='/icons/clock__icon.svg' width={20} height={20} />
                  <Heading onClick={() => setStartTime(true)} h3 className='!text-sm ml-3 xl:!text-base !font-bold'>
                    Start
                    <Datetime
                      dateFormat={false}
                      isValidDate={valid}
                      onChange={(e) => console.log(e)}
                      onChange={(e) => setStart(e._d)}
                    />
                  </Heading>
                </div>
                <div className="flex justify-start ml-3 items-center">
                  <Image src='/icons/clock__icon.svg' width={20} height={20} />
                  <Heading h3 className='!text-sm ml-3 xl:!text-base !font-bold'>
                    End
                    <Datetime
                      isValidDate={valid}
                      dateFormat={false}
                      onChange={(e) => setEnd(e._d)}
                    />
                  </Heading>
                </div>
              </div>
              <div className="flex justify-start items-center my-5">
                <Image src='/icons/attendee.svg' width={20} height={20} />
                <Heading h3 className='!text-sm ml-3 xl:!text-base !font-bold'>
                  Attendees
                </Heading>
              </div>
              {/* onClick={handleClick}  */}
              <button type="submit" className='py-3 px-8 text-sm md:text-base font-bold md:font-semibold border border-[#7F7F7F] rounded-[5px] bg-secondary-alternative hover:bg-secondary-alternative/50 transition duration-300'>
                Add Event
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
