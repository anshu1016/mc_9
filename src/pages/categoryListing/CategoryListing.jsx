import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import CategoryCard from "../../features/categoryCard/CategoryCard";
import "./categorylisting.css";
import VideoCard from "../../features/videoCard/VideoCard";
import { Videos } from "../../db/Videos";

const CategoryListing = () => {
  const {categoryName} = useParams()
  const {
    state: { categories, videos },
  } = useData();

  const videosInCategory = videos?.filter(
    (video) => video?.category.toLowerCase() === categoryName.toLowerCase()
  );
  
  return (
    <div className="mainCategory">
      {" "}
      <h1>Category</h1>
      <div className="categoryContainer">
        {videosInCategory?.map((video) => (
          <div className="cardsContainer" key={video?.id}>
            <VideoCard video={video} key={video?.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryListing;
