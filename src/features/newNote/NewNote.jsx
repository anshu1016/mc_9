import React, { useEffect } from 'react'
import { useData } from '../../context/DataContext';
import { ImCross } from "react-icons/im";
import "../newplaylist/new.css"
export const NewNote = () => {
    const {
        setisNoteHideBox,
        noteDispatch,
        noteState: { note, updatedId },
        noteValue,setNoteValue
      } = useData();
      useEffect(() => {
        const localPlaylist = localStorage.getItem('note');
        if (localPlaylist) {
          noteDispatch({ type: "LOAD_NOTE", payload: JSON.parse(localPlaylist) });
        }
      }, []);
      const saveCondition = updatedId ? true : false;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNoteValue({
      ...noteValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSave = () => {
    if (
      noteValue.newNote) {
      if (saveCondition) {
        const updatedData = note?.map((data, i) =>
          data?.id === updatedId ? noteValue : data
        );
        noteDispatch({ type: "UPDATE_NOTE", payload: updatedData });
        localStorage.setItem('playlist', JSON.stringify(updatedData));
        setisNoteHideBox(false);
        
      } else {
        setisNoteHideBox(false);
        noteDispatch({ type: "ADD_NEW_NOTE", payload: noteValue });
        setNoteValue((prev) => ({
          ...prev,
          id: new Date().getTime().toString(),
        newNote:""
        }));
        localStorage.setItem('note', JSON.stringify([...note, noteValue]));
        
      }
    }
  };
  const handleDummyPlaylist = () => {
    setNoteValue(() => ({
      id: new Date().getTime(),
      newNote:"Kabhi Khushi KAbhi Gam",
    }));
  };
  return (
    <div className="adress-form-details">
    {" "}
    <form onSubmit={handleSubmit}>
      <div className="address-form-container">
        <button
          className="cross-address-btn"
          onClick={() => setisNoteHideBox(false)}
        >
          <ImCross />
        </button>
        <p className="text-center top-margin font-bold sm-margin-bottom">
          Add New Note
        </p>
        <input
          type="text"
          className="padding-top-bottom-5 address-field"
          placeholder="Enter Note"
          name="newNote"
          value={noteValue?.newNote}
          onChange={handleInputChange} 
          required
        />
       
       
        <div className="btn-address-save-cancel">
          <button className="save-address-btn" onClick={handleSave}>
            Save
          </button>
          <button
            className="cancel-address-btn"
            onClick={() => setisNoteHideBox(false)}
          >
            Cancel
          </button>
          <button className="dummy-address-btn" onClick={handleDummyPlaylist}>
            {" "}
            Fill With Dummy Note
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

