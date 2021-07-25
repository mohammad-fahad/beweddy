import { Heading, Button } from '@components/index';
import { useRouter } from 'next/router';

export const DemoWebsite = () => {
  const { query } = useRouter();
  const step = Number(query.step);

  return (
    <div
      className={`${
        step === 3 ? 'flex' : 'hidden'
      } flex-col items-center justify-center`}
    >
      <Heading label='Here is an example of the website your creating!' />
      <img
        src='/images/wedding-macbook.png'
        alt=''
        className='mx-auto max-w-2xl w-full'
      />
      <div className='my-5 text-center'>
        <Button label='Next' type='submit' className=' !rounded-md' />
      </div>
    </div>
  );
};
