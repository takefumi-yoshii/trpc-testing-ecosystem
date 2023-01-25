import { initialize, mswDecorator } from "msw-storybook-addon";
import { TrpcDecorator } from "../src/tests/storybook";

initialize({ onUnhandledRequest: "bypass" });

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [mswDecorator, TrpcDecorator];
