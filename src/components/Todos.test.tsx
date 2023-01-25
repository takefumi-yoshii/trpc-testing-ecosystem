import { Todos } from "./Todos";
import { screen } from "@testing-library/react";
import * as todosMock from "@/server/routers/todos/mock";
import { setupMockServer, render } from "@/tests/jest";

setupMockServer(todosMock.getTodos());

test("スタブが3件表示される", async () => {
  render(<Todos />);
  expect(await screen.findAllByRole("listitem")).toHaveLength(3);
});
