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
            selectionSet: "{ id }",
            args: (o) => ({ id: o.id }),
          },
        },
      },
      {
        schema: await introspectRemoteSchemas(["/server1"]),
        merge: {
          User: {
            fieldName: "oneUser",
            selectionSet: "{ id }",
            args: (o) => ({ id: o.id }),
          },
        },
      },
    ],
    mergeTypes: true, // << default in v7
  });

  return mergedSchema;
};

exports.handler = getHandler(schemaFn);
