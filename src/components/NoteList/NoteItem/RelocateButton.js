import React from 'react';

function RelocateButton({ id, onRelocate, archived }) {
  if (!archived) {
    return <button className='note-item__relocate' onClick={() => onRelocate(id)}>Arsipkan</button>
  } 

  return <button className='note-item__relocate' onClick={() => onRelocate(id)}>Pulihkan</button>

}

export default RelocateButton;