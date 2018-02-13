import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class ReleaseList extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  handleClick() {
  }

  renderData(data) {
    return (
        <ul class="collection">
          <li class="collection-item avatar">
            <img src={data.thumb} alt="" class="circle"></img>
            <span class="title">{data.artist}</span>
            <p>{data.title} <br />
               {data.label}
            </p>
            <Link to={`/release/${data.id}`} class="secondary-content"><i class="material-icons">View</i></Link>
          </li>
        </ul>
    )
  }

  render () {
    if (!this.props.data.length){
      return <div>Loading..</div>
    }

      return(
        <div className="release-list">
          {this.props.data.map(this.renderData)}
        </div>
      )

  }
}

function mapStateToProps(state) {
  return { data: state.data }
}

export default connect(mapStateToProps, actions)(ReleaseList)
