import { ExampleWebsite } from "@components/index";
import { withAuthRedirect } from "@hoc/withAuthRedirect";

import Step1 from "../../components/vneue/step1";
import Step2 from "../../components/vneue/step2";
import Step3 from "../../components/vneue/step3";
import Step4 from "../../components/vneue/step4";

import { useRouter } from "next/router";

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
      return <Step4 />;
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
