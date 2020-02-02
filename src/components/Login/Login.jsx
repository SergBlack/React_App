import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginThunk, throwAuthError } from "../../Redux/auth-reducer";
import Logout from "./Logout";
import { Input } from "../Common/FormControls/Input";
import { required, email, alphaNumeric, minLength, maxLength } from "./../Utilities/validators";
import { Captcha } from "../Common/FormControls/Captcha";

export const maxLength15 = maxLength(15);
export const minLength8 = minLength(8);

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h1>Login</h1>
      <div>
        <Field name={"email"} component={Input} label={"email"} type={"text"} validate={[required, email]} />
      </div>

      <div>
        <Field
          name={"password"}
          component={Input}
          label={"Password"}
          type={"password"}
          validate={[required, alphaNumeric, minLength8, maxLength15]}
        />
      </div>
      <div>
        <Field name={"rememberMe"} component="input" type={"checkbox"} />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
      {props.captchaUrl ? (
        <Field name={"captcha"} component={Captcha} label={"captcha"} type={"text"} validate={[required]} captchaUrl={props.captchaUrl} />
      ) : null}
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.loginThunk({ ...formData });
  };
  return (
    <div>
      {props.isAuth ? <Logout /> : <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />}
      {props.error ? <div>"Wrong email or password. Try again"</div> : null}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  error: state.auth.error,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { loginThunk, throwAuthError })(Login);
