// src/utils/validateEmail.test.js

import { validateEmail } from "./validateEmail";

describe("validateEmail", () => {

  it.each([
    //Valid cases
    ["test@gmail.com", ""],
    ["user@mail.co.in", ""],

    //Empty / invalid structure
    ["", "Please enter an email"],
    ["   ", "Please enter a valid email"],

    //Format issues
    ["testgmail.com", "Please enter a valid email"],   // missing @
    ["test@", "Please enter a valid email"],           // missing domain
    ["test@gmailcom", "Please enter a valid email"],   // missing dot
    ["@gmail.com", "Please enter a valid email"],      // missing username
    ["test@@gmail.com", "Please enter a valid email"], // double @
    ["test @gmail.com", "Please enter a valid email"], // space inside

  ])("validateEmail('%s') → '%s'", (input, expected) => {
    expect(validateEmail(input)).toBe(expected);
  });

});