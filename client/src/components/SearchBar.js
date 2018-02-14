import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' }
  }

  render() {
    return (
    <div>
      <button className="btn btn-danger" onClick={()=> this.setState({ term: 'Pev'}) }>Pev</button>
    </div>
    )
  }

  onInputChange(term) {
    console.log('here');
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
