import { Heading, Button } from '@components/index';

export const DemoWebsite = ({ step, setStep }) => {
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
      <div className='my-10 text-center'>
        <Button label='Next' onClick={() => setStep(current => current + 1)} />
      </div>
    </div>
  );
};
