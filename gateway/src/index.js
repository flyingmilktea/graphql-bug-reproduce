const { stitchSchemas } = require("@graphql-tools/stitch");

const { getHandler } = require("./handler");
const executableSchema = require("./executable-schema");
const { introspectRemoteSchemas } = require("./remote-schema");

const schemaFn = async () => {
  let mergedSchema = executableSchema;

  if (!(process.env.DISABLE_REMOTE?.toLowerCase() === "true")) {
    mergedSchema = stitchSchemas({
      subschemas: [
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
      ],
      mergeTypes: true, // << default in v7
      typeMergingOptions: {
        fieldConfigMerger: (candidates) => candidates[0].fieldConfig,
      },
    });
  }

  return mergedSchema;
};

exports.handler = getHandler(schemaFn, () => ({}), 60000);
