export function search(state, query = '') {
    if (query === '') {
        return state.set('search', { query: '', results: [] });       
    }

    // Extract query keywords and trim all leading/trailing whitespace
    const keywords = query
        .toLowerCase()
        .split(',')
        .map(Function.prototype.call, String.prototype.trim);

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

    return state.set('search', { query: query, results: results });
}
