import { CreateWebsiteContainer } from '@components/createWebsite';
import { Heading, LinkButton } from '@components/shared';
import Image from 'next/image';

const WebsitePreview = () => {
  return (
    <CreateWebsiteContainer seo={{ title: 'Preview Your Wedding Website' }}>
      <div className={`flex flex-col items-center justify-center`}>
        <Heading
          label='Wedding Website Preview'
          lineStyle={{ display: 'none' }}
        />
        <div className='max-w-4xl w-full mx-auto'>
          <Image
            width={1215}
            height={595}
            src='/images/website-preview.png'
            alt=''
            className='mx-auto max-w-3xl w-full'
          />
        </div>
        <div className='mb-5'>
          <LinkButton
            label='Edit'
            href='/create-website/step-5'
            className='!rounded-lg !bg-secondary-alternative/20 !text-primary !px-8'
          />
        </div>
        <div className='my-5 text-center'>
          <LinkButton
            href='/create-website/step-7'
            label='Launch Your Wedding Platform'
            className='!rounded-lg'
          />
        </div>
      </div>
    </CreateWebsiteContainer>
  );
};

export default WebsitePreview;
