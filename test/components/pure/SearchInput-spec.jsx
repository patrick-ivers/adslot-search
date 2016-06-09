import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// TODO: Make this relative to 'src/'
import SearchInput from '../../../src/components/pure/SearchInput';

describe('SearchInput', () => {

    it('renders with props', () => {
        const query = 'Patrick';

        const wrapper = shallow(
            <SearchInput query={query} setQuery={(q) => {}} search={() => {}} />
        );

        const input = wrapper.find('input');
        expect(input.length).to.equal(1);
        expect(input.prop('value')).to.equal(query);
    });

    it('calls setQuery on input value change', () => {
        const queryInputted = 'Patrick';
        let queryReceived;
        const setQuery = (query) => { queryReceived = query; };

        const wrapper = shallow(
            <SearchInput query={''} setQuery={setQuery} search={() => {}} />
        );

        const input = wrapper.find('input');
        input.simulate('change', { target: { value: queryInputted }});
        expect(queryReceived).to.equal(queryInputted);
    });

    it('calls search on input value change', () => {
        let searchCalled = false;
        const search = () => { searchCalled = true; };

        const wrapper = shallow(
            <SearchInput query={''} setQuery={(q) => {}} search={search} />
        );

        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'a' }});
        expect(searchCalled).to.be.true;
    });

});