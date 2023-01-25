import { type inferAsyncReturnType } from "@trpc/server";

export const createContext = async () => ({});

export type Context = inferAsyncReturnType<typeof createContext>;
