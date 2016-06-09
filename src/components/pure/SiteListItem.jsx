import React, { PropTypes } from 'react';

const SiteListItem = ({ title, url, description }) => {
    const href = 'http://' + url;

    return (
        <li className="site-list-item">
            <h2 className="site-list-item-title">{title}</h2>
            <a className="site-list-item-link" href={href} target="_blank">{url}</a>
            <p className="site-list-item-desc">{description}</p>
        </li>
    );
};

SiteListItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default SiteListItem;
