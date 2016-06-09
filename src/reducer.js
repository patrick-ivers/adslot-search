import INITIAL_STATE from './initial-state';
import { setQuery, search } from './core';

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_QUERY':
            return setQuery(state, action.query);
        case 'SEARCH':
            return search(state);
    }

    return state;
}
