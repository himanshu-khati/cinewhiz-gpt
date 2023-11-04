export const checkValidData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^.{6,60}$/.test(password);
  if (!isEmailValid) return "Please enter a valid email address";
  if (!isPasswordValid)
    return "Your password must contain between 4 and 60 characters";
  return null;
};
