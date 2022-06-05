exports.Mutation = {
  user: () => ({}),
};

exports.User = {
  oneValue: (p, a, c, i) => `1: User: ${i.operation.operation}`,
};
