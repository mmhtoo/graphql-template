import { startStandaloneServer } from "@apollo/server/standalone";
import { createApp } from "./src/app";
import { jsonServerApi } from "./src/libs/axios";
import { JsonServerBookServiceImpl } from "./src/services/impl/json-server-book.service.impl";
import cors from "cors";
import express from "express";
import { expressMiddleware } from "@as-integrations/express5";

async function main() {
  const { apolloServer, httpServer, app } = createApp();
  // const { url } = await startStandaloneServer(apolloServer, {
  //   listen: {
  //     port: Number(process.env.PORT || 5000),
  //   },
  // context: async () => ({
  //   dataSources: {
  //     jsonServerApi,
  //   },
  //   services: {
  //     bookService: new JsonServerBookServiceImpl(jsonServerApi),
  //   },
  // }),
  // });
  // console.log("🚀 Server ready at", url);

  await apolloServer.start();

  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(apolloServer as any, {
      context: async () => ({
        dataSources: {
          jsonServerApi,
        },
        services: {
          bookService: new JsonServerBookServiceImpl(jsonServerApi),
        },
      }),
    })
  );

  httpServer.listen(Number(process.env.PORT || 5000), () => {
    console.log("🚀 Server ready at", httpServer.address());
  });
}

main().catch(console.error);
