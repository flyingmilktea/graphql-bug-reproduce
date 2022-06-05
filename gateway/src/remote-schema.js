const { print } = require("graphql");
const { introspectSchema, wrapSchema } = require("@graphql-tools/wrap");

const axios = require("axios").default;

const getExecutor =
  (prefix) =>
  async ({ document, variables, context }) => {
    const query = print(document);
    // TODO: if introspection should retry
    const result = (
      await axios.post(
        `http://172.17.0.1:3001/graphql`,
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

const introspectRemoteSchemas = async (prefix) => {
  const executor = getExecutor(prefix);
  const schema = wrapSchema({
    schema: await introspectSchema(executor),
    executor,
  });
  return schema;
};

exports.introspectRemoteSchemas = introspectRemoteSchemas;
