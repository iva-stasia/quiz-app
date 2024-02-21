const emptyFieldValidation = (value) => {
  if (!value) {
    return "email.emailEmpty";
  }
  return "";
};

const emailValidation = (value) => {
  const emptyError = emptyFieldValidation(value);

  if (emptyError) return emptyError;

  if (!RegExp(/^([a-z\d]+([._-][a-z\d]+)*)@([a-z\d]+([.-][a-z\d]+)*\.[a-z]{2,})$/i).test(value)) {
    return "email.emailInvalid";
  }
  return "";
};

export { emailValidation };
