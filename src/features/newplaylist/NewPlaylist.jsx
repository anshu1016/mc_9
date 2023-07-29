import React, { useEffect } from 'react'
import { useData } from '../../context/DataContext';
import { ImCross } from "react-icons/im";
import "./new.css"
const NewPlaylist = () => {
    const {
        setisHideBox,
        playListDispatch,
        playlistState: { playlist, updatedId },
        setValues,
        values,
      } = useData();
      useEffect(() => {
        const localPlaylist = localStorage.getItem('playlist');
        if (localPlaylist) {
          playListDispatch({ type: "LOAD_PLAYLIST", payload: JSON.parse(localPlaylist) });
        }
      }, []);
      const saveCondition = updatedId ? true : false;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSave = () => {
    if (
      values.title &&
      values.description) {
      if (saveCondition) {
        const updatedData = playlist?.map((data, i) =>
          data?.id === updatedId ? values : data
        );
        playListDispatch({ type: "UPDATE_PLAYLIST", payload: updatedData });
        localStorage.setItem('playlist', JSON.stringify(updatedData));
        setisHideBox(false);
        
      } else {
        setisHideBox(false);
        playListDispatch({ type: "ADD_NEW_PLAYLIST", payload: values });
        setValues((prev) => ({
          ...prev,
          id: new Date().getTime().toString(),
         title:"",
         img:"https://picsum.photos/300/176",
         description:""
        }));
        localStorage.setItem('playlist', JSON.stringify([...playlist, values]));
        
      }
    }
  };
  const handleDummyPlaylist = () => {
    setValues(() => ({
      id: new Date().getTime(),
      title:"Tumhara Playlist",
      img:"https://picsum.photos/300/176",
      description:"TUmhe Dillagi to nibhani pdegi"
    }));
  };
  return (
    <div className="adress-form-details">
    {" "}
    <form onSubmit={handleSubmit}>
      <div className="address-form-container">
        <button
          className="cross-address-btn"
          onClick={() => setisHideBox(false)}
        >
          <ImCross />
        </button>
        <p className="text-center top-margin font-bold sm-margin-bottom">
          Add New PLayList
        </p>
        <input
          type="text"
          className="padding-top-bottom-5 address-field"
          placeholder="Enter title"
          name="title"
          value={values.title}
          onChange={handleInputChange} 
          required
        />
        <input
          type="text"
          className="padding-top-bottom-5 address-field"
          placeholder="Enter Description"
          name="description"
          value={values.description}
          onChange={handleInputChange}
          required
       />
        
       
        <div className="btn-address-save-cancel">
          <button className="save-address-btn" onClick={handleSave}>
            Save
          </button>
          <button
            className="cancel-address-btn"
            onClick={() => setisHideBox(false)}
          >
            Cancel
          </button>
          <button className="dummy-address-btn" onClick={handleDummyPlaylist}>
            {" "}
            Fill With Dummy Values
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default NewPlaylist
