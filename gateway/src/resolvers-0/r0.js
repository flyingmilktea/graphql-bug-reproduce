exports.Mutation = {
  user: () => ({}),
};

exports.User = {
  zeroValue: (p, a, c, i) => `0: User: ${i.operation.operation}`,
};
