export const checkValidData = (email, password) => {
  const isEmailValid = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(
    email
  );
  const isPasswordValid = /^.{6,60}$/.test(password);
  if (!isEmailValid) return "Please enter a valid email address";
  if (!isPasswordValid)
    return "Your password must contain between 4 and 60 characters";
  return null;
};
