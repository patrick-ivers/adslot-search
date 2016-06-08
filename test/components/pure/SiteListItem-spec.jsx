import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// TODO: Make this relative to 'src/'
import SiteListItem from '../../../src/components/pure/SiteListItem';

describe('SiteListItem', () => {

    it('renders with props', () => {
        const id = 1;
        const url = 'facebook.github.io/react';
        const description = 'A JavaScript library for building user interfaces';

        const wrapper = shallow(
            <SiteListItem id={id} url={url} description={description} />
        );

        expect(wrapper.key()).to.equal('1');

        const link = wrapper.find('.SiteListItemLink');
        expect(link.length).to.equal(1);
        expect(link.prop('href')).to.equal(`http://${url}`);
        expect(link.text()).to.equal(url);

        const desc = wrapper.find('.SiteListItemDesc');
        expect(desc.length).to.equal(1);
        expect(desc.text()).to.equal(description);
    });

});