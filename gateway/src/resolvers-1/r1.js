exports.Mutation = {
  oneUser: (p, { id }) => ({ id }),
};

exports.User = {
  oneValue: (p, a, c, i) => `1: User: ${i.operation.operation}`,
  user: ({ id }) => ({ id }),
};
