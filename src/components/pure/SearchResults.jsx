import React, { PropTypes } from 'react';
import SiteListItem from './SiteListItem';

const SearchResults = ({ query, canSearch, results }) => {
    const noResultsMessage = 'We currently don’t have any results for your search, try another.';
    const hasQuery = query.trim().length > 0;

    return (
        <div className="search-results">
            {results.length !== 0 ?
                <ul className="search-results-list">
                    {results.map((result) =>
                        <SiteListItem key={result.id} title={result.siteName} url={result.siteUrl} description={result.description} />
                    )}
                </ul>
                :
                hasQuery && canSearch ? <p className="search-results-empty">{noResultsMessage}</p> : ''
            }
        </div>
    );
};

SearchResults.propTypes = {
    query: PropTypes.string.isRequired,
    canSearch: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired
};

export default SearchResults;
