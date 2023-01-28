import React, { useContext } from 'react';

// Custom Components
import Note from '../components/notes/Note';

// Context
import { Notes } from 'src/components/notes/Notes';

const SearchList = () => {
  // Calling Context
  const { searchedNotes } = useContext(Notes);

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
