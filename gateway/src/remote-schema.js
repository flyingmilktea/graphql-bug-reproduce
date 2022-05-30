const { print } = require("graphql");
const { mergeSchemas } = require("@graphql-tools/schema");
const { introspectSchema, wrapSchema } = require("@graphql-tools/wrap");

const axios = require("axios").default;

const getExecutor =
  (prefix) =>
  async ({ document, variables, context }) => {
    const query = print(document);
    // TODO: if introspection should retry
    const result = (
      await axios.post(
        `http://172.17.0.1:3011/graphql`,
        { query, variables },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    ).data;
    return result;
  };

const introspectRemoteSchemas = async (remotePrefixes) => {
  const schemas = await Promise.all(
    remotePrefixes.map(async (prefix) => {
      const executor = getExecutor(prefix);
      const schema = wrapSchema({
        schema: await introspectSchema(executor),
        executor,
      });
      return schema;
    })
  );
  const merged = mergeSchemas({ schemas });
  return merged;
};

exports.introspectRemoteSchemas = introspectRemoteSchemas;
