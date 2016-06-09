import React, { PropTypes } from 'react';
import SiteListItem from './SiteListItem';

const SearchResults = ({ results }) => {
    const noResultsMessage = 'We currently don’t have any results for your search, try another.';

    return (
        <div className="search-results">
            {results.length !== 0 ?
                <ul>
                    {results.map((result) =>
                        <SiteListItem key={result.id} url={result.siteUrl} description={result.description} />
                    )}
                </ul>
                :
                <p className="search-results-empty">{noResultsMessage}</p>
            }
        </div>
    );
};

SearchResults.propTypes = {
    results: PropTypes.array.isRequired
};

export default SearchResults;
