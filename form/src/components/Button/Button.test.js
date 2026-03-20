import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {

  test("Button renders with text", () => {
    render(<Button text="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("Button triggers click handler", () => {
    const handleClick = jest.fn();

    render(<Button text="Submit" onClick={handleClick} />);
    
    fireEvent.click(screen.getByText("Submit"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

});