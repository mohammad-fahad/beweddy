const { Heading } = require('@components/shared');

const QRFeature = () => {
  return (
    <div className='py-16 border-t-4 border-primary'>
      <div className='max-w-6xl mx-auto w-full px-10'>
        <Heading label='Personalized QR Codes' />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 lg:gap-16'>
          <div className='lg:col-span-2 self-center text-center md:text-left border-2 border-gray-200 rounded-lg p-5 md:p-10'>
            <p className='md:text-2xl lg:text-3xl font-medium md:leading-relaxed lg:leading-loose'>
              Custom QR Codes Help Any Guest Find and Support Your Wedding
              Platform Right From Their Phone!
            </p>
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
