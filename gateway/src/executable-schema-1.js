const { mergeSchemas } = require("@graphql-tools/schema");

const resolvers = require("./resolvers-1");
const schema = require("./schemas-1");

const executableSchema = mergeSchemas({
  resolvers,
  typeDefs: [schema],
});

module.exports = executableSchema;
