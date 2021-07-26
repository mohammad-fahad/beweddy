import { Heading, Button } from '@components/index';
import moment from 'moment';
import { useRouter } from 'next/router';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

export const WeddingDay = ({ watch, register, setValue, errors }) => {
  const { query, push } = useRouter();
  const step = Number(query.step);

  return (
    <div
      className={`${
        step === 5 ? 'flex' : 'hidden'
      } flex-col items-center justify-center my-5 md:my-0`}
    >
      <Heading
        label="When's your special Wedding day?"
        color='bg-secondary-alternative'
        lineStyle={{ marginBottom: '45px' }}
      />
      <div className='w-full flex flex-col items-center justify-center gap-3 md:gap-5 mb-10'>
        <DayPickerInput
          placeholder='Pick your date'
          {...{ formatDate, parseDate }}
          format='LL'
          onDayChange={date =>
            setValue('weddingDate', moment(date).format('LL'))
          }
          component={props => (
            <div className='relative'>
              <input
                id='weddingDate'
                name='weddingDate'
                className='w-56 font-semibold py-3 pr-4 pl-12 placeholder-primary border-2 border-primary rounded-lg'
                {...register('weddingDate', {
                  required: {
                    value: !watch('tba'),
                    message: 'Please pick your date',
                  },
                })}
                {...props}
              />
              <label
                htmlFor='weddingDate'
                className='absolute cursor-pointer top-[15px] left-[15px] bg-white'
              >
                <svg
                  width='28'
                  height='31'
                  viewBox='0 0 28 31'
                  fill='none'
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.02777 13.7778H9.12777V16.9352H6.02777V13.7778ZM6.02777 20.0926H9.12777V23.2501H6.02777V20.0926ZM12.2278 13.7778H15.3278V16.9352H12.2278V13.7778ZM12.2278 20.0926H15.3278V23.2501H12.2278V20.0926ZM18.4278 13.7778H21.5278V16.9352H18.4278V13.7778ZM18.4278 20.0926H21.5278V23.2501H18.4278V20.0926Z'
                    fill='black'
                  />
                  <path
                    d='M3.06173 31H24.4938C26.1824 31 27.5556 29.6096 27.5556 27.9V6.2C27.5556 4.49035 26.1824 3.1 24.4938 3.1H21.4321V0H18.3704V3.1H9.18519V0H6.12346V3.1H3.06173C1.37319 3.1 0 4.49035 0 6.2V27.9C0 29.6096 1.37319 31 3.06173 31ZM24.4938 9.3L24.4954 27.9H3.06173V9.3H24.4938Z'
                    fill='black'
                  />
                </svg>
              </label>
              <p className='mt-2 text-red-400 font-light text-sm h-4 text-center'>
                {errors?.weddingDate?.message}
              </p>
            </div>
          )}
        />
        <div className='flex items-center space-x-3'>
          <input
            type='checkbox'
            id='tba'
            value='tba'
            className='text-primary rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            {...register('tba')}
          />
          <label
            htmlFor='tba'
            className='font-inter text-lg font-normal cursor-pointer'
          >
            We're still deciding (TBA)
          </label>
        </div>
      </div>
      <Heading
        label='Have 2 receptions?'
        color='bg-secondary-alternative'
        className='text-3xl md:!text-4xl'
        style={{ paddingBottom: '24px' }}
        lineStyle={{ marginBottom: '45px' }}
      />
      <div className='w-full flex items-center justify-center gap-3 md:gap-5 mb-5 flex-wrap'>
        <DayPickerInput
          placeholder='Pick your date'
          {...{ formatDate, parseDate }}
          format='LL'
          format='LL'
          onDayChange={date =>
            setValue('firstReception', moment(date).format('LL'))
          }
          component={props => (
            <div className='relative'>
              <input
                id='firstReception'
                name='firstReception'
                className='w-56 font-semibold py-3 pr-4 pl-12 placeholder-primary border-2 border-primary rounded-lg'
                {...register('firstReception')}
                {...props}
              />
              <label
                htmlFor='firstReception'
                className='absolute cursor-pointer top-[15px] left-[15px] bg-white'
              >
                <svg
                  width='28'
                  height='31'
                  viewBox='0 0 28 31'
                  fill='none'
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.02777 13.7778H9.12777V16.9352H6.02777V13.7778ZM6.02777 20.0926H9.12777V23.2501H6.02777V20.0926ZM12.2278 13.7778H15.3278V16.9352H12.2278V13.7778ZM12.2278 20.0926H15.3278V23.2501H12.2278V20.0926ZM18.4278 13.7778H21.5278V16.9352H18.4278V13.7778ZM18.4278 20.0926H21.5278V23.2501H18.4278V20.0926Z'
                    fill='black'
                  />
                  <path
                    d='M3.06173 31H24.4938C26.1824 31 27.5556 29.6096 27.5556 27.9V6.2C27.5556 4.49035 26.1824 3.1 24.4938 3.1H21.4321V0H18.3704V3.1H9.18519V0H6.12346V3.1H3.06173C1.37319 3.1 0 4.49035 0 6.2V27.9C0 29.6096 1.37319 31 3.06173 31ZM24.4938 9.3L24.4954 27.9H3.06173V9.3H24.4938Z'
                    fill='black'
                  />
                </svg>
              </label>
              <p className='mt-2 text-red-400 font-light text-sm h-4 text-center'>
                {errors?.firstReception?.message}
              </p>
            </div>
          )}
        />
        <DayPickerInput
          placeholder='Pick your date'
          {...{ formatDate, parseDate }}
          format='LL'
          format='LL'
          onDayChange={date =>
            setValue('secondReception', moment(date).format('LL'))
          }
          component={props => (
            <div className='relative'>
              <input
                name='secondReception'
                className='w-56 font-semibold py-3 pr-4 pl-12 placeholder-primary border-2 border-primary rounded-lg'
                {...register('secondReception')}
                {...props}
              />
              <label
                htmlFor='secondReception'
                className='absolute cursor-pointer top-[15px] left-[15px] bg-white'
              >
                <svg
                  width='28'
                  height='31'
                  viewBox='0 0 28 31'
                  fill='none'
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.02777 13.7778H9.12777V16.9352H6.02777V13.7778ZM6.02777 20.0926H9.12777V23.2501H6.02777V20.0926ZM12.2278 13.7778H15.3278V16.9352H12.2278V13.7778ZM12.2278 20.0926H15.3278V23.2501H12.2278V20.0926ZM18.4278 13.7778H21.5278V16.9352H18.4278V13.7778ZM18.4278 20.0926H21.5278V23.2501H18.4278V20.0926Z'
                    fill='black'
                  />
                  <path
                    d='M3.06173 31H24.4938C26.1824 31 27.5556 29.6096 27.5556 27.9V6.2C27.5556 4.49035 26.1824 3.1 24.4938 3.1H21.4321V0H18.3704V3.1H9.18519V0H6.12346V3.1H3.06173C1.37319 3.1 0 4.49035 0 6.2V27.9C0 29.6096 1.37319 31 3.06173 31ZM24.4938 9.3L24.4954 27.9H3.06173V9.3H24.4938Z'
                    fill='black'
                  />
                </svg>
              </label>
              <p className='mt-2 text-red-400 font-light text-sm h-4 text-center'>
                {errors?.secondReception?.message}
              </p>
            </div>
          )}
        />
      </div>
      <div className='my-10 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
        <Button
          label='Previews'
          className='opacity-50 !rounded-md'
          onClick={() => push({ query: { step: step - 1 } })}
        />
        <Button label='Next' type='submit' className=' !rounded-md' />
      </div>
    </div>
  );
};
