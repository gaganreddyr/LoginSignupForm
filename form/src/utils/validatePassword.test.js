import { validatePassword } from "./validatePassword";

describe("validatePassword", () => {

  beforeEach(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("returns error for empty password", () => {
    expect(validatePassword(""))
      .toBe("Please enter a password");
  });

  it.each([
    
    ["Test@123", false],
    ["StrongPass1@", false], 

    ["short1@", true],           
    ["onlyletters", true],       
    ["12345678", true],          
    ["NoNumber@", true],         
    ["        ", true],          
    ["test@123", true],          
    ["TEST@123", true],          
    ["Test1234", true],          

  ])("validatePassword('%s') → alert called: %s", (input, shouldAlert) => {
    
    validatePassword(input);

    if (shouldAlert) {
      expect(window.alert).toHaveBeenCalledWith(
        "Password must contain 8 characters, uppercase, lowercase, number and symbol"
      );
    } else {
      expect(window.alert).not.toHaveBeenCalled();
    }

  });

});