import type { ComponentMeta } from "@storybook/react";
import { Todos } from "./Todos";
import * as todosMock from "@/server/routers/todos/mock";

export default {
  component: Todos,
} as ComponentMeta<typeof Todos>;

export const Primary = {
  parameters: {
    msw: {
      handlers: [todosMock.getTodos()],
    },
  },
};
