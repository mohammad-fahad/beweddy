import Image from 'next/image';
import Link from 'next/link';
const Banner = ({ setImageLoaded }) => {
  return (
    <div
      className='pt-14 xxl:pt-28 pb-32 w-full relative'
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,.7),rgba(0,0,0,.7)) ,url('/images/banner.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <div className='absolute w-full h-full inset-0 bg-primary/40 z-10' />
      <Image
        layout='fill'
        src='/images/banner.png'
        alt='banner'
        priority
        className='object-top object-cover pointer-events-none'
        onLoad={() => setImageLoaded(prev => !prev)}
      />
      <div className='container z-50 relative'>
        <div className='mb-28'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-7xl text-white text-center font-normal'>
            <span className='text-[#F9D1DE] relative inline-block mr-1'>
              Free{' '}
              <div className='absolute top-[-10px] lg:top-[-14px] left-[-25px] xl:left-[-34px] xxl:left-[-40px] w-[110px] sm:w-[128px] md:w-[150px] h-[150px] lg:w-[164px] lg:h-[164px] xl:w-48 xl:h-48'>
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
        <div className='banner-bubble sm:ml-8 md:px-5 flex items-center justify-center flex-wrap md:mb-20 pt-32 xl:pt-36'>
          <Link href='/example-website'>
            <a className='bubble md:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/message.svg'
                className='w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
                alt=''
              />
              <h4 className='font-regular sm:font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                Text <br /> Invitation
              </h4>
            </a>
          </Link>
          <Link href='/example-website'>
            <a className='bubble md:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/mail.svg'
                className='w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
                alt=''
              />
              <h4 className='font-regular sm:font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                Mail out <br /> Invitation
              </h4>
            </a>
          </Link>
          <Link href='/example-website'>
            <a className='bubble md:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/rsvp.svg'
                className='w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 -mt-6 sm:-mt-8'
                alt=''
              />
              <h4 className='font-regular sm:font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                Address/RSVP
              </h4>
            </a>
          </Link>
          <Link href='/example-website'>
            <a className='banner-bubble-item-1 bubble md:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/gift_solid.svg'
                className='w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
                alt=''
              />
              <h4 className='font-regular sm:font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
                Universal <br />
                Gift Registry
              </h4>
            </a>
          </Link>
          <Link href='/example-website'>
            <a className='mt-[-1.2rem] md:!-mt-0 bubble md:-ml-10 bg-white/90 hover:bg-white cursor-pointer border-4 border-primary w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center hover:scale-110 transition duration-300'>
              <img
                src='/icons/site.svg'
                className='w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
                alt=''
              />
              <h4 className='font-regular sm:font-medium mt-3 text-xs md:text-sm lg:text-base xl:text-lg text-center'>
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
