import { render, screen, fireEvent } from "@testing-library/react";
import ToggleSwitch from "./ToggleSwitch";

describe("ToggleSwitch Component", () => {

  test("renders properly", () => {
    render(<ToggleSwitch checked={false} onChange={() => {}} />);
    
    const toggle = screen.getByRole("checkbox");
    expect(toggle).toBeInTheDocument();
  });

  test("toggle slider works (onChange triggered on click)", () => {
    const handleChange = jest.fn();

    render(<ToggleSwitch checked={false} onChange={handleChange} />);
    
    const toggle = screen.getByRole("checkbox");
    fireEvent.click(toggle);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("text updates based on state", () => {
    const { rerender } = render(
      <ToggleSwitch
        checked={false}
        onChange={() => {}}
        onText="Dark"
        offText="Light"
      />
    );

    expect(screen.getByText("Light")).toBeInTheDocument();

    rerender(
      <ToggleSwitch
        checked={true}
        onChange={() => {}}
        onText="Dark"
        offText="Light"
      />
    );

    expect(screen.getByText("Dark")).toBeInTheDocument();
  });

});