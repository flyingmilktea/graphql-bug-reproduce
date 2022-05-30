const { getHandler } = require("./handler");

const executableSchema = require("./executableSchema");

const schemaFn = () => {
  return executableSchema;
};

exports.handler = getHandler(schemaFn, () => ({}), 60000);
