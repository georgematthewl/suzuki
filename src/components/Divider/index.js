import React from "react";

import "./Divider.scss";

const Divider = ({ className = "" }) => {
  return <div className={`divider ${className}`} />;
};

export default Divider;
