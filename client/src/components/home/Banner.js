import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
  return (
    <div
      className='pt-14 xxl:pt-28 pb-32 w-full relative'
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,.6),rgba(0,0,0,.6)) ,url('/images/banner.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <div className='absolute w-full h-full inset-0 bg-primary/60 z-10' />
      <Image
        layout='fill'
        src='/images/banner.png'
        alt='banner'
        priority
        className='object-top object-cover pointer-events-none'
      />
      <div className='container z-50 relative'>
        <div className='mb-28'>
          <h1 className='text-6xl lg:text-[64px] xl:text-7xl text-white text-center font-normal'>
            <span className='text-[#F9D1DE] relative inline-block mr-1'>
              Free{' '}
              <div className='absolute top-[-10px] lg:top-[-14px] left-[-25px] xl:left-[-34px] xxl:left-[-40px] w-[150px] h-[150px] lg:w-[164px] lg:h-[164px] xl:w-48 xl:h-48'>
                <img
                  src='/images/banner_circle.svg'
                  alt=''
                  className='w-full'
                />
              </div>
            </span>{' '}
            All-in-One <br /> Wedding Platform
          </h1>
        </div>
        <div className='flex items-center justify-center flex-wrap -space-x-8 lg:-space-x-10 mb-20 pt-32 xl:pt-36'>
          <Link href='/example-website'>
            <a className='bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
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
            <a className='bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
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
            <a className='bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/rsvp.svg'
                className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
                alt=''
              />
              <h4 className='font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                RSVP
              </h4>
            </a>
          </Link>
          <Link href='/example-website'>
            <a className='bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
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
          <Link href='/example-website'>
            <a className='bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
