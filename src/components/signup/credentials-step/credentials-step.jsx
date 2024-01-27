import { useState } from "react";
import Input from "../../common/input";
import Label from "../../common/label";
import {
  checkCredentials,
  validateField,
  validatePassword,
  validatePhone,
} from "../../../lib/validation";
import SignUpFormFields from "../form-fields";
import SignUpFormActions from "../form-actions";
import PrimaryButton from "../../common/primary-button";

export default function SignUpCredentialsStep({ data, onSubmit }) {
  const [login, setLogin] = useState(data.login || "");
  const [loginError, setLoginError] = useState("");
  const [password, setPassword] = useState(data.password || "");
  const [passwordError, setPasswordError] = useState("");
  const [phone, setPhone] = useState(data.phone || "");
  const [phoneError, setPhoneError] = useState("");
  const [isValid, setIsValid] = useState(() =>
    checkCredentials(login, password, phone)
  );

  const handleBlur = () => {
    setIsValid(checkCredentials(login, password, phone));
  };

  return (
    <form noValidate>
      <SignUpFormFields>
        <Label>
          Логин
          <Input
            value={login}
            error={loginError}
            onChange={(e) => setLogin(e.target.value)}
            onFocus={() => setLoginError("")}
            onBlur={() => {
              setLoginError(validateField(login));
              handleBlur();
            }}
          />
        </Label>
        <Label>
          Пароль
          <Input
            type="password"
            value={password}
            error={passwordError}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordError("")}
            onBlur={() => {
              setPasswordError(validatePassword(password));
              handleBlur();
            }}
          />
        </Label>
        <Label>
          Номер телефона
          <Input
            type="tel"
            value={phone}
            error={phoneError}
            caption="на случай, если вы забудете свой пароль"
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => setPhoneError("")}
            onBlur={() => {
              setPhoneError(validatePhone(phone));
              handleBlur();
            }}
          />
        </Label>
      </SignUpFormFields>
      <SignUpFormActions>
        <PrimaryButton
          type="button"
          disabled={!isValid}
          onClick={() => onSubmit({ login, password, phone })}
        >
          Продолжить
        </PrimaryButton>
      </SignUpFormActions>
    </form>
  );
}
