import { ExampleWebsite } from "@components/index";

import { withAuthRedirect } from "@hoc/withAuthRedirect";

import { useRouter } from "next/router";

import Step1 from "./step-1";
import Step2 from "./step-2";
import Step3 from "./step-3";
import Step4 from "./step-4";
import Step5 from "./step-5";
import Step6 from "./step-6";
import Step7 from "./step-7";
import Step8 from "./step-8";
import Step9 from "./Step6";

const CreateWebsitePage = () => {
  const router = useRouter();
  const { query } = router;
  const step = Number(query.step);

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
      return <Step9 />;

    case 7:
      return <Step6 />;

    case 8:
      return <Step7 />;

    case 9:
      return <Step8 />;

    default:
      return (
        // <ExampleWebsite
        //   seo={{ title: "Create Your Website" }}
        //   href="/create-website?step=1"
        //   label="Next"
        //   title="Wedding Website Preview"
        //   btn="Create Your Website Now"
        // />
        <Step1 />
      );
  }
};
export default withAuthRedirect(CreateWebsitePage);
