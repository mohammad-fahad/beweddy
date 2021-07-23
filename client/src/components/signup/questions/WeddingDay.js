import { Heading, Button } from '@components/index';

export const WeddingDay = ({ register, errors, step, setStep }) => {
  return (
    <div
      className={`${
        step === 5 ? 'flex' : 'hidden'
      } flex-col items-center justify-center`}
    >
      <Heading
        label="When's your special Wedding day?"
        color='bg-secondary-alternative'
        lineStyle={{ marginBottom: '45px' }}
      />
      <div className='w-full flex flex-col items-center justify-center gap-8 mb-10'>
        <div className='relative'>
          <input
            type='text'
            id='weddingDate'
            className='w-56 font-semibold py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
            placeholder='Pick your date'
            onFocus={e => (e.target.type = 'date')}
            {...register('weddingDate')}
          />
          <div className='absolute top-[15px] right-[15px] bg-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </div>
        </div>
        <div className='flex items-center space-x-3'>
          <input
            type='checkbox'
            id='tba'
            value='tba'
            className='text-primary rounded-md border-2 border-primary w-[22px] h-[22px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            {...register('tba')}
          />
          <label
            htmlFor='tba'
            className='font-inter text-base font-normal cursor-pointer'
          >
            We're still deciding (TBA)
          </label>
        </div>
      </div>
      <Heading
        label='Have 2 receptions?'
        color='bg-secondary-alternative'
        style={{ fontSize: '40px', paddingBottom: '24px' }}
        lineStyle={{ marginBottom: '45px' }}
      />
      <div className='w-full flex items-center justify-center gap-5 mb-5 flex-wrap'>
        <div className='relative'>
          <input
            type='text'
            id='weddingDate'
            className='w-56 font-semibold py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
            placeholder='Pick your date'
            onFocus={e => (e.target.type = 'date')}
            {...register('weddingDate', {
              required: {
                value: true,
                message: 'Please pick your date',
              },
            })}
          />
          <div className='absolute top-[15px] right-[15px] bg-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </div>
        </div>
        <div className='relative'>
          <input
            type='text'
            id='weddingDate'
            className='w-56 font-semibold py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
            placeholder='Pick your date'
            onFocus={e => (e.target.type = 'date')}
            {...register('weddingDate')}
          />
          <div className='absolute top-[15px] right-[15px] bg-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='my-10 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
        <Button
          label='Previews'
          className='opacity-50'
          onClick={() => setStep(current => current - 1)}
        />
        <Button
          type='submit'
          label='Next'
          // onClick={() => setStep(current => current + 1)}
        />
      </div>
    </div>
  );
};
