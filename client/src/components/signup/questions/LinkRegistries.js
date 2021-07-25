import { Heading, Button } from '@components/index';
import { useRouter } from 'next/router';

export const LinkRegistries = () => {
  const { query,push } = useRouter();
  const step = Number(query.step);

  return (
    <div
      className={`${
        step === 10 ? 'flex' : 'hidden'
      } flex-col items-center justify-center`}
    >
      <Heading
        label='Link All Your Wedding Registries You Want Below!'
        color='bg-secondary-alternative'
      />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-sm md:max-w-5xl w-full mb-10'>
        <div className='border-2 border-primary p-2 rounded-md'>
          <div className='bg-secondary-alternative w-full h-36 rounded-md'></div>
          <h4 className='text-base font-semibold mt-3 mb-8 text-center'>
            Marrage License
          </h4>
          <Button label='Link' outline className='!py-2 mb-3 font-inter font-semibold' />
        </div>
        <div className='border-2 border-primary p-2 rounded-md'>
          <div className='bg-secondary-alternative w-full h-36 rounded-md'></div>
          <h4 className='text-base font-semibold mt-3 mb-8 text-center'>
            Marrage License
          </h4>
          <Button label='Link' outline className='!py-2 mb-3 font-inter font-semibold' />
        </div>
        <div className='border-2 border-primary p-2 rounded-md'>
          <div className='bg-secondary-alternative w-full h-36 rounded-md'></div>
          <h4 className='text-base font-semibold mt-3 mb-8 text-center'>
            Marrage License
          </h4>
          <Button label='Link' outline className='!py-2 mb-3 font-inter font-semibold' />
        </div>
        <div className='border-2 border-primary p-2 rounded-md'>
          <div className='bg-secondary-alternative w-full h-36 rounded-md'></div>
          <h4 className='text-base font-semibold mt-3 mb-8 text-center'>
            Marrage License
          </h4>
          <Button label='Link' outline className='!py-2 mb-3 font-inter font-semibold' />
        </div>
      </div>
      <div className='mt-5 mb-20 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
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
