"use client";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import React, { useState, useCallback, useEffect } from "react";
import { getVideoLink } from "@/lib/fetch";

const EpisodeContainer = ({ params }: any) => {
  const { id, episode } = params;
  console.log(
    `https://consumet-jade.vercel.app/movies/dramacool/watch?episodeId=${episode}&mediaId=drama-detail/${id}`
  );
  const [videoLink, setVideoLink] = useState(null);
  console.log(videoLink);
  const fetchDetails = useCallback(async () => {
    try {
      const episode_link = await getVideoLink(episode, id);
      setVideoLink(episode_link);
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  }, [id, episode]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <div className="pb-1 mx-auto px-4 pt-10">
      <div className="pb-4">
        <div className="flex flex-col text-center items-center justify-center">
          <div className="flex flex-col flex-wrap pb-2">{episode}</div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex">
        <MediaPlayer src={videoLink || ""}>
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      </div>
    </div>
  );
};

export default EpisodeContainer;
