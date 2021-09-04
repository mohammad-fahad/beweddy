import { Heading } from '@components/shared';
import Link from 'next/link';

const Features = () => {
  return (
    <div className='gradient border-t-4 border-primary'>
      <div className='container py-20'>
        <Heading
          label='Core Features of Website'
          // color='bg-[#F9D1DE]'
          className='lg:!text-4xl'
          // lineStyle={{ marginBottom: '45px' }}
        />
        <div className='banner-bubble sm:ml-8 md:px-5 flex items-center justify-center flex-wrap md:mb-20 '>
          <Link href='/example-website'>
            <a className='sm:-ml-8 lg:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/message.svg'
                className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
                alt=''
              />
              <h4 className='font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                Text <br /> Invitation
              </h4>
            </a>
          </Link>
          <Link href='/example-website'>
            <a className='-ml-8 lg:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/mail.svg'
                className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
                alt=''
              />
              <h4 className='font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                Mail out <br /> Invitation
              </h4>
            </a>
          </Link>
          <Link href='/example-website'>
            <a className='-ml-8 lg:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/rsvp.svg'
                className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 -mt-8'
                alt=''
              />
              <h4 className='font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                RSVP
              </h4>
            </a>
          </Link>
          <Link href='/example-website'>
            <a className='banner-bubble-item-1 -ml-8 lg:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/gift_solid.svg'
                className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
                alt=''
              />
              <h4 className='font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                Universal <br />
                Gift Registry
              </h4>
            </a>
          </Link>
          {/* <Link href='/example-website'>
            <a className='banner-bubble-item-2 -mt-7 sm:-mt-0 sm:-ml-8 lg:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/site.svg'
                className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
                alt=''
              />
              <h4 className='font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                Wedding
                <br />
                Website
              </h4>
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
