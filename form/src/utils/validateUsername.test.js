import { validateUsername } from "./validateUsername";

describe("validateUsername", () => {

  it.each([
    // ✅ Valid cases
    ["Reddy123", ""],
    ["1234", ""],            // only numbers
    ["Reddy", ""],           // only letters
    ["user_123", ""],        // with underscore

    // ❌ Invalid cases
    ["", "Please enter a username"],
    ["abc", "Username must be at least 4 characters"], // too short
    ["user@123", "Only letters, numbers, and _ allowed"], // special char
    ["user name", "Only letters, numbers, and _ allowed"], // space inside
    ["    ", "Only letters, numbers, and _ allowed"], // only spaces

  ])("validateUsername('%s') → '%s'", (input, expected) => {
    expect(validateUsername(input)).toBe(expected);
  });

});