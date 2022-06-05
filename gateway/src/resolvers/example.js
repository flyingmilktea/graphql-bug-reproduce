exports.Query = {
  user: (p, { id }) => ({ id }),
};

exports.Mutation = {
  user: (p, { id }) => ({ id }),
};

exports.User = {
  zeroValue: (p, a, c, i) =>
    `0: User: ${i.operation.operation} ${Math.random()}`,
  user: ({ id }) => ({ id }),
};
