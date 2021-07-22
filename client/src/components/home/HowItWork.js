import { Heading } from '@components/shared';
import { Youtube } from '@icons-pack/react-simple-icons';

const HowItWork = () => {
  return (
    <div className='bg-gradient-to-br from-[#FCE3EB] to-white min-h-[70vh]'>
      <div className='container py-20'>
        <Heading label='How It Works' />
        <div className='max-w-3xl mx-auto'>
          <div className='relative w-full rounded-2xl overflow-hidden'>
            <a
              target='_blank'
              href='https://www.youtube.com/watch?v=2b97Ot1LQw4'
              className='absolute inset bg-primary/30 w-full h-full flex items-center justify-center'
            >
              <img src='/icons/play.svg' alt='play' className='w-24' />
            </a>
            <img src='/images/couple.png' alt='' className='w-full' />
          </div>
          <a
            target='_blank'
            href='https://www.youtube.com/watch?v=2b97Ot1LQw4'
            className='mt-8 flex items-center space-x-5'
          >
            <Youtube color='#FF0000' size={45} />
            <h4 className='tex-sm font-semibold'>Watch it on YouTube</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
