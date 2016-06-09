import React, { PropTypes } from 'react';

const SiteListItem = ({ url, description }) => {
    const href = 'http://' + url;

    return (
        <li className="site-list-item">
            <a className="site-list-item-link" href={href} target="_blank">{url}</a>
            <p className="site-list-item-desc">{description}</p>
        </li>
    );
};

SiteListItem.propTypes = {
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default SiteListItem;
