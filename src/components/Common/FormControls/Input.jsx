import React from "react";
import styles from "./FormControls.module.css";

export const Input = ({ input, label, type, meta: { touched, error, warning } }) => {
  return (
    <div>
      <label>{label}:</label>
      <input {...input} placeholder={label} type={type} className={touched && error && styles.input} />
      {touched &&
        ((error && <span className={styles.error}>{error}</span>) || (warning && <span className={styles.warning}>{warning}</span>))}
    </div>
  );
};
