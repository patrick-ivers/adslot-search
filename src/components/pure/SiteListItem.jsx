import React, { PropTypes } from 'react';

const SiteListItem = ({ url, description }) => {
    const href = 'http://' + url;

    return (
        <li className="SiteListItem">
            <a className="SiteListItemLink" href={href} target="_blank">{url}</a>
            <p className="SiteListItemDesc">{description}</p>
        </li>
    );
};

SiteListItem.propTypes = {
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default SiteListItem;
