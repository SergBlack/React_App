import React from "react";
import styles from "./FormControls.module.css";

export const Captcha = ({ input, label, type, meta: { touched }, captchaUrl }) => {
  return (
    <div>
      <label>{label}:</label>
      <img src={captchaUrl} alt="captcha" />
      <input {...input} placeholder={label} type={type} />
    </div>
  );
};
