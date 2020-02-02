import React from "react";
import styles from "./FormControls.module.css";

export const Textarea = ({ input, label, type, meta: { touched, error, warning } }) => {
  return (
    <div>
      <label>Сообщение:</label>
      <textarea {...input} placeholder={label} type={type} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
