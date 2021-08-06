import { LinkButton } from '../buttons';
import SectionHeading from './SectionHeading';

const HeroSection = () => {
  return (
    <div className='gradient'>
      <div className='container py-20'>
        <div className='grid grid-cols-2 gap-10'>
          <div className='col-span-1'>
            <SectionHeading>
              Fun, Free <br /> Wedding Website
            </SectionHeading>
            <p className='max-w-lg text-xl leading-9 capitalize font-medium mb-5'>
              Awesome design for Website Easy to use, customizable Options
              useful features for couples and guests
            </p>
            <LinkButton
              href='/create-website'
              label='Create Your Wedding Website'
              className='!rounded-[5px] !py-3 !px-7'
            />
          </div>
          <div className='col-span-1'>
            <img
              src='/images/wedding-laptop.png'
              alt=''
              className='max-w-3xl w-full mx-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
