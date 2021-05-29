import React from "react";

import "./Backdrop.scss";

const Backdrop = ({ isHide, onClick, zIndex }) => {
  return (
    <div
      style={{ zIndex }}
      onClick={onClick}
      className={`backdrop ${isHide ? "hide" : ""}`}
    />
  );
};

export default Backdrop;
