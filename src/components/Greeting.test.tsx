import { Greeting } from "./Greeting";
import { screen } from "@testing-library/react";
import * as greetingMock from "@/server/routers/greeting/mock";
import { setupMockServer, render } from "@/tests/jest";

setupMockServer(greetingMock.hello());

test("スタブが表示される", async () => {
  render(<Greeting />);
  expect(await screen.findByText("This is MSW response")).toBeInTheDocument();
});
