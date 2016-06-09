import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// TODO: Make this relative to 'src/'
import SiteListItem from '../../../src/components/pure/SiteListItem';

describe('SiteListItem', () => {

    it('renders with props', () => {
        const name = 'React';
        const url = 'facebook.github.io/react';
        const description = 'A JavaScript library for building user interfaces';

        const wrapper = shallow(
            <SiteListItem title={name} url={url} description={description} />
        );

        const title = wrapper.find('.site-list-item-title');
        expect(title.length).to.equal(1);
        expect(title.text()).to.equal(name);

        const link = wrapper.find('.site-list-item-link');
        expect(link.length).to.equal(1);
        expect(link.prop('href')).to.equal(`http://${url}`);
        expect(link.text()).to.equal(url);

        const desc = wrapper.find('.site-list-item-desc');
        expect(desc.length).to.equal(1);
        expect(desc.text()).to.equal(description);
    });

});