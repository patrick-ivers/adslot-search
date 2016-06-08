import { expect } from 'chai';
import { TEST_STATE, TEST_STATE_WITH_RESULTS } from './test-state';
import { setQuery, search } from '../src/core';

describe('core logic', () => {

    describe('setQuery', () => {

        it('sets query value', () => {
            const query = 'Patrick';
            const nextState = setQuery(TEST_STATE, query);
            expect(nextState.search.query).to.equal('Patrick');
        });

        it('rejects query that is not a string', () => {
            const query = 5;
            const fn = () => setQuery(TEST_STATE, query);
            expect(fn).to.throw('Invalid query type');
        });

    });

    describe('search', () => {

        it('doesn\'t populate search results if query is empty', () => {
            const nextState = search(TEST_STATE);
            expect(nextState.search.results).to.deep.equal([]);
        });

        it('doesn\'t populate search results if no matches found for query', () => {
            const state = TEST_STATE.merge({ search: { query: 'HTML' }});
            const nextState = search(state);
            expect(nextState.search.results).to.deep.equal([]);
        });

        it('populates search results if matches found for query', () => {
            const state = TEST_STATE.merge({ search: { query: 'javascript' }});
            const nextState = search(state);
            expect(nextState.search.results).to.deep.equal([ 1, 2 ]);
        });

        it('populates search results if matches found for query with multiple keywords', () => {
            const state = TEST_STATE.merge({ search: { query: 'control, gif' }});
            const nextState = search(state);
            expect(nextState.search.results).to.deep.equal([ 2, 4 ]);
        });

        it('removes existing results if query is empty', () => {
            const state = TEST_STATE_WITH_RESULTS.merge({ search: { query: '' }});
            const nextState = search(state);
            expect(nextState.search.results).to.deep.equal([]);
        });

        it('removes existing results if no matches found for query', () => {
            const state = TEST_STATE_WITH_RESULTS.merge({ search: { query: 'Python' }});
            const nextState = search(state);
            expect(nextState.search.results).to.deep.equal([]);
        });

        it('changes search results if query changes', () => {
            const state = TEST_STATE_WITH_RESULTS.merge({ search: { query: 'javascript, objective-c' }});
            const nextState = search(state);
            expect(nextState.search.results).to.deep.equal([ 1, 2 ]);
        });

    });

});