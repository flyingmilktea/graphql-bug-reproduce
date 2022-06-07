exports.Query = {
  zeroUser: () => ({}),
};

exports.Mutation = {
  zeroUser: () => ({}),
};

exports.User = {
  zeroValue: (p, a, c, i) => `0: User: ${i.operation.operation}`,
  user: () => ({}),
};
