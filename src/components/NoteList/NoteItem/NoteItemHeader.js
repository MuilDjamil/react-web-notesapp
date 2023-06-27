import React from 'react';
import { showFormattedDate } from '../../../utils/data';

function NoteItemHeader({ title, timestamp }) {
  return (
    <div className='note-item__header'>
      <h4>{title}</h4>
      <p>{showFormattedDate(timestamp)}</p>
    </div>  
  )
}

export default NoteItemHeader;