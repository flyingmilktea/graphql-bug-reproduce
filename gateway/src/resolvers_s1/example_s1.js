exports.Mutation = {
  user: () => ({}),
};

exports.User = {
  server1Value: (p, a, c, i) => `Server1 User: ${i.operation.operation}`,
};
