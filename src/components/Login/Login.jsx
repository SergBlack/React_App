import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginThunk } from "../../Redux/auth-reducer";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"email"} component="input" placeholder={"Login"} type={"text"} />
      </div>
      <div>
        <Field name={"password"} component="input" placeholder={"Password"} type={"text"} />
      </div>
      <div>
        <Field name={"rememberMe"} component="input" type={"checkbox"} />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    let { email, password, rememberMe } = { ...formData };
    props.loginThunk(email, password, rememberMe);
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = () => {};

export default connect(mapStateToProps, { loginThunk })(Login);
