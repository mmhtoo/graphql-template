import { ApolloServer, type BaseContext } from "@apollo/server";
import { typeDefs } from "./graphql/type-defs";
import { resolvers } from "./graphql/resolvers";
import type { AppContext } from "./types/graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/use/ws";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { jsonServerApi } from "./libs/axios";
import { JsonServerBookServiceImpl } from "./services/impl/json-server-book.service.impl";

export const createApp = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const app = express();
  const httpServer = createServer(app);
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  const serverCleanUp = useServer(
    {
      schema,
      context: async () => ({
        dataSources: {
          jsonServerApi,
        },
        services: {
          bookService: new JsonServerBookServiceImpl(jsonServerApi),
        },
      }),
    },
    wsServer
  );

  const apolloServer = new ApolloServer<AppContext & BaseContext>({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanUp.dispose();
            },
          };
        },
      },
    ],
  });

  return {
    apolloServer,
    httpServer,
    app,
  };
};
