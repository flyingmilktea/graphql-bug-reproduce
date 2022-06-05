const { createServer } = require("@graphql-yoga/node");
const { configure } = require("@vendia/serverless-express");

const getHandlerImpl = ({
  schemaFn,
  contextFn,
  createServerOptions = {},
  handlerOptions = {},
}) => {
  const schema = schemaFn();

  const app = createServer({
    context: contextFn,
    schema: schema,
    graphiql: true,
    logging: true,
    // logging: console,
    maskedErrors: false,
    ...createServerOptions,
  });
  const handlerImpl = configure({
    app: app,
    log: app.logger,
    ...handlerOptions,
  });
  return handlerImpl;
};

exports.getHandler = (schemaFn) => getHandlerImpl({ schemaFn });
