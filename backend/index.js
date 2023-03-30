// const { ApolloServer } = require("apollo-server");
// const mongoose = require("mongoose");

// // APOLLO Server
// // typeof: GraphQl type Definition
// // resolver: How do we resolve queries / mutations

// const typeDefs = require("./graphql/typeDefs");
// const resolvers = require("./graphql/resolvers");

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// mongoose
//   .connect(process.env.MONGODB, { useNewUrlParser: true })
//   .then(() => {
//     console.log("MongoDB connection successfully");
//     return server.listen({ port: 5000 });
//   })
//   .then((res) => {
//     console.log(`Server running at ${res.url}`);
//   });

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const MONGODB =
  "mongodb+srv://joseph:NSRmbdzqY4ihyFVo@cluster0.w8ghrce.mongodb.net/GraphQLTutorial";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected Successful");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
