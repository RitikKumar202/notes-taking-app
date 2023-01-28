import React, { useContext, useState } from 'react';

// Styled Components
import { CirclePicker } from 'react-color';

// Icons
import { RiPushpin2Fill, RiPushpin2Line, RiCloseFill } from 'react-icons/ri';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

// Unique uid generator
import { v4 as uuidv4 } from 'uuid';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const EditForm = (props) => {
  // Destructuring props
  const { setModalShow, note, id } = props;

  // Calling Context
  const { handleEdit } = useContext(NoteActionContext);

  // Concatenated note array
  var noteTxt = '';
  note.forEach((data) => {
    noteTxt += data.subnote + '\n';
  });

  // Creating states
  const [title, setTitle] = useState(props.title);
  const [pin, setPin] = useState(props.pin);
  const [archive, setArchive] = useState(props.archiev);
  const [color, setColor] = useState(props.bgColor);
  const [showPicker, setShowPicker] = useState(false);
  const [noteText, setNoteText] = useState(noteTxt);
  const [addChecklist, setAddChecklist] = useState(props.checkList);
  // const [checkArray, setCheckArray] = useState([]);

  // Edit Function
  const Edit = () => {
    if (addChecklist) {
      alert(
        'Edit Checklist Functionality not added yet to edit it change its form to text by clicking on the same icon'
      );
    } else {
      let newArray = [];
      if (noteText !== '') {
        var noteArray = noteText.split(/^/gm);
        for (let i = 0; i < noteArray.length; i++) {
          if (note[i]) {
            var obj = {
              id: note[i].id,
              subnote: noteArray[i],
              check: note[i].check,
            };
          } else {
            obj = {
              id: uuidv4(),
              subnote: noteArray[i],
              check: false,
            };
          }
          newArray.push(obj);
        }
      }
      handleEdit(id, title, newArray, pin, archive, color, addChecklist);
      setModalShow(false);
    }
  };

  const CheckInput = () => {};

  return (
    <div className='edit-note-form' style={{ background: color }}>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}
      >
        <RiCloseFill
          onClick={() => setModalShow(false)}
          className='note-icon'
        />
      </div>
      <input
        style={{ background: color }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
      />
      {addChecklist ? (
        note.map((data, index) => (
          <div key={index} className='check' style={{ background: color }}>
            <input
              style={{ background: color }}
              // checked={data.check}
              type='checkbox'
            />
            <input
              style={{ background: color }}
              value={data.subnote}
              onChange={(e) => CheckInput(e.target.value)}
            />
          </div>
        ))
      ) : (
        <textarea
          style={{ background: color }}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder='Take a note'
        />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='icons-container'>
          <div onClick={() => setPin(!pin)}>
            {pin ? (
              <RiPushpin2Fill className='note-icon' />
            ) : (
              <RiPushpin2Line className='note-icon' />
            )}
          </div>

          <div onClick={() => setArchive(!archive)}>
            {archive ? (
              <BiArchiveOut className='note-icon' />
            ) : (
              <BiArchiveIn className='note-icon' />
            )}
          </div>
          {addChecklist ? (
            <div onClick={() => setAddChecklist(!addChecklist)}>
              <AiOutlineMinusSquare className='note-icon' />
            </div>
          ) : (
            <div onClick={() => setAddChecklist(!addChecklist)}>
              <AiOutlinePlusSquare className='note-icon' />
            </div>
          )}
          <div>
            <IoColorPaletteOutline
              onClick={() => setShowPicker(!showPicker)}
              className='note-icon'
            />

            <div className={showPicker ? 'show' : 'hide'}>
              <CirclePicker
                color={color}
                onChangeComplete={(color, event) => setColor(color.hex)}
                width={220}
                height={100}
              />
            </div>
          </div>
        </div>

        <button className='submit' onClick={Edit}>
          Update Note
        </button>
      </div>
    </div>
  );
};

export default EditForm;
