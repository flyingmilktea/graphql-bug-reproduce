const { createServer } = require("@graphql-yoga/node");
const { configure } = require("@vendia/serverless-express");

const getHandlerImpl = async ({
  schemaFn,
  contextFn = () => ({}),
  createServerOptions = {},
  handlerOptions = {},
}) => {
  const schema = await schemaFn();

  const app = createServer({
    context: contextFn,
    schema: schema,
    graphiql: true,
    logging: true,
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

exports.getHandler = (schemaFn) => {
  return async (...params) => {
    const handler = await getHandlerImpl({
      schemaFn,
    });
    return handler(...params);
  };
};
