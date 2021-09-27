import { Heading } from "@components/shared";
import { Youtube } from "@icons-pack/react-simple-icons";
import YouTube from "react-youtube";

const opts = {
  height: "400px",
};

const HowItWork = ({ hideBorderBottom }) => {
  return (
    <div
      className={`bg-gradient-to-br from-[#FCE3EB] to-white relative overflow-hidden border-t-[5px] border-primary ${hideBorderBottom ? "" : "border-b-[5px]"
        }`}
    >
      <div className="absolute left-0 right-0 w-full -bottom-5 sm:-bottom-10 lg:-bottom-16 xl:-bottom-20 xxl:-bottom-48">
        <img
          src="/images/footer-leaf.png"
          alt=""
          className="object-cover w-full"
        />
      </div>
      <div className="container relative z-20 pt-20 pb-20 md:pb-32">
        <Heading
          label="How It Works"
          className="!text-[36px] !font-normal commonTitle"
        />
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full overflow-hidden transition duration-300 rounded-2xl hover:scale-95">
            <YouTube
              videoId="tm7ZtsuzZ-k"
              className="w-full mx-auto"
              {...{ opts }}
            />
            <a
              target="_blank"
              href="https://youtu.be/tm7ZtsuzZ-k"
              className="absolute flex items-center justify-center w-full h-full inset bg-primary/30"
            >
              <img src="/icons/play.svg" alt="play" className="w-24" />
            </a>
          </div>
          <a
            target="_blank"
            href="https://youtu.be/tm7ZtsuzZ-k"
            className="flex items-center mt-8 mb-[40px] space-x-5 transition duration-300 hover:opacity-50"
          >
            <Youtube color="#FF0000" size={45} />
            <h4 className="font-semibold tex-sm">Watch it on YouTube</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
