import React from 'react';
import NoteContextProvider from './NoteContext';

const ContextProvider = (props) => {
  return <NoteContextProvider>{props.children}</NoteContextProvider>;
};
export default ContextProvider;
