import { Heading, Button } from '@components/index';

export const GetStarted = ({ step, setStep }) => {
  return (
    <div
      className={`${
        step === 2 ? 'flex' : 'hidden'
      } flex-col items-center justify-center`}
    >
      <h3 className='text-7xl'>🎉</h3>
      <Heading
        label='Welcome... Now Eat, Drink, & BeWeddy!'
        color='bg-secondary-alternative'
      />
      <p className='text-2xl text-center font-normal w-full max-w-xl mb-10'>
        Creating your wedding website & lets get this party started
      </p>
      <Button
        label="Let's get started"
        outline
        onClick={() => setStep(current => current + 1)}
      />
    </div>
  );
};
