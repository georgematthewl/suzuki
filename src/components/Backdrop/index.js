import React from "react";

import "./Backdrop.scss";

const Backdrop = ({ isHide }) => {
  return <div className={`backdrop ${isHide ? "hide" : ""}`} />;
};

export default Backdrop;
