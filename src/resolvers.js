const users = [
  { id: 1, name: "Teste 1", email: "teste@teste.com.br" },
  { id: 2, name: "Teste 2", email: "teste1@teste.com.br" }
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },
  Mutation: {
    createUser: () => users[0]
  }
};
