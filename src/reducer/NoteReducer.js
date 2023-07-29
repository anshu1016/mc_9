export const initialNoteState = {
    note: [
      {
        id: "1",
        newNote: "Tara rumpum pum Taara rum pumpum",
        
      },
    ],
    updatedId: null,
  };
  export const NoteReducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_NEW_NOTE":
        return {
          ...state,
          note: [...state.note, payload],
          updatedId: null,
        };
      case "DELETE_NOTE":
        return {
          ...state,
          note: state?.note?.filter((item) => payload !== item.id),
        };
      case "EDIT_NOTE":
        return {
          ...state,
          updatedId: payload,
        };
      case "UPDATE_NOTE":
        return {
          ...state,
          note: payload,
          updatedId: null,
        };
      case "LOAD_NOTE":
        return {
          ...state,
          playlist: payload,
        };
      default:
        return { ...state };
    }
  };
  