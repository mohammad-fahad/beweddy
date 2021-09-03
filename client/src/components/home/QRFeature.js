const { Heading } = require('@components/shared');

const QRFeature = () => {
  return (
    <div className='py-16 border-t-4 border-primary'>
      <div className='max-w-6xl mx-auto w-full px-10'>
        <Heading label='Personalized QR Codes' />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 lg:gap-16'>
          <div className='relative lg:col-span-2 self-center text-center md:text-left bg-gray-50 p-5 md:p-10 max-w-2xl w-full mx-auto'>
            <p className='text-lg md:text-xl lg:text-2xl font-normal !leading-[150.5%]'>
              Custom QR Codes Help Any Guest Find and Support Your Wedding
              Platform Right From Their Phone!
            </p>
            <svg
              className='absolute -bottom-7 right-10'
              width='66'
              height='34'
              viewBox='0 0 66 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M66 34L0.5 0H66V34Z' fill='#F8F8F8' />
            </svg>
          </div>
          <div className='-mb-32 lg:mb-[-14rem]'>
            <img
              src='/images/phone-qrcode.png'
              alt=''
              className='w-56 md:w-80 mx-auto lg:ml-auto lg:mr-0'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRFeature;
