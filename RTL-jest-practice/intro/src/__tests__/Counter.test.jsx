import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

test("increments the counter", () => {
  render(<Counter />);

  const button = screen.getByText("Increment");
  const value = screen.getByTestId("count-value");

  // initial value check
  expect(value).toHaveTextContent("Count: 0");

  // simulate click
  fireEvent.click(button);

  // final value check
  expect(value).toHaveTextContent("Count: 1");
});
