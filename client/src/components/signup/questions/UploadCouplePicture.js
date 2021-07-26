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
      <div className='w-full flex flex-col items-center justify-center gap-8 mb-5'>
        <div className='relative'>
          <input
            type='file'
            id='uploadCouplePicture'
            className='hidden'
            placeholder='uploadCouplePicture'
            {...register('uploadCouplePicture', {
              required: {
                value: !watch('do_this_later_upload_couple'),
                message:
                  'Please upload couple picture file or check do this later',
              },
            })}
          />
          <label
            htmlFor='uploadCouplePicture'
            className='bg-white cursor-pointer inline-block text-center font-semibold py-3 px-4 md:px-10 placeholder-primary border-2 border-primary rounded-lg'
          >
            Upload your favorite picture of you two. ❤️
          </label>
          <p className='mt-2 text-red-400 font-light text-sm text-center'>
            {errors?.uploadCouplePicture?.message}
          </p>
        </div>
      </div>
      <div className='flex items-center space-x-3 mb-5'>
        <input
          type='checkbox'
          id='do_this_later_upload_couple'
          value={true}
          className='text-secondary-alternative rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
          {...register('do_this_later_upload_couple')}
        />
        <label
          htmlFor='do_this_later_upload_couple'
          className='font-inter text-lg font-normal cursor-pointer'
        >
          I will do this later
        </label>
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
