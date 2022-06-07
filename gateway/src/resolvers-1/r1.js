exports.Query = {
  oneUser: () => ({}),
};

exports.Mutation = {
  oneUser: () => ({}),
};

exports.User = {
  oneValue: (p, a, c, i) => `1: User: ${i.operation.operation}`,
  user: () => ({}),
};
