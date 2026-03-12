export const validateUsername = (username) => {

  if (!username) {
    return "Please enter a username";
  }

  if (username.length < 3) {
    return "Username must be at least 3 characters";
  }

  const usernameRegex = /^[a-zA-Z0-9_]+$/;

  if (!usernameRegex.test(username)) {
    return "Only letters, numbers, and _ allowed";
  }

  return "";
};