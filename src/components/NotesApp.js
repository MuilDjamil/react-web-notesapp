import React from 'react';
import { getInitialData } from '../utils/data';
import NotesAppHeader from './NotesAppHeader';
import NotesAppInput from './NotesAppInput';
import NoteList from './NoteList/NoteList';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    }

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.changeNoteArchivedStatus = this.changeNoteArchivedStatus.bind(this);
  }

  addNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date(),
          archived: false
        }
      ]  
    }));
  }

  deleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  changeNoteArchivedStatus(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        if (!note.archived) {
          return {
            ...note,
            archived: true
          }
        } else {
          return {
            ...note,
            archived: false
          }
        }
      } else {
        return note;
      }
    });
    this.setState({ notes })
  }
  
  render() {
    return (
      <div className='notes-app'>
        <NotesAppHeader />
        <main>
          <NotesAppInput addNoteHandler={this.addNoteHandler} />
          <NoteList notes={this.state.notes} onDelete={this.deleteNoteHandler} onRelocate={this.changeNoteArchivedStatus} />
        </main>
      </div>  
    )
  }
}

export default NotesApp;