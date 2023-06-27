import React from 'react';
import NoteItem from './NoteItem/NoteItem';
import SearchNotes from './SearchNotes';
import ToggleArchiveButton from './ToggleArchiveButton';
import NoteListHeader from './NoteListHeader';

class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedList: false,
      searchKeyword: '',
    }

    this.toggleNoteListItem = this.toggleNoteListItem.bind(this);
    this.searchForNotes = this.searchForNotes.bind(this);
  }

  toggleNoteListItem() {
    if (!this.state.archivedList) {
      this.setState({ archivedList: true })
    } else {
      this.setState({ archivedList: false }) 
    }
  }

  searchForNotes(searchKeyword) {
    this.setState({ searchKeyword });
  }


  render() {
    return (
    <div className='note-list'>
      <div className='note-list__header'>
        <NoteListHeader archived={this.state.archivedList} />
        <SearchNotes searchForNotes={this.searchForNotes} />
      </div>
      <div className='note-list__body'>
        { 
          !this.state.archivedList
          ? this.props.notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(this.state.searchKeyword)).length > 0 
            ? this.props.notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(this.state.searchKeyword)).map((filteredNote) => (
              <NoteItem
                key={filteredNote.id}
                id={filteredNote.id}
                title={filteredNote.title}
                timestamp={filteredNote.createdAt}
                content={filteredNote.body}
                onDelete={this.props.onDelete}
                onRelocate={this.props.onRelocate}
              />
            ))
            : <h2 className='empty-notice'>Tidak Ada Catatan</h2>
          : this.props.notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(this.state.searchKeyword)).length > 0 
            ? this.props.notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(this.state.searchKeyword)).map((filteredNote) => (
              <NoteItem
                key={filteredNote.id}
                id={filteredNote.id}
                title={filteredNote.title}
                timestamp={filteredNote.createdAt}
                content={filteredNote.body}
                archived={filteredNote.archived}
                onDelete={this.props.onDelete}
                onRelocate={this.props.onRelocate}
              />
            ))
            : <h2 className='empty-notice'>Tidak Ada Catatan</h2>
        }
        <ToggleArchiveButton toggleNoteListItem={this.toggleNoteListItem} />
      </div>  
    </div>
  )
  }
  
}

export default NoteList;