const { stitchSchemas } = require("@graphql-tools/stitch");

const { getHandler } = require("./handler");
const executableSchema = require("./executable-schema");
const { introspectRemoteSchemas } = require("./remote-schema");

const schemaFn = async () => {
  const mergedSchema = stitchSchemas({
    subschemas: [
      {
        schema: executableSchema,
        merge: {
          User: {
            fieldName: "zeroUser",
          },
        },
      },
      {
        schema: await introspectRemoteSchemas("/server1"),
        merge: {
          User: {
            fieldName: "oneUser",
          },
        },
      },
    ],
    mergeTypes: true, // << default in v7
  });

  return mergedSchema;
};

exports.handler = getHandler(schemaFn);
