import styles from "./primary-button.module.css";

export default function PrimaryButton({ children, ...rest }) {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
