import React, { useContext } from 'react';

// Custom Components
import Note from '../components/Note/Note';

// Context
import { NoteContext } from '../context/NoteContext';

const SearchList = () => {
  // Calling Context
  const { searchedNotes } = useContext(NoteContext);

  return (
    <div className='container'>
      {searchedNotes ? (
        <div className='notes-list'>
          <div className='row'>
            {searchedNotes.map((data, index) => (
              <Note
                key={index}
                title={data.title}
                note={data.note}
                pin={data.pin}
                id={data.id}
                archiev={data.archieve}
                bgColor={data.bgColor}
                checkList={data.checklist}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>No Archieved Notes Yet</p>
      )}
    </div>
  );
};

export default SearchList;
