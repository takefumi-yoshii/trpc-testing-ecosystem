import type { ComponentMeta } from "@storybook/react";
import { Greeting } from "./Greeting";
import * as greetingMock from "@/server/routers/greeting/mock";

export default {
  component: Greeting,
} as ComponentMeta<typeof Greeting>;

export const Primary = {
  parameters: {
    msw: {
      handlers: [greetingMock.hello()],
    },
  },
};
