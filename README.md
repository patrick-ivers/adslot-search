Adslot Search
=============

## Setup
 - Ensure [NPM](https://www.npmjs.com/) is installed
 - Install [Webpack](https://webpack.github.io/) globally with `npm install -g webpack webpack-dev-server`
 - `cd` into the app directory on the command line
 - Install app dependencies with `npm install`

## Run
 - Once setup is complete, run the app from the root directory with `webpack-dev-server`

## Tests
 - Tests can be run by executing `npm test` in the root directory

## Notes
The specified UI requirements are a little confusing: If a user types in a query,
a search is performed on the __site names__ and __category descriptions__, neither of which
actually appear in the result list items. As such, I've created a separate branch
`feature/alt-ui` that includes the site name for each result item. Please checkout that
branch to have a look.