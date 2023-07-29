import React from "react";
import "./watchLater.css";
import { useData } from "../../context/DataContext";
import VideoCard from "../../features/videoCard/VideoCard";

const WatchLater = () => {
  const {
    state: { watchLater },
  } = useData();
  return (
    <div className="mainCategory">
      <h1>Watch Later</h1>

      <div className="categoryContainer">
        {watchLater.map((video) => (
          <div className="cardsContainer">
            <VideoCard video={video}  deleteIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchLater;
