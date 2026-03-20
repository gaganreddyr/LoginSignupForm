import { validateEmail } from "./validateEmail";

describe("validateEmail", () => {

  it.each([
    ["test@gmail.com", ""],
    ["user@mail.co.in", ""],

    ["", "Please enter an email"],
    ["   ", "Please enter a valid email"],

    ["testgmail.com", "Please enter a valid email"],   
    ["test@", "Please enter a valid email"],           
    ["test@gmailcom", "Please enter a valid email"],   
    ["@gmail.com", "Please enter a valid email"],      
    ["test@@gmail.com", "Please enter a valid email"], 
    ["test @gmail.com", "Please enter a valid email"], 

  ])("validateEmail('%s') → '%s'", (input, expected) => {
    expect(validateEmail(input)).toBe(expected);
  });

});