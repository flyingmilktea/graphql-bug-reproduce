exports.Query = {
  oneUser: (p, { id }) => ({ __typename: "UserB", id }),
};

exports.Mutation = {
  oneUser: (p, { id }) => ({ __typename: "UserB", id }),
};

exports.UserB = {
  oneValue: (p, a, c, i) => `1: UserB: ${i.operation.operation}`,
  oneUser: ({ id }) => ({ __typename: "UserA", id }),
};
