const { typeDefs: GraphQLScalars } = require("graphql-scalars");
const { mergeSchemas } = require("@graphql-tools/schema");

const resolvers = require("./resolvers");
const schema = require("./schemas");

const executableSchema = mergeSchemas({
  resolvers,
  typeDefs: [schema, GraphQLScalars],
});

module.exports = executableSchema;
