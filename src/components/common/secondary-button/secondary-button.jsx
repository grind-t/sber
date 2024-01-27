import styles from "./secondary-button.module.css";

export default function SecondaryButton({ children, ...rest }) {
  return (
    <button className={styles.button} type="button" {...rest}>
      {children}
    </button>
  );
}
