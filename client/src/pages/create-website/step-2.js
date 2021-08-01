import { Button, Heading, CreateWebsiteContainer } from '@components/index';
import { addWeddingDay } from '@features/question/questionSlice';
import moment from 'moment';
import { useRouter } from 'next/router';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';
import useOuterClickHandler from 'hooks/useOuterClickHandler';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { isEmpty } from 'lodash';
import { compareDate } from '@helpers/index';

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const WeddingDay = () => {
  const dispatch = useDispatch();
  const picker2 = useRef();
  const { push } = useRouter();
  const { questions } = useSelector(state => state.question);

  const innerRef = useOuterClickHandler(() => {
    // const hide = picker.current;
    // hide.hideDayPicker();
    picker2.current.hideDayPicker();
  });

  const {
    watch,
    getValues,
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: questions.weddingDay,
    shouldFocusError: false,
  });

  watch([
    'have2Reception',
    'tba',
    'weddingDate',
    'firstReception',
    'secondReception',
  ]);

  const tba = getValues('tba');
  const weddingDate = getValues('weddingDate');
  const firstReception = getValues('firstReception');
  const secondReception = getValues('secondReception');

  const onSubmit = data => {
    let values;
    if (getValues('tba')) {
      values = {
        ...values,
        tba: data.tba,
      };
    } else {
      values = { ...values, weddingDate: data.weddingDate };
    }
    if (getValues('have2Reception')) {
      values = {
        ...values,
        have2Reception: data.have2Reception,
        firstReception: data.firstReception,
        secondReception: data.secondReception,
      };
    }

    if (!Object.keys(errors).length) {
      dispatch(addWeddingDay(values));
      push('/create-website/step-3');
    }
  };

  useEffect(() => {
    if (isEmpty(weddingDate) || compareDate(weddingDate)) {
      clearErrors('weddingDate');
    } else {
      setError('weddingDate', {
        type: 'manual',
        message: 'Seems like you have selected past date',
      });
    }

    if (isEmpty(firstReception) || compareDate(firstReception)) {
      clearErrors('firstReception');
    } else {
      setError('firstReception', {
        type: 'validate',
        message: 'Seems like you have selected past date',
      });
    }
    if (isEmpty(secondReception) || compareDate(secondReception)) {
      clearErrors('secondReception');
    } else {
      setError('secondReception', {
        type: 'validate',
        message: 'Seems like you have selected past date',
      });
    }
  }, [weddingDate, firstReception, secondReception]);

  useEffect(() => {
    if (tba) {
      clearErrors('weddingDate');
      setValue('weddingDate', '');
    }
  }, [tba]);

  return (
    <CreateWebsiteContainer seo={{ title: 'Wedding Day' }}>
      <motion.form
        className={`flex flex-col w-full h-full items-center justify-center my-5`}
        onSubmit={handleSubmit(onSubmit)}
        exit={{ opacity: 0 }}
        variants={stagger}
      >
        <motion.div variants={fadeInUp}>
          <Heading
            label="When's Your Special Wedding Day?"
            color='bg-primary'
            lineStyle={{ marginBottom: '45px' }}
          />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className='w-full flex flex-col items-center justify-center gap-3 md:gap-5 mb-10'
        >
          <div>
            <DayPickerInput
              // ref={picker}
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
                    className='w-56 font-semibold py-3 pr-4 pl-14 placeholder-primary border-[3px] border-primary rounded-[5px]'
                    {...register('weddingDate', {
                      required: {
                        value: !getValues('tba'),
                        message: 'Please pick your date',
                      },
                    })}
                    {...props}
                  />
                  <label
                    htmlFor='weddingDate'
                    className='absolute cursor-pointer top-[15px] left-[18px] bg-white'
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
          </div>
          <motion.div
            variants={fadeInUp}
            className='flex items-center space-x-3'
          >
            <input
              type='checkbox'
              id='tba'
              value={true}
              className='text-primary rounded-md border-2 border-primary w-[25px] h-[25px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
              {...register('tba')}
            />
            <label
              htmlFor='tba'
              className='font-inter text-lg font-normal cursor-pointer'
            >
              We're still deciding (TBA)
            </label>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className={`w-48 mx-auto h-[2px] md:h-[3px] mb-10 bg-primary`}
        />
        <motion.div variants={fadeInUp} className='flex items-center space-x-3'>
          <input
            type='checkbox'
            id='have2Reception'
            value={true}
            className='text-primary rounded-md border-2 border-primary w-[25px] h-[25px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            {...register('have2Reception')}
          />
          <label
            htmlFor='have2Reception'
            className='font-inter text-lg font-normal cursor-pointer'
          >
            Reception and wedding not on the same day?
          </label>
        </motion.div>
        {getValues('have2Reception') && (
          <motion.div
            variants={fadeInUp}
            className='w-full flex items-center justify-center gap-3 md:gap-5 mt-6 mb-5 flex-wrap'
          >
            <div ref={innerRef}>
              <DayPickerInput
                ref={picker2}
                placeholder='Reception 1 date'
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
                      className='w-64 font-semibold py-3 pr-4 pl-14 placeholder-primary border-[3px] border-primary rounded-[5px]'
                      {...register('firstReception', {
                        required: {
                          value: true,
                          message: 'First reception date is required!',
                        },
                      })}
                      {...props}
                    />
                    <label
                      htmlFor='firstReception'
                      className='absolute cursor-pointer top-[15px] left-[18px] bg-white'
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
            </div>
            <DayPickerInput
              placeholder='Reception 2 date'
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
                    className='w-64 font-semibold py-3 pr-4 pl-14 placeholder-primary border-[3px] border-primary rounded-[5px]'
                    {...register('secondReception')}
                    {...props}
                  />
                  <label
                    htmlFor='secondReception'
                    className='absolute cursor-pointer top-[15px] left-[18px] bg-white'
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
          </motion.div>
        )}
        <motion.div
          variants={fadeInUp}
          className='my-10 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'
        >
          <Button
            label='Back'
            className='opacity-50 !rounded-[10px]'
            onClick={() => push('/create-website/step-1')}
          />
          <Button label='Next' type='submit' className=' !rounded-[10px]' />
        </motion.div>
      </motion.form>
    </CreateWebsiteContainer>
  );
};

export default WeddingDay;
