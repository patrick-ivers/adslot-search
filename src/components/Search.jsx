import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchInput from './pure/SearchInput';
import SearchResults from './pure/SearchResults';

class Search extends Component {

    render() {
        const {
            query,
            canSearch,
            setQuery,
            search,
            results
        } = this.props;

        return (
            <div className="search">
                <SearchInput query={query} setQuery={setQuery} search={search} />
                <SearchResults query={query} canSearch={canSearch} results={results} />
            </div>
        );
    }

}

Search.propTypes = {
    query: PropTypes.string.isRequired,
    canSearch: PropTypes.bool.isRequired,
    setQuery: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired
};

const getResults = (state) => {
    return state.sites.filter((site) => {
        return state.search.results.includes(site.id);
    });
};

function mapStateToProps(state) {
    return {
        query: state.search.query,
        canSearch: state.search.canSearch,
        results: getResults(state)
    };
}

export const SearchContainer = connect(
    mapStateToProps,
    actions
)(Search);
