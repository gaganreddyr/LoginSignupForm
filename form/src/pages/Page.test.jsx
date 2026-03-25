import { render, screen, fireEvent } from "@testing-library/react";
import Page from "./Page";

// simple mocks
jest.mock("../components/Display/Display", () => () => <div>Display</div>);
jest.mock("../components/ToggleSwitch/ToggleSwitch", () => (props) => (
  <button onClick={props.onChange}>
    {props.checked ? "ON" : "OFF"}
  </button>
));

test("Page renders properly", () => {
  render(<Page />);
  expect(screen.getByText("Display")).toBeInTheDocument();
});

test("UI theme toggleswitch changes theme properly", () => {
  render(<Page />);
  
  const toggle = screen.getByRole("button");

  expect(toggle.textContent).toBe("OFF");

  fireEvent.click(toggle);

  expect(toggle.textContent).toBe("ON");
});