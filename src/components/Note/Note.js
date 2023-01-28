import React, { useContext, useState } from 'react';

// Styled Components
import { CirclePicker } from 'react-color';

// Custom Components
import EditForm from './EditForm';
import { CheckNote } from './Check';

// Icons
import {
  RiPushpin2Fill,
  RiDeleteBin5Fill,
  RiPushpin2Line,
} from 'react-icons/ri';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { BiArchiveIn, BiArchiveOut, BiEdit } from 'react-icons/bi';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

// Context
import { NoteActionContext } from '../../context/NoteContext';

const Note = (props) => {
  // Destruncturing props
  const { id, title, note, pin, archiev, listname, bgColor, checkList } = props;

  // Calling Context
  const {
    handlePin,
    handleArchive,
    handleDelete,
    handleBgColor,
    handleCheckList,
  } = useContext(NoteActionContext);

  // Creating states
  const [showPicker, setShowPicker] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // Archieve
  const Archive = () => {
    handleArchive(id);
  };

  // Pin
  const Pin = () => {
    handlePin(id);
  };

  // Delete
  const Delete = () => {
    handleDelete(id);
  };

  // Background Color
  const BackgroundColor = (color) => {
    handleBgColor(id, color);
  };

  const CheckList = () => {
    handleCheckList(id);
  };

  return (
    <div style={{ padding: '10px' }} className='col-lg-3 col-md-6 col-sm-12'>
      <div id='note' style={{ background: bgColor }}>
        <div className='text'>
          <h4>{title}</h4>
        </div>
        {note.length >= 0 ? (
          checkList ? (
            note.map((data, index) => <CheckNote key={index} data={data} />)
          ) : (
            note.map((data, index) => (
              <div key={index} className='text'>
                <h6>{data.subnote}</h6>
              </div>
            ))
          )
        ) : (
          <></>
        )}

        {listname === 'delete' ? (
          <></>
        ) : (
          <div className='icons-container'>
            <div onClick={Pin}>
              {pin ? (
                <RiPushpin2Fill className='note-icon' />
              ) : (
                <RiPushpin2Line className='note-icon' />
              )}
            </div>
            <div onClick={Delete}>
              <RiDeleteBin5Fill className='note-icon' />
            </div>
            <div onClick={Archive}>
              {archiev ? (
                <BiArchiveOut className='note-icon' />
              ) : (
                <BiArchiveIn className='note-icon' />
              )}
            </div>
            <div>
              <IoColorPaletteOutline
                onClick={() => setShowPicker(!showPicker)}
                className='note-icon'
              />

              <div className={showPicker ? 'show' : 'hide'}>
                <CirclePicker
                  color='#fff'
                  onChangeComplete={(color, event) =>
                    BackgroundColor(color.hex)
                  }
                  width={220}
                  height={100}
                />
              </div>
            </div>
            {checkList ? (
              <div onClick={CheckList}>
                <AiOutlineMinusSquare className='note-icon' />
              </div>
            ) : (
              <div onClick={CheckList}>
                <AiOutlinePlusSquare className='note-icon' />
              </div>
            )}

            <div>
              <BiEdit
                className='note-icon'
                onClick={() => setModalShow(true)}
              />
            </div>
            <div
              style={{ display: modalShow ? 'block' : 'none' }}
              className='modal'
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <EditForm setModalShow={setModalShow} {...props} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Note;
