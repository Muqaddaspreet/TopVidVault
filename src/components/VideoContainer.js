import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  // Fetch videos once on mount
  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items || []);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setVideos([]);
      }
    };

    getVideos();
  }, []);

  // Filter videos whenever searchQuery or videos change
  useEffect(() => {
    if (!searchQuery?.trim()) {
      setFilteredVideos(videos);
    } else {
      const query = searchQuery.trim().toLowerCase();
      const filtered = videos.filter(
        (video) =>
          video.snippet.title.toLowerCase().includes(query) ||
          video.snippet.channelTitle.toLowerCase().includes(query)
      );
      setFilteredVideos(filtered);
    }
  }, [searchQuery, videos]);

  return (
    <div className="flex justify-center flex-wrap ml-2 mt-2 mr-2">
      {filteredVideos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}{" "}
      the
    </div>
  );
};

export default VideoContainer;
