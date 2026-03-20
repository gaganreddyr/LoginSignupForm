import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {

  test("Input renders correctly", () => {
    render(
     <Input 
        type="text" 
        placeholder="Enter text" 
        value="" 
     />
    );
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  test("Input displays placeholder text", () => {
    render(
     <Input 
        type="text" 
        placeholder="Enter email" 
        value="" 
     />
    );
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  test("Input value updates when typing", () => {
    const handleChange = jest.fn();

    render(
     <Input
        type="text"
        placeholder="Enter username"
        value=""
        onChange={handleChange}
     />
    );

    fireEvent.change(screen.getByPlaceholderText("Enter username"), { target: { value: "User123" } });
    expect(handleChange).toHaveBeenCalled();
  });

  test("Input displays error message when error prop exists", () => {
    render(
      <Input
        type="text"
        placeholder="Enter email"
        value="test@gmail.com"
        error="Invalid email"
      />
    );
    expect(screen.getByPlaceholderText("Invalid email")).toBeInTheDocument();
  });

});