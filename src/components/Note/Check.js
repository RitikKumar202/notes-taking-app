import React from 'react';

const CheckNote = (props) => {
  const { data } = props;
  return (
    <div className='check'>
      <input checked={data.checklist} type='checkbox' />
      <h6>{data.subnote}</h6>
    </div>
  );
};

export { CheckNote };
