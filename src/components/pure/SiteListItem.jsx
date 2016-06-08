import React, { PropTypes } from 'react';

const SiteListItem = ({ id, url, description }) => {
    return (
        <li key={id} className="SiteListItem">
            <a className="SiteListItemLink" href="http://{url}" target="_blank">{url}</a>
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
