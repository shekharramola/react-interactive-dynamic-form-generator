export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const checkValidity = (name, value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
    isValid ? (rules.error = "") : (rules.error = `${name} is required`);
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    isValid
      ? (rules.error = "")
      : value.trim() === ""
      ? (rules.error = `${name} is required`)
      : (rules.error = `${name} should be be atleast ${rules.minLength} characters long`);
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
    isValid
      ? (rules.error = "")
      : value.trim() === ""
      ? (rules.error = `${name} is required`)
      : (rules.error = `${name} should be be atmost ${rules.maxLength} characters long`);
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;

    isValid
      ? (rules.error = "")
      : value.trim() === ""
      ? (rules.error = `${name} is required`)
      : (rules.error = `${name} is invalid`);
  }
  if (rules.isPan) {
    const pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    isValid = pattern.test(value) && isValid;
    isValid
      ? (rules.error = "")
      : value.trim() === ""
      ? (rules.error = `${name} is required`)
      : (rules.error = `${name} is invalid`);
  }

  if (rules.rejex) {
    const pattern = new RegExp(rules.rejex);
    isValid = pattern.test(value) && isValid;
    isValid
      ? (rules.error = "")
      : value.trim() === ""
      ? (rules.error = `${name} is required`)
      : (rules.error = `${name} is invalid`);
  }

  if (rules.isNumeric) {
    const pattern = /^((?!(0))[0-9]*)$/;
    isValid = pattern.test(value) && isValid;
    isValid
      ? (rules.error = "")
      : value.trim() === ""
      ? (rules.error = `${name} is required`)
      : value.length > rules.maxLength && pattern.test(value)
      ? (rules.error = `${name} should be be atmost ${rules.maxLength} characters long`)
      : value.length < rules.minLength && pattern.test(value)
      ? (rules.error = `${name} should be be atleast ${rules.minLength} characters long`)
      : (rules.error = `${name} should be only numeric and first character can not be zero`);
  }

  return isValid;
};
