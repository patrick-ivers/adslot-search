import { setQuery, search } from './core';

export default function(state, action) {
    switch (action.type) {
        case 'SET_QUERY':
            return setQuery(state, action.query);
        case 'SEARCH':
            return search(state);
    }

    return state;
}