import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import SearchBar from './tools/SearchBar';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  renderData(data) {
    return (
      <ul  className="collection">
        <li className="collection-item avatar">

          <Link to={`/releases/${data.id}`}>
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
    if (!this.props.data.length || !this.props.data){
      return (
        <div className="progress white">
          <div className="indeterminate green"></div>
        </div>
      )
    }
    return(
      <div>
        <div class="dropdown center">
          <button class="btn btn-secondary btn-lg btn-block dropdown-toggle black" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            ARTIST SELECTION
          </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" onClick={()=> this.props.fetchArtist('Kowton')}>Kowton</a>
              <a class="dropdown-item" onClick={()=> this.props.fetchArtist('Pev*')}>Peverelist</a>
              <a class="dropdown-item" onClick={()=> this.props.fetchArtist('Asusu')}>Asusu</a>
              <a class="dropdown-item" onClick={()=> this.props.fetchArtist('Hodge')}>Hodge</a>
              <a class="dropdown-item" onClick={()=> this.props.fetchArtist('Simo Cell')}>Simo Cell</a>
              <a class="dropdown-item" onClick={()=> this.props.fetchArtist('Forest')}>FDW</a>
              <a class="dropdown-item" onClick={()=> this.props.fetchArtist('Various')}>Various</a>
            </div>
          </div>
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
