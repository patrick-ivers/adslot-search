import React, { PropTypes } from 'react';
import SiteListItem from './SiteListItem';

const SearchResults = ({ sites }) => {
    const noResultsMessage = 'We currently don’t have any results for your search, try another.';

    return (
        <div className="SearchResults">
            {sites.length !== 0 ?
                <ul>
                    {sites.map((site) =>
                        <SiteListItem key={site.id} url={site.siteUrl} description={site.description} />
                    )}
                </ul>
                :
                <p className="SearchResultsEmpty">{noResultsMessage}</p>
            }
        </div>
    );
};

SearchResults.propTypes = {
    sites: PropTypes.array.isRequired
};

export default SearchResults;
