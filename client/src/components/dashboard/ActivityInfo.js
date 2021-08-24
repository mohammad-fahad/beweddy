const ActivityInfo = () => {
  return (
    <div className='grid grid-cols-5 gap-20'>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <img
          src='/icons/message-notif.svg'
          alt='Text Invitation'
          className='w-10'
        />
        <h4 className='text-2xl font-medium'>280</h4>
        <p className='text-lg font-normal'>Text Invitations</p>
      </div>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <img
          src='/icons/sms-edit.svg'
          alt='Email Invitations'
          className='w-10'
        />
        <h4 className='text-2xl font-medium'>390</h4>
        <p className='text-lg font-normal'>Email Invitations</p>
      </div>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <img
          src='/icons/sms-tracking.svg'
          alt='Mail Out Invitations'
          className='w-10'
        />
        <h4 className='text-2xl font-medium'>400</h4>
        <p className='text-lg font-normal'>Mail Out Invitations</p>
      </div>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <img
          src='/icons/location-tick.svg'
          alt='Addresses Collected'
          className='w-10'
        />
        <h4 className='text-2xl font-medium'>130</h4>
        <p className='text-lg font-normal'>Addresses Collected</p>
      </div>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <img src='/icons/directbox-notif.svg' alt='RSVP' className='w-10' />
        <h4 className='text-2xl font-medium'>138</h4>
        <p className='text-lg font-normal'>RSVP</p>
      </div>
    </div>
  );
};
export default ActivityInfo;
