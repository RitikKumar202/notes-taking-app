import React, { useContext } from 'react';

// Custom Components
import List from '../components/List/List';

// Context
import { NoteContext } from '../context/NoteContext';

const Bin = () => {
  // Calling Context
  const { deletedNotes } = useContext(NoteContext);

  return (
    <div className='container'>
      <div className='heading-con'>
        <h1>Deleted Notes</h1>
      </div>

      <div className='notes-list'>
        <div>
          <List notesList={deletedNotes} list='delete' />
        </div>
      </div>
    </div>
  );
};

export default Bin;
