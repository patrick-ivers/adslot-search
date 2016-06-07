export function search(state, query = '') {
    if (query === '') {
        return state.set('search', { query: '', results: [] });       
    }

    return state;
}
