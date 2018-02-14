import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import SearchBar from './SearchBar';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  handleClick() {
  }

  renderData(data) {
    return (
        <ul key={data.id} className="collection">
          <li className="collection-item avatar">
            <Link to={`/release/${data.id}`}>
              <img src={data.thumb} alt="" className="circle"></img>
            </Link>
              <span className="title">{data.artist}</span>
            <p>{data.title} <br />
               {data.label}
            </p>
          </li>
        </ul>
    )
  }

  render () {
    if (!this.props.data.length){
      return (
        <div className="progress white">
          <div className="indeterminate green"></div>
        </div>
      )
    }
    return(
      <div>
        {/* <SearchBar onSearchTermChange={this.selectArtist = this.selectArtist.bind(this)} /> */}
        <div className="release-list">
          {this.props.data.map(this.renderData)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { data: state.data }
}

export default connect(mapStateToProps, actions)(ReleaseList)
