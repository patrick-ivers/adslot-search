import Immutable from 'seamless-immutable';

export const TEST_STATE = Immutable.from({
    sites: [
        {
            id: 1,
            siteName: 'React',
            siteUrl: 'facebook.github.io/react',
            description: 'A JavaScript library for building user interfaces',
            categoryIds: [ 2, 3 ]
        },
        {
            id: 2,
            siteName: 'Angular 2',
            siteUrl: 'angular.io',
            description: 'One framework. Mobile and desktop.',
            categoryIds: [ 1, 2, 3 ]
        },
        {
            id: 3,
            siteName: 'the_coding_love();',
            siteUrl: 'thecodinglove.com',
            description: '/* epic gifs for developers */',
            categoryIds: [ 3, 4 ]
        },
        {
            id: 4,
            siteName: 'Reaction GIFS',
            siteUrl: 'reactiongifs.com',
            description: 'Say it with a GIF!',
            categoryIds: [ 4 ]
        }
    ],
    categories: [
        { id: 1, description: 'Model View Controller' },
        { id: 2, description: 'JavaScript' },
        { id: 3, description: 'Coding' },
        { id: 4, description: 'Humour' }
    ],
    search: {
        query: '',
        results: []
    }
});

export const TEST_STATE_WITH_RESULTS = TEST_STATE.merge({
    search: {
        query: 'coding',
        results: [ 1, 2, 3 ]
    }
});
