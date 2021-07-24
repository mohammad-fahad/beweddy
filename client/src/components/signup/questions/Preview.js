import { Heading, Button } from '@components/index';
import { useRouter } from 'next/dist/client/router';

export const Preview = () => {
  const { query } = useRouter();
  const step = Number(query.step);

  return (
    <div
      className={`${
        step === 9 ? 'flex' : 'hidden'
      } flex-col items-center justify-center`}
    >
      <Heading
        label='Wedding Website Preview'
        lineStyle={{ display: 'none' }}
      />
      <img
        src='/images/website-preview.png'
        alt=''
        className='mx-auto max-w-3xl w-full'
      />
      <Button
        label='Edit'
        type='submit'
        className='!rounded-lg !bg-secondary-alternative/20 !text-primary'
      />
      <div className='my-5 text-center'>
        <Button
          label='Launch Your Wedding Platform'
          type='submit'
          className='!rounded-lg'
        />
      </div>
    </div>
  );
};
