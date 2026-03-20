import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {

  const options = ["Option 1", "Option 2", "Option 3"];
  test("Dropdown renders options", () => {
    render(<Dropdown options={options} label="Select option" />);

    const dropdown = screen.getByText("Select option");
    fireEvent.click(dropdown);

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  test("Selecting option updates value", () => {
    render(<Dropdown options={options} label="Select option" />);

    fireEvent.click(screen.getByText("Select option"));
    fireEvent.click(screen.getByText("Option 2"));
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

});