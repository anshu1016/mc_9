import React from "react";
import { useData } from "../../context/DataContext";
import VideoCard from "../../features/videoCard/VideoCard";
import "./explore.css";
const Explore = () => {
  const {
    state: { videos },
    dispatch,
    state,
  } = useData();

  const handleSearchProduct = (e) => {
    dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value });
  };
  return (
    <div className="mainCategory">
      <h1>Explore</h1>
      <div className="searchBarContainer">
        <input
          type="text"
          className="searchBar"
          name="search"
          placeholder="search videos by title"
          onChange={handleSearchProduct}
        />
      </div>
      <div className="categoryContainer">
        {videos
          ?.filter((video) =>
            state.searchText
              ? video?.title
                  .toLowerCase()
                  .includes(state.searchText.toLowerCase())
              : true
          )
          .map((video) => (
            <div className="cardsContainer">
              <VideoCard video={video} key={video._id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Explore;
