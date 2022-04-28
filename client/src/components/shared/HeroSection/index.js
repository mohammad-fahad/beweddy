import { LinkButton } from "../buttons";
import Paragraph from "./Paragraph";
import SectionHeading from "./SectionHeading";

const HeroSection = ({ heading, paragraph, grid, children }) => {
  return (
    <div className="gradient">
      <div className="container py-20">
        <div className={`grid gap-10 ${grid.gridCols}`}>
          <div className={`self-center ${grid.leftCol}`}>
            <SectionHeading>{heading}</SectionHeading>
            <Paragraph>{paragraph}</Paragraph>
            <LinkButton
              href="https://v2.beweddy.com/register"
              label="Create Your Wedding Website"
              className="!rounded-[5px] !py-3 !px-7"
            />
          </div>
          <div className={`self-center ${grid.rightCol}`}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
