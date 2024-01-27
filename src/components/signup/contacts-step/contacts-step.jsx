import { useState } from "react";
import Input from "../../common/input";
import Label from "../../common/label";
import PrimaryButton from "../../common/primary-button";
import SecondaryButton from "../../common/secondary-button";
import SignUpFormActions from "../form-actions";
import SignUpFormFields from "../form-fields";
import { validateEmail, validateField } from "../../../lib/validation";

function checkStep(name, surname, email) {
  return !(
    validateField(name) ||
    validateField(surname) ||
    validateEmail(email)
  );
}

export default function SignUpContactsStep({ data, onGoBack, onSubmit }) {
  const [name, setName] = useState(data.name || "");
  const [nameError, setNameError] = useState("");
  const [surname, setSurname] = useState(data.surname || "");
  const [surnameError, setSurnameError] = useState("");
  const [email, setEmail] = useState(data.email || "");
  const [emailError, setEmailError] = useState("");
  const [isValid, setIsValid] = useState(() => checkStep(name, surname, email));

  const handleBlur = () => {
    setIsValid(checkStep(name, surname, email));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, surname, email });
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <SignUpFormFields>
        <Label>
          Имя
          <Input
            value={name}
            error={nameError}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setNameError("")}
            onBlur={() => {
              setNameError(validateField(name));
              handleBlur();
            }}
          />
        </Label>
        <Label>
          Фамилия
          <Input
            value={surname}
            error={surnameError}
            onChange={(e) => setSurname(e.target.value)}
            onFocus={() => setSurnameError("")}
            onBlur={() => {
              setSurnameError(validateField(surname));
              handleBlur();
            }}
          />
        </Label>
        <Label>
          E-mail
          <Input
            type="email"
            value={email}
            error={emailError}
            caption="будем присылать крутые открытки по праздникам"
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailError("")}
            onBlur={() => {
              setEmailError(validateEmail(email));
              handleBlur();
            }}
          />
        </Label>
      </SignUpFormFields>
      <SignUpFormActions>
        <PrimaryButton disabled={!isValid} type="submit">
          Зарегистрироваться
        </PrimaryButton>
        <SecondaryButton onClick={onGoBack}>&lt; Назад</SecondaryButton>
      </SignUpFormActions>
    </form>
  );
}
