import React from "react";
import "./videoListing.css";
import { useData } from "../../context/DataContext";
import VideoCard from "../../features/videoCard/VideoCard";

const VideoListing = () => {
  const {
    state: { categoryType },
  } = useData();
  console.log(categoryType, "PARTICULARCATEFGORYTYPE");
  return (
    <div className="mainCategory">
      <h1>{categoryType.category}</h1>
      <div className="categoryContainer">
        {categoryType.map((video) => (
          <div className="cardsContainer" key={video.id}>
            <VideoCard video={video} key={video.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoListing;
