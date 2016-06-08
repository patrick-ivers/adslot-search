import { expect } from 'chai';
import Immutable from 'seamless-immutable';
import { setQuery, search } from '../src/core';

const TEST_STATE = Immutable.from({
    sites: [
        {
            id: 1,
            siteName: "React",
            siteUrl: "facebook.github.io/react",
            description: "A JavaScript library for building user interfaces",
            categoryIds: [ 2, 3 ]
        },
        {
            id: 2,
            siteName: "Angular 2",
            siteUrl: "angular.io",
            description: "One framework. Mobile and desktop.",
            categoryIds: [ 1, 2, 3 ]
        },
        {
            id: 3,
            siteName: "the_coding_love();",
            siteUrl: "thecodinglove.com",
            description: "/* epic gifs for developers */",
            categoryIds: [ 3, 4 ]
        },
        {
            id: 4,
            siteName: "Reaction GIFS",
            siteUrl: "reactiongifs.com",
            description: "Say it with a GIF!",
            categoryIds: [ 4 ]
        }
    ],
    categories: [
        { id: 1, description: "Model View Controller" },
        { id: 2, description: "JavaScript" },
        { id: 3, description: "Coding" },
        { id: 4, description: "Humour" }
    ],
    search: {
        query: '',
        results: []
    }
});

const TEST_STATE_WITH_RESULTS = TEST_STATE.merge({
    search: {
        query: 'coding',
        results: [ 1, 2, 3 ]
    }
});


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
            const query = '';
            const nextState = search(TEST_STATE, query);
            expect(nextState.search.results).to.deep.equal([]);
        });

        it('doesn\'t populate search results if no matches found for query', () => {
            const query = 'HTML';
            const nextState = search(TEST_STATE, query);
            expect(nextState.search.results).to.deep.equal([]);
        });

        it('populates search results if matches found for query', () => {
            const query = 'javascript';
            const nextState = search(TEST_STATE, query);
            expect(nextState.search.results).to.deep.equal([ 1, 2 ]);
        });

        it('populates search results if matches found for query with multiple keywords', () => {
            const query = 'control, gif';
            const nextState = search(TEST_STATE, query);
            expect(nextState.search.results).to.deep.equal([ 2, 4 ]);
        });

        it('removes existing results if query is empty', () => {
            const query = '';
            const nextState = search(TEST_STATE_WITH_RESULTS, query);
            expect(nextState.search.results).to.deep.equal([]);
        });

        it('removes existing results if no matches found for query', () => {
            const query = 'Python';
            const nextState = search(TEST_STATE_WITH_RESULTS, query);
            expect(nextState.search.results).to.deep.equal([]);
        });

        it('changes search results if query changes', () => {
            const query = 'javascript, objective-c';
            const nextState = search(TEST_STATE_WITH_RESULTS, query);
            expect(nextState.search.results).to.deep.equal([ 1, 2 ]);
        });

    });

});