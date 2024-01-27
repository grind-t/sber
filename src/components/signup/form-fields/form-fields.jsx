import styles from "./form-fields.module.css";

export default function SignUpFormFields({ children }) {
  return <div className={styles.fields}>{children}</div>;
}
