import React, { useEffect } from "react";
import PlaylistCard from "../../features/playlistCard/PlaylistCard";
import { useData } from "../../context/DataContext";
import NewPlaylist from "../../features/newplaylist/NewPlaylist";
import "./playlist.css"
const PlayList = () => {
  const {
    isHideBox,
    setisHideBox,
    playlistState: { playlist },
    playListDispatch,
    setValues,
  } = useData();
  useEffect(() => {
    const localPlaylist = localStorage.getItem('playlist');
    if (localPlaylist) {
      playListDispatch({ type: "LOAD_PLAYLIST", payload: JSON.parse(localPlaylist) });
    }
  }, []);
  const handleNewPlaylist = () => {
    setisHideBox(!isHideBox);

    setValues((prev) => ({
      id: new Date().getTime(),
      title: "",
      img: "https://picsum.photos/300/176",
      description: "",
    }));
  };
  const removePlaylist = (id) => {
    playListDispatch({ type: "DELETE_PLAYLIST", payload: id });
  };
  const editHandler = (editId) => {
    setisHideBox(!isHideBox);
    console.log(editId, "editid");
    setValues(() => playlist.find((data, i) => data.id === editId));
    playListDispatch({ type: "EDIT_PLAYLIST", payload: editId });
  };
  return (
    <div className="mainCategory">
      {" "}
      <h1>Playlist</h1>
      {playlist?.length<0?(<div>No PLayList Found</div>):(
      <div className="categoryContainer">
        {playlist?.map(({ id, title, img, description }, i) => (
          <div className="playlistCArd" key={id}>
            <div className="img">
              <img src={img} alt="playlistImage" />
            </div>
            <div className="contentInfo">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
            <button onClick={() => editHandler(id)} className="edit-btn">
              Edit
            </button>
            <button onClick={() => removePlaylist(id)} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
       
      </div>
      )}
       <button onClick={handleNewPlaylist} className="edit-btn add-new-address-btn">
          Add
        </button>
        {isHideBox&& <NewPlaylist/>}
    </div>
  );
};

export default PlayList;
// ({note?.map((data)=>
//     <div className="notes">
//       <div className="singleNote">
//         <div className="text">
//           <p>RM JHIM HUI BARSAAT</p>
//         </div>
//         <div className="functionableIcons">
//           <div className="icon" onClick={editHandler(id)}>
//             <BiSolidPencil />
//           </div>
//           <div className="icon" onClick={removePlaylist(id)}>
//             <RiDeleteBin7Fill />
//           </div>
//         </div>
//     )}