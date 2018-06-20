// @flow
import _ from 'lodash';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRelease } from '../actions';
import Payments from './tools/Payments';

type VideoDefinition = {};

type Release = {
    artist: string,
    images: Array<Image>,
    videos: Array<VideoDefinition>,
};

type Props = {
    fetchRelease: any,
    data: Object,
    match: Object,
};

class ReleaseDetail extends Component<Props> {
    static mapImages(release: Release) {
        return _.map(release.images, image => (
            <image
                key={image.uri}
                src={image.uri}
                height="200"
                width="200"
                padding="10"
            />
        ));
    }

    static mapArtists(release: Release) {
        const { artist } = release;
        return _.map(artist, ({ name, join }) => (
            <div key={name}>
                {name} {join}
            </div>
        ));
    }

    static mapVideos(release: Release) {
        const { videos } = release;
        return _.map(videos, ({ uri }) => (
            <div
                className="container"
                key={uri}
                style={{ display: 'inline-grid' }}
            >
                <div className="row">
                    <div className="col-3">
                        <ReactPlayer url={uri} height="100" width="100%" />
                    </div>
                </div>
            </div>
        ));
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchRelease(id);
    }

    render() {
        const { data } = this.props;

        if (!data) {
            return (
                <div className="progress white">
                    <div className="indeterminate green" />
                </div>
            );
        }

        return (
            <div>
                <Link to="/releases/all">Back to Index</Link>
                <ul className="list-group center">{this.renderRelease()}</ul>
            </div>
        );
    }

    renderRelease() {
        const { data } = this.props;
        return (
            <li key={data.id} className="list-group-item">
                <h1>{ReleaseDetail.mapArtists(data)}</h1>
                <h2>{data.title}</h2>
                <p>{ReleaseDetail.mapImages(data)}</p>
                {ReleaseDetail.mapVideos(data)}
                <p>
                    <Payments release={data} />
                </p>
            </li>
        );
    }
}

function mapStateToProps({ data }, ownProps) {
    return { data: data[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchRelease })(ReleaseDetail);
