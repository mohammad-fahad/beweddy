import { Heading } from '@components/index';
import Image from 'next/image';

const Features = () => {
  return (
    <div className='border-[5px] border-l-0 border-r-0 border-primary'>
      <div className='container py-20'>
        <Heading
          label='The Only Free Text Messaging Wedding Platform'
          color='bg-secondary-alternative'
        />
        <div className='grid md:grid-cols-12 gap-16 lg:gap-20 max-w-4xl mx-auto'>
          <div className='col-span-6 md:col-span-7 self-center'>
            <div className='space-y-5'>
              <div className='pr-8 lg:pr-10 timeline pl-7 lg:pl-8 py-7 lg:py-8 flex items-center space-x-8 lg:space-x-10'>
                <p className='text-[15px] md:text-lg lg:text-xl font-medium capitalize'>
                  Text/ Email/ Mail out your invitations & E-invites
                </p>
                <img
                  src='/icons/mail_outline.svg'
                  alt=''
                  className='w-10 md:w-12 lg:w-14'
                />
              </div>
              <div className='pl-8 lg:pl-10 timeline pr-7 lg:pr-8 py-7 lg:py-8 flex items-center space-x-8 lg:space-x-10'>
                <img
                  src='/icons/louspeaker.svg'
                  alt=''
                  className='w-10 md:w-12 lg:w-14'
                />
                <p className='text-[15px] md:text-lg lg:text-xl font-medium capitalize'>
                  Send reminders, updates & collect addresses from the wedding
                  party
                </p>
              </div>
              <div className='pr-8 lg:pr-10 timeline pl-7 lg:pl-8 py-7 lg:py-8 flex items-center space-x-8 lg:space-x-10'>
                <p className='text-[15px] md:text-lg lg:text-xl font-medium capitalize'>
                  Text your wedding schedule, RSVP & itinerary
                </p>
                <img
                  src='/icons/archive.svg'
                  alt=''
                  className='w-10 md:w-12 lg:w-14'
                />
              </div>
              <div className='pl-8 lg:pl-10 timeline pr-7 lg:pr-8 py-7 lg:py-8 flex items-center space-x-8 lg:space-x-10'>
                <img
                  src='/icons/chat.svg'
                  alt=''
                  className='w-10 md:w-12 lg:w-14'
                />
                <p className='text-[15px] md:text-lg lg:text-xl font-medium capitalize'>
                  Send a thank you message by Text or E-mail
                </p>
              </div>
              {/* <div className='pr-8 lg:pr-10 timeline pl-7 lg:pl-8 py-7 lg:py-8 flex items-center space-x-8 lg:space-x-10'>
                <p className='text-[15px] md:text-lg lg:text-xl font-medium capitalize'>
                  Customized QR Code
                </p>
                <img
                  src='/icons/qrLogo.png'
                  alt=''
                  className='w-10 md:w-12 lg:w-14 !ml-auto'
                />
              </div> */}
            </div>
          </div>
          <div className='col-span-6 md:col-span-5 mx-auto self-center'>
            <Image
              width={375}
              height={750}
              src='/images/feature-mobile.png'
              alt=''
              // className='w-72 mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
