import React from 'react';
import styles from './FormControls.module.css';

export const Captcha = ({
  input,
  label,
  type,
  meta: { touched },
  captchaUrl
}) => {
  return (
    <div>
      <label>{label}:</label>
      <div>
        <img src={captchaUrl} alt="captcha" />
      </div>
      <input {...input} placeholder={label} type={type} />
    </div>
  );
};
