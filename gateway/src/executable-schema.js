const { mergeSchemas } = require("@graphql-tools/schema");

const resolvers = require("./resolvers");
const schema = require("./schemas");

const executableSchema = mergeSchemas({
  resolvers,
  typeDefs: [schema],
});

module.exports = executableSchema;
