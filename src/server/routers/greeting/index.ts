import { router, publicProcedure } from "@/server/trpc";

export const greetingRouter = router({
  hello: publicProcedure.query(() => "Hello, tRPC testing!"),
});
