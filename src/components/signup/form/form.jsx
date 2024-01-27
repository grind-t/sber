import { useState } from "react";
import styles from "./form.module.css";
import SignUpCredentialsStep from "../credentials-step";
import SignUpContactsStep from "../contacts-step";

export default function SignUpForm({ headingLevel }) {
  const [step, setStep] = useState(0);
  const [credentials, setCredentials] = useState({});
  const [contacts, setContacts] = useState({});

  const Heading = `h${headingLevel}`;

  const handleGoBack = () => {
    setStep((v) => v - 1);
  };

  const handleCredentials = (credentials) => {
    setCredentials(credentials);
    setStep((v) => v + 1);
  };

  const handleContacts = (contacts) => {
    setContacts(contacts);
    console.log({ ...credentials, ...contacts });
  };

  return (
    <div className={styles.container}>
      <Heading className={styles.heading}>Регистрация</Heading>
      {step === 0 ? (
        <SignUpCredentialsStep
          data={credentials}
          onSubmit={handleCredentials}
        />
      ) : (
        <SignUpContactsStep
          data={contacts}
          onGoBack={handleGoBack}
          onSubmit={handleContacts}
        />
      )}
    </div>
  );
}
