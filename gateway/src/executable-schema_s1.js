const { typeDefs: GraphQLScalars } = require("graphql-scalars");
const { mergeSchemas } = require("@graphql-tools/schema");

const resolvers = require("./resolvers_s1");
const schema = require("./schemas_s1");

const executableSchema_s1 = mergeSchemas({
  resolvers,
  typeDefs: [schema, GraphQLScalars],
});

module.exports = executableSchema_s1;
