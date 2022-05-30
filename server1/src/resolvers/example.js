exports.Query = {
  user: () => ({}),
};

exports.User = {
  server1Value: () => `User server1: ${new Date().toISOString()}`,
};
