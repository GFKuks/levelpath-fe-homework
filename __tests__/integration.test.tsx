import { rest } from "msw";
import { setupServer } from "msw/node";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BirthdaysPage } from "../src/pages";
import { Provider } from "react-redux";
import { createStore } from "../src/store";

const server = setupServer(
  rest.get("https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/:month/:day", (req, res, ctx) => {  
    return res(ctx.json(
      { births: [{ text: "Sir Veylantz", year: 2002 }, { text: "Sir Amik Varze", year: 2020 }] }
    ));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("data loading from store after API call", async () => {
  render(
    <Provider store={createStore()}>
      <BirthdaysPage />
    </Provider>
  );

  const table = screen.getByTestId("birthdays-table");
  const button = screen.getByTestId("load-data-button");

  expect(table).toHaveTextContent("No data");
  
  fireEvent.click(button);

  const loadedDataRow = await waitFor(() => screen.findByText("Sir Veylantz"));

  expect(loadedDataRow).toBeInTheDocument();
});