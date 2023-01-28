import React, { createContext, useState, useEffect} from 'react';

// Context Creating using createContext
export const NoteContext = createContext();
export const NoteActionContext = createContext();

const NoteContextProvider = (props) => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [deletedNotes, setDeletedNotes] = useState(JSON.parse(localStorage.getItem('deletedNotes')) || []);
  const [searchedNotes, setSearchedNotes] = useState([]);

  useEffect(() =>{
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  useEffect(() =>{
    localStorage.setItem('deletedNotes', JSON.stringify(deletedNotes))
  }, [deletedNotes])

  // Add Note Functionality
  const addNote = (obj) => {
    setNotes([...notes, obj]);
  };

  // Archieve Functionality
  const handleArchive = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      archieve: !newNotes[index].archieve,
    };
    setNotes(newNotes);
  };

  // Pin Functionality
  const handlePin = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      pin: !newNotes[index].pin,
    };
    setNotes(newNotes);
  };

  // Background Color Functionality
  const handleBgColor = (id, color) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      bgColor: color,
    };
    setNotes(newNotes);
  };

  // CheckList Functionality
  const handleCheckList = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      checklist: !newNotes[index].checklist,
    };
    setNotes(newNotes);
  };

  // Delete Note Functionality
  const handleDelete = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    let deletedElement = notes.splice(index, 1);
    setDeletedNotes([...deletedNotes, deletedElement[0]]);
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit Funtcionality
  const handleEdit = (id, title, note, pin, archive, color, addChecklist) => {
    const index = notes.findIndex((note) => note.id === id);
    let newNotes = [...notes];
    newNotes[index] = {
      ...newNotes[index],
      title: title,
      note: note,
      pin: pin,
      archieve: archive,
      bgColor: color,
      checklist: addChecklist,
    };
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, deletedNotes, searchedNotes }}>
      <NoteActionContext.Provider
        value={{
          addNote,
          handleArchive,
          handlePin,
          handleDelete,
          handleBgColor,
          handleEdit,
          handleCheckList,
          setSearchedNotes,
        }}
      >
        {props.children}
      </NoteActionContext.Provider>
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
