var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // ...Required for automatic refresh.
        './index.jsx'
    ],
    output: {
        path: './dist',
        publicPath: '/', // ...Required for dev server. Reloading won't work without this.
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            // Loads JS/JSX files and parses with Babel...
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: path.resolve(__dirname, 'node_modules/')
            }
        ]
    },
    resolve: {
        // Resolves JS/JSX modules when importing...
        extensions: ['', '.js', '.jsx']
    }
};
