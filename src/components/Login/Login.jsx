import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginThunk } from '../../Redux/auth-reducer';
import Logout from './Logout';

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h1>Login</h1>
      <div>
        <Field
          name={'email'}
          component="input"
          placeholder={'Login'}
          type={'text'}
        />
      </div>
      <div>
        <Field
          name={'password'}
          component="input"
          placeholder={'Password'}
          type={'text'}
        />
      </div>
      <div>
        <Field name={'rememberMe'} component="input" type={'checkbox'} />
        Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.loginThunk({ ...formData });
  };
  return (
    <div>
      {props.isAuth ? <Logout /> : <LoginReduxForm onSubmit={onSubmit} />}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { loginThunk })(Login);
