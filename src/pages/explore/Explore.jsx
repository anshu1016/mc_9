import React from "react";
import { useData } from "../../context/DataContext";
import VideoCard from "../../features/videoCard/VideoCard";
import "./explore.css"
const Explore = () => {
  const {
    state: { videos },
  } = useData();

  return (
    <div className="mainCategory">
        <h1>Explore</h1>
        <div className="searchBarContainer">
        <input type="text" className="searchBar" name="search" placeholder="search videos by title" />
      </div>
      <div className="categoryContainer">
      {
   videos.map((video)=><div className='cardsContainer'>
       <VideoCard video={video} key={video._id}/>
   </div>)
}
      </div>
    </div>
  );
};

export default Explore;
