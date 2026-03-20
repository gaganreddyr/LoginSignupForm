import { validateUsername } from "./validateUsername";

describe("validateUsername", () => {

  it.each([
    
    ["User123", ""],
    ["1234", ""],            
    ["User", ""],           
    ["user_123", ""],       

    ["", "Please enter a username"],
    ["abc", "Username must be at least 4 characters"], 
    ["user@123", "Only letters, numbers, and _ allowed"], 
    ["user name", "Only letters, numbers, and _ allowed"], 
    ["    ", "Only letters, numbers, and _ allowed"], 

  ])("validateUsername('%s') → '%s'", (input, expected) => {
    expect(validateUsername(input)).toBe(expected);
  });

});