import { CreateWebsiteContainer } from '@components/createWebsite';
import { Button, Heading } from '@components/index';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const UploadAnnouncement = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector(state => state.question);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', defaultValues: questions });

  const onSubmit = data => {
    push('/create-website/step-4');
  };

  return (
    <CreateWebsiteContainer
      seo={{ title: 'Upload Wedding Invitation & Announcement' }}
    >
      <form
        className={`flex flex-col items-center justify-center`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading
          label='Upload Wedding invite & announcement!'
          color='bg-primary'
          lineStyle={{ marginBottom: '45px' }}
        />
        <div className='w-full flex flex-col items-center justify-center gap-8 mb-10'>
          <div className='relative'>
            <input
              type='file'
              id='uploadAnnouncement'
              className='hidden'
              placeholder='Upload'
              {...register('uploadAnnouncement', {
                required: {
                  value: !getValues('do_this_later'),
                  message: 'Please upload file or check do this later',
                },
              })}
            />
            <label
              htmlFor='uploadAnnouncement'
              className='w-56 bg-white cursor-pointer inline-block text-center font-semibold py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
            >
              Upload
            </label>
            <p className='mt-2 text-red-400 font-light text-sm text-center'>
              {errors?.uploadAnnouncement?.message}
            </p>
          </div>
          <div className='flex items-center space-x-3'>
            <input
              type='checkbox'
              id='do_this_later'
              value={true}
              className='text-secondary-alternative rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
              {...register('do_this_later')}
            />
            <label
              htmlFor='do_this_later'
              className='font-inter text-lg font-normal cursor-pointer'
            >
              I will do this later
            </label>
          </div>
        </div>
        <p className='font-light max-w-lg text-center'>
          Don’t have one yet? we recommend Esty <br />
          <Link href='/'>
            <a className='font-inter text-blue-500 font-semibold hover:underline mt-3 block'>
              Etsy.com/beweddy
            </a>
          </Link>
        </p>
        <div className='my-10 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
          <Button
            label='Previews'
            className='opacity-50 !rounded-md'
            onClick={() => push('/create-website/step-2')}
          />
          <Button label='Next' type='submit' className=' !rounded-md' />
        </div>
      </form>
    </CreateWebsiteContainer>
  );
};

export default UploadAnnouncement;
