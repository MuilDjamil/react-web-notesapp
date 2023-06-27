import React from 'react';
import NoteItemHeader from './NoteItemHeader';
import NoteItemContent from './NoteItemContent';
import DeleteButton from './DeleteButton';
import RelocateButton from './RelocateButton';

function NoteItem({ id, title, timestamp, content, archived, onDelete, onRelocate }) {
  return (
    <article className='note-item'>
      <NoteItemHeader title={title} timestamp={timestamp} />
      <NoteItemContent content={content} />
      <div className='note-item__action'>
        <RelocateButton onRelocate={onRelocate} id={id} archived={archived} />
        <DeleteButton onDelete={onDelete} id={id} />
      </div>
    </article>
  )
}

export default NoteItem;