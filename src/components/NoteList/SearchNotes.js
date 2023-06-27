import React from 'react';

class SearchNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  async onInputChange(event) {
    await this.setState(() => ({ input: event.target.value }));
    this.props.searchForNotes(this.state.input.toLowerCase());
  }

  render() {
    return <span className='search-notes__input'>Search : <input placehoder='Cari Judul Buku...' value={this.state.input} onChange={this.onInputChange}></input></span>
  }
}

export default SearchNotes;