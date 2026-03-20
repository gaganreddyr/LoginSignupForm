jest.mock("react-router-dom", () => ({
  Link: ({ children, onClick }) => (
      <span onClick={onClick}>{children}</span>),
}), { virtual: true }
);

import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";


jest.mock("../hooks/Loginhook");

import Loginhook from "../hooks/Loginhook";

describe("Login Page", () => {

  const mockLogin = {
    email: "",
    password: "",
    error: "",
    passError: "",
    showModal: false,
    setEmail: jest.fn(),
    setPassword: jest.fn(),
    setError: jest.fn(),
    setPassError: jest.fn(),
    setShowModal: jest.fn(),
    handleLogin: jest.fn(),
  };

  beforeEach(() => {
    Loginhook.mockReturnValue(mockLogin);
  });

  test("Login page renders correctly", () => {
    render(<Login changeMode={jest.fn()} />);

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("User can type email", () => {
    render(<Login changeMode={jest.fn()} />);

    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    expect(mockLogin.setEmail).toHaveBeenCalled();
  });

  test("User can type password", () => {
    render(<Login changeMode={jest.fn()} />);

    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "Test@123" } });
    expect(mockLogin.setPassword).toHaveBeenCalled();
  });

  test("Invalid email shows validation error", () => {
    Loginhook.mockReturnValue({
      ...mockLogin,
      error: "Invalid email",
    });

    render(<Login changeMode={jest.fn()} />);

    expect(screen.getByPlaceholderText("Invalid email")).toBeInTheDocument();
  });

  test("Valid inputs submission shows success message in modal", () => {
    Loginhook.mockReturnValue({
      ...mockLogin,
      showModal: true,
    });

    render(<Login changeMode={jest.fn()} />);

    expect(screen.getByText("Login Successful!")).toBeInTheDocument();
  });

  test("Clicking forgot password link changes mode to forgot", () => {
  const changeMode = jest.fn();

  render(<Login changeMode={changeMode} />);

  fireEvent.click(screen.getByText("Forgot Password?"));

  expect(changeMode).toHaveBeenCalledWith("forgot");
});

test("Clicking signup link changes mode to signup", () => {
  const changeMode = jest.fn();

  render(<Login changeMode={changeMode} />);

  fireEvent.click(
    screen.getByText("New User? Click here to Signup")
  );

  expect(changeMode).toHaveBeenCalledWith("signup");
});

});