import { Button, Heading, CreateWebsiteContainer } from '@components/index';
import { addCoupleName } from '@features/question/questionSlice';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const CoupleName = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { questions } = useSelector(state => state.question);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', defaultValues: questions.coupleName });

  const onSubmit = data => {
    dispatch(addCoupleName(data));
    push('/create-website/step-2', null, { shallow: true });
  };

  return (
    <CreateWebsiteContainer seo={{ title: 'Couple Names' }} page='1'>
      <form
        className={`flex flex-col items-center justify-center`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <motion.div
          exit={{ opacity: 0, scale: 0.8 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Heading
            label="What's your name? & Who's your lucky spouse-to-be?"
            color='bg-primary'
            className='pt-5 md:pt-0'
            lineStyle={{ marginBottom: '45px' }}
          />
        </motion.div>
        <motion.div
          className='flex items-center gap-2 md:gap-5 flex-wrap flex-col xl:flex-row'
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='flex justify-center items-center gap-3 flex-wrap sm:flex-nowrap'>
            <div className='max-w-[283px] w-full'>
              <input
                type='text'
                className='w-full text-sm md:text-lg font-normal py-2 md:py-3 px-3 md:px-4 placeholder-primary border-[3px] border-primary rounded-[5px]'
                placeholder='First Name'
                {...register('your_firstName', {
                  required: {
                    value: true,
                    message: 'First name is required!',
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: 'Must be a valid name',
                  },
                })}
              />
              <p className='mt-2 text-red-400 font-light text-sm h-4'>
                {errors?.your_firstName?.message}
              </p>
            </div>
            <div className='max-w-[283px] w-full'>
              <input
                type='text'
                className='w-full text-sm md:text-lg font-normal py-2 md:py-3 px-3 md:px-4 placeholder-primary border-[3px] border-primary rounded-[5px]'
                placeholder='Last Name'
                {...register('your_lastName', {
                  required: {
                    value: true,
                    message: 'Last name is required!',
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: 'Must be a valid name',
                  },
                })}
              />
              <p className='mt-2 text-red-400 font-light text-sm h-4'>
                {errors?.your_lastName?.message}
              </p>
            </div>
          </div>
          <h2 className='font-alice text-3xl md:text-4xl text-center'>&</h2>
          <div className='flex justify-center items-center gap-3 flex-wrap sm:flex-nowrap'>
            <div className='max-w-[283px] w-full'>
              <input
                type='text'
                className='w-full text-sm md:text-lg font-normal py-2 md:py-3 px-3 md:px-4 placeholder-primary border-[3px] border-primary rounded-[5px]'
                placeholder='First Name'
                {...register('spouse_to_be_firstName', {
                  required: {
                    value: true,
                    message: 'First name is required!',
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: 'Must be a valid name',
                  },
                })}
              />
              <p className='mt-2 text-red-400 font-light text-sm h-4'>
                {errors?.spouse_to_be_firstName?.message}
              </p>
            </div>
            <div className='max-w-[283px] w-full'>
              <input
                type='text'
                className='w-full text-sm md:text-lg font-normal py-2 md:py-3 px-3 md:px-4 placeholder-primary border-[3px] border-primary rounded-[5px]'
                placeholder='Last Name'
                {...register('spouse_to_be_lastName', {
                  required: {
                    value: true,
                    message: 'Last name is required!',
                  },
                  pattern: {
                    value: /^[a-zA-Z ]+$/,
                    message: 'Must be a valid name',
                  },
                })}
              />
              <p className='mt-2 text-red-400 font-light text-sm h-4'>
                {errors?.spouse_to_be_lastName?.message}
              </p>
            </div>
          </div>
        </motion.div>
        <div className='my-3 md:my-10 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
          <Button
            label='Back'
            className='opacity-50 !rounded-[10px]'
            onClick={() => push('/create-website', null, { shallow: true })}
          />
          <Button label='Next' type='submit' className='!rounded-[10px]' />
        </div>
      </form>
    </CreateWebsiteContainer>
  );
};

export default CoupleName;
