import React from "react";
import "./videoCard.css";
import { MdWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";

const VideoCard = ({ video }) => {
  const {
    state: { watchLater },
    dispatch,
  } = useData();
  const handleWatchLater = () => {
    const numericId = Number(video?._id);
    if (watchLater.some((item) => Number(item?._id) === numericId)) {
      dispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: { video } });
    } else {
      dispatch({ type: "ADD_TO_WATCH_LATER", payload: { video } });
    }
  };
  if (!video) {
    return null;
  }

  return (
    <div className="mainVideoCard">
      <NavLink to={`/video/${video._id}`} className="videoLink">
        <div className="imageContainer">
          <img src={video.thumbnail} alt="video" />
          <div className="watchLater">
            <MdWatchLater
              onClick={handleWatchLater}
              color={
                watchLater.some((item) => item?._id === Number(video?._id))
                  ? "red"
                  : "white"
              }
            />
          </div>
        </div>
        <div className="description">
          <div className="profileImage">
            <img src={video.thumbnail} alt="profilePic" />
          </div>
          <div className="about">
            <div className="title">{video.title}</div>
            <div className="category">{video.category}</div>
            <div className="views">
              {video.views}||<span className="owner">{video.creator}</span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default VideoCard;
