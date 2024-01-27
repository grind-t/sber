import styles from "./label.module.css";

export default function Label({ children }) {
  return <label className={styles.label}>{children}</label>;
}
