import { ExampleWebsite } from "@components/index";
import { withAuthRedirect } from "@hoc/withAuthRedirect";

import { useRouter } from "next/router";
import Step1 from "../vneue/step1";
import Step2 from "../vneue/step2";
import Step3 from "../vneue/step3";
import Step4 from "../vneue/step4";
import Step5 from "../vneue/step4";

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

    case 5:
      return <Step5 />;

    default:
      return <Step1 />;
  }
};
export default withAuthRedirect(CreateVenuePage);
