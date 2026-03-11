export const validateEmail = (email) => {

  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!email) {
    return "Please enter an email";
  }

  if (!emailRegex.test(email)) {
    return "Please enter a valid email";
  }

  return "";
};