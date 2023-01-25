// @ts-check
import { z } from "zod";

export const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
});

export const clientSchema = z.object({});

export const clientEnv = {};
