jest.mock( "react-router-dom", () => ({
    Link: ({ children, onClick }) => (
      <span onClick={onClick}>{children}</span>
    ),
  }), { virtual: true }
);

jest.mock("../hooks/Forgothook");

import { render, screen, fireEvent } from "@testing-library/react";
import Forgot from "./Forgot";
import Forgothook from "../hooks/Forgothook";

describe("Forgot Page", () => {

  const mockForgot = {
    email: "",
    error: "",
    showModal: false,
    setEmail: jest.fn(),
    setError: jest.fn(),
    setShowModal: jest.fn(),
    handleReset: jest.fn(),
  };

  beforeEach(() => {
    Forgothook.mockReturnValue(mockForgot);
  });

  test("Forgot page renders correctly", () => {
    render(<Forgot changeMode={jest.fn()} />);

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByText("Send Reset Link")).toBeInTheDocument();
    expect(screen.getByText("Back to Login")).toBeInTheDocument();
  });

  test("User can type email", () => {
    render(<Forgot changeMode={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@gmail.com" },
    });

    expect(mockForgot.setEmail).toHaveBeenCalled();
  });

  test("Invalid email shows error", () => {
    Forgothook.mockReturnValue({
      ...mockForgot,
      error: "Invalid email",
    });

    render(<Forgot changeMode={jest.fn()} />);

    expect(screen.getByPlaceholderText("Invalid email")).toBeInTheDocument();
  });

  test("Valid input submission shows success message in modal", () => {
    Forgothook.mockReturnValue({
      ...mockForgot,
      showModal: true,
    });

    render(<Forgot changeMode={jest.fn()} />);

    expect(
      screen.getByText("Reset link sent to your email")
    ).toBeInTheDocument();
  });

  test("Clicking back link changes mode to login", () => {
    const changeMode = jest.fn();

    render(<Forgot changeMode={changeMode} />);

    fireEvent.click(screen.getByText("Back to Login"));

    expect(changeMode).toHaveBeenCalledWith("login");
  });

});