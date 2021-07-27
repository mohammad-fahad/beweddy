import { Heading } from '@components/index';

const Features = () => {
  return (
    <div className='container py-20'>
      <Heading
        label='The Only Free Text Messaging Wedding Platform'
        color='bg-secondary-alternative'
      />
      <div className='grid md:grid-cols-12 gap-16 lg:gap-20 max-w-4xl mx-auto'>
        <div className='col-span-6 md:col-span-7'>
          <div className='space-y-5'>
            <div className='pr-8 lg:pr-10 timeline pl-7 lg:pl-8 py-7 lg:py-8 flex items-center space-x-8 lg:space-x-10'>
              <p className='text-lg lg:text-xl font-medium'>
                Text/ Email/ Mail Out Your Invitations & E-Invites
              </p>
              <img src='/icons/mail.svg' alt='' className='w-12 lg:w-14' />
            </div>
            <div className='pl-8 lg:pl-10 timeline pr-7 lg:pr-8 py-7 lg:py-8 flex items-center space-x-8 lg:space-x-10'>
              <img
                src='/icons/louspeaker.svg'
                alt=''
                className='w-12 lg:w-14'
              />
              <p className='text-lg lg:text-xl font-medium'>
                Send Reminders, Updates & Collect Addresses from the Wedding
                Party
              </p>
            </div>
            <div className='pr-8 lg:pr-10 timeline pl-7 lg:pl-8 py-7 lg:py-8 flex items-center space-x-8 lg:space-x-10'>
              <p className='text-lg lg:text-xl font-medium'>
                Text your Wedding Schedule, RSVP & Itinerary
              </p>
              <img src='/icons/archive.svg' alt='' className='w-12 lg:w-14' />
            </div>
            <div className='pl-8 lg:pl-10 timeline pr-7 lg:pr-8 py-7 lg:py-8 flex items-center space-x-8 lg:space-x-10'>
              <img src='/icons/chat.svg' alt='' className='w-12 lg:w-14' />
              <p className='text-lg lg:text-xl font-medium'>
                Send A Thank You message by Text or E-mail
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-6 md:col-span-5'>
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
