import React from "react";
import { Youtube } from "@icons-pack/react-simple-icons";
import YouTube from "react-youtube";
import { Heading } from "@components/shared";
import { YouTubeGetID } from "@helpers/index";

const opts = {
  height: "400px",
};

const WebsiteVideo = ({ className, videoLink }) => {
  const newSection =
    /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
  const newSectionData = newSection.test(videoLink);
  const YoutubeId = newSectionData && YouTubeGetID(videoLink);

  return (
    <div
      className={`bg-gradient-to-br from-[#FCE3EB] to-white relative overflow-hidden border-primary  ${
        className ? className : ""
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
          label="First Look or Wedding Video 😇"
          className="!text-[36px]"
        />
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full overflow-hidden transition duration-300 rounded-2xl hover:scale-95">
            {newSectionData ? (
              <YouTube
                videoId={YoutubeId}
                className="w-full mx-auto"
                {...{ opts }}
              />
            ) : (
              <YouTube
                videoId="tm7ZtsuzZ-k"
                className="w-full mx-auto"
                {...{ opts }}
              />
            )}

            <a
              target="_blank"
              href={videoLink}
              className="absolute flex items-center justify-center w-full h-full inset bg-primary/30"
            >
              <img src="/icons/play.svg" alt="play" className="w-24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteVideo;
