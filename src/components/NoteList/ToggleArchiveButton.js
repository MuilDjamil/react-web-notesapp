import React from 'react';

function ToggleArchiveButton({ toggleNoteListItem }) {
  return (
    <div className='toggle-archive__button'>
      <button onClick={toggleNoteListItem}><i className="fa-solid fa-box-archive"></i></button>
    </div>
  )
}

export default ToggleArchiveButton;