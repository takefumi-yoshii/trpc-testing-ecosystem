import { trpcMswHandlerFactory } from "@/server/trpc/mock";
import fixture from "./fixture.json";

export const getTodos = () =>
  trpcMswHandlerFactory({
    path: ["todos", "getTodos"],
    type: "query",
    response: fixture.todos,
  });
