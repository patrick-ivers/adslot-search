export function setQuery(query) {
    return {
        type: 'SET_QUERY',
        query: query
    };
}

export function search() {
    return {
        type: 'SEARCH'
    };
}
