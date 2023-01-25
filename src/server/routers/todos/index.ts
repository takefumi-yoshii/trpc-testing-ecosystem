import { router, publicProcedure } from "@/server/trpc";
import fixture from "./fixture.json";

export const todosRouter = router({
  getTodos: publicProcedure.query(({}) => fixture.todos),
});
