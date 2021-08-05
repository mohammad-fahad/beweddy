import { forwardRef } from 'react';
import InputIcon from '../InputIcon';
import InputText from '../InputText';

export const WeddingDatePicker = forwardRef(
  ({ value, onClick, errors }, ref) => (
    <div>
      <button
        ref={ref}
        type='button'
        {...{ onClick }}
        className='flex items-center min-w-[230px] font-inter bg-white text-sm md:text-base font-medium md:font-semibold py-2 md:py-3 placeholder-primary border-[3px] border-primary rounded-[5px]'
      >
        <InputIcon />
        <InputText {...{ value }} />
      </button>

      <p className='mt-2 text-red-400 font-light text-sm h-4 text-center'>
        {errors?.weddingDate?.message}
      </p>
    </div>
  )
);

export const FirstReceptionDatePicker = forwardRef(
  ({ value, onClick, errors }, ref) => (
    <div>
      <button
        ref={ref}
        type='button'
        {...{ onClick }}
        className='flex items-center min-w-[256px] font-inter bg-white text-sm md:text-base font-medium md:font-semibold py-2 md:py-3 placeholder-primary border-[3px] border-primary rounded-[5px]'
      >
        <InputIcon />
        <InputText {...{ value }} placeholder='Reception 1 date' />
      </button>

      <p className='mt-2 text-red-400 font-light text-sm h-4 text-center'>
        {errors?.firstReception?.message}
      </p>
    </div>
  )
);

export const SecondReceptionDatePicker = forwardRef(
  ({ value, onClick, errors }, ref) => (
    <div>
      <button
        ref={ref}
        type='button'
        {...{ onClick }}
        className='flex items-center min-w-[256px] font-inter bg-white text-sm md:text-base font-medium md:font-semibold py-2 md:py-3 placeholder-primary border-[3px] border-primary rounded-[5px]'
      >
        <InputIcon />
        <InputText {...{ value }} placeholder='Reception 2 date' />
      </button>

      <p className='mt-2 text-red-400 font-light text-sm h-4 text-center'>
        {errors?.secondReception?.message}
      </p>
    </div>
  )
);
