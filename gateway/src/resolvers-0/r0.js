exports.Query = {
  zeroUser: (p, { id }) => ({ __typename: "UserA", id }),
};

exports.Mutation = {
  zeroUser: (p, { id }) => ({ __typename: "UserA", id }),
};

exports.UserA = {
  zeroValue: (p, a, c, i) => `0: UserA: ${i.operation.operation}`,
  zeroUser: ({ id }) => ({ __typename: "UserB", id }),
};
