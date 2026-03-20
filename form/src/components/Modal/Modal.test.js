import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {

  test("Modal renders when open is true", () => {
    render(<Modal open={true} message="Test message" />);
    expect(screen.getByText("Test message")).toBeInTheDocument();
    expect(screen.getByText("OK")).toBeInTheDocument();
  });

  test("Modal hidden when open is false", () => {
    render(<Modal open={false} message="Test message" />);
    expect(screen.queryByText("Test message")).toBeNull();
  });

  test("Modal closes properly when OK button is pressed", () => {
    const handleClose = jest.fn();

    render(
      <Modal
        open={true}
        message="Test message"
        onClose={handleClose}
      />
    );

    fireEvent.click(screen.getByText("OK"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

});