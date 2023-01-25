import { trpcMswHandlerFactory } from "@/server/trpc/mock";

export const hello = () =>
  trpcMswHandlerFactory({
    path: ["greeting", "hello"],
    type: "query",
    response: "This is MSW response",
  });
