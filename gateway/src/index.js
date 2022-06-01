const { stitchSchemas } = require("@graphql-tools/stitch");

const { getHandler } = require("./handler");

const executableSchema_s1 = require("./executable-schema_s1");
const executableSchema = require("./executable-schema");

const schemaFn = async () => {
  let mergedSchema = executableSchema;

  if (!(process.env.DISABLE_REMOTE?.toLowerCase() === "true")) {
    mergedSchema = stitchSchemas({
      subschemas: [
        {
          schema: executableSchema_s1,
          merge: {
            User: {
              fieldName: "user",
              args: (originalObject) => undefined,
            },
          },
        },
        {
          schema: executableSchema,
          merge: {
            User: {
              fieldName: "user",
              args: (originalObject) => undefined,
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
