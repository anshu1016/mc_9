export const initialPlaylistState = {
  playlist: [
    {
      id: "1",
      title: "My Favourites",
      img: "https://picsum.photos/300/174",
      description: "This is my favourites.",
    },
  ],
  updatedId: null,
};
export const PlaylistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_NEW_PLAYLIST":
      return {
        ...state,
        playlist: [...state.playlist, payload],
        updatedId: null,
      };
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlist: state?.playlist?.filter((item) => payload !== item.id),
      };
    case "EDIT_PLAYLIST":
      return {
        ...state,
        updatedId: payload,
      };
    case "UPDATE_PLAYLIST":
      return {
        ...state,
        playlist: payload,
        updatedId: null,
      };
    case "LOAD_PLAYLIST":
      return {
        ...state,
        playlist: payload,
      };
    default:
      return { ...state };
  }
};
