import React from 'react';

class NotesAppInput extends React.Component {
  constructor({ notes }) {
    super(notes)

    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    if (event.target.value.length > this.state.charLimit) {
      return
    }

    this.setState(() => ({ title: event.target.value }));
  }

  onContentChangeHandler(event) {
    this.setState(() => ({ body: event.target.value }));
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNoteHandler(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='notes-app__input'>
        <h2>Input Note Baru</h2>
        <p className='notes-app__input__char-limit'>Used Character : {this.state.title.length}/{this.state.charLimit}</p>
        <input placeholder='Insert Note Title...' value={this.state.title} onChange={this.onTitleChangeHandler} required />
        <textarea rows='19' placeholder='Insert Note Content...' value={this.state.body} onChange={this.onContentChangeHandler} required></textarea>
        <button type='submit'>Submit</button>
      </form>  
    )
  }
}

export default NotesAppInput;