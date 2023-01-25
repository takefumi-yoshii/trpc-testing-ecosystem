import type { StoryFn } from "@storybook/react";
import { Provider } from "../tests/trpc";

export const TrpcDecorator = (Story: StoryFn) => (
  <Provider>
    <Story />
  </Provider>
);
