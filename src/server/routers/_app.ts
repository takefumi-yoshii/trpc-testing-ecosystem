import { router } from "../trpc";
import { todosRouter } from "./todos";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { greetingRouter } from "./greeting";

export const appRouter = router({
  greeting: greetingRouter,
  todos: todosRouter,
});

export type AppRouter = typeof appRouter;
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
