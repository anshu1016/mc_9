import React, { useEffect } from "react";
import "./singleVideo.css";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";
import SideBar from "../../pages/sidebar/SideBar";
import { MdEditNote, MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { BiSolidPencil } from "react-icons/bi";
import { NewNote } from "../newNote/NewNote";
import NewPlaylist from "../newplaylist/NewPlaylist";
const SingleVideo = () => {
  const { videoId } = useParams();
  console.log(videoId, "PARAMS_ID");
  const {
    noteState: { note },
    noteDispatch,
    noteValue,
    setNoteValue,
    isNoteHideBox,
    setisNoteHideBox,
  } = useData();

  const {
    state: { videos, watchLater },
    dispatch,
    isHideBox,
    setisHideBox,
  } = useData();
  useEffect(() => {
    const localPlaylist = localStorage.getItem("playlist");
    if (localPlaylist) {
      noteDispatch({ type: "LOAD_NOTE", payload: JSON.parse(localPlaylist) });
    }
  }, []);
  const handleNewPlaylist = () => {
    setisNoteHideBox(!isNoteHideBox);

    setNoteValue((prev) => ({
      id: new Date().getTime(),
      newNote: "",
    }));
  };
  const removePlaylist = (id) => {
    noteDispatch({ type: "DELETE_NOTE", payload: id });
  };

  const editHandler = (editId) => {
    setisNoteHideBox(!isNoteHideBox);
    console.log(editId, "editid");
    setNoteValue(() => note?.find((data, i) => data.id === editId));
    noteDispatch({ type: "EDIT_NOTE", payload: editId });
  };

  const getParticularVideo = videos?.filter(
    (item) => item?._id === Number(videoId)
  );

  // return loading if the video is not found or the data is still being fetched
  if (!getParticularVideo || getParticularVideo?.length === 0) {
    return <div>Loading...</div>;
  }
  const handleNewPlaylist2 = () => {
    setisHideBox(!isHideBox);
  };
  const { _id, title, views, thumbnail, src, creator, category, chips } =
    getParticularVideo[0];

  return (
    <div className="wholeSinglePage">
      <div className="sideBarSide">
        <SideBar />
      </div>
      <div className="centerFeed">
        <div className="videoPart">
          <iframe
            width="560"
            height="315"
            src={src}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="profilee">
          <div className="part1">
            <div className="profilePic">
              <img src={thumbnail} alt="profilePic" />
            </div>
            <div className="abouut">
              <p>{title}</p>
            </div>
          </div>
          <div className="functionableIcons">
            <div className="icon">
              <MdWatchLater />
            </div>
            <div className="icon">
              <MdPlaylistAdd onClick={handleNewPlaylist2} />
              {isHideBox && <NewPlaylist />}
            </div>
            <div className="icon">
              <MdEditNote onClick={handleNewPlaylist} />
            </div>
          </div>
        </div>
        <div className="commentPart">
          <h3 className="commentHeading">My Notes</h3>
          {note?.length < 0 ? (
            <div>No Notes</div>
          ) : (
            note?.map((data) => (
              <div className="notes">
                <div className="singleNote">
                  <div className="text">
                    <p>{data?.newNote}</p>
                  </div>
                  <div className="functionableIcons">
                    <div className="icon" onClick={() => editHandler(data?.id)}>
                      <BiSolidPencil />
                    </div>
                    <div
                      className="icon"
                      onClick={() => removePlaylist(data?.id)}
                    >
                      <RiDeleteBin7Fill />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
          {isNoteHideBox && <NewNote />}
        </div>
      </div>
      <div className="rightBarSide">
        <h2>More Videos:</h2>
        <div className="morevideosColumn">
          <div className="v1">
            {videos?.map((video) => (
              <>
                <div className="videooo">
                  <img src={video?.thumbnail} alt="v1" />
                </div>
                <div className="description">
                  <p>{video?.title}</p>
                  <p>
                    <span>{video?.views}</span>||{video?.creator}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
