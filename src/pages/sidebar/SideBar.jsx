import React from "react";
import "./sidebar.css";
import { AiTwotoneHome } from "react-icons/ai";
import {MdExplore, MdPlaylistAdd, MdWatchLater} from "react-icons/md"
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <NavLink to="/" className="items" activeClassName="activeLink">
        <div className="icon">
          <AiTwotoneHome />
        </div>
        <div className="iconText">Home</div>
      </NavLink>
      <NavLink to="/explore" className="items" activeClassName="activeLink">
        <div className="icon">
          <MdExplore />
        </div>
        <div className="iconText">Explore</div>
      </NavLink>
      <NavLink to="/playlist" className="items" activeClassName="activeLink">
        <div className="icon">
          <MdPlaylistAdd />
        </div>
        <div className="iconText">Playlist</div>
      </NavLink>
      <NavLink to="/watchlater" className="items" activeClassName="activeLink">
        <div className="icon">
          <MdWatchLater />
        </div>
        <div className="iconText">Watch Later</div>
      </NavLink>
    </div>
  );
};

export default SideBar;
