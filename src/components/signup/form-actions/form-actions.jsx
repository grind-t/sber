import styles from "./form-actions.module.css";

export default function SignUpFormActions({ children }) {
  return <div className={styles.actions}>{children}</div>;
}
