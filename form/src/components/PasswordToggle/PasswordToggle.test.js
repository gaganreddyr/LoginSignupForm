import { render, screen, fireEvent } from "@testing-library/react";
import PasswordToggle from "./PasswordToggle";

describe("PasswordToggle", () => {

  test("password input initially hidden", () => {
    render(<PasswordToggle placeholder="Enter password" value="" />);

    const input = screen.getByPlaceholderText("Enter password");
    expect(input.type).toBe("password");
  });

  test("toggle shows password", () => {
    const { container } = render(
      <PasswordToggle placeholder="Enter password" value="" />
    );

    const input = screen.getByPlaceholderText("Enter password");
    const toggle = container.querySelector(".eye-icon");

    fireEvent.click(toggle);

    expect(input.type).toBe("text");
  });

  test("toggle hides password again", () => {
    const { container } = render(
      <PasswordToggle placeholder="Enter password" value="" />
    );

    const input = screen.getByPlaceholderText("Enter password");
    const toggle = container.querySelector(".eye-icon");

    fireEvent.click(toggle); // show
    fireEvent.click(toggle); // hide

    expect(input.type).toBe("password");
  });

});