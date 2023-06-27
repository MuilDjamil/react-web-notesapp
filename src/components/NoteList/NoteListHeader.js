import React from 'react';

function NoteListHeader({ archived }) {
  if (!archived) {
    return <h2>Notes</h2>
  } else {
    return <h2>Archived Notes</h2>
  }
}

export default NoteListHeader;