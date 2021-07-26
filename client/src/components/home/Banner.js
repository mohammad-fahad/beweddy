const Banner = () => {
  return (
    <div
      className='pt-32 pb-32 w-full'
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,.6),rgba(0,0,0,.6)) ,url('/images/banner.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover',
      }}
    >
      <div className='container'>
        <div className='mb-28'>
          <h1 className='text-6xl lg:text-7xl text-white text-center font-normal'>
            <span className='text-[#F9D1DE] relative'>
              Free{' '}
              <div className='absolute top-[-8px] left-[-40px] md:w-40 md:h-40 lg:w-48 lg:h-48'>
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
        <div className='flex items-center justify-center flex-wrap -space-x-8 lg:-space-x-10 mb-20 pt-28'>
          <div className='border-4 border-primary md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center'>
            <img
              src='/icons/message.svg'
              className='md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
              alt=''
            />
            <h4 className='font-medium mt-3 md:text-sm lg:text-base xl:text-lg text-center'>
              Text <br /> Invitation
            </h4>
          </div>
          <div className='border-4 border-secondary/30 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center'>
            <img
              src='/icons/mail.svg'
              className='md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
              alt=''
            />
            <h4 className='font-medium mt-3 md:text-sm lg:text-base xl:text-lg text-center'>
              Mail out <br /> Invitation
            </h4>
          </div>
          <div className='border-4 border-primary md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center'>
            <img
              src='/icons/rsvp.svg'
              className='md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
              alt=''
            />
            <h4 className='font-medium mt-3 md:text-sm lg:text-base xl:text-lg text-center'>
              RSVP
            </h4>
          </div>
          <div className='border-4 border-secondary/30 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center'>
            <img
              src='/icons/gift_solid.svg'
              className='md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
              alt=''
            />
            <h4 className='font-medium mt-3 md:text-sm lg:text-base xl:text-lg text-center'>
              Universal <br />
              Gift Registry
            </h4>
          </div>
          <div className='border-4 border-primary md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 rounded-full bg-white flex flex-col items-center justify-center'>
            <img
              src='/icons/site.svg'
              className='md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20'
              alt=''
            />
            <h4 className='font-medium mt-3 md:text-sm lg:text-base xl:text-lg text-center'>
              Wedding
              <br />
              Website
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
