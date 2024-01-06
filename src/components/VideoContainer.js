import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  };

  return (
    <div className="flex px-3 flex-wrap ">
     {videos[0]&& <AdVideoCard info={videos[0]}/>}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v="+video.id}>
          <VideoCard  info={video} />
        </Link>
      ))}
      {/* <VideoCard info={videos[0]} /> */}
    </div>
  );
};

export default VideoContainer;