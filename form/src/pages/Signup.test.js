jest.mock("react-router-dom", () => ({
  Link: ({ children, onClick }) => (
      <span onClick={onClick}>{children}</span>),
}), { virtual: true }
);


jest.mock("../hooks/Signuphook");

import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "./Signup";
import Signuphook from "../hooks/Signuphook";

describe("Signup Page", () => {

  const mockSignup = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    region: "",
    regions: ["India", "USA"],
    usernameError: "",
    error: "",
    passError: "",
    confirmPassError: "",
    regionError: "",
    showRules: false,
    showModal: false,

    setUsername: jest.fn(),
    setEmail: jest.fn(),
    setPassword: jest.fn(),
    setConfirmPassword: jest.fn(),
    setRegion: jest.fn(),
    setUsernameError: jest.fn(),
    setError: jest.fn(),
    setPassError: jest.fn(),
    setConfirmPassError: jest.fn(),
    setRegionError: jest.fn(),
    setShowRules: jest.fn(),
    setShowModal: jest.fn(),

    handleSignup: jest.fn(),
  };

  beforeEach(() => {
    Signuphook.mockReturnValue(mockSignup);
  });

  test("Signup page renders correctly", () => {
    render(<Signup changeMode={jest.fn()} />);

    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
    expect(screen.getByText("Select Region")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("User can enter username", () => {
    render(<Signup changeMode={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText("Username"), {
      target: { value: "User123" },
    });

    expect(mockSignup.setUsername).toHaveBeenCalled();
  });

  test("User can enter email", () => {
    render(<Signup changeMode={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "test@gmail.com" },
    });

    expect(mockSignup.setEmail).toHaveBeenCalled();
  });

  test("User can enter password and confirm password", () => {
    render(<Signup changeMode={jest.fn()} />);

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "Test@123" },
    });

    fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
      target: { value: "Test@123" },
    });

    expect(mockSignup.setPassword).toHaveBeenCalled();
    expect(mockSignup.setConfirmPassword).toHaveBeenCalled();
  });

  test("User can select region", () => {
    render(<Signup changeMode={jest.fn()} />);

    fireEvent.click(screen.getByText("Select Region"));

    fireEvent.click(screen.getByText("India"));

    expect(mockSignup.setRegion).toHaveBeenCalledWith("India");
  });

  test("Invalid inputs show validation errors", () => {
  Signuphook.mockReturnValue({
    ...mockSignup,
    usernameError: "Invalid username",
    error: "Invalid email",
    passError: "Invalid password",
    confirmPassError: "Passwords do not match",
  });

  render(<Signup changeMode={jest.fn()} />);

  expect(screen.getByPlaceholderText("Invalid username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Invalid email")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Invalid password")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Passwords do not match")).toBeInTheDocument();
});

  test("Valid inputs submission shows success modal", () => {
    Signuphook.mockReturnValue({
      ...mockSignup,
      showModal: true,
    });

    render(<Signup changeMode={jest.fn()} />);

    expect(
      screen.getByText("Account Created Successfully!")
    ).toBeInTheDocument();
  });

  test("Clicking login link changes mode to login", () => {
  const changeMode = jest.fn();

  render(<Signup changeMode={changeMode} />);

  fireEvent.click(
    screen.getByText("Already have an account? Click here to Login")
  );

  expect(changeMode).toHaveBeenCalledWith("login");
  });

});