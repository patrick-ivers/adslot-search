import React, { Component, PropTypes } from 'react';

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    render() {
        return (
            <div className="search-input">
                <input
                    className="search-input-control"
                    type="text"
                    placeholder="Search Publishers"
                    onChange={this.handleInput}
                    value={this.props.query} />
            </div>
        );
    }

    handleInput(e) {
        this.props.setQuery(e.target.value);

        // If I was making the request to a server
        // or searching through a large set of data,
        // I would debounce the search call here
        // instead of calling search() directly.
        //
        // Separating setQuery() from search() was
        // done with debouncing in mind.
        //
        this.props.search();
    }
    
}

SearchInput.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired
};

export default SearchInput;
