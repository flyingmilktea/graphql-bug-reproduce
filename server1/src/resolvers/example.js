exports.Query = {
  user: (p, { id }) => ({ id }),
};

exports.Mutation = {
  user: (p, { id }) => ({ id }),
};

exports.User = {
  oneValue: (p, a, c, i) =>
    `1: User: ${i.operation.operation} ${Math.random()}`,
  user: ({ id }) => ({ id }),
};
