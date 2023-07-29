import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DataReducer, initialState } from "../reducer/DataReducer";
import { Categories } from "../db/Categories";
import { PlaylistReducer, initialPlaylistState } from "../reducer/PlaylistReducer";
import { NoteReducer, initialNoteState } from "../reducer/NoteReducer";
const DataContext = createContext(null);
const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [categoryData, setCategoryData] = useState(Categories);
  const [noteState,noteDispatch] = useReducer(NoteReducer,initialNoteState)
  const [playlistState,playListDispatch] = useReducer(PlaylistReducer,initialPlaylistState)
  const [values, setValues] = useState({
    id:"",
    title: "",
    img:"https://picsum.photos/300/176",
    description:""
  });
  const [isNoteHideBox,setisNoteHideBox] = useState(false)
  const [noteValue,setNoteValue] = useState({
    id:"",
    newNote:""
  })
  const [isHideBox,setisHideBox]=useState(false)
  useEffect(() => {
   setCategoryData(state.categories);
  },[]);
 
  return (
    <DataContext.Provider value={{ state, dispatch,playlistState,playListDispatch,isHideBox,setisHideBox,values,setValues,isNoteHideBox,setisNoteHideBox,noteState,noteDispatch,noteValue,setNoteValue }}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => useContext(DataContext);
export { useData, DataContextProvider };
