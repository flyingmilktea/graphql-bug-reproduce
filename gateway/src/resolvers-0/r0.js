exports.Query = {
  zeroUser: (p, { id }) => ({ id }),
};

exports.Mutation = {
  zeroUser: (p, { id }) => ({ id }),
};

exports.User = {
  zeroValue: (p, a, c, i) => `0: User: ${i.operation.operation}`,
  zeroUser: ({ id }) => ({ id }),
};
