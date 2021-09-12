import { ExampleWebsite } from '@components/shared';

const ExampleWebsitePage = () => {
  return (
    <ExampleWebsite
      seo={{ title: 'Example Website' }}
      label='Create Your Website'
      href='/create-website'
    />
  );
};

export default ExampleWebsitePage;
