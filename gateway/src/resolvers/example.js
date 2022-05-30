exports.Query = {
  user: () => ({}),
};

exports.Mutation = {
  user: () => ({}),
};

exports.User = {
  gatewayValue: () => `gateway User: ${new Date().toISOString()}`,
};
