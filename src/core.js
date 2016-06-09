export function setQuery(state, query = '') {
    if (typeof query !== 'string') {
        throw 'Invalid query type';
    }

    return state.setIn(
        [ 'search', 'query' ], query
    ).setIn(
        [ 'search', 'canSearch' ], (query.length > 2)
    );
}

export function search(state) {
    if (state.search.query.trim() === '' || !state.search.canSearch) {
        return state.setIn([ 'search', 'results' ], []);
    }
    
    // Extract query keywords
    const keywords = state.search.query
        .toLowerCase()
        .split(',')
        .map(Function.prototype.call, String.prototype.trim) // Remove leading/trailing whitespace
        .filter(Boolean); // Remove empty strings

    const results = [];

    // Check all keywords in the query for matches on site names and categories
    keywords.map((keyword) => {
        state.sites.map((site) => {
            // Check if the site name contains the current keyword
            if (site.siteName.toLowerCase().includes(keyword)) {
                // If so, add the ID to the results (if we haven't already)
                if (!results.includes(site.id)) {
                    results.push(site.id);
                }
            }
        });

        // Then, get all categories that have descriptions
        // containing the current keyword
        //
        const categoriesWithKeyword = state.categories.filter((category) =>
            category.description.toLowerCase().includes(keyword)
        );

        // Find all sites with those categories and add their
        // IDs to the results (if we haven't already)
        //
        categoriesWithKeyword.map((category) => {
            state.sites.map((site) => {
                if (site.categoryIds.includes(category.id)) {
                    if (!results.includes(site.id)) {
                        results.push(site.id);
                    }
                }
            });
        });
    });

    return state.setIn([ 'search', 'results' ], results);
}
