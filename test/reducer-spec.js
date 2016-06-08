import { expect } from 'chai';
import { TEST_STATE, TEST_STATE_WITH_RESULTS } from './test-state';
import reducer from '../src/reducer';

describe('reducer', () => {

    it('handles SET_QUERY', () => {
        const action = {
            type: 'SET_QUERY',
            query: 'Patrick'
        };

        const nextState = reducer(TEST_STATE, action);
        expect(nextState.search.query).to.equal('Patrick');
    });

    it('handles SEARCH', () => {
        const state = TEST_STATE.merge({ search: { query: 'control, gif' }});
        const action = {
            type: 'SEARCH'
        };

        const nextState = reducer(state, action);
        expect(nextState.search.results).to.deep.equal([ 2, 4 ]);
    });

});