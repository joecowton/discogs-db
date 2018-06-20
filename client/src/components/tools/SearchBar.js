// @flow
import React, { Component } from 'react';

type Props = {
    onSearchTermChange: Function,
};

type State = {
    term: String,
};

class SearchBar extends Component<Props, State> {
    state = { term: '' };

    render() {
        return (
            <div>
                <button
                    className="btn btn-danger"
                    onClick={() => this.setState({ term })}
                >
                    Pev
                </button>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
