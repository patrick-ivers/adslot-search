import React, { Component, PropTypes } from 'react';

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    render() {
        return (
            <div className="SearchInput">
                <input type="text" onChange={this.handleInput} value={this.props.query} />
            </div>
        );
    }

    handleInput(e) {
        this.props.setQuery(e.target.value);
        this.props.search(); // TODO: Debounce
    }
}

SearchInput.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired
};

export default SearchInput;
