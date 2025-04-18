import React from "react";
import { Youtube } from "@icons-pack/react-simple-icons";
import YouTube from "react-youtube";
import { Heading } from "@components/shared";
import { YouTubeGetID } from "@helpers/index";

const opts = {
  height: "400px",
};

const WebsiteVideo = ({ className, videoLink, videoTitle }) => {
  const newSection =
    /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
  const newSectionData = newSection.test(videoLink);
  const YoutubeId = newSectionData && YouTubeGetID(videoLink);

  return (
    <div
      className={`bg-gradient-to-br from-[#FCE3EB] to-white overflow-hidden border-primary  ${
        className ? className : ""
      }`}
    >
      <div className="container relative z-20 px-10 pt-20 pb-20 md:pb-32">
        <Heading
          label={videoTitle ? videoTitle : "First Look or Wedding Video"}
          className="!text-[36px] commonTitle"
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
