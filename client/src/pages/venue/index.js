import { ExampleWebsite } from "@components/index";
import { withAuthRedirect } from "@hoc/withAuthRedirect";

import Step1 from "../../components/vneue/step1";
import Step2 from "../../components/vneue/step2";
import Step3 from "../../components/vneue/step3";
import Step4 from "../../components/vneue/step4";
import Step5 from "../../components/vneue/step5";

import { useRouter } from "next/router";
import Step6 from "../../components/vneue/Step6";

const CreateVenuePage = () => {
  const { query } = useRouter();
  const step = Number(query.step);

  switch (step) {
    case 1:
      return <Step1 />;

    case 2:
      return <Step2 />;

    case 3:
      return <Step3 />;

    case 4:
      return <Step6 />;
    case 5:
      return <Step4 />;
    case 6:
      return <Step5 />;

    default:
      return (
        <ExampleWebsite
          seo={{ title: "Create Your Venue" }}
          href="/venue?step=1"
          label="Next"
        />
      );
  }
};
export default withAuthRedirect(CreateVenuePage);
