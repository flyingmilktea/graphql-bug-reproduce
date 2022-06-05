const { mergeSchemas } = require("@graphql-tools/schema");

const resolvers = require("./resolvers-0");
const schema = require("./schemas-0");

const executableSchema = mergeSchemas({
  resolvers,
  typeDefs: [schema],
});

module.exports = executableSchema;
