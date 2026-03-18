import { validatePassword } from "./validatePassword";

describe("validatePassword", () => {

  beforeEach(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // 🔹 Empty case (returns string)
  test("returns error for empty password", () => {
    expect(validatePassword(""))
      .toBe("Please enter a password");
  });

  // 🔹 All other cases (alert-based)
  it.each([
    // ✅ Valid cases
    ["Test@123", false],
    ["StrongPass1@", false], // longer valid password

    // ❌ Invalid cases (should trigger alert)
    ["short1@", true],           // too short
    ["onlyletters", true],       // no number, no caps, no special
    ["12345678", true],          // only numbers
    ["NoNumber@", true],         // missing number
    ["        ", true],          // spaces only
    ["test@123", true],          // missing uppercase
    ["TEST@123", true],          // missing lowercase
    ["Test1234", true],          // missing special character

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