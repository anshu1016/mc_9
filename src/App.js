import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/category/Category";
import SideBar from "./pages/sidebar/SideBar";
import VideoListing from "./pages/videoListing/VideoListing";
import SingleVideo from "./features/singleVideo/SingleVideo";
import Explore from "./pages/explore/Explore";
import WatchLater from "./pages/watchLater/WatchLater";
import PlayList from "./pages/playlist/PlayList";
import NewPlaylist from "./features/newplaylist/NewPlaylist";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/video/:videoId" element={<SingleVideo />} />
      </Routes>
      <SideBar />
      <Category />
      <VideoListing />
        {/*<SingleVideo />
      <WatchLater />
      <Explore />
      <PlayList/> */}
      {/* <SingleVideo/> */}
      {/* <NewPlaylist/> */}
    </div>
  );
}

export default App;
