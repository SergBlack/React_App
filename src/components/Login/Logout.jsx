import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { logoutThunk } from '../../Redux/auth-reducer';

const Logout = props => {
  return (
    <div>
      <button onClick={props.logoutThunk}>Logout</button>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { logoutThunk })(Logout);
