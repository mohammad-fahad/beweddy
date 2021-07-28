import { ExampleWebsite } from '@components/index';

const CreateWebsitePage = () => (
  <ExampleWebsite
    seo={{ title: 'Create Your Website' }}
    href='/create-website/step-1'
    label='Next'
  />
);
export default CreateWebsitePage;
