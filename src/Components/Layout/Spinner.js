import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="losading"
        style={{ width: "200px", margin: "auto", display: "block" }}
      ></img>
    </Fragment>
  );
};

export default Spinner;
