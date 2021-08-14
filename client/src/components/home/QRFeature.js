const { Heading } = require('@components/shared');

const QRFeature = () => {
  return (
    <div className='py-16'>
      <div className='max-w-5xl mx-auto w-full px-10'>
        <Heading label='Personalized QR Codes' />
        <div className='grid md:grid-cols-2 gap-16'>
          <div className='self-center text-center md:text-left'>
            <p className='text-xl sm:text-2xl font-medium'>
              Invite friends and family by link or
            </p>
            <h4 className='text-2xl sm:text-3xl font-semibold mt-2'>
              Custom QR Code
            </h4>
          </div>
          <div className='-mb-32'>
            <img
              src='/images/phone-qrcode.png'
              alt=''
              className='w-56 md:w-80 mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRFeature;
