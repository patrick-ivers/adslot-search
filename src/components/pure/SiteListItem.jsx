import React, { PropTypes } from 'react';

const SiteListItem = ({ id, url, description }) => {
    const href = 'http://' + url;

    return (
        <li key={id} className="SiteListItem">
            <a className="SiteListItemLink" href={href} target="_blank">{url}</a>
            <p className="SiteListItemDesc">{description}</p>
        </li>
    );
};

SiteListItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default SiteListItem;
