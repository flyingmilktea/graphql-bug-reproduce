const { stitchSchemas } = require("@graphql-tools/stitch");

const { getHandler } = require("./handler");
const executableSchema0 = require("./executable-schema-0");
const executableSchema1 = require("./executable-schema-1");

const schemaFn = () => {
  const mergedSchema = stitchSchemas({
    subschemas: [
      {
        schema: executableSchema0,
        merge: {
          User: {
            fieldName: "user",
            args: () => undefined,
          },
        },
      },
      {
        schema: executableSchema1,
        merge: {
          User: {
            fieldName: "user",
            args: () => undefined,
          },
        },
      },
    ],
    mergeTypes: true, // << default in v7
  });

  return mergedSchema;
};

exports.handler = getHandler(schemaFn);
