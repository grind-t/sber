const minPasswordLength = 8;
const phoneRegex =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const fieldEmptyError = "поле не может быть пустым";
const passwordLengthError = "пароль должен быть не менее 8 символов";
const phoneFormatError = "некорректный формат номера телефона";
const emailFormatError = "некорректный формат почты";

export function validateField(value) {
  return value ? "" : fieldEmptyError;
}

export function validatePassword(value) {
  return value.length < minPasswordLength ? passwordLengthError : "";
}

export function validatePhone(value) {
  return phoneRegex.test(value) ? "" : phoneFormatError;
}

export function validateEmail(value) {
  return emailRegex.test(value) ? "" : emailFormatError;
}

export function checkCredentials(login, password, phone) {
  return !(
    validateField(login) ||
    validatePassword(password) ||
    validatePhone(phone)
  );
}

export function checkContacts(name, surname, email) {
  return !(
    validateField(name) ||
    validateField(surname) ||
    validateEmail(email)
  );
}
