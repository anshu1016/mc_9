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
import CategoryCard from "./features/categoryCard/CategoryCard";
import CategoryListing from "./pages/categoryListing/CategoryListing";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/categories/:categoryName" element={<CategoryListing />} />
        <Route path="/video/:videoId" element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
