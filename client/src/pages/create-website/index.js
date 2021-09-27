import {
  ExampleWebsite,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
} from '@components/index';
import { withAuthRedirect } from '@hoc/withAuthRedirect';

import { useRouter } from 'next/router';

const CreateWebsitePage = () => {
  const { query } = useRouter();
  const step = Number(query.step);
  // useEffect(() => {}, []);

  switch (step) {
    case 1:
      return <Step1 />;

    case 2:
      return <Step2 />;

    case 3:
      return <Step3 />;

    case 4:
      return <Step4 />;

    case 5:
      return <Step5 />;

    case 6:
      return <Step6 />;

    case 7:
      return <Step7 />;

    case 8:
      return <Step8 />;

    default:
      return (
        <ExampleWebsite
          seo={{ title: 'Create Your Website' }}
          href='/create-website?step=1'
          label='Next'
        />
      );
  }
};
export default withAuthRedirect(CreateWebsitePage);
