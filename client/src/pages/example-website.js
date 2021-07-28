import { ExampleWebsite } from '@components/shared';

const ExampleWebsitePage = () => (
  <ExampleWebsite
    seo={{ title: 'Example Website' }}
    label='Create Your Website'
    href='/signup'
  />
);

export default ExampleWebsitePage;
