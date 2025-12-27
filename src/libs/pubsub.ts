import { RedisPubSub } from "graphql-redis-subscriptions";
import Redis from "ioredis";

const redisOptions = {
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT || 6379),
  retryStrategy: (times: number) => {
    // Reconnect after
    return Math.min(times * 50, 2000);
  },
};

export const pubSub = new RedisPubSub({
  publisher: new Redis(redisOptions),
  subscriber: new Redis(redisOptions),
});

// Event names (constants for consistency)
export const EVENTS = {
  BOOK_CREATED: "BOOK_CREATED",
  BOOK_DELETED: "BOOK_DELETED",
  NOTIFICATION_SENT: "NOTIFICATION_SENT",
};
