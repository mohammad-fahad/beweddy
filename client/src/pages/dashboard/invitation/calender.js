import Head from 'next/head';
import { DashboardHeader } from '@components/dashboard';
import { Button, Footer, Heading, Loader } from '@components/index';
import { withAuthRoute } from '@hoc/withAuthRoute';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import DashboardContainer from '@components/dashboard/DashboardContainer';
import { StarIcon } from '@heroicons/react/solid';

const CalendarPage = () => {

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
          <div className="flex justify-start items-center">
            <img src="/icons/logos_google-calendar.png" alt="" />
            <h3 onClick={handleClick} className="text-3xl pl-8 cursor-pointer">Calendar Invites</h3>
          </div>
          {/* <button className="w-100 h-8 border-2 border-indigo-600 p-2" onClick={handleClick}>Add Event</button> */}
        </DashboardContainer>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(CalendarPage);
