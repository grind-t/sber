import styles from "./input.module.css";

export default function Input({ error, caption, ...rest }) {
  return (
    <div className={styles.container}>
      <input className={styles.input} {...rest} />
      {(error && <div className={styles.error}>{error}</div>) ||
        (caption && <div className={styles.caption}>{caption}</div>)}
    </div>
  );
}
