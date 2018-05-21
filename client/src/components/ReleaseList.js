// @flow

import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import artists from './artistFields';
import type { DataDefinition } from './ArtistDetail';

type Props = {
    fetchData: Function,
    fetchArtist: Function,
    data: Array<DataDefinition>,
};

class ReleaseList extends React.Component<Props> {
    static renderData(data) {
        const { thumb, title, label, artist, id } = data;
        return (
            <ul className="collection" key={id}>
                <li className="collection-item avatar">
                    <Link to={`/releases/${id}`}>
                        <img src={thumb} alt="" className="circle" />
                    </Link>
                    <span className="title">{artist}</span>
                    <p>
                        {title} <br />
                        {label}
                    </p>
                </li>
            </ul>
        );
    }

    componentWillMount() {
        this.props.fetchData();
    }

    render() {
        if (!this.props.data.length || !this.props.data) {
            return (
                <div className="progress white">
                    <div className="indeterminate green" />
                </div>
            );
        }

        return (
            <div>
                <div className="dropdown center">
                    <button
                        className="btn btn-secondary btn-lg btn-block dropdown-toggle black"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        ARTIST SELECTION
                    </button>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        {this.renderArtistDropdown()}
                    </div>
                </div>
                <div className="release-list">
                    {this.props.data.map(ReleaseList.renderData)}
                </div>
            </div>
        );
    }

    renderArtistDropdown() {
        return _.map(artists, ({ searchName, displayName }) => (
            <button
                key={displayName}
                className="dropdown-item"
                onClick={() => this.props.fetchArtist({ searchName })}
            >
                {displayName}
            </button>
        ));
    }
}

function mapStateToProps(state) {
    return { data: state.data };
}

export default connect(mapStateToProps, actions)(ReleaseList);
