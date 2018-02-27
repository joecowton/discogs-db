import _ from 'lodash';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { fetchRelease } from '../actions';
import { connect } from 'react-redux';
import Payments from './tools/Payments';

export class ReleaseDetail extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchRelease(id);
	}

	mapImages(release) {
		return _.map(release.images, image => {
			return (
				<image
					key={image.uri}
					src={image.uri}
					height="200"
					width="200"
					padding="10"
				/>
			);
		});
	}

	mapArtists(release) {
		const { artist } = release;
		return _.map(artist, ({ name, join }) => {
			return (
				<div key={name}>
					{name} {join}
				</div>
			);
		});
	}

	mapVideos(release) {
		const { videos } = release;
		return _.map(videos, ({ uri }) => {
			return (
				<div className="container" key={uri} style={{ display: 'inline-grid' }}>
					<div className="row">
						<div className="col-3">
							<ReactPlayer url={uri} height="100" width="100%" />
						</div>
					</div>
				</div>
			);
		});
	}

	renderRelease() {
		const { data } = this.props;
		return (
			<li key={data.id} className="list-group-item">
				<h1>{this.mapArtists(data)}</h1>
				<h2>{data.title}</h2>
				<p>{this.mapImages(data)}</p>
				{this.mapVideos(data)}
				<p>
					<Payments release={data} />
				</p>
			</li>
		);
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
}

function mapStateToProps({ data }, ownProps) {
	return { data: data[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchRelease })(ReleaseDetail);
