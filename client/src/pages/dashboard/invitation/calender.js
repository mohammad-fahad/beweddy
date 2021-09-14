import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Button, Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import DashboardContainer from '@components/dashboard/DashboardContainer';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const CalendarPage = () => {
  //redux state section
  const { user } = useSelector(state => state.user);

  //calendar Section
  let gapi = window.gapi
  let CLIENT_ID = "658735256071-bhacjo0eesuoin4duputhn3bkt7nle56.apps.googleusercontent.com";
  let API_KEY = "AIzaSyB4aFvm7Ev-v_edhfUhqj7mmyuRzKP8bcg";
  let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  let SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = () => {
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
            'location': '800 Howard St., San Francisco, CA 94103',
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
            'resource': event,
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

            <div className='mb-5'>
              <div className='flex items-center pb-2 space-x-3'>
                <Image src='/icons/uil_calender.png' width={46} height={46} />
                <h3 className='text-2xl'>Calendar Invites</h3>
              </div>
              <span className='h-[4px] inline-block max-w-[215px] w-full bg-secondary-alternative'></span>
            </div>
            <div className="my-5">
              <h2
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '24px',
                }}>{`${user.coupleName}'s Wedding Day`}</h2>
              <p
                style={{
                  color: "#ADADAD",
                  fontSize: '14px',
                }} >Edit Title</p>
            </div>
            <div className="my-5">

              <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                Description
              </Heading>
              <input
                required
                type='text'
                className='border mt-2 border-primary py-3 px-5 text-sm font-semibold w-full rounded-[5px]'
                placeholder='team.nate@gmail.com'
              // value={fromEmail}
              // onChange={e => setFromEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-start items-center my-5">
              <Image src='/icons/calendar__location.png' width={20} height={20} />
              <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                Auto Generated
              </Heading>
            </div>

            <div className="flex justify-start items-center my-5">
              <div className="flex justify-start items-center">
                <Image src='/icons/clock__icon.svg' width={20} height={20} />
                <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                  Start
                </Heading>
              </div>
              <div className="flex justify-start items-center">
                <Image src='/icons/clock__icon.svg' width={20} height={20} />
                <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                  End
                </Heading>
              </div>
            </div>
            <div className="flex justify-start items-center my-5">
              <Image src='/icons/attendee.svg' width={20} height={20} />
              <Heading h3 className='!text-sm xl:!text-base !font-bold'>
                Attendees
              </Heading>
            </div>
            <button onClick={handleClick} className='py-3 px-8 text-sm md:text-base font-bold md:font-semibold border border-[#7F7F7F] rounded-[5px] bg-secondary-alternative hover:bg-secondary-alternative/50 transition duration-300'>
              Add Event
            </button>
          </div>
        </DashboardContainer>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(CalendarPage);
