const { loadTypedefsSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const path = require("path");

module.exports = loadTypedefsSync(path.join(__dirname, "**/*.graphql"), {
  loaders: [new GraphQLFileLoader()],
}).map((x) => x.rawSDL);
