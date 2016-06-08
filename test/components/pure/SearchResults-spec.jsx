import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

// TODO: Make these relative to 'src/'
import SearchResults from '../../../src/components/pure/SearchResults';
import SiteListItem from '../../../src/components/pure/SiteListItem';

describe('SearchResults', () => {

    it('renders with results', () => {
        const sites = [
            {
                id: 1,
                siteUrl: 'facebook.github.io/react',
                description: 'A JavaScript library for building user interfaces'
            },
            {
                id: 2,
                siteUrl: 'angular.io',
                description: 'One framework. Mobile and desktop.'
            },
            {
                id: 3,
                siteUrl: 'thecodinglove.com',
                description: '/* epic gifs for developers */'
            }
        ];

        const wrapper = shallow(
            <SearchResults sites={sites} />
        );

        const results = wrapper.find(SiteListItem);
        expect(results.length).to.equal(3);
    });

    it('renders with no results', () => {
        const sites = [];
        const wrapper = shallow(
            <SearchResults sites={sites} />
        );

        const results = wrapper.find(SiteListItem);
        expect(results.length).to.equal(0);

        const noResultsMessage = wrapper.find('.SearchResultsEmpty');
        expect(noResultsMessage.length).to.equal(1);
        expect(noResultsMessage.text()).to.equal('We currently don’t have any results for your search, try another.');
    });

});