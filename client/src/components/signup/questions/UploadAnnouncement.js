import { Heading, Button } from '@components/index';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const UploadAnnouncement = ({ watch, register, errors }) => {
  const { query, push } = useRouter();
  const step = Number(query.step);

  return (
    <div
      className={`${
        step === 6 ? 'flex' : 'hidden'
      } flex-col items-center justify-center`}
    >
      <Heading
        label='Upload Wedding invite & announcement!'
        color='bg-secondary-alternative'
        lineStyle={{ marginBottom: '45px' }}
      />
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
            className='w-56 bg-white cursor-pointer inline-block text-center font-semibold py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
          >
            Upload
          </label>
          <p className='mt-2 text-red-400 font-light text-sm text-center'>
            {errors?.upload?.message}
          </p>
        </div>
        <div className='flex items-center space-x-3'>
          <input
            type='checkbox'
            id='do_this_later'
            value={true}
            className='text-primary rounded-md border-2 border-primary w-[22px] h-[22px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            {...register('do_this_later')}
          />
          <label
            htmlFor='do_this_later'
            className='font-inter text-base font-normal cursor-pointer'
          >
            I will do this later
          </label>
        </div>
      </div>
      <p className='font-light max-w-lg text-center'>
        Don’t have one yet? we recommend Esty <br />
        <Link href='/'>
          <a className='font-inter text-blue-500 font-semibold hover:underline mt-3 block'>
            Affiliate Link
          </a>
        </Link>
      </p>
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
