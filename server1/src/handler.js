const { createServer } = require("@graphql-yoga/node");
const mem = require("mem");
const { configure } = require("@vendia/serverless-express");

const getHandlerImpl = async ({
  schemaFn,
  contextFn,
  createServerOptions = {},
  handlerOptions = {},
}) => {
  const schema = await schemaFn();

  const app = createServer({
    context: contextFn,
    schema: schema,
    graphiql: true,
    logging: process.env.NODE_ENV === "development" ? console : true,
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

exports.getHandler = (
  schemaFn,
  contextFn,
  { maxAge, createServerOptions, handlerOptions } = {}
) => {
  const cachedGetHandlerImpl = mem(getHandlerImpl, { maxAge });
  return async (...params) => {
    const handler = await cachedGetHandlerImpl({
      schemaFn,
      contextFn,
      createServerOptions,
      handlerOptions,
    });
    return handler(...params);
  };
};
