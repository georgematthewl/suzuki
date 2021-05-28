import React from "react";

import "./Card.scss";

const Card = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`card bg-white ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
