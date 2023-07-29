import { Videos } from "../db/Videos";
import { Categories } from "../db/Categories";

const getLocalStorage = () => {
  const watchLaterLocalStorage = localStorage.getItem("watchLater");
  if (watchLaterLocalStorage) {
    return JSON.parse(watchLaterLocalStorage);
  } else {
    return [];
  }
};

const initialState = {
  videos: Videos,
  categories: Categories,
  categoryType: [],
  searchText: "",
  playlist: [],
  watchLater: getLocalStorage(),
};

const DataReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_CATEGORY_DATA":
      return { ...state };
    case "GET_PARTICULAR_CATEGORY":
      return {
        ...state,
        categoryType: state.videos.filter(
          (item) => item.category === payload.category
        ),
      };
    case "ADD_TO_WATCH_LATER":
      const newWatchLater = [...state.watchLater, payload.video];
      localStorage.setItem("watchLater", JSON.stringify(newWatchLater)); // Add to localStorage
      return {
        ...state,
        watchLater: newWatchLater,
      };

    case "REMOVE_FROM_WATCH_LATER":
      const numericId = Number(payload?.video?._id);
      const filteredWatchLater = state.watchLater.filter(
        (video) => Number(video?._id) !== numericId
      );
      localStorage.setItem("watchLater", JSON.stringify(filteredWatchLater)); // Update localStorage
      return {
        ...state,
        watchLater: filteredWatchLater,
      };

    default:
      return state;
  }
};

export { initialState, DataReducer };
