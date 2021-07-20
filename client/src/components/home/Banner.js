const Banner = () => {
  return (
    <div
      className='py-20 w-full'
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,.8),rgba(0,0,0,.8)) ,url('/images/banner.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='container'>
        <div className='mb-28'>
          <h1 className='text-7xl text-white text-center font-normal'>
            <span className='text-[#F9D1DE] relative'>
              Free{' '}
              <div className='absolute top-[-8px] left-[-40px] w-48 '>
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
        <div className='flex items-center flex-wrap -space-x-16 mb-20'>
          <div className='border-4 border-primary w-72 h-72 rounded-full bg-white flex flex-col items-center justify-center'>
            <img src='/icons/message.svg' alt='' />
            <h4 className='font-medium mt-3 text-lg text-center'>
              Text <br /> Invitation
            </h4>
          </div>
          <div className='border-4 border-secondary/30 w-72 h-72 rounded-full bg-white flex flex-col items-center justify-center'>
            <img src='/icons/mail.svg' alt='' />
            <h4 className='font-medium mt-3 text-lg text-center'>
              Mail out <br /> Invitation
            </h4>
          </div>
          <div className='border-4 border-primary w-72 h-72 rounded-full bg-white flex flex-col items-center justify-center'>
            <img src='/icons/rsvp.svg' alt='' />
            <h4 className='font-medium mt-3 text-lg text-center'>RSVP</h4>
          </div>
          <div className='border-4 border-secondary/30 w-72 h-72 rounded-full bg-white flex flex-col items-center justify-center'>
            <img src='/icons/gift_solid.svg' alt='' />
            <h4 className='font-medium mt-3 text-lg text-center'>
              Universal <br />
              Gift Registry
            </h4>
          </div>
          <div className='border-4 border-primary w-72 h-72 rounded-full bg-white flex flex-col items-center justify-center'>
            <img src='/icons/site.svg' alt='' />
            <h4 className='font-medium mt-3 text-lg text-center'>
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
