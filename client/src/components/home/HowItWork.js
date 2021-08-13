import { Heading } from '@components/shared';
import { Youtube } from '@icons-pack/react-simple-icons';
import YouTube from 'react-youtube';

const opts = {
  height: '400px',
};

const HowItWork = () => {
  return (
    <div className='bg-gradient-to-br from-[#FCE3EB] to-white relative overflow-hidden border-t-[5px] border-b-[5px] border-primary'>
      <div className='absolute -bottom-5 sm:-bottom-10 lg:-bottom-16 xl:-bottom-20 xxl:-bottom-48  right-0 left-0 w-full'>
        <img
          src='/images/footer-leaf.png'
          alt=''
          className='object-cover w-full'
        />
      </div>
      <div className='container pt-20 pb-20 md:pb-32 relative z-20'>
        <Heading label='How It Works' />
        <div className='max-w-3xl mx-auto'>
          <div className='relative w-full rounded-2xl overflow-hidden hover:scale-95 transition duration-300'>
            <YouTube
              videoId='67Mlgq6-dGA'
              className='mx-auto w-full'
              {...{ opts }}
            />
            <a
              target='_blank'
              href='https://www.youtube.com/watch?v=67Mlgq6-dGA'
              className='absolute inset bg-primary/30 w-full h-full flex items-center justify-center'
            >
              <img src='/icons/play.svg' alt='play' className='w-24' />
            </a>
          </div>
          <a
            target='_blank'
            href='https://www.youtube.com/watch?v=ALad4ovPbDc'
            className='mt-8 flex items-center space-x-5 hover:opacity-50 transition duration-300'
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
