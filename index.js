import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";

const server = new ApolloServer({
  // typeDeffs -- Differenet types of data
  // resolvers --

  typeDefs,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log("Starting server on 5000!");
