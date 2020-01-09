import React from "react";
import preloader from "../../../images/preloader.svg";

const Preloader = props => {
  return (
    <div>
      {props.isLoading ? <img src={preloader} alt="loading..." /> : null}
    </div>
  );
};

export default Preloader;
