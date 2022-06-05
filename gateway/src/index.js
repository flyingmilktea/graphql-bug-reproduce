const { stitchSchemas } = require("@graphql-tools/stitch");

const { getHandler } = require("./handler");
const executableSchema0 = require("./executable-schema-0");
const executableSchema1 = require("./executable-schema-1");

const schemaFn = () => {
  const mergedSchema = stitchSchemas({
    subschemas: [
      {
        schema: executableSchema1,
        merge: {
          User: {
            fieldName: "oneUser",
            selectionSet: "{ id }",
            args: (o) => ({ id: o.id }),
          },
        },
      },
      {
        schema: executableSchema0,
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
  });

  return mergedSchema;
};

exports.handler = getHandler(schemaFn);
