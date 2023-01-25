import type { RequestHandler } from "msw";
import { render as originalRender } from "@testing-library/react";
import { setupServer } from "msw/node";
import type { ReactElement } from "react";
import { Provider } from "./trpc";

export function setupMockServer(...handlers: RequestHandler[]) {
  const server = setupServer(...handlers);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  return server;
}

export function render(ui: ReactElement) {
  return originalRender(<Provider>{ui}</Provider>);
}
