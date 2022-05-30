exports.Query = {
  user: () => ({}),
};

exports.User = {
  gatewayValue: () => `gateway User: ${new Date().toISOString()}`,
};
