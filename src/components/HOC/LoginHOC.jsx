import React from "react";
import { Redirect } from "react-router-dom";

const LoginHOC = (component, isAuth) => {
  if (!isAuth) {
    return <Redirect to={"/login"} />;
  } else {
    return null;
  }
};
export default LoginHOC;
