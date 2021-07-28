import { Button, Heading, CreateWebsiteContainer } from '@components/index';
import { addQuestion } from '@features/question/questionSlice';
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
  } = useForm({ mode: 'all', defaultValues: questions });

  const onSubmit = data => {
    dispatch(addQuestion(data));
    push('/create-website/step-2');
  };

  return (
    <CreateWebsiteContainer seo={{ title: 'Couple Names' }}>
      <form
        className={`flex flex-col items-center justify-center`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading
          label="What's your name? & Who's your lucky spouse-to-be?"
          color='bg-primary'
        />
        <div className='flex items-center gap-3 md:gap-5 flex-wrap flex-col xl:flex-row'>
          <div className='flex items-center gap-3 flex-wrap sm:flex-nowrap'>
            <div className='w-full'>
              <input
                type='text'
                className='w-full font-normal py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
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
            <div className='w-full'>
              <input
                type='text'
                className='w-full font-normal py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
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
          <h2 className='font-alice text-4xl text-center'>&</h2>
          <div className='flex items-center gap-3 flex-wrap sm:flex-nowrap'>
            <div className='w-full'>
              <input
                type='text'
                className='w-full font-normal py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
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
            <div className='w-full'>
              <input
                type='text'
                className='w-full font-normal py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
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
        </div>
        <div className='my-10 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
          <Button
            label='Back'
            className='opacity-50 !rounded-md'
            onClick={() => push('/create-website')}
          />
          <Button label='Next' type='submit' className=' !rounded-md' />
        </div>
      </form>
    </CreateWebsiteContainer>
  );
};

export default CoupleName;
