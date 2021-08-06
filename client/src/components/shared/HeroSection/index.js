import { LinkButton } from '../buttons';
import Paragraph from './Paragraph';
import SectionHeading from './SectionHeading';

const HeroSection = ({ heading, paragraph, children }) => {
  return (
    <div className='gradient'>
      <div className='container py-20'>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='col-span-1'>
            <SectionHeading>{heading}</SectionHeading>
            <Paragraph>{paragraph}</Paragraph>
            <LinkButton
              href='/create-website'
              label='Create Your Wedding Website'
              className='!rounded-[5px] !py-3 !px-7'
            />
          </div>
          <div className='col-span-1 self-center'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
