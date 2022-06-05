exports.Mutation = {
  user: () => ({}),
};

exports.User = {
  gatewayValue: (p, a, c, i) =>
    `gateway User: ${i.operation.operation} ${Math.random()}`,
};
