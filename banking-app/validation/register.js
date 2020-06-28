// pull in validator and is-empy dependencies
const Validator = require("validator");
const isEmpty = require("is-empty");

// Export the function validateRegisterInput, which takes in data as a parameter(sent from frontend registration form)
module.exports = function validateRegisterInput(data) {
  // instantiate errors object
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions (validator only wors with strings)
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password2 = "Confirm password field is required";
  }

  if (ValidatorisEmpty(data.password2)) {
    errors.password = "Password must be at least 6 characters";
  }
  // confirm password equality using validator
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  // Return errors object with any and all errors contained as well as an isValid boolean that checks to see if we have any errors
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
