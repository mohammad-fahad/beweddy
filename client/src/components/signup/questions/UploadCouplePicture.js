import { Heading, Button } from '@components/index';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const UploadCouplePicture = ({ watch, register, errors }) => {
  const { query, push } = useRouter();
  const step = Number(query.step);

  return (
    <div
      className={`${
        step === 8 ? 'flex' : 'hidden'
      } flex-col items-center justify-center`}
    >
      <div className='w-full flex flex-col items-center justify-center gap-8 mb-10'>
        <div className='relative'>
          <input
            type='file'
            id='upload'
            className='hidden'
            placeholder='Upload'
            {...register('upload', {
              required: {
                value: !watch('do_this_later'),
                message: 'Please upload file or check do this later',
              },
            })}
          />
          <label
            htmlFor='upload'
            className='max-w-sm bg-white cursor-pointer inline-block text-center font-semibold py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
          >
            Upload your favorite picture of you two. ❤️
          </label>
          <p className='mt-2 text-red-400 font-light text-sm text-center'>
            {errors?.upload?.message}
          </p>
        </div>
      </div>
      <div className='my-5 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
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
