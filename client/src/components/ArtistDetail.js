import _ from 'lodash';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link, withRouter  } from 'react-router-dom';
import { fetchArtist } from '../actions';
import Payments from './Payments';
import { connect } from 'react-redux';

class ArtistDetail extends Component {
  componentWillMount() {
    const { artist } = this.props.match.params;
    this.props.fetchArtist(artist);
  }

  mapImages(release) {
    return _.map(release.images, image => {
      return <image
        src={image.uri}
        height="200" width="200" padding="10"
        onClick={() => console.log("here")}></image>
    });
  }

  mapArtists(release){return _.map(release.artists, artist => {
      return <div>{artist.name} {artist.join}</div>
    })
  }

  mapVideos(release){return _.map(release.videos, video => {
      return (
        <div className="container" style={{ display: 'inline-grid'}}>
          <div className="row">
            <div className="col-3">
              <ReactPlayer url={video.uri} height="100" width="100%" />
            </div>
          </div>
         </div>
      )
    })
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

    render() {
    const { data } = this.props;

    if (!data.length){
      return (
        <div className="progress white">
          <div className="indeterminate green"></div>
        </div>
      )
    }

    return (
      <div>
        <ul className="list-group center">
          {this.props.data.map(this.renderData)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { data: state.data }
}

export default connect(mapStateToProps, { fetchArtist })(ArtistDetail);
