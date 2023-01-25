import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "../../../env/server.mjs";
import { createContext } from "../../../server/context";
import { appRouter } from "../../../server/routers/_app";

export default createNextApiHandler({
  router: appRouter,
  batching: { enabled: true },
  createContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : undefined,
});
