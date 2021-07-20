import { Heading } from '@components/index';

const Features = () => {
  return (
    <div className='min-h-screen container py-20'>
      <Heading
        label='The Only Free Text Messaging Wedding Platform'
        color='bg-secondary'
      />
      <div className='grid md:grid-cols-12 gap-20 max-w-4xl mx-auto'>
        <div className='col-span-7'>
          <div className='space-y-5'>
            <div className='pr-10 timeline pl-8 py-8 flex items-center space-x-10'>
              <p className='text-xl font-medium'>
                Text/ Email/ Mail Out Your Invitations & E-Invites
              </p>
              <img src='/icons/mail.svg' alt='' className='w-14' />
            </div>
            <div className='pl-10 timeline pr-8 py-8 flex items-center space-x-10'>
              <img src='/icons/louspeaker.svg' alt='' className='w-14' />
              <p className='text-xl font-medium'>
                Send Reminders, Updates & Collect Addresses from the Wedding
                Party
              </p>
            </div>
            <div className='pr-10 timeline pl-8 py-8 flex items-center space-x-10'>
              <p className='text-xl font-medium'>
                Text your Wedding Schedule, RSVP & Itinerary
              </p>
              <img src='/icons/archive.svg' alt='' className='w-14' />
            </div>
            <div className='pl-10 timeline pr-8 py-8 flex items-center space-x-10'>
              <img src='/icons/chat.svg' alt='' className='w-14' />
              <p className='text-xl font-medium'>
                Send A Thank You message by Text or E-mail
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-5'>
          <img
            src='/images/feature-mobile.png'
            alt=''
            className='w-72 mx-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
